import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, VideoIcon, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      title: language === 'en' ? "3D Product Design" : "Desain Produk 3D",
      icon: <Box className="h-8 w-8 text-indigo-600" />,
      description: language === 'en' 
        ? "High-quality 3D visualizations for products, packaging, and promotional materials with realistic materials and lighting."
        : "Visualisasi 3D berkualitas tinggi untuk produk, kemasan, dan materi promosi dengan material dan pencahayaan yang realistis.",
      items: language === 'en' 
        ? ["Product Visualization", "Packaging Design Mockups", "Concept Visualization", "Scene Mockups"]
        : ["Visualisasi Produk", "Mockup Desain Kemasan", "Visualisasi Konsep", "Mockup Scene"]
    },
    {
      title: language === 'en' ? "Video Editing" : "Pengeditan Video",
      icon: <VideoIcon className="h-8 w-8 text-indigo-600" />,
      description: language === 'en'
        ? "Editing services for various types of videos, from short-form content to promotional and social media videos—optimized for engagement and clarity across digital platforms."
        : "Layanan pengeditan untuk berbagai jenis video, dari konten pendek hingga video promosi dan media sosial—dioptimalkan untuk keterlibatan dan kejelasan di seluruh platform digital.",
      items: language === 'en'
        ? ["Short-form Video Creation (Reels, Shorts, TikTok)", "Basic & Advanced Editings", "Simple Motion Graphics & Transitions", "Captions & Subtitles", "Sound Effects & Music Sync", "Thumbnail Creation"]
        : ["Pembuatan Video Pendek (Reels, Shorts, TikTok)", "Pengeditan Dasar & Lanjutan", "Motion Graphics & Transisi Sederhana", "Teks & Subtitle", "Efek Suara & Sinkronisasi Musik", "Pembuatan Thumbnail"]
    },
    {
      title: language === 'en' ? "Graphic Design" : "Desain Grafis",
      icon: <Instagram className="h-8 w-8 text-indigo-600" />,
      description: language === 'en'
        ? "Versatile graphic design services for both digital and print needs, tailored to enhance visual communication and branding."
        : "Layanan desain grafis yang serbaguna untuk kebutuhan digital dan cetak, disesuaikan untuk meningkatkan komunikasi visual dan branding.",
      items: language === 'en'
        ? ["Social Media Posts", "Story Templates", "Promotional Banners", "Invitation Design"]
        : ["Postingan Media Sosial", "Template Story", "Banner Promosi", "Desain Undangan"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">
            {t.services.subtitle}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">{t.services.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="mb-6 p-3 bg-indigo-500/10 inline-block rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-6">{t.services.readyToStart}</h3>
          <Link to="/contact" className="btn-primary">
            {t.services.contactMe}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
