"use client";
import { cn } from "@/lib/utils";
import BrandsMasonry from "@/app/components/reactbits/BrandsMasonry";
import { defaultEase } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

const masonryItems = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-close-up-of-a-watch-on-a-black-surface-H-d_3_8L-s",
    height: 400,
  },
  {
    id: "2",
    img: "https://i.pinimg.com/736x/93/65/ae/9365ae13fe2fb699f1c3dbbdfb5ba27a.jpg",
    url: "https://unsplash.com/photos/a-pair-of-red-and-white-nike-sneakers-on-a-white-surface-164_6wVEHfI",
    height: 300,
  },
  {
    id: "3",
    img: "https://i.pinimg.com/736x/93/65/ae/9365ae13fe2fb699f1c3dbbdfb5ba27a.jpg",
    url: "https://unsplash.com/photos/a-pair-of-headphones-sitting-on-top-of-a-white-surface-g-a-y-C-g-a-A",
    height: 350,
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-pair-of-sunglasses-sitting-on-top-of-a-pink-surface-PDX_a_82obo",
    height: 450,
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1964&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-person-with-a-backpack-on-standing-in-a-canyon-j-G-4-Z-c-f-Q",
    height: 400,
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=2000&q=80",
    url: "https://unsplash.com/photos/a-pair-of-headphones-sitting-on-top-of-a-white-surface-g-a-y-C-g-a-A",
    height: 350,
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-pair-of-brown-leather-shoes-sitting-on-top-of-a-wooden-floor-E-S-I-C-U-p-B-w-A",
    height: 400,
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1974&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-bottle-of-perfume-on-a-white-surface-W-p-D-x-X-k-E-g",
    height: 350,
  },
  {
    id: "9",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-book-and-a-pair-of-glasses-on-a-table-g-F-L-h-G-v-k-A",
    height: 350,
  },
  {
    id: "10",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1964&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-mountain-landscape-with-a-lake-in-the-foreground-1",
    height: 400,
  },
  {
    id: "11",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1964&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-forest-path-covered-in-fallen-leaves-2",
    height: 350,
  },
  {
    id: "12",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1964&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-close-up-of-a-leaf-with-water-drops-3",
    height: 350,
  },
  {
    id: "13",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1964&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-person-walking-on-a-path-in-the-woods-4",
    height: 400,
  },
  {
    id: "14",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1964&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-mountain-range-with-a-lake-in-the-foreground-5",
    height: 350,
  },
  {
    id: "15",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1964&auto=format&fit=crop",
    url: "https://unsplash.com/photos/a-person-standing-on-a-cliff-overlooking-the-ocean-6",
    height: 400,
  },
];

type MediaShowcaseProps = {
  className?: string;
};

export default function MediaShowcase({ className }: MediaShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  const headingVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: defaultEase },
      },
    }),
    [],
  );

  return (
    <section
      id="gallery"
      aria-labelledby="media-heading"
      className={cn(
        "relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f4f6ff] to-[var(--navy-300)]/10 px-6 py-20 md:min-h-screen md:py-28",
        "border-b border-[color:var(--navy-300)]/30",
        className,
      )}
      ref={sectionRef}
    >
      <div id="media" className="absolute -top-24 h-px w-px opacity-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-16 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--navy-300)]/35 to-transparent sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 bottom-16 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--navy-300)]/35 to-transparent sm:block"
      />

      <motion.div
        className="mx-auto flex w-full max-w-6xl flex-col gap-12 text-[color:var(--ink)]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.14 } },
        }}
      >
        <motion.div className="mb-4 text-center" variants={headingVariants}>
          <motion.span
            variants={headingVariants}
            className="text-[10px] font-semibold uppercase tracking-[0.48em] text-[color:var(--navy-700)]"
          >
            Media & Gallery
          </motion.span>
          <motion.h2
            variants={headingVariants}
            id="media-heading"
            className="mt-4 text-3xl font-black uppercase leading-tight md:text-4xl lg:text-5xl"
          >
            Press spotlights on our maison moments
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="mx-auto mt-7 max-w-2xl text-sm font-medium leading-relaxed text-[color:var(--ink)]/75"
          >
            From architectural unveilings to artisan collaborations, discover the narratives defining the Alfanar Enterprises world across luxury media.
          </motion.p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: defaultEase },
            },
          }}
        >
          <BrandsMasonry items={masonryItems} />
        </motion.div>
      </motion.div>
    </section>
  );
}
