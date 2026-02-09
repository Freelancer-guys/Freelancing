import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';

interface ServicesProps {
  onContactClick: () => void;
}

const packages = [
  {
    id: 1,
    name: 'The Core Presence',
    tagline: 'Foundation for Growth',
    features: [
      'High-Speed Architecture',
      'Automated Email Notification Systems',
      'Payment Gateway Integration',
      'Custom Domain & Deployment'
    ],
    highlight: false
  },
  {
    id: 2,
    name: 'The AI Growth Engine',
    tagline: 'Complete Automation Suite',
    features: [
      'High-Speed Architecture',
      'Automated Email Notification Systems',
      'Payment Gateway Integration',
      'Custom Domain & Deployment',
      '24/7 AI Receptionist trained on business-specific data',
      'Automated Lead Capture & Qualification',
      'Intelligent Business Logic Integration'
    ],
    highlight: true
  }
];

export default function Services({ onContactClick }: ServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: 'Georgia, serif' }}>
            Services
          </h2>
          <p className="text-xl text-[#475569] tracking-wide" style={{ letterSpacing: '0.05em' }}>
            Productized solutions that scale with your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              {pkg.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -top-4 left-8 bg-[#121212] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg"
                  style={{ letterSpacing: '0.05em' }}
                >
                  <Sparkles className="w-4 h-4" />
                  MOST POPULAR
                </motion.div>
              )}

              <div className={`rounded-3xl p-10 h-full ${
                pkg.highlight
                  ? 'bg-[#121212] text-white shadow-2xl border-2 border-[#121212]'
                  : 'bg-[#F5F5F7] text-[#121212] shadow-lg border border-gray-200'
              }`}>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-2 tracking-tight"
                      style={{ fontFamily: 'Georgia, serif' }}>
                    {pkg.name}
                  </h3>
                  <p className={`text-lg tracking-wide ${
                    pkg.highlight ? 'text-gray-300' : 'text-[#475569]'
                  }`} style={{ letterSpacing: '0.05em' }}>
                    {pkg.tagline}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        pkg.highlight ? 'bg-white/20' : 'bg-[#121212]/10'
                      }`}>
                        <Check className={`w-4 h-4 ${
                          pkg.highlight ? 'text-white' : 'text-[#121212]'
                        }`} />
                      </div>
                      <span className={`leading-relaxed ${
                        pkg.highlight && idx >= 4 ? 'font-semibold' : ''
                      }`} style={{ letterSpacing: '0.02em' }}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <button
                  onClick={onContactClick}
                  className={`w-full px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                    pkg.highlight
                      ? 'bg-white text-[#121212] hover:bg-gray-100'
                      : 'bg-[#121212] text-white hover:bg-[#2a2a2a]'
                  }`}
                  style={{ letterSpacing: '0.05em' }}
                >
                  Contact for this package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
