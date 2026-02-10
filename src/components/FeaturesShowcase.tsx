import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiShieldCheck, HiCog, HiServer, HiUsers, HiLocationMarker, HiLightningBolt, HiCheckCircle, HiX } from 'react-icons/hi';

export const FeaturesShowcase: React.FC<{ scrollToContact?: (service: string, message: string) => void }> = ({ scrollToContact }) => {
  const [activeWing, setActiveWing] = useState<'software' | 'hardware' | null>(null);
  const [showModal, setShowModal] = useState<'software' | 'hardware' | null>(null);

  const softwareDetails = [
    {
      name: 'ERP Systems',
      icon: HiServer,
      description: 'Comprehensive enterprise resource planning for inventory, accounts, purchase, and sales.',
      link: 'https://vivifysoft.in/ERP/#/Login',
      watermark: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop'
    },
    {
      name: 'HR Management',
      icon: HiUsers,
      description: 'Complete HR management with onboarding, payroll, leave management, and employee self-service.',
      link: 'https://vivifysoft.in/employeehub/#/Login',
      watermark: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop'
    },
    {
      name: 'Safety Management',
      icon: HiShieldCheck,
      description: 'Digital safety training, audits, incident reporting, and real-time monitoring.',
      link: 'https://vivifysoft.in/safety/#/AdminLogin',
      watermark: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop'
    },
    {
      name: 'Aggregator Expense Reimbursement',
      icon: HiLightningBolt,
      description: 'Digital expense claim management with faster approvals and improved accuracy.',
      link: 'https://vivifysoft.in/Home.aspx',
      watermark: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop'
    },
    {
      name: 'E-Commerce Platforms',
      icon: HiCode,
      description: 'Custom online stores with product catalogs, secure payments, and order management.',
      link: 'http://harisilks.com/',
      watermark: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop'
    },
    {
      name: 'Custom Development',
      icon: HiCode,
      description: 'Tailored software solutions built specifically for your unique business requirements.',
      link: null,
      watermark: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop'
    },
  ];

  const hardwareDetails = [
    {
      name: 'CCTV Surveillance',
      icon: HiShieldCheck,
      description: 'HD/4K cameras with night vision, remote monitoring, and AI-powered analytics.',
      link: null,
      watermark: '/LOGS-WEB/CCTV.jpeg'
    },
    {
      name: 'Access Control Systems',
      icon: HiLocationMarker,
      description: 'Biometric and card-based entry systems with real-time monitoring.',
      link: null,
      watermark: '/LOGS-WEB/ACS.jpeg'
    },
    {
      name: 'Fire Alarm Systems',
      icon: HiLightningBolt,
      description: 'Advanced fire detection and alarm systems for complete safety.',
      link: null,
      watermark: '/LOGS-WEB/Firealarm.jpeg'
    },
    {
      name: 'Conveyor Systems',
      icon: HiCog,
      description: 'Powered and gravity roller conveyors for industrial automation.',
      link: null,
      watermark: '/LOGS-WEB/Conveyor.jpeg'
    },
    {
      name: 'IT Infrastructure',
      icon: HiServer,
      description: 'Complete networking, cabling, and system integration services.',
      link: null,
      watermark: '/LOGS-WEB/Generator.jpeg'
    },
  ];

  return (
    <>
      <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-[#273266]/10 text-[#273266] font-semibold rounded-full text-sm mb-3">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#273266] mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions across two specialized wings
            </p>
          </motion.div>

          {/* Two-Wing Split Hero */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* SOFTWARE WING */}
            <motion.div
              className={`relative bg-gradient-to-br from-[#273266] to-[#1a2244] rounded-3xl p-8 overflow-hidden cursor-pointer transition-all ${activeWing === 'software' ? 'ring-4 ring-[#EC2A2F] scale-[1.02]' : ''
                }`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveWing('software')}
              onMouseLeave={() => setActiveWing(null)}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 text-white text-9xl">&lt;/&gt;</div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <HiCode className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Software Wing</h3>
                    <p className="text-white/80 text-sm">Digital Transformation</p>
                  </div>
                </div>

                <p className="text-white/90 mb-6">
                  Custom ERP, HR Management, E-Commerce platforms, and enterprise software tailored for modern business needs.
                </p>

                <div className="space-y-2 mb-6">
                  {softwareDetails.slice(0, 5).map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-white/90"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <HiCheckCircle className="w-5 h-5 text-[#EC2A2F]" />
                      <span>{service.name}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={() => setShowModal('software')}
                  className="w-full bg-white text-[#273266] px-6 py-3 rounded-xl font-semibold hover:bg-[#EC2A2F] hover:text-white transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Software Solutions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>

                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 bg-[#EC2A2F] text-white text-xs font-semibold rounded-full">
                    6 Software Solutions
                  </span>
                </div>
              </div>
            </motion.div>

            {/* HARDWARE WING */}
            <motion.div
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 overflow-hidden cursor-pointer transition-all ${activeWing === 'hardware' ? 'ring-4 ring-[#EC2A2F] scale-[1.02]' : ''
                }`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveWing('hardware')}
              onMouseLeave={() => setActiveWing(null)}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 text-white text-9xl">🔧</div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <HiCog className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Hardware Wing</h3>
                    <p className="text-white/80 text-sm">Security & Automation</p>
                  </div>
                </div>

                <p className="text-white/90 mb-6">
                  State-of-the-art security systems, access control, fire safety, and industrial automation solutions.
                </p>

                <div className="space-y-2 mb-6">
                  {hardwareDetails.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-white/90"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <HiCheckCircle className="w-5 h-5 text-[#EC2A2F]" />
                      <span>{service.name}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={() => setShowModal('hardware')}
                  className="w-full bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-[#EC2A2F] hover:text-white transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Hardware Solutions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>

                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 bg-[#EC2A2F] text-white text-xs font-semibold rounded-full">
                    5 Hardware Products
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-6">
              Not sure which wing fits your needs? We'll help you choose the right solution.
            </p>
            <motion.button
              onClick={() => scrollToContact?.('General Inquiry', 'I would like a free consultation to discuss which solution best fits my business needs.')}
              className="px-8 py-4 bg-[#EC2A2F] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Software Modal */}
      <AnimatePresence>
        {showModal === 'software' && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#273266] rounded-xl flex items-center justify-center">
                    <HiCode className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#273266]">Software Solutions</h3>
                    <p className="text-gray-600 text-sm">Our digital transformation offerings</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(null)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <HiX className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {softwareDetails.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={index}
                      className="relative p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Project watermark */}
                      <div
                        className="absolute inset-0 opacity-[0.25] group-hover:opacity-[0.35] transition-opacity pointer-events-none"
                        style={{
                          backgroundImage: `url(${service.watermark})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#273266]/10 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-[#273266]" />
                          </div>
                          <h4 className="font-bold text-[#273266]">{service.name}</h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowModal(null);
                            scrollToContact?.('Quote Request', `I would like to request a quote for ${service.name}.\n\n${service.description}\n\nPlease provide pricing details, implementation timeline, and customization options.`);
                          }}
                          className="inline-flex items-center gap-1 text-[#EC2A2F] font-semibold text-sm hover:gap-2 transition-all cursor-pointer"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Request Quote
                        </button>
                      </div>
                    </motion.div>
                  );
                })}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hardware Modal */}
      <AnimatePresence>
        {showModal === 'hardware' && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                    <HiCog className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#273266]">Hardware Solutions</h3>
                    <p className="text-gray-600 text-sm">Security & automation products</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(null)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <HiX className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {hardwareDetails.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={index}
                      className="relative p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Project watermark */}
                      <div
                        className="absolute inset-0 opacity-[0.25] group-hover:opacity-[0.35] transition-opacity pointer-events-none"
                        style={{
                          backgroundImage: `url(${service.watermark})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gray-800/10 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-gray-800" />
                          </div>
                          <h4 className="font-bold text-[#273266]">{service.name}</h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowModal(null);
                            scrollToContact?.('Quote Request', `I would like to request a quote for ${service.name}.\n\n${service.description}\n\nPlease provide pricing details, installation details, and customization options.`);
                          }}
                          className="inline-flex items-center gap-1 text-[#EC2A2F] font-semibold text-sm hover:gap-2 transition-all cursor-pointer"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Request Quote
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturesShowcase;
