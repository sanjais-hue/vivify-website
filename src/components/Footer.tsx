import React from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    'CCTV Surveillance',
    'Access Control',
    'Boom Barriers',
    'Fire Alarm Systems',
    'Conveyor Systems',
    'Voltage Regulators'
  ];

  const services = [
    'Technical Manpower',
    'IT Infrastructure',
    'IT Consultancy',
    'Project Management',
    'Security Consultancy'
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#273266] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-start justify-between mb-6">
              <img
                src="/White Logo.jpg"
                alt="Vivify Technocrats"
                className="h-12 object-contain"
              />
              <img
                src="/ISO-footer.jpg"
                alt="ISO Certified"
                className="h-12 object-contain ml-4"
              />
            </div>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Electronic solution providers with two decades of experience,
              transforming "Obsolete to Absolute" — Trash into Tower.
            </p>
            <div className="space-y-3">
              <a href="tel:+919150126167" className="flex items-center gap-3 text-white/70 hover:text-[#EC2A2F] transition-colors">
                <HiPhone className="w-5 h-5" />
                <span>+91 9150126167</span>
              </a>
              <a href="tel:+919840337359" className="flex items-center gap-3 text-white/70 hover:text-[#EC2A2F] transition-colors">
                <HiPhone className="w-5 h-5" />
                <span>+91 9840337359</span>
              </a>
              <a href="mailto:vivifytechnocrats.dg@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-[#EC2A2F] transition-colors">
                <HiMail className="w-5 h-5" />
                <span className="break-all">vivifytechnocrats.dg@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <HiLocationMarker className="w-5 h-5 mt-0.5" />
                <span className="text-sm">Chennai - 600050, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-white/70 hover:text-[#EC2A2F] transition-colors text-sm"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-white/70 hover:text-[#EC2A2F] transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Brochure */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#EC2A2F] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Brochure Download */}
            <div>
              <h5 className="font-semibold mb-3">Company Brochure</h5>
              <button
                onClick={() => {
                  try {
                    const html = `<!doctype html>` + document.documentElement.outerHTML;
                    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'Vivify-Technocrats-Brochure.html';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                  } catch (e) {
                    window.alert('Download failed. Please try again.');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#EC2A2F] rounded-lg hover:bg-[#d42429] transition-colors"
                aria-label="Download Brochure"
                title="Download Brochure (Downloads this web UI as HTML)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Vivify Technocrats. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-white/60 text-sm">Follow Us:</span>
              <motion.a
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A98261427&keywords=vivify%20technocrats%20%7C%20future-ready%20airport%20%26%20seaport%20ict%20%7C%20secure%2C%20scalable%2C%2024%2F7&origin=RICH_QUERY_SUGGESTION&position=0&searchId=480fcd53-2cec-4c5d-9335-c9e786440d46&sid=YAF&spellCorrectionEnabled=false"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0077B5] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://x.com/VivifyTechno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61587709923461"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1877F2] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#EC2A2F] text-white rounded-xl shadow-lg flex items-center justify-center z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
