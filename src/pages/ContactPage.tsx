import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Twitter, Youtube, Link as LinkIcon, MessageSquare, Copy, Linkedin, Bean as Behance } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ContactPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section with improved background */}
      <div className="relative h-[60vh] flex items-center overflow-hidden">
        {/* Animated gradient background - now with dark mode support */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-shift bg-[length:200%_200%]"></div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 h-64 -top-32 -left-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute w-64 h-64 top-1/2 left-1/4 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.contact.title}</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glassmorphism rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,white_25%,white_50%,transparent_50%,transparent_75%,white_75%,white_100%)] bg-[length:20px_20px]"></div>
            </div>

            <div className="space-y-8 relative z-10">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">{t.contact.connect}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{t.contact.email}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white/70">pandutirta25@gmail.com</p>
                        <button 
                          onClick={() => handleCopy('pandutirta25@gmail.com', 'email')}
                          className="ml-2 p-1 rounded hover:bg-white/20 transition-colors"
                          aria-label="Copy email"
                        >
                          <Copy className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                    {copied === 'email' && (
                      <span className="ml-2 text-xs text-green-400 animate-fade-in-out">
                        {language === 'en' ? 'Copied!' : 'Tersalin!'}
                      </span>
                    )}
                  </div>

                  <a 
                    href="https://wa.me/6287737783462"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{t.contact.whatsapp}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white/70">+62 877-3778-3462</p>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCopy('+6287737783462', 'whatsapp');
                          }}
                          className="ml-2 p-1 rounded hover:bg-white/20 transition-colors"
                          aria-label="Copy phone number"
                        >
                          <Copy className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                    {copied === 'whatsapp' && (
                      <span className="ml-2 text-xs text-green-400 animate-fade-in-out">
                        {language === 'en' ? 'Copied!' : 'Tersalin!'}
                      </span>
                    )}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-white">{t.contact.socialMedia}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a 
                    href="https://www.instagram.com/pandapediahome?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Instagram</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/pandu-tirta-buana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">LinkedIn</span>
                  </a>

                  <a 
                    href="https://www.behance.net/koalagraphic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                      <Behance className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Behance</span>
                  </a>

                  <a 
                    href="https://x.com/mizuevren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                      <Twitter className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Twitter</span>
                  </a>

                  <a 
                    href="https://youtube.com/@mizuevren?si=TcLfezCbzpSqVJEE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                      <Youtube className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">YouTube</span>
                  </a>

                  <a 
                    href="https://linktr.ee/pandapedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                      <LinkIcon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Linktree</span>
                  </a>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-white/10">
                <p className="text-white/70">
                  {t.contact.ready}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
