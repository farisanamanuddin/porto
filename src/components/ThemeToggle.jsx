import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </motion.button>
  );
}
