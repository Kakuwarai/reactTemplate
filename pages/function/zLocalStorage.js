import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useStorage = () => {
  const store = persist(
    (set) => ({
      data: {},
      setStorage: (nameKey, value) =>
        set((state) => ({ ...state, data: { ...state.data, [nameKey]: value } })),
        getStorage: (nameKey) => (state) => state.data[nameKey],
    }),
    {
      name: 'custom-store', 
    }
  );

  return create(store);
};

export default useStorage;
