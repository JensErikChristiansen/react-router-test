import { createContext, useContext } from 'react';

export const NavContext = createContext<{
  openTitle: string;
  setOpenTitle: (title: string) => void;
}>({
  openTitle: '',
  setOpenTitle: () => {},
});

export default function useNav() {
  return useContext(NavContext);
}
