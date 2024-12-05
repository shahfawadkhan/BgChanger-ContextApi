import { useState } from "react";
import ThemeContext from "./theme1";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"}>
      
                {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
