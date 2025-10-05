"use client";
import React, { useEffect, useRef, useState } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeInOnScroll({ children, className = "", style = {} }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 0px 0px' }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-500 ease-in-out`}
      style={{ ...style, opacity: isVisible ? 1 : 0 }}
    >
      {children}
    </div>
  );
}
