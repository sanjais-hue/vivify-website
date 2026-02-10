
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiPhone, HiPlay } from 'react-icons/hi';

interface HeroSectionProps {
  scrollToContact: (service: string, message: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContact }) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop',
      title: 'Safety Toolbox Platform',
      subtitle: 'Workplace Safety & Compliance',
      description: 'Complete digital safety management with training, audits, incident reporting, and real-time monitoring. Available on Web & Mobile.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop',
      title: 'Employee Hub (HRMS)',
      subtitle: 'HR Management System',
      description: 'Streamline onboarding, payroll, leave management, and employee self-service. Complete HR solution for modern businesses.'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop',
      title: 'Enterprise ERP System',
      subtitle: 'Business Resource Planning',
      description: 'Centralized management for inventory, accounts, purchase, and sales operations with real-time data tracking.'
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop',
      title: 'Reimbursement System',
      subtitle: 'Expense Management',
      description: 'Digital expense claim management with faster approvals, improved accuracy, and reduced administrative workload.'
    },
    {
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop',
      title: 'E-Commerce Solutions',
      subtitle: 'Custom Online Stores',
      description: 'Full-featured e-commerce platforms with secure payments, product catalogs, and order management.'
    },
    {
      image: 'https://i.postimg.cc/Hs8zJggC/CCTV.jpg',
      title: 'Professional CCTV Surveillance',
      subtitle: 'Security Systems',
      description: 'Advanced surveillance systems with HD cameras, night vision, and remote monitoring for complete security coverage.'
    },
    {
      image: 'https://i.postimg.cc/c1bT4JVW/ACS.jpg',
      title: 'Robust Access Control',
      subtitle: 'Access Solutions',
      description: 'Secure entry management with biometric, RFID, and smart card systems for controlled access.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestConsultation = () => {
    scrollToContact(
      'Consultation Request',
      'I would like to request a free consultation to discuss my requirements for custom software development, mobile applications, and IT solutions. Please contact me at your earliest convenience.'
    );
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a0f1c]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(39, 50, 102, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(39, 50, 102, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c] via-[#0a0f1c]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-[#0a0f1c]/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#273266]/20 to-transparent" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Rotating Ring */}
        <motion.div
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="600" height="600" viewBox="0 0 600 600" className="opacity-10">
            <circle cx="300" cy="300" r="280" stroke="#EC2A2F" strokeWidth="1" fill="none" strokeDasharray="20 10" />
            <circle cx="300" cy="300" r="250" stroke="#273266" strokeWidth="1" fill="none" />
            <circle cx="300" cy="300" r="220" stroke="#EC2A2F" strokeWidth="0.5" fill="none" strokeDasharray="5 15" />
          </svg>
        </motion.div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#EC2A2F]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#273266]/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Tech Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20">
          <motion.line
            x1="0" y1="30%" x2="100%" y2="30%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          />
          <motion.line
            x1="0" y1="70%" x2="100%" y2="70%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', delay: 1 }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#EC2A2F" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 text-white">
              {/* Badge removed as requested */}

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
                  <motion.span
                    key={currentSlide}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 drop-shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {slides[currentSlide].title}
                  </motion.span>
                  <motion.span
                    key={`sub-${currentSlide}`}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EC2A2F] to-[#ff6b6b] drop-shadow-2xl text-2xl sm:text-3xl lg:text-4xl mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.span>
                </h1>
              </motion.div>

              {/* Tagline - Updated with user's chosen slogans */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#EC2A2F] to-transparent" />
                  <div>
                    <p className="text-xl sm:text-2xl font-light leading-relaxed">
                      <span className="font-bold text-white">Where Innovation Meets Intelligence</span>
                      <span className="text-white/60"> — </span>
                    </p>
                    <p className="text-xl sm:text-2xl font-light leading-relaxed">
                      <span className="text-white/60">And </span>
                      <span className="font-bold text-[#EC2A2F]">Ideas Become Reality</span>
                      <span className="text-white/60">.</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                key={`desc-${currentSlide}`}
                className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Service Icons Removed */}

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.button
                  className="group relative px-8 py-4 bg-[#EC2A2F] text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-[#EC2A2F]/30"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(236, 42, 47, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRequestConsultation}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#EC2A2F] to-[#ff4757] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-3">
                    <HiPhone className="w-5 h-5" />
                    <span>Get Free Consultation</span>
                    <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  className="group px-8 py-4 bg-white/5 backdrop-blur-xl text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('products')}
                >
                  <span className="flex items-center gap-3">
                    <HiPlay className="w-5 h-5 text-[#EC2A2F]" />
                    <span>Explore Solutions</span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Contact Info Bar Removed */}
            </div>

            {/* Right Content - 5 columns */}
            <motion.div
              className="lg:col-span-5 hidden lg:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative">
                {/* Main Image Card */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-[4/5] relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide}
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                      />
                    </AnimatePresence>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#273266]/50 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <p className="text-[#EC2A2F] text-sm font-semibold mb-2 uppercase tracking-wider">
                          {slides[currentSlide].subtitle}
                        </p>
                        <h3 className="text-white text-2xl font-bold">
                          {slides[currentSlide].title}
                        </h3>
                      </motion.div>
                    </div>

                    {/* Decorative Border */}
                    <div className="absolute inset-0 border-2 border-white/10 rounded-3xl" />
                    <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#EC2A2F]/50 rounded-tr-2xl" />
                    <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#EC2A2F]/50 rounded-bl-2xl" />
                  </div>
                </motion.div>

                {/* Floating Card - Staffs - Top Right */}
                <motion.div
                  className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-2xl z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#273266] rounded-lg flex items-center justify-center">
                      <span className="text-xl font-black text-white">265</span>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#273266]">Staffs</p>
                      <p className="text-xs text-gray-500">Across Worldwide</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card - Awards - Middle Right */}
                <motion.div
                  className="absolute top-32 right-4 bg-[#273266] rounded-xl p-4 shadow-2xl z-10"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center text-white">
                    <p className="text-2xl font-bold">112</p>
                    <p className="text-xs opacity-70">Awards Winning</p>
                  </div>
                </motion.div>

                {/* Floating Card - Customers - Below Awards on Right */}
                <motion.div
                  className="absolute top-60 right-4 bg-gradient-to-br from-[#EC2A2F] to-[#ff4757] rounded-xl p-4 shadow-2xl z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center text-white">
                    <p className="text-2xl font-black">359</p>
                    <p className="text-xs font-medium opacity-90">Satisfied Customers</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
