import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Globe, Server, Calculator, ChevronLeft, ChevronRight, MousePointer2, MapPin } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const projects = [
  {
    id: 1,
    icon: Server,
    title: 'Enterprise IT & Infrastructure',
    location: 'MELBOURNE, Australia 🇦🇺',
    description: 'Engineered secure software systems and data pipelines, focusing on cybersecurity audits and 24/7 infrastructure maintenance.',
    features: ['Cybersecurity Audits', 'Data Engineering', 'System Maintenance', 'Infrastructure Support'],
    images: ['/damodaran1.png', '/damodaran2.png'], 
  },
  {
    id: 2,
    icon: Globe,
    title: 'Digital Transformation Systems',
    location: 'MELBOURNE, Australia 🇦🇺',
    description: 'Architected cloud-native platforms and custom software solutions to streamline data management and business operations.',
    features: ['Cloud Computing', 'Data Management', 'Custom Software', 'IT Support'],
    images: ['/infosofttech1.png', '/infosofttech2.png'],
  },
  {
    id: 3,
    icon: Calculator,
    title: 'Timber Business Automation',
    location: 'Hyderabad, India 🇮🇳',
    description: 'Built a custom internal pricing engine that automates complex material calculations and generates instant professional invoices.',
    features: ['Pricing Engine', 'Invoice Generation', 'Material Calculations', 'Business Logic'],
    images: [
      '/timber1.png', 
      '/timber.png'
    ],
  },
];

export default function ClientWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 70) nextSlide();
    if (touchStart - touchEnd < -70) prevSlide();
    setTouchStart(null);
  };

  return (
    <section id="client-work" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Client Work
          </h2>
          <p className="text-lg md:text-xl text-[#475569] mb-6">
            Production systems that drive real business results
          </p>
          
          <div className="flex md:hidden items-center gap-4">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-black' : 'w-2 bg-gray-200'}`} 
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400 animate-pulse">
              <MousePointer2 size={14} />
              <span>Swipe to explore</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button onClick={prevSlide} className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
            <ChevronRight size={24} />
          </button>
        </div>
      </motion.div>

      <div className="relative touch-pan-y" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <motion.div 
          className="flex gap-6 md:gap-8 transition-transform duration-500 ease-out"
          animate={{ x: `-${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 50)}%` }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="min-w-full md:min-w-[calc(50%-16px)]">
              <ProjectCard project={project} index={index} isInView={isInView} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: any, index: number, isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-md border border-gray-100 h-full flex flex-col group hover:shadow-xl transition-all select-none"
    >
      <div className="mb-8 -mx-6 md:-mx-8 -mt-6 md:-mt-8 h-56 md:h-64 overflow-hidden rounded-t-[2.5rem]">
        <ImageCarousel images={project.images} alt={project.title} />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#121212] rounded-2xl flex items-center justify-center text-white">
            <project.icon size={24} />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
            <MapPin size={12} className="text-gray-400" />
            {project.location}
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          {project.title}
        </h3>
        <p className="text-base md:text-lg text-[#475569] mb-8 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.features.map((feature: string, idx: number) => (
          <span key={idx} className="px-3 py-1 bg-[#F5F5F7] text-[#121212] rounded-full text-xs md:text-sm font-medium">
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
}