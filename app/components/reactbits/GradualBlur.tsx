"use client";
import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

interface GradualBlurProps {
  target?: string;
  position?: "top" | "bottom";
  height?: string;
  strength?: number;
  divCount?: number;
  curve?: string;
  opacity?: number;
  className?: string;
}

export default function GradualBlur({
  position = "bottom",
  height = "3rem",
  strength = 8,
  opacity = 0.1,  // Reduced opacity from 0.2 to 0.1 to reduce fixed blur
  className = "",
}: GradualBlurProps) {
  const { scrollYProgress } = useScroll();
  const [blurAmount, setBlurAmount] = useState(strength);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const newBlur = strength - latest * strength;
      setBlurAmount(Math.max(0, newBlur));
    });
  }, [scrollYProgress, strength]);

  const positionStyles = position === "top" 
    ? { top: 0 } 
    : { bottom: 0 };

  return (
    <div
      className={`fixed left-0 right-0 pointer-events-none ${className}`}
      style={{
        ...positionStyles,
        height,
        backdropFilter: `blur(${blurAmount}px)`,
        background: `linear-gradient(to ${position === "top" ? "bottom" : "top"}, transparent, rgba(0,0,0,${opacity}))`,
      }}
    />
  );
}
