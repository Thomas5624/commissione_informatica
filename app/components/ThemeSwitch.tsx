"use client";

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-md header-text hover:opacity-90"
    >
      {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </button>
  );
}
