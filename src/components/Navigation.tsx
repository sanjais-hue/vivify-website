import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiDatabase, HiLightningBolt, HiInformationCircle, HiMail, HiMenu, HiX } from 'react-icons/hi';
import Dock from './Dock';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));

      // Update active section based on scroll
      const sections = ['home', 'products', 'services', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: HiHome },
    { id: 'products', label: 'Products', icon: HiDatabase },
    { id: 'services', label: 'Services', icon: HiLightningBolt },
    { id: 'about', label: 'About', icon: HiInformationCircle },
    { id: 'contact', label: 'Contact', icon: HiMail },
  ];

  const dockItems = navItems.map((item) => ({
    icon: <item.icon size={22} />,
    label: item.label,
    onClick: () => scrollToSection(item.id),
    isActive: activeSection === item.id,
  }));

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-4 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollToSection('home')}
            >
              <img
                src="/vivify-logo.png"
                alt="VIVIFY TECHNOCRATS"
                className="h-12 md:h-16 object-contain"
              />
              <img
                src="/ISO.webp"
                alt="ISO Certified"
                className="h-10 md:h-12 object-contain"
              />
            </motion.div>

            {/* Desktop Dock Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <Dock
                items={dockItems}
                panelHeight={56}
                baseItemSize={44}
                magnification={58}
              />
            </div>

            {/* CTA Button - Desktop */}
            <motion.button
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#EC2A2F] text-white font-semibold rounded-xl shadow-lg shadow-[#EC2A2F]/25 hover:shadow-xl hover:shadow-[#EC2A2F]/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6 text-[#273266]" />
              ) : (
                <HiMenu className="w-6 h-6 text-[#273266]" />
              )}
            </button>
          </div>
        </div>

        {/* Scroll Progress */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#273266] to-[#EC2A2F]"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', duration: 0.4 }}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${activeSection === item.id
                      ? 'bg-[#273266] text-white'
                      : 'text-[#273266] hover:bg-gray-100'
                      }`}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="font-semibold text-lg">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              <motion.button
                className="w-full mt-6 py-4 bg-[#EC2A2F] text-white font-semibold rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('contact')}
              >
                Get Free Quote
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
