import { createContext, useContext, useState, ReactNode } from 'react';

// Define supported languages
type Language = 'en' | 'id';

// Language context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Create language context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize language state, defaults to English
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for using language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
