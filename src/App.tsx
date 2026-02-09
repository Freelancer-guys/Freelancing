import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientWork from './components/ClientWork';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';
import WhyMe from './components/WhyMe';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#121212]">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <Hero
        onContactClick={() => setIsContactOpen(true)}
        onAboutMeClick={() => setIsAboutOpen(true)}
      />
      <WhyMe />
      <ClientWork />
      <Services onContactClick={() => setIsContactOpen(true)} />
      <ContactSection onContactClick={() => setIsContactOpen(true)} />
      <Footer />

      <button
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-8 left-8 w-14 h-14 bg-[#121212] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Contact Now"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}

export default App;
