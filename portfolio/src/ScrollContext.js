import React, { createContext, useState, useContext } from "react";

const ScrollContext = createContext(0);

export function ScrollProvider({ children }) {
  const [scrollY, setScrollY] = useState(0);

  return (
    <ScrollContext.Provider value={{ scrollY, setScrollY }}>
      {children}
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
