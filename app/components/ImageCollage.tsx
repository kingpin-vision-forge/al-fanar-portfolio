"use client";
import Image from "next/image";
import { useState } from "react";

const imagePaths = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
];

type CollageTileProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

function CollageTile({ src, alt, priority }: CollageTileProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-lg border border-[color:var(--brand-line)]/50 bg-white/60 shadow-[0_12px_30px_rgba(17,17,17,0.08)] backdrop-blur-sm">
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),rgba(244,244,244,0.95))] text-center text-sm uppercase tracking-[0.3em] text-[#3a3a3a]">
          <span className="text-xs text-[#929292]">Media refresh pending</span>
          <span>{alt}</span>
        </div>
      )}
    </div>
  );
}

export default function ImageCollage() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {imagePaths.map((src, index) => (
        <CollageTile
          key={index}
          src={src}
          alt={`Gallery visual ${index + 1}`}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
