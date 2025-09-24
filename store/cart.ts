import { create } from 'zustand';

interface CartState {
  open: boolean;
  toggle: (open?: boolean) => void;
}

export const useCart = create<CartState>((set) => ({
  open: false,
  toggle: (open) => set((s) => ({ open: typeof open === 'boolean' ? open : !s.open }))
}));
