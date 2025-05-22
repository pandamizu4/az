import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Box, ExternalLink, Image, Camera, X } from 'lucide-react';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);

  const categories = [
    { id: 'all', name: 'All Work', icon: <Box className="w-4 h-4" /> },
    { id: '3d', name: '3D Products', icon: <Box className="w-4 h-4" /> },
    { id: 'design', name: 'Design Works', icon: <Instagram className="w-4 h-4" /> },
    { id: 'video', name: 'Video Edits', icon: <Youtube className="w-4 h-4" /> }
  ];

  const stockPlatforms = [
    {
      name: 'Freepik',
      icon: <Image className="w-5 h-5" />,
      url: 'https://www.freepik.com/author/koalagraphic',
      description: 'Vector illustrations and design resources'
    },
    {
      name: 'Shutterstock',
      icon: <Camera className="w-5 h-5" />,
      url: 'https://www.shutterstock.com/g/pandapediahome',
      description: 'Professional stock photos and vectors'
    }
  ];

  const handleImageClick = (url: string, title: string) => {
    setSelectedImage({ url, title });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-shift bg-[length:200%_200%] text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Creative Portfolio</h1>
            <p className="text-xl text-white/80">
              Showcasing my journey through design, video editing, and 3D visualization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stock Platforms Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {stockPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg">
                  {platform.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{platform.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{platform.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-700">
        <div className="section-container py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`grid gap-8 ${
                activeCategory === 'design' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              }`}
            >
              {/* 3D Product Visualizations */}
              {(activeCategory === 'all' || activeCategory === '3d') && productWorks.map((product, index) => (
                <motion.div
                  key={`3d-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => handleImageClick(product.image, product.title)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-medium">{product.title}</p>
                        <p className="text-white/80 text-sm mt-1">{product.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.tools.map((tool, i) => (
                            <span key={i} className="px-2 py-1 bg-white/20 rounded-full text-white text-xs">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Design Works */}
              {(activeCategory === 'all' || activeCategory === 'design') && [...designWorks, ...additionalDesignWorks].map((work, index) => (
                <motion.div
                  key={`design-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => handleImageClick(work.image, work.title)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-medium">{work.title}</p>
                        <p className="text-white/80 text-sm mt-1">{work.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Video Edits */}
              {(activeCategory === 'all' || activeCategory === 'video') && videoWorks.map((video, index) => (
                <motion.div
                  key={`video-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[3/4] bg-gray-900">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold dark:text-white">{video.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{video.description}</p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm mt-2 hover:underline"
                    >
                      Watch on YouTube <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl mx-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[85vh] w-auto mx-auto"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">{selectedImage.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const productWorks = [
  {
    title: "Dish Soap Bottle",
    description: "Stylized transparent plastic bottle with colored liquid and realistic lighting",
    image: "https://i.imgur.com/NslPjJ3.png",
    tools: ["Blender", "Cycles", "Product"]
  },
  {
    title: "Minimalist Perfume Bottle",
    description: "Frosted glass material with subtle reflections for a luxury cosmetic look",
    image: "https://i.imgur.com/V6fpOW9.jpeg",
    tools: ["Blender", "Cycles", "Cosmetic"]
  },
  {
    title: "Whey Protein Jar",
    description: "High-detail product visualization with label design and soft studio lighting",
    image: "https://i.imgur.com/OKn8jFu.png",
    tools: ["Blender", "Cycles", "Packaging"]
  },
  {
    title: "Medical Box Icon",
    description: "Stylized 3D model of a medical first-aid box for icons or games",
    image: "https://i.imgur.com/mAt0oNx.jpeg",
    tools: ["Blender", "Cycles", "Stylized"]
  },
  {
    title: "Coca-Cola Can",
    description: "Realistic soda can design with branding and reflective aluminum material",
    image: "https://i.imgur.com/qUoTiaE.jpeg",
    tools: ["Blender", "Cycles", "Product"]
  },
  {
    title: "Smartphone Mockup",
    description: "Modern phone concept render with subtle glow and reflections",
    image: "https://i.imgur.com/rVQYIjW.jpeg",
    tools: ["Blender", "Cycles", "Tech"]
  },
  {
    title: "Supplement Bottle",
    description: "Plastic jar for supplement or protein packaging with clean lighting",
    image: "https://i.imgur.com/vbpaR0Z.jpeg",
    tools: ["Blender", "Cycles", "Packaging"]
  },
  {
    title: "Spray Bottle",
    description: "Sleek cosmetic spray bottle design with metallic finish",
    image: "https://i.imgur.com/zTgt8BF.jpeg",
    tools: ["Blender", "Cycles", "Cosmetic"]
  },
  {
    title: "Black Tumbler",
    description: "Stylized tumbler model with glossy black material for product mockups",
    image: "https://i.imgur.com/CBUV54m.jpeg",
    tools: ["Blender", "Cycles", "Product"]
  },
  {
    title: "Plastic Kettle",
    description: "Simple water kettle in solid plastic material for home appliance modeling",
    image: "https://i.imgur.com/iVbVWX9.jpeg",
    tools: ["Blender", "Cycles", "Product"]
  },
  {
    title: "Square Perfume Bottle",
    description: "Dark glass perfume bottle design with minimalist aesthetics",
    image: "https://i.imgur.com/eeV6JNv.jpeg",
    tools: ["Blender", "Cycles", "Cosmetic"]
  },
  {
    title: "Woven Basket",
    description: "Handmade-style 3D basket with realistic weaving pattern",
    image: "https://i.imgur.com/Z2iyin6.jpeg",
    tools: ["Blender", "Cycles", "Craft"]
  },
  {
    title: "Bread Rolls",
    description: "Realistic bakery-style bread rolls with detailed bump texture",
    image: "https://i.imgur.com/vaRzZun.jpeg",
    tools: ["Blender", "Cycles", "Food"]
  },
  {
    title: "Safety Goggles",
    description: "Functional safety eyewear with semi-transparent plastic material",
    image: "https://i.imgur.com/QXLOsSe.jpeg",
    tools: ["Blender", "Cycles", "Gear"]
  },
  {
    title: "Halloween Pumpkin",
    description: "Cute stylized pumpkin with witch hat, great for seasonal content",
    image: "https://i.imgur.com/bTjoecb.jpeg",
    tools: ["Blender", "Cycles", "Stylized"]
  },
  {
    title: "Katana Sword",
    description: "Clean render of a curved Japanese sword with dark lighting setup",
    image: "https://i.imgur.com/oManWn1.jpeg",
    tools: ["Blender", "Cycles", "Weapon"]
  },
  {
    title: "Wireless Mouse",
    description: "Modern mouse design with smooth contours and subtle reflections",
    image: "https://i.imgur.com/8k8rTah.jpeg",
    tools: ["Blender", "Cycles", "Tech"]
  },
  {
    title: "Fish Cutting Board",
    description: "Cartoonish food scene featuring sliced fish on a wooden board",
    image: "https://i.imgur.com/DwkATyt.png",
    tools: ["Blender", "Cycles", "Stylized"]
  }
];

const designWorks = [
  {
    title: "Brand Identity Design",
    description: "Modern branding concept with clean typography and bold colors",
    image: "https://i.imgur.com/OaxSf5q.jpeg"
  },
  {
    title: "Social Media Campaign",
    description: "Engaging content series for product launch",
    image: "https://i.imgur.com/S5JzCuF.jpeg"
  },
  {
    title: "Editorial Layout",
    description: "Magazine spread design with dynamic composition",
    image: "https://i.imgur.com/9WBI55D.jpeg"
  },
  {
    title: "Product Photography",
    description: "Minimalist product shots with natural lighting",
    image: "https://i.imgur.com/FlH2DrU.jpeg"
  },
  {
    title: "Digital Illustration",
    description: "Custom artwork for marketing materials",
    image: "https://i.imgur.com/rQxdlXM.jpeg"
  },
  {
    title: "UI/UX Design",
    description: "Mobile app interface with intuitive navigation",
    image: "https://i.imgur.com/2MLH0il.jpeg"
  },
  {
    title: "Food Packaging Design",
    description: "Creative packaging design for artisanal food products",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg"
  },
  {
    title: "Event Poster Design",
    description: "Eye-catching poster for music festival",
    image: "https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg"
  },
  {
    title: "Corporate Branding",
    description: "Complete brand identity package for tech startup",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
  },
  {
    title: "Magazine Cover",
    description: "Contemporary magazine cover design",
    image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg"
  },
  {
    title: "Web Design",
    description: "Modern e-commerce website design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
  },
  {
    title: "Social Media Kit",
    description: "Cohesive social media template design",
    image: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg"
  }
];

const additionalDesignWorks = [
  {
    title: "Fashion Lookbook",
    description: "Seasonal collection showcase with editorial styling",
    image: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg"
  },
  {
    title: "Restaurant Menu",
    description: "Elegant menu design with food photography",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
  },
  {
    title: "Travel Brochure",
    description: "Destination marketing with stunning visuals",
    image: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg"
  },
  {
    title: "Beauty Product Packaging",
    description: "Luxurious skincare product packaging design",
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg"
  },
  {
    title: "Festival Branding",
    description: "Complete visual identity for arts festival",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
  },
  {
    title: "Book Cover Series",
    description: "Contemporary book cover designs for fiction series",
    image: "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg"
  },
  {
    title: "Wellness App Design",
    description: "Mobile app design for meditation and mindfulness",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
  },
  {
    title: "Eco-Friendly Packaging",
    description: "Sustainable packaging design for organic products",
    image: "https://images.pexels.com/photos/4040644/pexels-photo-4040644.jpeg"
  },
  {
    title: "Annual Report Design",
    description: "Corporate annual report with infographics",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
  }
];

const videoWorks = [
  {
    title: "Product Launch Teaser",
    description: "Dynamic short-form video showcasing new product features",
    embedUrl: "https://www.instagram.com/reel/DHpS3L7NGCg/embed",
    url: "https://www.instagram.com/reel/DHpS3L7NGCg/"
  },
  {
    title: "Brand Story",
    description: "Engaging narrative about brand values and mission",
    embedUrl: "https://youtube.com/embed/7X2TizWoY0s",
    url: "https://youtube.com/shorts/7X2TizWoY0s?si=O7xL21D9hSOUQWcZ"
  },
  {
    title: "Tutorial Series",
    description: "Quick tips and tricks for creative software",
    embedUrl: "https://youtube.com/embed/GFXxY-5m6Ek",
    url: "https://youtube.com/shorts/GFXxY-5m6Ek"
  }
];

export default PortfolioPage;
