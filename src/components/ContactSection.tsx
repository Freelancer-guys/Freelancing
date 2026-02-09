import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ContactSectionProps {
  onContactClick: () => void;
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F5F7]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: 'Georgia, serif' }}>
            Get in Touch
          </h2>
          <p className="text-xl text-[#475569] mb-12 tracking-wide" style={{ letterSpacing: '0.05em' }}>
            Have a project in mind? Let's build something great together.
          </p>
          <motion.button
            onClick={onContactClick}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-10 py-4 bg-[#121212] text-white rounded-full font-medium tracking-wide hover:bg-[#2a2a2a] transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ letterSpacing: '0.05em' }}
          >
            Open Contact Form
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
