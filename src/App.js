import "./App.css";
import { Hero } from "./Components/Hero";
import { Body } from "./Components/Body";
import { Footer } from "./Components/Footer";
import EfficientCursor from "react-efficient-cursor";
import { Cursor } from "./Components/Cursor";
import { useState } from "react";
import { AuthContext } from "./helpers/AuthContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  let darkModeStatus;

  darkModeStatus = localStorage.getItem("dark-mode");

  return (
    <AuthContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div
        className={
          darkModeStatus === "enabled"
            ? "App dark-mode"
            : darkModeStatus === "disabled"
            ? "App"
            : "App"
        }
      >
        <Hero />
        <Body />
        <Footer />
        <EfficientCursor>
          <Cursor />
        </EfficientCursor>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
