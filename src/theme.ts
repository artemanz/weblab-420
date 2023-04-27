import { useState, createContext, Dispatch, SetStateAction } from "react";

const themeContext = createContext<{
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
}>({
  theme: "dark",
  setTheme: () => {},
});

export default themeContext;
