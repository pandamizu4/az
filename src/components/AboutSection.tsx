import { motion } from 'framer-motion';
import { Layers, Video, Layout, PenTool } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    {
      name: language === 'en' ? "3D Modeling" : "Pemodelan 3D",
      icon: <Layers className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      description: language === 'en' 
        ? "Creating detailed 3D product models with realistic materials and lighting."
        : "Membuat model produk 3D detail dengan material dan pencahayaan yang realistis."
    },
    {
      name: language === 'en' ? "Video Editing" : "Pengeditan Video",
      icon: <Video className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      description: language === 'en'
        ? "Crafting engaging video content with smooth transitions and effects."
        : "Membuat konten video yang menarik dengan transisi dan efek yang halus."
    },
    {
      name: "UI/UX Design",
      icon: <Layout className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      description: language === 'en'
        ? "Designing visually appealing interfaces using AI-assisted tools."
        : "Mendesain antarmuka yang menarik secara visual menggunakan alat berbantuan AI."
    },
    {
      name: language === 'en' ? "Graphic Design" : "Desain Grafis",
      icon: <PenTool className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      description: language === 'en'
        ? "Creating compelling graphics for digital and social media platforms."
        : "Membuat grafis yang menarik untuk platform digital dan media sosial."
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
              {t.about.title}
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold mb-8">
              {t.about.subtitle}
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.about.description2}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.about.description3}
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 p-2 bg-indigo-50 dark:bg-indigo-900/50 inline-block rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 pt-16 border-t border-gray-100 dark:border-gray-700">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center mb-12 dark:text-white"
          >
            {t.about.toolsTitle}
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { name: "Blender", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png" },
              { name: "Premiere Pro", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png" },
              { name: "Illustrator", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png" },
              { name: "Photoshop", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png" },
              { name: "Canva", src: "https://upload.wikimedia.org/wikipedia/he/5/56/Canva-logo.png" },
              { name: "MS Office", src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg" },
              { name: "CapCut", src: "https://cdn.prod.website-files.com/64ea57571d50b02423c4505d/64fb219ade937671b42e011e_capcut%20logo%20png.png" },
              { name: "Filmora", src: "https://i.imgur.com/UojugHh.png" },
              { name: language === 'en' ? "AI Tools" : "Alat AI", src: "https://i.imgur.com/E6NHQPb.png" }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      delay: index * 0.15
                    }
                  }
                }}
                className="flex flex-col items-center"
              >
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  src={tool.src}
                  alt={tool.name}
                  className="h-12 w-12 mb-3 object-contain"
                />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
