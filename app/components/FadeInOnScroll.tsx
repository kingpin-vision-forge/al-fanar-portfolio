"use client";

import type { CSSProperties, ReactNode } from "react";
import { useMemo, useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, type MotionStyle } from "framer-motion";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  offset?: number;
  blur?: number;
  once?: boolean;
  staggerChildren?: number;
  parallax?: boolean;
}

export default function FadeInOnScroll({
  children,
  className = "",
  style,
  delay = 0,
  duration = 0.85,
  offset = 72,
  blur = 18,
  once = true,
  staggerChildren = 0.12,
  parallax = true,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: 0.35,
    margin: "0px 0px -10% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-offset * 0.15, offset * 0.25]),
    { stiffness: 120, damping: 24, mass: 0.35 },
  );

  const parallaxOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.25, 1], [0.6, 1, 0.9]),
    { stiffness: 90, damping: 20 },
  );

  const motionStyle = useMemo(() => {
    const base: MotionStyle = { ...(style as MotionStyle) };
    if (parallax) {
      base.y = parallaxY;
      base.opacity = parallaxOpacity;
    }
    return base;
  }, [style, parallax, parallaxY, parallaxOpacity]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: offset, rotateX: 3, filter: `blur(${blur}px)` },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren,
            when: "beforeChildren",
          },
        },
      }}
      style={motionStyle}
    >
      {children}
    </motion.div>
  );
}
