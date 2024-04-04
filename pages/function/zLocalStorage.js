import create from 'zustand';
import { persist } from 'zustand/middleware';

// Custom Zustand store with persistence
const useStorage = persist(
  (set) => ({
    data: {},
    setNameKey: (nameKey, value) =>
      set((state) => ({ ...state, data: { ...state.data, [nameKey]: value } })),
    getValueByNameKey: (nameKey) => (state) => state.data[nameKey],
  }),
  {
    name: 'custom-store', // Name for the persisted store
  }
);

export default useStorage;
