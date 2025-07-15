import { useState, type ReactNode } from 'react';
import { NavContext } from './useNav';

export default function NavProvider({ children }: { children: ReactNode }) {
  const [openTitle, setOpenTitle] = useState('');

  return (
    <NavContext.Provider
      value={{
        openTitle,
        setOpenTitle,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}
