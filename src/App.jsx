import React from "react";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 ">
      <h1 className="text-3xl font-bold">Theme Changer</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
