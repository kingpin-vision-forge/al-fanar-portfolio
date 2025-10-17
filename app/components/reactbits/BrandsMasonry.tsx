"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface Item {
  id: string;
  img: string;
  url: string;
  height: number;
}

type Props = {
  items: Item[];
};

function MasonryVisual({ item }: { item: Item }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-lg border border-[color:var(--brand-line)]/60 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),rgba(244,244,244,0.95))] px-6 text-center text-xs uppercase tracking-[0.3em] text-[#3a3a3a]"
        style={{ height: item.height }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#959595]">
          Image offline
        </span>
        <span className="text-sm">{item.id}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg" style={{ height: item.height }}>
      <Image
        src={item.img}
        alt={`Brand highlight ${item.id}`}
        fill
        className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function BrandsMasonry({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    function updateColumns() {
      const width = window.innerWidth;
      if (width < 640) setColumns(2);
      else if (width < 1024) setColumns(2);
      else setColumns(5);
    }
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const imgs = containerRef.current.querySelectorAll("a");
    imgs.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [items]);

  // Distribute items into columns
  const cols: Item[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, idx) => {
    cols[idx % columns].push(item);
  });

  return (
    <div ref={containerRef} className="flex gap-4">
      {cols.map((col, i) => (
        <div key={i} className="flex flex-1 flex-col gap-4">
          {col.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg shadow-lg will-change-transform"
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.transform = "translateY(-8px)";
                target.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
                target.style.boxShadow = "0 30px 80px rgba(16, 16, 16, 0.1)";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.transform = "translateY(0)";
                target.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
                target.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
              }}
            >
              <MasonryVisual item={item} />
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
