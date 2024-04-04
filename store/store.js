import { create } from "zustand";

export const useStore = create((set) => ({
  bar: false,
  setBar: (state) => set({ bar: state }),
}));
