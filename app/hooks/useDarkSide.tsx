import { useState, useEffect, SetStateAction, Dispatch } from "react";

type Theme = "dark" | "light";

export default function useDarkSide(): [Theme, Dispatch<SetStateAction<Theme>>] {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  const [theme, setTheme] = useState<Theme>(
    isLocalStorageAvailable ? localStorage.theme : ""
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    if (isLocalStorageAvailable) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      if (localStorage.theme == "dark") localStorage.removeItem("theme");
    } else localStorage.setItem("theme", theme);
  }, [theme, colorTheme, isLocalStorageAvailable]);

  return [colorTheme, setTheme];
}
