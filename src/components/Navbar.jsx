import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <span className="logo">Farisan</span>

      <button onClick={toggleTheme} className="theme-btn">
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
}
