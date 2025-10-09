"use client";
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

export default function BrandsMasonry({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    function updateColumns() {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
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
        <div key={i} className="flex flex-col gap-4 flex-1">
          {col.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg shadow-lg will-change-transform"
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
              <img
                src={item.img}
                alt=""
                style={{ height: item.height }}
                className="w-full object-cover rounded-lg"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
