import { useState, useEffect } from 'react';
import { Outlet, NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  // State for mobile menu and scroll position
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  // Handle scroll events to update header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and scroll to top when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Navigation links configuration - edit here to modify nav items
  const navLinks = [
    { name: translations[language].nav.home, path: '/' },
    { name: translations[language].nav.portfolio, path: '/portfolio' },
    { name: translations[language].nav.cv, path: '/cv' },
    { name: translations[language].nav.services, path: '/services' },
    { name: translations[language].nav.contact, path: '/contact' },
  ];

  // Language toggle handler
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  // Active route checker
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Header Section - Fixed navigation bar */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          // Dynamic background based on scroll position
          isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo and Brand Name - Edit logo URL here */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://i.imgur.com/dKHsWNQ.png" 
                alt="Pandu Logo" 
                className="w-8 h-8 rounded-full"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                PANDU
              </span>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`relative py-2 ${
                    isActivePath(link.path)
                      ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300'
                  }`}
                >
                  {link.name}
                  {/* Active link indicator */}
                  {isActivePath(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                  )}
                </Link>
              ))}
              {/* Theme and Language Controls */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-medium">{language === 'en' ? 'EN' : 'ID'}</span>
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button 
                className="focus:outline-none" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-3 rounded-lg ${
                    isActivePath(link.path)
                      ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 py-2 px-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 w-full"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">
                  {language === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
                </span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-16 md:pt-20 dark:bg-gray-900">
        <Outlet />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Layout;
