import { createContext, useState, useEffect, useContext } from "react";

const router = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <router.Provider value={{ theme, toggleTheme }}>{children}</router.Provider>
  );
};

export const useTheme = () => useContext(router);
