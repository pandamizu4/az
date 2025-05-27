import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, Youtube, MapPin, ArrowUpCircle, Camera, Image } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.cv, path: '/cv' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.contact, path: '/contact' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/pandapediahome?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/pandu-tirta-buana/'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={20} />,
      url: 'https://www.youtube.com/@MizuEvren'
    },
    {
      name: 'Freepik',
      icon: <Image size={20} />,
      url: 'https://www.freepik.com/author/koalagraphic'
    },
    {
      name: 'Shutterstock',
      icon: <Camera size={20} />,
      url: 'https://www.shutterstock.com/g/pandapediahome'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle size={24} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              PANDU
            </h3>
            <p className="text-gray-400 max-w-xs">
              {language === 'en' 
                ? 'Producing 3D visuals, engaging videos, and versatile graphic designs.'
                : 'Membuat render 3D fotorealistik, mengedit video menarik dan desain grafis untuk berbagai platform.'}
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={16} />
              <span>Gunung Kidul, DI Yogyakarta</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'Tautan Cepat'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Contact Info' : 'Informasi Kontak'}
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:pandutirta25@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} />
                <span>pandutirta25@gmail.com</span>
              </a>
              <a 
                href="tel:+6287737783462"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Phone size={16} />
                <span>+62 877-3778-3462</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Connect' : 'Terhubung'}
            </h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pandu Tirta Buana. 
              {language === 'en' 
                ? ' All rights reserved.'
                : ' Hak cipta dilindungi.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
