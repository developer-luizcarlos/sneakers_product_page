"use client";
import React,{ useState,createContext } from "react";

type Props = {
  children: React.ReactNode;
};

type ThemeValue = "light" | "dark";

type ContextType = {
  theme: ThemeValue;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: "light",
  toggleTheme: () => {}
});

export default function ContextComponent({ children }: Props) {
  const [theme,setTheme] = useState<ThemeValue>("light");
  const toggleTheme = () => {
    setTheme((previousValue) => (previousValue === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme,toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}