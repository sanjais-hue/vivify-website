import { useState } from 'react';
import Navigation from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import TrustedClients from './components/TrustedClients';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { ProductsSection } from './components/ProductsSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import VisionMissionPage from './pages/VisionMissionPage';

export function App() {
  const [activePage, setActivePage] = useState<'home' | 'vision-mission'>('home');
  const [contactAutoFill, setContactAutoFill] = useState<{ service?: string; message?: string }>({});

  const scrollToContact = (service: string, message: string) => {
    setActivePage('home'); // Ensure we are on home page where contact form is
    setContactAutoFill({ service, message });
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-[#273266] overflow-x-hidden">
      <Navigation onPageChange={setActivePage} activePage={activePage} />
      <main>
        {activePage === 'home' ? (
          <>
            <HeroSection scrollToContact={scrollToContact} />
            <TrustedClients />
            <ProductsSection scrollToContact={scrollToContact} />
            <FeaturesShowcase scrollToContact={scrollToContact} />
            <AboutSection onVisionMission={() => setActivePage('vision-mission')} />
            <TestimonialsSection />
            <ContactSection
              autoFillService={contactAutoFill.service}
              autoFillMessage={contactAutoFill.message}
            />
          </>
        ) : (
          <VisionMissionPage onBack={() => setActivePage('home')} />
        )}
      </main>
      <Footer />
    </div>
  );
}

