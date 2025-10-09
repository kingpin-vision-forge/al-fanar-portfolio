"use client";

import type { MouseEvent } from "react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

import "./Masonry.css";

const MEDIA_QUERIES = [
  "(min-width:1500px)",
  "(min-width:1000px)",
  "(min-width:600px)",
  "(min-width:400px)",
] as const;

const MEDIA_COLUMNS = [5, 4, 3, 2];

const useMedia = (queries: readonly string[], values: number[], defaultValue: number) => {
  const getValue = useCallback(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }
    const mediaIndex = queries.findIndex((query) => window.matchMedia(query).matches);
    const matchedIndex = mediaIndex >= 0 ? mediaIndex : values.length - 1;
    return values[matchedIndex] ?? defaultValue;
  }, [defaultValue, queries, values]);

  const [value, setValue] = useState<number>(() => getValue());

  useEffect(() => {
    setValue(getValue());
  }, [getValue]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleResize = () => setValue(getValue());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getValue]);

  return value;
};

const useMeasure = (): [React.RefObject<HTMLDivElement | null>, { width: number; height: number }] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (typeof window === "undefined" || typeof ResizeObserver === "undefined") {
      return;
    }
    const target = ref.current;
    if (!target) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(target);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls: string[]) => {
  if (typeof window === "undefined") {
    return;
  }
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
};

interface MasonryItem {
  id: string | number;
  img: string;
  height: number;
  url: string;
  width?: number;
}

type LayoutItem = MasonryItem & { x: number; y: number; w: number; h: number };

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "top" | "bottom" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 1.03,
  blurToFocus = true,
  colorShiftOnHover = false,
}: MasonryProps) => {
  const columns = useMedia(MEDIA_QUERIES, MEDIA_COLUMNS, 1);

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = useCallback(
    (item: LayoutItem) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (typeof window === "undefined" || !containerRect) {
        return { x: item.x, y: item.y };
      }

      let direction = animateFrom;

      if (animateFrom === "random") {
        const directions: Array<Exclude<MasonryProps["animateFrom"], "random">> = [
          "top",
          "bottom",
          "left",
          "right",
        ];
        direction = directions[Math.floor(Math.random() * directions.length)]!;
      }

      switch (direction) {
        case "top":
          return { x: item.x, y: -200 };
        case "bottom":
          return { x: item.x, y: window.innerHeight + 200 };
        case "left":
          return { x: -200, y: item.y };
        case "right":
          return { x: window.innerWidth + 200, y: item.y };
        case "center":
          return {
            x: containerRect.width / 2 - item.w / 2,
            y: containerRect.height / 2 - item.h / 2,
          };
        default:
          return { x: item.x, y: item.y + 100 };
      }
    },
    [animateFrom, containerRef],
  );

  useEffect(() => {
    let isMounted = true;
    if (!items.length || typeof window === "undefined") {
      setImagesReady(true);
      return () => {
        isMounted = false;
      };
    }

    setImagesReady(false);

    preloadImages(items.map((i) => i.img)).then(() => {
      if (isMounted) {
        setImagesReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [items]);

  const grid = useMemo<LayoutItem[]>(() => {
    if (!width) return [];

    const columnCount = Math.max(1, columns);
    const colHeights = Array.from({ length: columnCount }, () => 0);
    const columnWidth = width / columnCount;

    return items.map((child) => {
      const columnIndex = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * columnIndex;
      const naturalWidth = child.width && child.width > 0 ? child.width : columnWidth;
      const normalizedWidth = naturalWidth || 1;
      const height = (child.height / normalizedWidth) * columnWidth;
      const y = colHeights[columnIndex];

      colHeights[columnIndex] += height;

      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady || !width || !grid.length) {
      return;
    }

    const tweens: gsap.core.Tween[] = [];

    if (containerRef.current) {
      const totalHeight = Math.max(...grid.map((item) => item.y + item.h));
      const containerTween = gsap.to(containerRef.current, { height: totalHeight, duration: 0 });
      tweens.push(containerTween);
    }

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: "blur(10px)" }),
        };

        const tween = gsap.fromTo(
          selector,
          initialState,
          {
            opacity: 1,
            ...animationProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          },
        );
        tweens.push(tween);
      } else {
        const tween = gsap.to(selector, {
          ...animationProps,
          duration,
          ease,
          overwrite: "auto",
        });
        tweens.push(tween);
      }
    });

    hasMounted.current = true;

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, [blurToFocus, containerRef, duration, ease, getInitialPosition, grid, imagesReady, stagger, width]);

  const handleMouseEnter = useCallback(
    (e: MouseEvent<HTMLDivElement>, item: LayoutItem) => {
      if (typeof window === "undefined") return;
      const element = e.currentTarget;
      const selector = `[data-key="${item.id}"]`;

      if (scaleOnHover) {
        gsap.to(selector, {
          scale: hoverScale,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (colorShiftOnHover) {
        const overlay = element.querySelector<HTMLElement>(".color-overlay");
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0.3,
            duration: 0.3,
          });
        }
      }
    },
    [colorShiftOnHover, hoverScale, scaleOnHover],
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent<HTMLDivElement>, item: LayoutItem) => {
      if (typeof window === "undefined") return;
      const element = e.currentTarget;
      const selector = `[data-key="${item.id}"]`;

      if (scaleOnHover) {
        gsap.to(selector, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (colorShiftOnHover) {
        const overlay = element.querySelector<HTMLElement>(".color-overlay");
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
          });
        }
      }
    },
    [colorShiftOnHover, scaleOnHover],
  );

  const handleCardClick = useCallback((url: string) => {
    if (typeof window === "undefined") return;
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div ref={containerRef} className="list">
      {grid.map((item) => {
        return (
          <div
            key={item.id}
            data-key={item.id}
            className="item-wrapper"
            onClick={() => handleCardClick(item.url)}
            onMouseEnter={(e) => handleMouseEnter(e, item)}
            onMouseLeave={(e) => handleMouseLeave(e, item)}
          >
            <div className="item-img" style={{ backgroundImage: `url(${item.img})` }}>
              {colorShiftOnHover && (
                <div
                  className="color-overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))",
                    opacity: 0,
                    pointerEvents: "none",
                    borderRadius: "8px",
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;
