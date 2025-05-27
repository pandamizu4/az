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
    title: "Hydra Glow Serum",
    description: "Minimalist skincare product shot featuring a blue dropper bottle with elegant lighting and shadows",
    image: "https://i.imgur.com/7MIVYJh.jpeg",
    tools: ["Blender", "Cycles", "Product"]
    
  },
  {
    title: "DR. Glow Eye Serum",
    description: "Minimalist eye serum bottle with soft lighting, designed to highlight hydration and anti-fatigue benefits",
    image: "https://i.imgur.com/BWgi0uv.jpeg",
    tools: ["Blender", "Cycles", "Product"]
  },
  {
    title: "Smartphone Mockup",
    description: "Modern phone concept render with subtle glow and reflections",
    image: "https://i.imgur.com/rVQYIjW.jpeg",
    tools: ["Blender", "Cycles", "Tech"]
  },
  {
    title: "Coca-Cola Can",
    description: "Realistic soda can design with branding and reflective aluminum material",
    image: "https://i.imgur.com/qUoTiaE.jpeg",
    tools: ["Blender", "Cycles", "Product"]
  },
  {
    title: "Medical Box Icon",
    description: "Stylized 3D model of a medical first-aid box for icons or games",
    image: "https://i.imgur.com/mAt0oNx.jpeg",
    tools: ["Blender", "Cycles", "Stylized"]
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
  }
];

const designWorks = [
  {
    title: "Indomie TAKOYAKI Packaging Design",
    description: "Premium instant noodle packaging with bold Japanese-inspired typography and a rich color palette that emphasizes flavor and authenticity",
    image: "https://i.imgur.com/OaxSf5q.jpeg"
  },
  {
    title: "Toni Kroos Graphic Poster",
    description: "Minimalist football poster with modern typography and a monochrome purple theme that highlights the athlete's form and movement",
    image: "https://i.imgur.com/S5JzCuF.jpeg"
  },
  {
    title: "Cristiano Ronaldo Sports Poster",
    description: "Dynamic and powerful sports design using bold red and white contrast, classic serif typography, and a signature football pose",
    image: "https://i.imgur.com/9WBI55D.jpeg"
  },
  {
    title: "Chinese New Year Greeting Card",
    description: "estive Imlek greeting design with red ornaments and classic Chinese elements",
    image: "https://i.imgur.com/FlH2DrU.jpeg"
  },
  {
    title: "Photo Manipulation: Coca-Cola Tentacles",
    description: "Surreal image manipulation of a Coke can entangled by dark tentacles",
    image: "https://i.imgur.com/rQxdlXM.jpeg"
  },
  {
    title: "Photo Manipulation: Shoe House",
    description: "Creative photo manipulation of a giant sneaker transformed into a house in nature",
    image: "https://i.imgur.com/2MLH0il.jpeg"
  },
  {
    title: "Fede Valverde Sports Poster",
    description: "Stylized football graphic with minimalist design and impactful typography, highlighting Valverde’s athletic form in monochrome with blue accent",
    image: "https://i.imgur.com/skiBKvN.jpeg"
  },
  {
    title: "Klee-Inspired Genshin Bag Promo",
    description: "Vibrant promotional design for a fantasy-themed bag inspired by Klee from Genshin Impact, featuring playful elements, warm colors, and a whimsical game-style aesthetic",
    image: "https://i.imgur.com/QezWKm0.png"
  },
  {
    title: "Spicy Burger Promo Design",
    description: "Bold fast food advertisement featuring a vibrant burger with spicy accents, playful typography, and a dynamic color scheme to grab attention",
    image: "https://i.imgur.com/xo7HlOp.png"
  },
  {
    title: "Fried Chicken Special Offer",
    description: "Clean and modern promotional design with crispy fried chicken as the focus, strong contrast, and clear call-to-action for limited-time deals",
    image: "https://i.imgur.com/drH2llQ.png"
  },
  {
    title: "Minimal Beauty Poster",
    description: "Modern minimalist layout for beauty or skincare branding",
    image: "https://i.imgur.com/Ab8CpCy.png"
  },
  {
    title: "Pandapedia Dark Design",
    description: "Bold dark theme poster with neon pink accents",
    image: "https://i.imgur.com/PA3PI16.jpeg"
  }
];

const additionalDesignWorks = [
  {
    title: "Color Splash Poster",
    description: "Creative poster with vibrant paint splash visuals",
    image: "https://i.imgur.com/x3qC7OU.png"
  },
  {
    title: "Food Menu Design",
    description: "Warm and inviting food menu with featured dish photos",
    image: "https://i.imgur.com/iiz36i7.png"
  },
  {
    title: "Yellow Theme Food Menu",
    description: "Bright yellow theme menu design with clear food sections",
    image: "https://i.imgur.com/ZCccFil.png"
  },
  {
    title: "Social Media Design Promo",
    description: "Clean Instagram post design promo for only IDR 25K",
    image: "https://i.imgur.com/YkjXxqG.jpeg"
  },
  {
    title: "We're Open Poster",
    description: "Simple gradient poster to announce store opening hours",
    image: "https://i.imgur.com/SiKmUmC.jpeg"
  },
  {
    title: "Shorts Editor Promo",
    description: "Fun illustration ad for short-form video editing service",
    image: "https://i.imgur.com/gU2fLs4.jpeg"
  },
  {
    title: "Carrot Character Set 1",
    description: "Cute vector carrots with fun expressions and playful style.",
    image: "https://i.imgur.com/j8Uu3mY.jpeg"
  },
  {
    title: "Carrot Character Set 2",
    description: "Expressive cartoon carrot illustrations with emotional poses.",
    image: "https://i.imgur.com/Iq2vgT5.jpeg"
  },
  {
    titl: "Body Positive Woman Illustration",
    description: "Flat vector of a confident plus-size woman posing happily.",
    image: "https://i.imgur.com/dYf1pR6.jpeg"
  },
  {
    title: "Fitness Women Illustration",
    description: "Fun vector showing two plus-size women skipping rope outdoors.",
    image: "https://i.imgur.com/MFshHqK.jpeg"
  },
  {
    title: "Fast Food Icons Set",
    description: "Colorful vector icons of various fast food items in flat style.",
    image: "https://i.imgur.com/79cZcNn.jpeg"
  },
  {
    title: "Lightbulb Ideas Icon Set",
    description: "Creative vector of glowing light bulbs representing bright ideas.",
    image: "https://i.imgur.com/h7hk1sr.jpeg"
  }
];

const videoWorks = [
  {
    title: "Sumatran Tiger Short",
    description: "Striking short video capturing glimpses of the elusive and endangered Sumatran tiger in the wild",
    embedUrl: "https://youtube.com/embed/7X2TizWoY0s",
    url: "https://youtube.com/shorts/7X2TizWoY0s?si=O7xL21D9hSOUQWcZ"
  },
  {
    title: "Brand Story",
    description: "Short educational video revealing the mystery behind whale sounds and how these majestic creatures communicate underwater",
    embedUrl: "https://www.youtube.com/embed/GFXxY-5m6Ek",
    url: "https://www.youtube.com/shorts/GFXxY-5m6Ek"
  },
  {
    title: "Tutorial Series",
    description: "Quick tips and tricks for creative software",
    embedUrl: "https://youtube.com/embed/GFXxY-5m6Ek",
    url: "https://youtube.com/shorts/GFXxY-5m6Ek"
  },
  {
    title: "Travel Vlog",
    description: "Cinematic travel footage with smooth transitions",
    embedUrl: "https://youtube.com/embed/XYZ123abc",
    url: "https://youtube.com/shorts/XYZ123abc"
  }
];

export default PortfolioPage;