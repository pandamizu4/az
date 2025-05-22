import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import './index.css';

// Initialize React application with necessary providers
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter for client-side routing */}
    <BrowserRouter>
      {/* ThemeProvider for light/dark mode functionality */}
      <ThemeProvider>
        {/* LanguageProvider for internationalization */}
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
