"use client";

import { Theme, ThemeContext } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const update = () => {
      const storedTheme = localStorage.getItem("theme") as Theme;
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        if (window.matchMedia("prefers-color-scheme: dark").matches) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }
    };

    update();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
