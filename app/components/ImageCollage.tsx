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
    <div className="relative h-48 w-full overflow-hidden rounded-lg border border-[color:var(--navy-300)]/30 bg-white/85 shadow-[0_12px_30px_rgba(8,16,80,0.12)] backdrop-blur-sm">
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
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.82),rgba(125,139,255,0.12))] text-center text-sm uppercase tracking-[0.3em] text-[color:var(--ink)]/80">
          <span className="text-xs text-[color:var(--slate)]">Media refresh pending</span>
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
