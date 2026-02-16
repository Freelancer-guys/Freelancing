import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Globe, Server, Sparkles, Calculator, ChevronLeft, ChevronRight, MousePointer2, MapPin, ExternalLink } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const projects = [
  {
    id: 1,
    icon: Server,
    title: 'Damodaran IT Consultants',
    location: 'MELBOURNE, Australia 🇦🇺',
    link: 'https://damodaran.com.au',
    description: 'Clean, professional website for an IT consulting firm specializing in software development and cybersecurity.',
    features: ['Corporate Website', 'IT Services', 'Professional Design'],
    images: ['/damodaran1.png', '/damodaran2.png'], 
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Vivaah Luxe - Wedding Gallery',
    location: 'UDAIPUR / INDIA 🇮🇳',
    link: 'https://vivaah.vercel.app/', 
    description: 'A high-end, visual-heavy digital experience for a luxury wedding planning firm with an editorial layout.',
    features: ['Luxury UI/UX', 'Masonry Gallery', 'Responsive'],
    images: ['/Wedding1.png', '/wedding2.png'], 
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Lumiera - Interior Studio',
    location: 'PAN-INDIA 🇮🇳',
    link: 'https://lumiera.vercel.app/', 
    description: 'Premium interactive portfolio for an interior design studio, built with elegant motion and bold visuals.',
    features: ['AI Chat Widget', 'SEO Optimized', 'Design Journey'],
    images: ['/interior1.png', '/interior2.png'], 
  },
  {
    id: 4,
    icon: Globe,
    title: 'Infosoft Technologies',
    location: 'MELBOURNE, Australia 🇦🇺',
    link: 'https://infosofttech.com.au',
    description: 'Professional website for an IT consulting firm offering cloud computing and data management.',
    features: ['Business Website', 'Service Showcase', 'Contact Sync'],
    images: ['/infosofttech1.png', '/infosofttech2.png'],
  },
  {
    id: 5,
    icon: Calculator,
    title: 'Timber Business Automation',
    location: 'Hyderabad, India 🇮🇳',
    link: '#', 
    description: 'Custom internal pricing engine that automates complex material calculations and professional invoices.',
    features: ['Pricing Engine', 'Invoicing', 'Business Logic'],
    images: ['/timber1.png', '/timber.png'],
  },
];

export default function ClientWork() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState(0);

  // Sync the dots with the actual scroll position on mobile
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth * 0.85; // Matches min-w-[85%]
    const index = Math.round(scrollLeft / cardWidth);
    setActiveCard(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.85; 
    scrollRef.current.scrollTo({
      left: index * (cardWidth + 24), // 24 is the gap (gap-6)
      behavior: 'smooth'
    });
  };

  return (
    <section id="client-work" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="max-w-2xl">
          <h5 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Client Work
          </h5>
          
          {/* Mobile swipe indicator & dots */}
          <div className="flex md:hidden items-center gap-4">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-300 rounded-full ${activeCard === i ? 'w-8 bg-black' : 'w-2 bg-gray-200'}`} 
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
              <MousePointer2 size={12} className="animate-pulse" />
              <span>Swipe projects</span>
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scrollToIndex(activeCard - 1)} 
            className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scrollToIndex(activeCard + 1)} 
            className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </motion.div>

      {/* The Scroll Container */}
      {/* The Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 outline-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="min-w-[92%] md:min-w-[48%] lg:min-w-[42%] snap-center"
          >
            <ProjectCard project={project} index={index} isInView={isInView} />
          </div>
        ))}
        
        {/* Adjust the spacer to match the new 'peek' width */}
        <div className="min-w-[4%] md:hidden" /> 
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
      <div className="mb-8 -mx-6 md:-mx-8 -mt-6 md:-mt-8 h-56 md:h-64 overflow-hidden rounded-t-[2.5rem] relative">
        <ImageCarousel images={project.images} alt={project.title} />
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"
        >
          <div className="bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            <ExternalLink size={20} className="text-black" />
          </div>
        </a>
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-[#121212] rounded-2xl flex items-center justify-center text-white">
            <project.icon size={22} />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <MapPin size={10} className="text-gray-400" />
            {project.location}
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-[#475569] mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.features.map((feature: string, idx: number) => (
          <span key={idx} className="px-3 py-1 bg-[#F5F5F7] text-[#121212] rounded-full text-[10px] md:text-xs font-semibold">
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
}