'use client';
import Image from 'next/image';
import { useState } from 'react';
import { CONFIG } from '@/lib/config';
import { Lightbox } from './Lightbox';

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleNavigate = (direction: 1 | -1) => {
    if (openIndex === null) return;
    const total = CONFIG.gallery.images.length;
    const next = (openIndex + direction + total) % total;
    setOpenIndex(next);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">In-store moments</h2>
      <p className="mt-1 text-sm opacity-70">Peek inside our ateliers and styling studios.</p>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {CONFIG.gallery.images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="group relative aspect-square overflow-hidden rounded-lg border border-neutral-200/70 transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:ring dark:border-neutral-800/70"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open gallery image ${i + 1}`}
          >
            <Image src={src} alt={`Store showcase ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 50vw" />
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox
          images={CONFIG.gallery.images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}
