"use client";

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "@/app/hooks/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: "2rem", fill: "white", color: "white" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}
