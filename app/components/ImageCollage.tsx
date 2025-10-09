import Image from "next/image";
import React from "react";

const imagePaths = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
];

export default function ImageCollage() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {imagePaths.map((src, index) => (
        <div key={index} className="relative h-48 w-full overflow-hidden rounded-lg">
          <Image
            src={src}
            alt={`Stock image ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
