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
      className="p-2 rounded-md hover:bg-blue-700 text-white"
    >
      {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </button>
  );
}
