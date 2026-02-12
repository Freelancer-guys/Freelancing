import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Globe, Server, Sparkles, Calculator, ChevronLeft, ChevronRight, MousePointer2, MapPin, Quote, ExternalLink } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const projects = [
  {
    id: 1,
    icon: Server,
    title: 'Damodaran IT Consultants - Corporate Website',
    location: 'MELBOURNE, Australia 🇦🇺',
    link: 'https://damodaran.com.au', // Add your actual links here
    description: 'Clean, professional website for an IT consulting firm specializing in software development, data analytics, cybersecurity, and infrastructure support.',
    features: ['Corporate Website', 'IT Services', 'Payment Gateway Integration', 'Professional Design'],
    images: ['/damodaran1.png', '/damodaran2.png'], 
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Vivaah Luxe - Luxury Wedding Gallery',
    location: 'UDAIPUR / PAN-INDIA 🇮🇳',
    link: 'https://vivaah.vercel.app/', 
    description: 'A high-end, visual-heavy digital experience for a luxury wedding planning firm. Developed with an editorial layout to showcase multi-day Indian heritage celebrations.',
    features: ['Luxury UI/UX', 'Image-Centric Design', 'Masonry Gallery', 'Responsive Portfolio'],
    images: ['/Wedding1.png', '/wedding2.png'], 
  },
  {
    id: 3,
    icon: Globe,
    title: 'Infosoft Technologies - IT Services Website',
    location: 'MELBOURNE, Australia 🇦🇺',
    link: 'https://infosofttech.com.au',
    description: 'Professional website for an IT consulting firm offering cloud computing, data management, and cybersecurity services.',
    features: ['Business Website', 'Service Showcase', 'Contact Integration', 'Professional Design'],
    images: ['/infosofttech1.png', '/infosofttech2.png'],
  },
  {
    id: 4,
    icon: Calculator,
    title: 'Timber Business Automation',
    location: 'Hyderabad, India 🇮🇳',
    link: '#', // Internal tool link
    description: 'Built a custom internal pricing engine that automates complex material calculations and generates instant professional invoices.',
    features: ['Pricing Engine', 'Invoice Generation', 'Material Calculations', 'Business Logic'],
    images: ['/timber1.png', '/timber.png'],
  },
];

// ... (Testimonials and state logic stay the same)

const testimonials = [
  {
    quote: "Swagath delivered exactly what we needed. The website looks professional and we've already received several inquiries through it.",
    author: "Business Owner",
    location: "Melbourne, Australia"
  },
  {
    quote: "Fast, clean work and very responsive to feedback. Highly recommend for anyone looking for a reliable developer.",
    author: "IT Services Client",
    location: "Australia"
  }
];

export default function ClientWork() {
  const ref = useRef(null);
  const testimonialsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonialTouchStart, setTestimonialTouchStart] = useState<number | null>(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 70) nextSlide();
    if (touchStart - touchEnd < -70) prevSlide();
    setTouchStart(null);
  };

  const nextTestimonial = () => setCurrentTestimonialIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  const prevTestimonial = () => setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleTestimonialTouchStart = (e: React.TouchEvent) => setTestimonialTouchStart(e.targetTouches[0].clientX);
  const handleTestimonialTouchEnd = (e: React.TouchEvent) => {
    if (!testimonialTouchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (testimonialTouchStart - touchEnd > 70) nextTestimonial();
    if (testimonialTouchStart - touchEnd < -70) prevTestimonial();
    setTestimonialTouchStart(null);
  };

  return (
    <section id="client-work" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <div ref={ref}>
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
            <div className="flex md:hidden items-center gap-4">
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <div key={i} className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-black' : 'w-2 bg-gray-200'}`} />
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
      </div>

      {/* Testimonials section remains the same... */}
      <div ref={testimonialsRef} className="mt-24">
         {/* ... (Keep your existing testimonial mapping code here) */}
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
      className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-md border border-gray-100 h-full flex flex-col group hover:shadow-2xl transition-all select-none relative"
    >
      <div className="mb-8 -mx-6 md:-mx-8 -mt-6 md:-mt-8 h-56 md:h-64 overflow-hidden rounded-t-[2.5rem] relative">
        <ImageCarousel images={project.images} alt={project.title} />
        {/* Overlay Link for the Image */}
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
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#121212] rounded-2xl flex items-center justify-center text-white">
            <project.icon size={24} />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
            <MapPin size={12} className="text-gray-400" />
            {project.location}
          </div>
        </div>
        
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-gray-300 underline-offset-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {project.title}
          </h3>
        </a>
        <p className="text-base md:text-lg text-[#475569] mb-8 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.features.map((feature: string, idx: number) => (
            <span key={idx} className="px-3 py-1 bg-[#F5F5F7] text-[#121212] rounded-full text-xs md:text-sm font-medium">
              {feature}
            </span>
          ))}
        </div>
        
        {/* Subtle "View" Link */}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black hover:translate-x-1 transition-transform p-2"
        >
          <ExternalLink size={18} />
        </a>
      </div>
    </motion.div>
  );
}