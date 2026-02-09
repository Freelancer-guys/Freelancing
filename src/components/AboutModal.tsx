import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50 bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between z-10">
              <h3 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                About Me
              </h3>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-[#475569] leading-relaxed" style={{ letterSpacing: '0.02em' }}>
              <p>
                Full Stack Developer & AI Integration Specialist with hands-on experience in building scalable, 
                automated, and cloud-native software systems.
              </p>
              <p>
                I specialize in creating high-performance digital platforms that merge seamless design with 
                AI-driven business logic. From automated workflows and payment integrations to custom 
                domain deployments and 24/7 AI receptionists - I build solutions that automate your growth.
              </p>
              <p>
                Passionate about turning complex requirements into elegant, maintainable systems. 
                Available for freelance projects and collaborations.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
