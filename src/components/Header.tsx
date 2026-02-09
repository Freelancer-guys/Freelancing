import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'client-work', label: 'Client Work' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (id === 'contact') {
      onContactClick();
      setIsOpen(false);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          {/* Hamburger - Mobile & Desktop */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile & Desktop Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:bg-black/20"
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 right-6 left-6 md:top-24 md:left-auto md:right-6 md:w-64 bg-white rounded-2xl shadow-2xl py-4 z-50 border border-gray-100"
            >
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="w-full px-6 py-3 text-left text-[#121212] hover:bg-[#F5F5F7] transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                  style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.03em' }}
                >
                  {s.label}
                </button>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
