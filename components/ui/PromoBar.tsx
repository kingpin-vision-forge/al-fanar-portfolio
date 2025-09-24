'use client';
import { useState } from 'react';

export function PromoBar({ text }: { text: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return <div className="pt-16" aria-hidden />;
  return (
    <div className="pt-16">
      {/* offset for fixed navbar */}
      <div
        className="bg-neutral-900 text-white"
        role="region"
        aria-label="Site promo"
      >
        <div className="container mx-auto flex items-center justify-center gap-4 px-4 py-2 text-center text-sm">
          <span aria-live="polite">{text}</span>
          <button
            type="button"
            className="rounded-full px-2 text-lg leading-none opacity-70 transition hover:opacity-100 focus-visible:ring"
            aria-label="Dismiss promotion"
            onClick={() => setVisible(false)}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
