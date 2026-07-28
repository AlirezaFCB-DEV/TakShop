"use client";

import { Theme, ThemeContext } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      window.matchMedia("prefers-color-scheme: dark")
        ? setTheme("dark")
        : setTheme("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
