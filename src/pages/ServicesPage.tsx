import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiShieldCheck, HiCog, HiServer, HiUsers, HiLocationMarker, HiLightningBolt, HiCheckCircle, HiX, HiExternalLink, HiArrowLeft } from 'react-icons/hi';

export const ServicesPage: React.FC = () => {
  const [showModal, setShowModal] = useState<'software' | 'hardware' | null>(null);

  const softwareDetails = [
    { name: 'ERP Systems', icon: HiServer, description: 'Comprehensive enterprise resource planning for inventory, accounts, purchase, and sales.', link: 'https://vivifysoft.in/ERP/#/Login' },
    { name: 'HRMS Platform', icon: HiUsers, description: 'Complete HR management with onboarding, payroll, leave management, and employee self-service.', link: 'https://vivifysoft.in/employeehub/#/Login' },
    { name: 'Safety Management', icon: HiShieldCheck, description: 'Digital safety training, audits, incident reporting, and real-time monitoring.', link: 'https://vivifysoft.in/safety/#/AdminLogin' },
    { name: 'Reimbursement System', icon: HiLightningBolt, description: 'Digital expense claim management with faster approvals and improved accuracy.', link: 'https://vivifysoft.in/Login.aspx' },
    { name: 'E-Commerce Platforms', icon: HiCode, description: 'Custom online stores with product catalogs, secure payments, and order management.', link: 'http://harisilks.com/' },
    { name: 'Custom Development', icon: HiCode, description: 'Tailored software solutions built specifically for your unique business requirements.', link: null },
  ];

  const hardwareDetails = [
    { name: 'CCTV Surveillance', icon: HiShieldCheck, description: 'HD/4K cameras with night vision, remote monitoring, and AI-powered analytics.' },
    { name: 'Access Control Systems', icon: HiLocationMarker, description: 'Biometric and card-based entry systems with real-time monitoring.' },
    { name: 'Fire Alarm Systems', icon: HiLightningBolt, description: 'Advanced fire detection and alarm systems for complete safety.' },
    { name: 'Conveyor Systems', icon: HiCog, description: 'Powered and gravity roller conveyors for industrial automation.' },
    { name: 'IT Infrastructure', icon: HiServer, description: 'Complete networking, cabling, and system integration services.' },
  ];

  const goBack = () => window.history.back();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <motion.button
          onClick={goBack}
          className="mb-8 flex items-center gap-2 text-[#273266] hover:text-[#EC2A2F] font-semibold"
          whileHover={{ x: -5 }}
        >
          <HiArrowLeft className="w-6 h-6" /> Back to Home
        </motion.button>

        {/* Hero Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-2 bg-[#273266]/10 text-[#273266] font-semibold rounded-full text-sm mb-3">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#273266] mb-6">What We Offer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive technology solutions across two specialized wings</p>
        </motion.div>

        {/* Two Wings */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* SOFTWARE */}
          <motion.div className="relative bg-gradient-to-br from-[#273266] to-[#1a2244] rounded-3xl p-10 overflow-hidden group" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} whileHover={{ y: -8 }}>
            <div className="absolute inset-0 opacity-5"><div className="absolute top-10 right-10 text-white text-9xl">&lt;/&gt;</div></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HiCode className="w-10 h-10 text-white" />
                </div>
                <div><h2 className="text-4xl font-bold text-white">Software Wing</h2><p className="text-white/80">Digital Transformation</p></div>
              </div>
              <p className="text-white/90 text-lg mb-8">Custom ERP, HRMS, E-Commerce platforms, and enterprise software.</p>
              <div className="space-y-3 mb-8">
                {softwareDetails.slice(0, 5).map((s, i) => (<motion.div key={i} className="flex items-center gap-3 text-white/90" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}><HiCheckCircle className="w-6 h-6 text-[#EC2A2F]" /><span className="text-lg">{s.name}</span></motion.div>))}
              </div>
              <motion.button onClick={() => setShowModal('software')} className="w-full bg-white text-[#273266] px-8 py-4 rounded-xl font-bold hover:bg-[#EC2A2F] hover:text-white transition-all flex items-center justify-center gap-2 text-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                View All Software Solutions →
              </motion.button>
            </div>
          </motion.div>

          {/* HARDWARE */}
          <motion.div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 overflow-hidden group" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} whileHover={{ y: -8 }}>
            <div className="absolute inset-0 opacity-5"><div className="absolute top-10 right-10 text-white text-9xl">🔧</div></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HiCog className="w-10 h-10 text-white" />
                </div>
                <div><h2 className="text-4xl font-bold text-white">Hardware Wing</h2><p className="text-white/80">Security & Automation</p></div>
              </div>
              <p className="text-white/90 text-lg mb-8">Security systems, access control, fire safety, and automation solutions.</p>
              <div className="space-y-3 mb-8">
                {hardwareDetails.map((s, i) => (<motion.div key={i} className="flex items-center gap-3 text-white/90" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}><HiCheckCircle className="w-6 h-6 text-[#EC2A2F]" /><span className="text-lg">{s.name}</span></motion.div>))}
              </div>
              <motion.button onClick={() => setShowModal('hardware')} className="w-full bg-white text-gray-800 px-8 py-4 rounded-xl font-bold hover:bg-[#EC2A2F] hover:text-white transition-all flex items-center justify-center gap-2 text-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                View All Hardware Solutions →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modals with Watermarks */}
      <AnimatePresence>
        {showModal === 'software' && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(null)}>
            <motion.div className="bg-white rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4"><div className="w-14 h-14 bg-[#273266] rounded-xl flex items-center justify-center"><HiCode className="w-7 h-7 text-white" /></div>
                  <div><h3 className="text-3xl font-bold text-[#273266]">Software Solutions</h3><p className="text-gray-600">Digital transformation offerings</p></div>
                </div>
                <button onClick={() => setShowModal(null)} className="p-2 hover:bg-gray-100 rounded-xl"><HiX className="w-7 h-7" /></button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {softwareDetails.map((s, i) => { const Icon = s.icon; return (
                  <motion.div key={i} className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#EC2A2F]/30 hover:shadow-lg transition-all overflow-hidden group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity" style={{ backgroundImage: 'url(https://i.postimg.cc/d77yrYN7/vivify-font.png)', backgroundSize: '70%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-[#273266]/10 rounded-xl flex items-center justify-center group-hover:bg-[#273266] transition-colors"><Icon className="w-6 h-6 text-[#273266] group-hover:text-white transition-colors" /></div>
                        <h4 className="font-bold text-xl text-[#273266]">{s.name}</h4>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{s.description}</p>
                      {s.link && <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#EC2A2F] font-semibold hover:gap-3 transition-all">View Live Demo <HiExternalLink className="w-5 h-5" /></a>}
                    </div>
                  </motion.div>
                )})}
              </div>
            </motion.div>
          </motion.div>
        )}
        {showModal === 'hardware' && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(null)}>
            <motion.div className="bg-white rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4"><div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center"><HiCog className="w-7 h-7 text-white" /></div>
                  <div><h3 className="text-3xl font-bold text-[#273266]">Hardware Solutions</h3><p className="text-gray-600">Security & automation products</p></div>
                </div>
                <button onClick={() => setShowModal(null)} className="p-2 hover:bg-gray-100 rounded-xl"><HiX className="w-7 h-7" /></button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {hardwareDetails.map((s, i) => { const Icon = s.icon; return (
                  <motion.div key={i} className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#EC2A2F]/30 hover:shadow-lg transition-all overflow-hidden group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity" style={{ backgroundImage: 'url(https://i.postimg.cc/d77yrYN7/vivify-font.png)', backgroundSize: '70%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-gray-800/10 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors"><Icon className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors" /></div>
                        <h4 className="font-bold text-xl text-[#273266]">{s.name}</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{s.description}</p>
                    </div>
                  </motion.div>
                )})}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
