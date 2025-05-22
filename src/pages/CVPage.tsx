import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Award, Briefcase, GraduationCap, Users, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CVPage = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Professional Summary",
      summary: "Creative multimedia designer and recent Information Technology graduate specializing in 3D visualization, video production, and graphic design. Proficient in industry-standard creative tools with a proven track record of delivering engaging visual content. Combines technical expertise with artistic vision to create compelling digital experiences that captivate audiences and elevate brands.",
      experience: {
        title: "Professional Experience",
        freelance: {
          title: "Freelance Multimedia Designer",
          period: "2021 - 2023",
          achievements: [
            "Designed and produced visually compelling food packaging labels, enhancing brand visibility and market appeal",
            "Created engaging social media content that increased client engagement rates by 40%",
            "Developed custom invitation designs for various events, receiving consistent positive client feedback",
            "Executed promotional campaigns for herbal products, contributing to increased digital presence"
          ]
        }
      },
      education: {
        title: "Education",
        university: {
          degree: "Bachelor's Degree in Information Technology",
          school: "Amikom University Yogyakarta",
          thesis: "Thesis: \"3D Model Environment Design for the 3D Animation Film 'Unidentified Flying Object'\""
        }
      },
      projects: {
        title: "Notable Projects",
        film: {
          title: "3D Animated Short Film - IT Exhibition",
          period: "2021 - 2022",
          details: [
            "Developed detailed 3D environments using advanced modeling techniques",
            "Implemented complex texturing and lighting systems",
            "Managed complete production pipeline from concept to final render"
          ]
        },
        content: {
          title: "Educational Content Creator",
          period: "2024 - Present",
          details: [
            "Create and edit educational video content",
            "Develop engaging narratives and visual storytelling",
            "Manage complete video production workflow"
          ]
        }
      },
      technical: "Technical Proficiency",
      languages: {
        title: "Languages",
        indonesian: "Indonesian",
        english: "English",
        native: "Native",
        intermediate: "Intermediate"
      },
      downloadCV: "Download CV",
      downloadUrl: "https://www.mediafire.com/file/o0b707j34c2dc3v/CV_Pandu.pdf/file"
    },
    id: {
      title: "Ringkasan Profesional",
      summary: "Desainer multimedia kreatif dan lulusan Teknologi Informasi yang berspesialisasi dalam visualisasi 3D, produksi video, dan desain grafis. Mahir dalam menggunakan alat kreatif standar industri dengan rekam jejak yang terbukti dalam menghasilkan konten visual yang menarik. Menggabungkan keahlian teknis dengan visi artistik untuk menciptakan pengalaman digital yang memikat audiens dan mengangkat merek.",
      experience: {
        title: "Pengalaman Profesional",
        freelance: {
          title: "Desainer Multimedia Freelance",
          period: "2021 - 2023",
          achievements: [
            "Mendesain dan memproduksi label kemasan makanan yang menarik secara visual, meningkatkan visibilitas merek dan daya tarik pasar",
            "Membuat konten media sosial yang menarik yang meningkatkan tingkat keterlibatan klien sebesar 40%",
            "Mengembangkan desain undangan khusus untuk berbagai acara, menerima umpan balik positif yang konsisten dari klien",
            "Melaksanakan kampanye promosi untuk produk herbal, berkontribusi pada peningkatan kehadiran digital"
          ]
        }
      },
      education: {
        title: "Pendidikan",
        university: {
          degree: "Sarjana Teknologi Informasi",
          school: "Universitas Amikom Yogyakarta",
          thesis: "Skripsi: \"Desain Model Lingkungan 3D untuk Film Animasi 3D 'Unidentified Flying Object'\""
        }
      },
      projects: {
        title: "Proyek Unggulan",
        film: {
          title: "Film Pendek Animasi 3D - Pameran IT",
          period: "2021 - 2022",
          details: [
            "Mengembangkan lingkungan 3D detail menggunakan teknik pemodelan lanjutan",
            "Mengimplementasikan sistem tekstur dan pencahayaan yang kompleks",
            "Mengelola alur produksi lengkap dari konsep hingga hasil akhir"
          ]
        },
        content: {
          title: "Pembuat Konten Edukasi",
          period: "2024 - Sekarang",
          details: [
            "Membuat dan mengedit konten video edukasi",
            "Mengembangkan narasi dan penceritaan visual yang menarik",
            "Mengelola alur kerja produksi video secara lengkap"
          ]
        }
      },
      technical: "Kemampuan Teknis",
      languages: {
        title: "Bahasa",
        indonesian: "Bahasa Indonesia",
        english: "Bahasa Inggris",
        native: "Bahasa Ibu",
        intermediate: "Menengah"
      },
      downloadCV: "Unduh CV",
      downloadUrl: "https://www.mediafire.com/file/n0200t6uzznxls8/MediaFire_-_Getting_Started.pdf/file"
    }
  };

  const t = content[language];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-shift bg-[length:200%_200%] text-white">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Profile Image */}
            <motion.div
              variants={fadeInUpVariants}
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-xl"
            >
              <img
                src="https://i.imgur.com/dKHsWNQ.png"
                alt="Pandu Tirta Buana"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pandu Tirta Buana</h1>
              <p className="text-xl text-white/80 mb-4">
                {language === 'en' ? 'Multimedia Designer & Content Creator' : 'Desainer Multimedia & Pembuat Konten'}
              </p>
              
              {/* Contact Info in Hero */}
              <div className="flex flex-col gap-2 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Gunung Kidul, DI Yogyakarta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>0877-3778-3462</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>pandutirta25@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CV Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            {/* Summary Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="p-8 border-b border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.summary}</p>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainerVariants}
              className="p-8 border-b border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-indigo-600" />
                {t.experience.title}
              </h2>
              <div className="space-y-6">
                <motion.div variants={fadeInUpVariants}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{t.experience.freelance.title}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t.experience.freelance.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    {t.experience.freelance.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUpVariants}
                        custom={index}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainerVariants}
              className="p-8 border-b border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
                {t.education.title}
              </h2>
              <motion.div variants={fadeInUpVariants}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{t.education.university.degree}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2019 - 2023</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{t.education.university.school}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">GPA: 3.61</p>
                <p className="text-gray-700 dark:text-gray-300 italic">{t.education.university.thesis}</p>
              </motion.div>
            </motion.div>

            {/* Projects Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainerVariants}
              className="p-8 border-b border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-indigo-600" />
                {t.projects.title}
              </h2>
              <div className="space-y-6">
                <motion.div variants={fadeInUpVariants}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{t.projects.film.title}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t.projects.film.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    {t.projects.film.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUpVariants}
                        custom={index}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeInUpVariants}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{t.projects.content.title}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t.projects.content.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    {t.projects.content.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUpVariants}
                        custom={index}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainerVariants}
              className="p-8 border-b border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6">{t.technical}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Adobe Premiere Pro", level: 85 },
                  { name: "Adobe Photoshop", level: 85 },
                  { name: "Computer Literacy", level: 95 },
                  { name: "MS Office", level: 85 },
                  { name: "Canva", level: 85 },
                  { name: "Capcut", level: 85 },
                  { name: "Blender", level: 80 },
                  { name: "Adobe Illustrator", level: 80 }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUpVariants}
                    custom={index}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-indigo-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-indigo-600 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              className="p-8"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-indigo-600" />
                {t.languages.title}
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{t.languages.indonesian}</span>
                    <span className="text-indigo-600">{t.languages.native}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{t.languages.english}</span>
                    <span className="text-indigo-600">{t.languages.intermediate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Download CV Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="mt-8 text-center"
          >
            <a 
              href={t.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              {t.downloadCV}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CVPage;
