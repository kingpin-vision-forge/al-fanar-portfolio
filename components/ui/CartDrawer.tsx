'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { X } from '@/components/icons';
import { track } from '@/lib/analytics';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const stubItems = [
  { id: 1, name: 'Dune Linen Kurta', price: 1599, size: 'M' },
  { id: 2, name: 'Pearl Modest Co-ord', price: 1999, size: 'Free Size' }
];

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const drawerRoot = document.getElementById('cart-drawer');

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'Tab') {
        const focusable = drawerRoot?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable && focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      track('open_cart', { source: 'drawer' });
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="cart-backdrop"
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            key="cart-drawer"
            id="cart-drawer"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white dark:bg-neutral-900 shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-neutral-200/80 px-5 py-4 dark:border-neutral-800/80">
              <div>
                <p className="text-lg font-semibold">Your Cart</p>
                <p className="text-xs opacity-70">Exclusive edits, ready when you are.</p>
              </div>
              <button
                ref={closeRef}
                aria-label="Close cart"
                className="rounded-full p-2 hover:bg-neutral-100 focus-visible:ring"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {stubItems.map((item) => (
                <div key={item.id} className="rounded-lg border border-neutral-200/70 p-4 text-sm dark:border-neutral-800/70">
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 opacity-70">Size: {item.size}</p>
                  <p className="mt-2 text-neutral-900 dark:text-neutral-100">₹{item.price}</p>
                </div>
              ))}
              <p className="text-xs opacity-60">
                Shipping, taxes, and offers calculated at checkout. Continue browsing to add actual products.
              </p>
            </div>
            <div className="border-t border-neutral-200/80 px-5 py-4 space-y-3 text-sm dark:border-neutral-800/80">
              <div className="flex items-center justify-between font-medium">
                <span>Subtotal</span>
                <span>₹{stubItems.reduce((sum, item) => sum + item.price, 0)}</span>
              </div>
              <button className="w-full rounded-md bg-neutral-900 px-4 py-3 text-white" onClick={() => track('checkout_initiate')}>
                Proceed to Checkout
              </button>
              <button className="w-full rounded-md border border-neutral-900/20 px-4 py-3" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
