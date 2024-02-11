import { create } from 'zustand';

type Store = {
  page: string;
  changePage: (page: string) => void;
};

const useStore = create<Store>()((set) => ({
  page: 'Home',
  changePage: (page) => set(() => ({ page: page })),
}));

export default useStore;
