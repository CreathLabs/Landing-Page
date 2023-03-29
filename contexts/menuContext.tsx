import React, { useState, createContext } from "react";

type toolbarProps = {
  open: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = createContext<toolbarProps>({
  open: false,
  toggleMenu: () => {
    // do nothing.
  },
});

const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, toggleMenu] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        open,
        toggleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
