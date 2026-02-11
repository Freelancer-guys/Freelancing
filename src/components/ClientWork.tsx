import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Globe, Server, Calculator, ChevronLeft, ChevronRight, MousePointer2, MapPin, Quote } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const projects = [
  {
    id: 1,
    icon: Server,
    title: 'Damodaran IT Consultants - Corporate Website',
    location: 'MELBOURNE, Australia 🇦🇺',
    description: 'Clean, professional website for an IT consulting firm specializing in software development, data analytics, cybersecurity, and infrastructure support. Designed to present their expertise and drive client inquiries.',
    features: ['Corporate Website', 'IT Services', 'Payment Gateway Integration', 'Professional Design'],
    images: ['/damodaran1.png', '/damodaran2.png'], 
  },
  {
    id: 2,
    icon: Globe,
    title: 'Infosoft Technologies - IT Services Website',
    location: 'MELBOURNE, Australia 🇦🇺',
    description: 'Professional website for an IT consulting firm offering cloud computing, data management, and cybersecurity services. Built to clearly showcase their service offerings and make it easy for businesses to connect with them.',
    features: ['Business Website', 'Service Showcase', 'Contact Integration', 'Professional Design'],
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

const testimonials = [
  {
    quote: "Swagath delivered exactly what we needed. The website looks professional and we've already received several inquiries through it. Great communication throughout the project.",
    author: "Business Owner",
    location: "Melbourne, Australia"
  },
  {
    quote: "Fast, clean work and very responsive to feedback. Highly recommend for anyone looking for a reliable developer who understands business needs.",
    author: "IT Services Client",
    location: "Australia"
  }
];

export default function ClientWork() {
  const ref = useRef(null);
  const testimonialsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  
  // Projects carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  // Testimonials carousel state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonialTouchStart, setTestimonialTouchStart] = useState<number | null>(null);

  // Projects carousel handlers
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

  // Testimonials carousel handlers
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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
      {/* Projects Section */}
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
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef} className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                What Clients Say
              </h3>
              {/* Mobile indicators */}
              <div className="flex md:hidden items-center gap-4">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 transition-all duration-300 rounded-full ${currentTestimonialIndex === i ? 'w-8 bg-black' : 'w-2 bg-gray-200'}`} 
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-400 animate-pulse">
                  <MousePointer2 size={14} />
                  <span>Swipe</span>
                </div>
              </div>
            </div>

            {/* Desktop navigation buttons */}
            <div className="hidden md:flex gap-4">
              <button onClick={prevTestimonial} className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTestimonial} className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative touch-pan-y overflow-hidden" onTouchStart={handleTestimonialTouchStart} onTouchEnd={handleTestimonialTouchEnd}>
          <motion.div 
            className="flex gap-6 md:gap-8 transition-transform duration-500 ease-out"
            animate={{ x: `-${currentTestimonialIndex * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 50)}%` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full md:min-w-[calc(50%-16px)]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-[2rem] p-8 md:p-10 shadow-md border border-gray-100 hover:shadow-xl transition-all select-none"
                >
                  <Quote size={32} className="text-gray-300 mb-6" />
                  <p className="text-lg md:text-xl text-[#121212] leading-relaxed mb-8 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-100 pt-6">
                    <p className="font-semibold text-[#121212] mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#475569]">
                      {testimonial.location}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
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
