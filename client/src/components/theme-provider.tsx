import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const saved = localStorage.getItem("theme") as Theme;
      if (saved === "dark" || saved === "light") return saved;
    } catch (e) {}
    return defaultTheme;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    } catch (e) {}
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      try {
        localStorage.setItem("theme", newTheme);
      } catch (e) {}
      setTheme(newTheme);
    },
    toggleTheme: () => {
      const nextTheme = theme === "light" ? "dark" : "light";
      try {
        localStorage.setItem("theme", nextTheme);
      } catch (e) {}
      setTheme(nextTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    return initialState;
  }
  return context;
}
