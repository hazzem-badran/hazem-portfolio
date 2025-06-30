
// store/useMenuStore.js
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useMenuStore = create(
  subscribeWithSelector((set) => ({
    isMenuOpen: false,
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    closeMenu: () => set({ isMenuOpen: false }),
    openMenu: () => set({ isMenuOpen: true }),
  }))
);
