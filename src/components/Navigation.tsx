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
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const handleNavClick = (id: string) => {
    if (id === 'vision-mission') {
      onPageChange('vision-mission');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onPageChange('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: HiHome },
    { id: 'products', label: 'Products', icon: HiDatabase },
    { id: 'services', label: 'Services', icon: HiLightningBolt },
    { id: 'about', label: 'About', icon: HiInformationCircle },
    { id: 'vision-mission', label: 'Vision & Mission', icon: HiLightBulb },
    { id: 'contact', label: 'Contact', icon: HiMail },
  ];

  const dockItems = navItems.map((item) => ({
    icon: <item.icon size={22} />,
    label: item.label,
    onClick: () => handleNavClick(item.id),
  }));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
          }`}
      >
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-[#EC2A2F] transition-all duration-300 pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <motion.div
              className={`flex items-center gap-2 cursor-pointer ${isScrolled ? 'text-[#273266]' : 'text-white'}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('home')}
            >
              <div className="w-10 h-10 bg-[#273266] rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/icon-192.webp" alt="Vivify Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase px-2">VIVIFY</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors relative group ${(activePage === 'home' && activeSection === item.id) || activePage === item.id
                    ? 'text-[#EC2A2F]'
                    : isScrolled ? 'text-[#273266]/70 hover:text-[#EC2A2F]' : 'text-white/80 hover:text-white'
                    }`}
                >
                  {item.label}
                  {((activePage === 'home' && activeSection === item.id) || activePage === item.id) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#EC2A2F]"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-[#273266] hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-6 p-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-black uppercase tracking-tighter ${(activePage === 'home' && activeSection === item.id) || activePage === item.id
                    ? 'text-[#EC2A2F]'
                    : 'text-[#273266]'
                    }`}
                >
                  {item.label}
                </button>
              ))}
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
