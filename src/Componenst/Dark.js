import React, { useState, useEffect } from "react";
import "./Dark.css";

function Dark({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <nav>
        {/* Your navbar code here */}
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>
      {children}
    </>
  );
}

export default Dark;
