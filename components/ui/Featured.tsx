'use client';
import Image from 'next/image';
import { CONFIG } from '@/lib/config';
import { useCart } from '@/store/cart';
import { track } from '@/lib/analytics';

const mockProducts = Array.from({ length: CONFIG.featured.lists.reduce((total, list) => total + list.items, 0) }).map((_, index) => ({
  id: index + 1,
  title: `Product ${index + 1}`,
  price: 999 + index * 20,
  img: `/images/hero-${(index % CONFIG.hero.banners.length) + 1}.avif`
}));

export function Featured() {
  const { toggle } = useCart();

  return (
    <div className="space-y-12">
      {CONFIG.featured.lists.map((list, listIndex) => (
        <section key={list.id} aria-labelledby={`featured-${list.id}`} className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 id={`featured-${list.id}`} className="text-2xl font-semibold">
              {list.title}
            </h2>
            <a href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {mockProducts
              .slice(listIndex * list.items, listIndex * list.items + list.items)
              .map((product) => (
                <article
                  key={product.id}
                  className="flex h-full flex-col rounded-xl border border-neutral-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-within:ring dark:border-neutral-800/80 dark:bg-neutral-900"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 768px) 30vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-3 text-sm">
                    <p className="font-medium">{product.title}</p>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-300">₹{product.price}</p>
                    <button
                      type="button"
                      className="mt-3 w-full rounded-md bg-neutral-900 px-3 py-2 text-white transition hover:bg-neutral-800 focus-visible:ring"
                      onClick={() => {
                        track('add_to_cart', { id: product.id, list: list.id });
                        toggle(true);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
