"use client";
import { useEffect, useState } from "react";

const useDarkMode = () => {
  // State to hold the current theme ('light' or 'dark')
  const [theme, setTheme] = useState("light");

  // Toggle the theme
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    // Get the stored theme from local storage or fallback to user's system preference
    const currentTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;
