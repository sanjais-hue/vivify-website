import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiDatabase, HiLightningBolt, HiInformationCircle, HiMail, HiMenu, HiX, HiLightBulb } from 'react-icons/hi';
import Dock from './Dock';

interface NavigationProps {
  onPageChange: (page: 'home' | 'vision-mission') => void;
  activePage: 'home' | 'vision-mission';
}

const Navigation: React.FC<NavigationProps> = ({ onPageChange, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));

      if (activePage === 'home') {
        const sections = ['contact', 'about', 'services', 'products', 'home'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);

    if (id === 'vision-mission') {
      onPageChange('vision-mission');
      setActiveSection('vision-mission');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'home') {
      if (activePage !== 'home') {
        onPageChange('home');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setActiveSection('home');
      return;
    }

    // For section-based nav items (products, services, about, contact)
    if (activePage !== 'home') {
      onPageChange('home');
      // Wait for page to render, then scroll
      setTimeout(() => {
        scrollToElement(id);
      }, 300);
    } else {
      scrollToElement(id);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: HiHome },
    { id: 'products', label: 'Products', icon: HiDatabase },
    { id: 'services', label: 'Services', icon: HiLightningBolt },
    { id: 'about', label: 'About', icon: HiInformationCircle },
    { id: 'vision-mission', label: 'Vision & Mission', icon: HiLightBulb },
    { id: 'contact', label: 'Contact', icon: HiMail },
  ];

  const isItemActive = (itemId: string) => {
    if (activePage === 'vision-mission') {
      return itemId === 'vision-mission';
    }
    return activePage === 'home' && activeSection === itemId;
  };

  const dockItems = navItems.map((item) => ({
    icon: <item.icon size={22} />,
    label: item.label,
    onClick: () => handleNavClick(item.id),
    isActive: isItemActive(item.id),
  }));

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 transition-all duration-300"
      >
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#273266] via-[#273266] to-[#EC2A2F] transition-all duration-300 pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-4 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNavClick('home')}
            >
              <img
                src="/vivify-logo.png"
                alt="VIVIFY TECHNOCRATS"
                className="h-12 md:h-14 object-contain brightness-110 contrast-125 mix-blend-multiply"
              />
              <img
                src="/ISO.webp"
                alt="ISO Certified"
                className="h-10 md:h-12 object-contain brightness-110 contrast-125 mix-blend-multiply"
              />
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isItemActive(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${active
                        ? 'text-white bg-[#273266] shadow-lg shadow-[#273266]/30'
                        : 'text-[#273266]/70 hover:text-[#273266] hover:bg-[#273266]/5'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl text-[#273266] hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-4 p-6">
              {navItems.map((item) => {
                const active = isItemActive(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-center text-xl font-black uppercase tracking-tighter py-3 rounded-xl transition-all duration-300 ${active
                      ? 'text-white bg-[#EC2A2F] shadow-lg shadow-[#EC2A2F]/30'
                      : 'text-[#273266] hover:bg-gray-50'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Dock - Only visible on scroll and on desktop */}
      <div className="hidden md:block">
        {isScrolled && <Dock items={dockItems} />}
      </div>
    </>
  );
};

export default Navigation;
