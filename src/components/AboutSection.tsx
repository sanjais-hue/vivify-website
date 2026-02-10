import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from './CountUp';
import { HiLightBulb, HiShieldCheck, HiArrowRight, HiStar, HiUserGroup } from 'react-icons/hi';

interface AboutSectionProps {
  onVisionMission?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onVisionMission }) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const achievements = [
    { value: 20, suffix: '', label: 'Years Experience', prefix: '' },
    { value: 100, suffix: '+', label: 'Projects Completed', prefix: '' },
    { value: 100, suffix: '+', label: 'Happy Clients', prefix: '' },
    { value: 24, suffix: '/7', label: 'Support Available', prefix: '' },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'Delivering exceptional quality in every project we undertake.',
      icon: HiStar
    },
    {
      title: 'Innovation',
      description: 'Embracing latest technologies and innovative solutions.',
      icon: HiLightBulb
    },
    {
      title: 'Reliability',
      description: 'Being a trusted partner you can always count on.',
      icon: HiShieldCheck
    },
    {
      title: 'Customer Focus',
      description: 'Your success is our primary goal and motivation.',
      icon: HiUserGroup
    },
  ];

  const expertise = [
    'ERP & HR Management',
    'Inventory Systems',
    'E-Commerce Solutions',
    'Custom Software Dev',
    'IT System Integration',
    'Technical Consultancy',
    'Digital Transformation',
    'Enterprise Applications'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#273266]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EC2A2F]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#273266 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.1 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-[#EC2A2F]/10 text-[#EC2A2F] font-semibold rounded-full text-sm mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#273266] to-[#EC2A2F]">
              Our Story
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Two decades of transforming businesses with cutting-edge electronic solutions, driven by innovation and excellence.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Image Grid */}
          <motion.div
            className="relative will-change-transform"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="rounded-3xl overflow-hidden shadow-2xl aspect-square"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/soft.jpeg"
                  alt="Vivify Soft - Innovation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div className="space-y-6">
                <motion.div
                  className="rounded-3xl overflow-hidden shadow-2xl h-48"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  className="rounded-3xl overflow-hidden shadow-2xl h-48"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/soft-2.jpeg"
                    alt="Vivify Soft - Development"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#273266] to-[#EC2A2F]">20+</div>
              <div className="text-[#273266] font-semibold mt-1">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="will-change-transform"
          >
            {/* Name Origin */}
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-[#273266] mb-6">
                VIVIFY TECHNOCRATS
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our name <span className="text-[#EC2A2F] font-bold">"Vivify"</span> embodies our core philosophy: to bring life, energy, and renewal to businesses through technology. It comes from the Latin meaning
                <span className="text-[#273266] font-semibold"> "rebirth or resurrection"</span>.
              </p>
              <div className="p-6 bg-gradient-to-r from-[#273266] to-[#1a2344] rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
                <p className="text-white font-medium text-xl text-center">
                  "Obsolete to Absolute" — <span className="text-[#EC2A2F] font-bold">Trash into Tower</span>
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <motion.div
                className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#273266]/30 transition-all cursor-pointer relative overflow-hidden h-full"
                whileHover={{ x: 5 }}
                onClick={onVisionMission}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#273266]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#273266]/10 rounded-xl group-hover:bg-[#273266] group-hover:text-white transition-colors">
                      <HiLightBulb className="w-6 h-6 text-[#273266] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-[#273266] text-xl">Our Vision</h4>
                  </div>
                  {onVisionMission && <HiArrowRight className="text-[#273266] group-hover:translate-x-1 transition-transform" />}
                </div>
                <p className="text-gray-600 text-sm italic pl-[4.5rem]">"To be a global leader in providing innovative technology solutions..."</p>
              </motion.div>

              <motion.div
                className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#EC2A2F]/30 transition-all cursor-pointer relative overflow-hidden h-full"
                whileHover={{ x: 5 }}
                onClick={onVisionMission}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#EC2A2F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#EC2A2F]/10 rounded-xl group-hover:bg-[#EC2A2F] group-hover:text-white transition-colors">
                      <HiShieldCheck className="w-6 h-6 text-[#EC2A2F] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-[#EC2A2F] text-xl">Our Mission</h4>
                  </div>
                  {onVisionMission && <HiArrowRight className="text-[#EC2A2F] group-hover:translate-x-1 transition-transform" />}
                </div>
                <p className="text-gray-600 text-sm italic pl-[4.5rem]">"To empower businesses by delivering cutting-edge software and hardware..."</p>
              </motion.div>
            </div>

            {/* Expertise Tags */}
            <div className="mb-10">
              <h4 className="text-[#273266] font-semibold mb-4 uppercase tracking-wider text-sm">Our Expertise</h4>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {expertise.map((item, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-[#EC2A2F] hover:text-[#EC2A2F] hover:shadow-md transition-all cursor-default"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#EC2A2F] to-[#c0151a] text-white font-bold rounded-xl shadow-lg shadow-[#EC2A2F]/30 hover:shadow-xl hover:-translate-y-1 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started with Us
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section with CountUp */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {achievements.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center group hover:border-[#273266]/20 transition-all relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#273266] to-[#EC2A2F] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#273266] to-[#1a2344] mb-2 flex items-center justify-center">
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  startCounting={isStatsInView}
                />
              </div>
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <span className="text-[#EC2A2F] font-semibold tracking-wider uppercase text-sm">Our Philosophy</span>
            <h3 className="text-3xl md:text-5xl font-bold text-[#273266] mt-2">
              Core Values That Drive Us
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl hover:border-transparent transition-all duration-300"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#273266] group-hover:to-[#EC2A2F] transition-all duration-500 shadow-inner">
                    <IconComponent className="w-10 h-10 text-[#273266] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-[#273266] mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
