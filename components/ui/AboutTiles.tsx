import Image from 'next/image';
import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import { track } from '@/lib/analytics';

export function AboutTiles() {
  return (
    <div>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm opacity-80">{CONFIG.about.blurb}</p>
      <div className="grid gap-6 md:grid-cols-3">
        {CONFIG.about.tiles.map((tile) => (
          <Link
            key={tile.title}
            href={tile.href}
            className="group block overflow-hidden rounded-2xl ring-1 ring-neutral-200 transition focus-visible:outline focus-visible:ring dark:ring-neutral-800"
            onClick={() => track('click_cta', { label: `Shop ${tile.title}` })}
          >
            <div className="relative h-56">
              <Image
                src={tile.img}
                alt={`${tile.title} collection tile`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{tile.title}</h3>
                <span className="text-sm opacity-70">Shop {tile.title} →</span>
              </div>
              <p className="mt-1 text-sm opacity-70">{tile.tag}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
