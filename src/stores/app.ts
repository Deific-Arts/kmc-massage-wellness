import { createStore } from 'zustand/vanilla';

export interface AppStore {
  drawerOpened: boolean;
  bookModalOpened: boolean;
  mainNavFilled: boolean;
  setDrawerOpened: (opened: boolean) => void;
  setBookModalOpened: (opened: boolean) => void;
  setMainNavFilled: (filled: boolean) => void;
}

const store = createStore<AppStore>((set) => ({
  drawerOpened: false,
  bookModalOpened: false,
  mainNavFilled: false,
  setDrawerOpened: (opened: boolean) => set({ drawerOpened: opened }),
  setBookModalOpened: (opened: boolean) => set({ bookModalOpened: opened }),
  setMainNavFilled: (filled: boolean) => set({ mainNavFilled: filled }),
}));

export default store;
