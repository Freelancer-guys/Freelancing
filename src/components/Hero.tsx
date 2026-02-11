import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react'; // Added for the badge icon

interface HeroProps {
  onContactClick: () => void;
  onAboutMeClick: () => void;
}

export default function Hero({ onContactClick, onAboutMeClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const ySwagath = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yReddy = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [0.12, 0]);

  return (
    <div id="hero" ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#F5F5F7] py-20 overflow-hidden">
      
      {/* Background SWAGATH */}
      <motion.div
        style={{ y: ySwagath, opacity: opacityText }}
        className="relative z-0 -mb-[3vw] sm:-mb-[2vw] mr-[12vw] pointer-events-none select-none"
      >
        <h1 className="text-[14vw] sm:text-[8vw] font-bold tracking-tighter leading-none text-[#121212] uppercase"
            style={{ fontFamily: 'Georgia, serif' }}>
          SWAGATH
        </h1>
      </motion.div>

      {/* Foreground Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[92%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-4"
      >
        <div className="backdrop-blur-3xl bg-white/90 border border-white/50 rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] relative overflow-hidden">
          
          {/* New Floating Badge: 10+ Projects Delivered */}
          {/* Floating Badge - Changed phrasing to avoid "10+" repetition */}
          <div className="flex items-center gap-2 mb-8 px-4 py-2 bg-[#F5F5F7] w-fit rounded-full border border-gray-100 shadow-sm">
            <CheckCircle2 size={16} className="text-[#121212]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#121212]">
              Proven Results • 10+ Projects Deliveried
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] tracking-tight mb-10 text-[#121212]"
              style={{ fontFamily: 'Georgia, serif' }}>
            I build professional websites and automation systems that <span className="italic font-normal">save you 40+ hours per month</span> and bring you more customers.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => document.getElementById('client-work')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-[#121212] text-white rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              View Client Work
            </button>
            <button
              onClick={onAboutMeClick}
              className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-md text-[#121212] rounded-full font-medium border border-[#121212]/10 hover:bg-white transition-all duration-300"
            >
              About Me
            </button>
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-md text-[#121212] rounded-full font-medium border border-[#121212]/10 hover:bg-white transition-all duration-300"
            >
              Contact Now
            </button>
          </div>
        </div>
      </motion.div>

      {/* Background REDDY */}
      <motion.div
        style={{ y: yReddy, opacity: opacityText }}
        className="relative z-0 -mt-[3vw] sm:-mt-[2vw] ml-[12vw] pointer-events-none select-none"
      >
        <h1 className="text-[14vw] sm:text-[8vw] font-bold tracking-tighter leading-none text-[#121212] uppercase"
            style={{ fontFamily: 'Georgia, serif' }}>
          REDDY
        </h1>
      </motion.div>

    </div>
  );
}