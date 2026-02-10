import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HiUsers, HiServer, HiLightBulb, HiClipboardList, HiShieldCheck, HiCode } from 'react-icons/hi';
import CountUp from './CountUp';

const services = [
  {
    id: 1,
    title: 'Software Solutions',
    shortTitle: 'Software',
    icon: HiCode,
    description: 'Custom software development and digital transformation solutions tailored to your business needs. We build scalable applications for modern enterprises.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    features: [
      'Custom Application Development',
      'Web & Mobile Solutions',
      'Cloud-Based Software',
      'System Integration',
      'Software Maintenance & Support',
      'Digital Transformation'
    ]
  },
  {
    id: 2,
    title: 'IT Consultancy Services',
    shortTitle: 'Consultancy',
    icon: HiLightBulb,
    description: 'Best-in-class consulting, IT solutions, and services to assist customers in achieving their business goals and digital transformation.',
    image: 'https://i.postimg.cc/MG3BtDMP/IT_consultancy_services.jpg',
    features: [
      'Strategic IT Planning',
      'Technology Assessment',
      'Digital Transformation',
      'Solution Architecture',
      'Vendor Selection',
      'Implementation Support'
    ]
  },
  {
    id: 3,
    title: 'Technical Manpower Outsourcing',
    shortTitle: 'Manpower',
    icon: HiUsers,
    description: 'Providing skilled technical manpower on deputation in a fast-paced, ever-changing market according to the expectations of companies.',
    image: 'https://i.postimg.cc/vm2nXzg2/Technical_Manpower.jpg',
    features: [
      'Skilled Technicians & Engineers',
      'Flexible Deputation Terms',
      'Quick Deployment',
      'Industry-Specific Expertise',
      'Trained Professionals',
      'Cost-Effective Solutions'
    ]
  },
  {
    id: 4,
    title: 'IT Infrastructure Services',
    shortTitle: 'IT Infrastructure',
    icon: HiServer,
    description: 'Comprehensive operations & maintenance services, including minor maintenance and meticulous care of your IT assets and infrastructure.',
    image: 'https://i.postimg.cc/qhgr73yJ/IT-infrastructure.jpg',
    features: [
      'Network Management',
      'Server Maintenance',
      'Hardware Support',
      'System Monitoring',
      'Asset Management',
      'Regular Maintenance'
    ]
  },
  {
    id: 5,
    title: 'Project Management',
    shortTitle: 'Projects',
    icon: HiClipboardList,
    description: 'Scalable resources and personalised solutions that add real value to clients through effective project planning and execution.',
    image: 'https://i.postimg.cc/1z7FMHnj/Project_Management.jpg',
    features: [
      'End-to-End Management',
      'Resource Allocation',
      'Timeline Management',
      'Quality Assurance',
      'Risk Mitigation',
      'Progress Reporting'
    ]
  },
  {
    id: 6,
    title: 'Security Equipment Consultancy',
    shortTitle: 'Security',
    icon: HiShieldCheck,
    description: 'Expert threat assessments, policy review, master planning, and secure environment consulting for comprehensive security solutions.',
    image: 'https://i.postimg.cc/SK19Vr2Z/Security_service_consultancy.jpg',
    features: [
      'Threat Assessment',
      'Security Audit',
      'Policy Development',
      'Master Planning',
      'System Design',
      'Compliance Review'
    ]
  }
];

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-[#273266]/10 text-[#273266] font-semibold rounded-full text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#273266] mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical services and solutions tailored to meet
            your business requirements with excellence.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-4 sticky top-24">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.button
                    key={service.id}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all mb-2 ${activeService === index
                        ? 'bg-[#273266] text-white shadow-lg'
                        : 'bg-white text-[#273266] hover:bg-gray-100'
                      }`}
                    onClick={() => setActiveService(index)}
                    whileHover={{ x: activeService === index ? 0 : 5 }}
                  >
                    <div className={`p-3 rounded-xl ${activeService === index ? 'bg-[#EC2A2F]' : 'bg-[#273266]/10'
                      }`}>
                      <IconComponent className={`w-6 h-6 ${activeService === index ? 'text-white' : 'text-[#273266]'
                        }`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{service.shortTitle}</h4>
                      <p className={`text-sm ${activeService === index ? 'text-white/70' : 'text-gray-500'
                        }`}>
                        View Details
                      </p>
                    </div>
                    <svg
                      className={`w-5 h-5 ml-auto transition-transform ${activeService === index ? 'rotate-0' : '-rotate-90'
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#273266] via-[#273266]/50 to-transparent" />

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#EC2A2F] rounded-lg">
                        {React.createElement(services[activeService].icon, {
                          className: "w-6 h-6 text-white"
                        })}
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                        Service {activeService + 1} of {services.length}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {services[activeService].title}
                    </h3>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 text-lg mb-6">
                    {services[activeService].description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {services[activeService].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-[#EC2A2F]/10 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#EC2A2F]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-[#273266] font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      className="px-6 py-3 bg-[#EC2A2F] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request This Service
                    </motion.button>
                    <motion.button
                      className="px-6 py-3 border-2 border-[#273266] text-[#273266] font-semibold rounded-xl hover:bg-[#273266] hover:text-white transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Free Quote
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          ref={statsRef}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: 500, suffix: '+', label: 'Projects Delivered' },
            { value: 100, suffix: '+', label: 'Enterprise Clients' },
            { value: 20, suffix: '+', label: 'Years Experience' },
            { value: 98, suffix: '%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-[#273266] mb-1">
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  startCounting={isStatsInView}
                />
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
