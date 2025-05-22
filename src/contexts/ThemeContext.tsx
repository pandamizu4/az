import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define theme types
type Theme = 'light' | 'dark';

// Theme context interface
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme state from localStorage or default to 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  // Update theme in localStorage and DOM when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Toggle dark class on html element
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Theme toggle handler
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
