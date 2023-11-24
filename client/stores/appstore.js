import { create } from 'zustand';

const useStore = create((set, get) => ({
  user: null,
  setUser: (user) => {
    set({ user });
  },
}));

export default useStore;
