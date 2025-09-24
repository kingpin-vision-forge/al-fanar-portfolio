'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from '@/components/icons';

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (direction: 1 | -1) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowRight') {
        onNavigate(1);
      }
      if (event.key === 'ArrowLeft') {
        onNavigate(-1);
      }
    };
    document.addEventListener('keydown', handleKey);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, onNavigate]);

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery lightbox"
      onClick={onClose}
    >
      <div className="relative mx-auto flex h-full max-w-4xl items-center justify-center" onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeRef}
          aria-label="Close gallery"
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:ring"
          onClick={onClose}
          type="button"
        >
          <X size={20} />
        </button>
        <div className="relative h-full w-full">
          <Image src={current} alt={`Gallery image ${index + 1}`} fill className="object-contain" sizes="100vw" />
        </div>
        <button
          type="button"
          aria-label="Previous image"
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus-visible:ring md:block"
          onClick={() => onNavigate(-1)}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          aria-label="Next image"
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus-visible:ring md:block"
          onClick={() => onNavigate(1)}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
