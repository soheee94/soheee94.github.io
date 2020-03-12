import React, { createContext, useState, useContext } from "react";

const ScrollContext = createContext(0);
const HeaderContext = createContext();

export function ScrollProvider({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [openHeader, setOpenHeader] = useState(false);

  return (
    <ScrollContext.Provider value={{ scrollY, setScrollY }}>
      <HeaderContext.Provider value={{ setOpenHeader, openHeader }}>
        {children}
      </HeaderContext.Provider>
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const state = useContext(ScrollContext);
  if (!state) {
    throw new Error("Cannot find ScrollProvider");
  }
  return state;
}

export function useHeader() {
  const state = useContext(HeaderContext);
  if (!state) {
    throw new Error("Cannot find HeaderProvider");
  }
  return state;
}
