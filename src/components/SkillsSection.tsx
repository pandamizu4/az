import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Clock, Target, Puzzle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SkillsSection = () => {
  const { language } = useLanguage();

  const hardSkills = [
    { name: "3D Modeling", level: 80},
    { name: "Video Editing", level: 90 },
    { name: "UI/UX Design", level: 75 },
    { name: "Motion Graphics", level: 75 },
    { name: "Digital Illustration", level: 80 },
    { name: "Photo Editing", level: 85 }
  ];

  const softSkills = [
    {
      icon: <Target className="h-6 w-6 text-indigo-600" />,
      name: language === 'en' ? "Problem Solving" : "Pemecahan Masalah",
      description: language === 'en'
        ? "Strong analytical thinking with the ability to solve complex design problems independently and efficiently"
        : "Pemikiran analitis yang kuat dengan kemampuan memecahkan masalah desain yang kompleks secara mandiri dan efisien"
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      name: language === 'en' ? "Reliability" : "Keandalan",
      description: language === 'en'
        ? "Completes tasks thoroughly and on time with minimal supervision"
        : "Menyelesaikan tugas secara menyeluruh dan tepat waktu dengan pengawasan minimal"
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      name: language === 'en' ? "Time Management" : "Manajemen Waktu",
      description: language === 'en'
        ? "Effectively manages time to meet deadlines and maintain consistent productivity"
        : "Mengelola waktu secara efektif untuk memenuhi tenggat waktu dan menjaga produktivitas yang konsisten"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-indigo-600" />,
      name: language === 'en' ? "Creativity" : "Kreativitas",
      description: language === 'en'
        ? "Resourceful in using design references and tools to produce visually appealing and effective outputs"
        : "Kreatif dalam menggunakan referensi dan alat desain untuk menghasilkan output yang menarik secara visual dan efektif"
    },
    {
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      name: language === 'en' ? "Adaptability" : "Adaptabilitas",
      description: language === 'en'
        ? "Quick learning and adaptation to new tools and trends"
        : "Pembelajaran cepat dan adaptasi terhadap alat dan tren baru"
    },
    {
      icon: <Puzzle className="h-6 w-6 text-indigo-600" />,
      name: language === 'en' ? "Self-awareness" : "Kesadaran Diri",
      description: language === 'en'
        ? "Recognizes strengths and weaknesses, actively seeks feedback, and reflects to improve performance"
        : "Mengenali kekuatan dan kelemahan, aktif mencari umpan balik, dan melakukan refleksi untuk meningkatkan kinerja"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">
            {language === 'en' ? 'My Skills' : 'Keahlian Saya'}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            {language === 'en' ? 'Skills & Expertise' : 'Keahlian & Ketrampilan'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hard Skills with Scroll Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">
              {language === 'en' ? 'Technical Skills' : 'Keahlian Teknis'}
            </h3>
            {hardSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">
              {language === 'en' ? 'Soft Skills' : 'Keahlian Non-Teknis'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700"
                >
                  <div className="mb-4 p-2 bg-gray-700 inline-block rounded-lg">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
