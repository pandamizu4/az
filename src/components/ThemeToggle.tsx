import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Theme toggle component - switches between light and dark mode
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {/* Animated toggle button with icon */}
      <span
        className={`${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
        } inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 flex items-center justify-center`}
      >
        {/* Show moon icon for dark mode, sun icon for light mode */}
        {theme === 'dark' ? (
          <Moon className="h-4 w-4 text-gray-800" />
        ) : (
          <Sun className="h-4 w-4 text-gray-800" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
