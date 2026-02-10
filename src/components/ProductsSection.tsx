import React, { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  // SOFTWARE PRODUCTS (TIER 1) - Reordered as requested
  {
    id: 1,
    name: 'Vivify Safety App',
    category: 'Software Solution',
    description: 'Complete workplace safety and compliance platform with digital training, audits, incident reporting, and real-time monitoring.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
    features: ['Video-Based Safety Training', 'Digital Audits with PDF Reports', 'Incident & Near-Miss Tracking', 'Web & Android App Available'],
    technologies: ['ReactJS', '.NET Core', 'SQL Server'],
    demoType: 'live',
    pdfBrochure: '/safety_App Sales (1) (1).pdf',
    demoLinks: {
      web: 'https://vivifysoft.in/safety/#/AdminLogin',
      android: 'https://play.google.com/store/apps/details?id=com.vivify.safety&hl=en'
    }
  },
  // E-COMMERCE PORTFOLIO
  {
    id: 2,
    name: 'Hari Silks E-Commerce',
    category: 'E-Commerce Solution',
    description: 'Custom e-commerce platform for premium silk and saree retail with product catalog, secure checkout, and order management.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop',
    features: ['Product Catalog Management', 'Secure Payment Integration', 'Order Tracking', 'Customer Management'],
    technologies: ['ReactJS', '.NET Core', 'SQL Server'],
    demoType: 'live',
    demoLinks: {
      web: 'http://harisilks.com/'
    }
  },
  {
    id: 3,
    name: 'Crackers E-Commerce',
    category: 'E-Commerce Solution',
    description: 'Festive e-commerce platform for crackers with seamless browsing, secure ordering, and efficient fulfillment.',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&auto=format&fit=crop',
    features: ['Product Catalog', 'Secure Payment Gateway', 'Order Management', 'Easy Checkout Process'],
    technologies: ['ReactJS', '.NET Core', 'SQL Server'],
    demoType: 'live',
    demoLinks: {
      web: 'https://srigokilaacrackers.com/'
    }
  },
  {
    id: 4,
    name: 'Employee Hub (HRMS)',
    category: 'Software Solution',
    description: 'Comprehensive HR management system for onboarding, offboarding, payroll generation, leave management, and employee self-service.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    features: ['Salary Generation & Payslips', 'Leave Management', 'Onboarding & Induction', 'Birthday & Anniversary Dashboard'],
    technologies: ['ReactJS', '.NET Core', 'SQL Server'],
    demoType: 'video',
    pdfBrochure: '/Employee_Hub Emp Sales (1) (1).pdf',
    demoLinks: {
      web: 'https://vivifysoft.in/employeehub/#/Login'
    }
  },
  {
    id: 5,
    name: 'Enterprise ERP System',
    category: 'Software Solution',
    description: 'Streamline core business processes with centralized inventory, accounts, purchase, and sales management with real-time tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    features: ['Inventory Management', 'Accounts & Finance', 'Purchase & Sales Tracking', 'Real-Time Reporting'],
    technologies: ['ReactJS', '.NET Core', 'SQL Server'],
    demoType: 'video',
    videoFile: '/ERP-LOGIN-VIDEO.mp4',
    pdfBrochure: '/Company Profile.pdf',
    demoLinks: {
      web: 'https://vivifysoft.in/ERP/#/Login'
    }
  },
  {
    id: 6,
    name: 'Reimbursement System',
    category: 'Software Solution',
    description: 'Digital expense claim management enabling fast submissions, reviews, and approvals with improved accuracy and reduced admin workload.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop',
    features: ['Faster Claim Approvals', 'Improved Transparency', 'Reduced Administrative Work', 'Easy Expense Tracking'],
    technologies: ['.NET Framework', 'SSMS'],
    demoType: 'video',
    pdfBrochure: '/Reimbursement prj.pdf',
    demoLinks: {
      web: 'https://vivifysoft.in/Home.aspx'
    }
  },
  // HARDWARE PRODUCTS (SECONDARY)
  {
    id: 7,
    name: 'Professional CCTV Surveillance',
    category: 'Hardware Solution',
    description: 'State-of-the-art surveillance systems with HD/4K cameras, night vision, and remote monitoring capabilities.',
    image: 'https://i.postimg.cc/Hs8zJggC/CCTV.jpg',
    features: ['4K Ultra HD Recording', 'Night Vision Technology', 'Remote Monitoring', 'AI-Powered Analytics'],
  },
  {
    id: 8,
    name: 'Robust Access Control Services',
    category: 'Hardware Solution',
    description: 'Comprehensive access control solutions including biometric systems, card readers, and smart locks.',
    image: 'https://i.postimg.cc/c1bT4JVW/ACS.jpg',
    features: ['Biometric Authentication', 'RFID Card Systems', 'Time Attendance', 'Multi-Door Control'],
  },
  {
    id: 9,
    name: 'Boom Barrier for Multi-Purpose Use',
    category: 'Hardware Solution',
    description: 'Automated boom barriers for parking lots, toll plazas, and restricted area access control.',
    image: 'https://i.postimg.cc/5NQgHVV1/Boombarrier.jpg',
    features: ['Automatic Operation', 'Vehicle Detection', 'Remote Control', 'Heavy-Duty Design'],
  },
  {
    id: 10,
    name: 'Fire Alarm Systems',
    category: 'Hardware Solution',
    description: 'Advanced fire detection and alarm systems for complete fire safety and emergency response.',
    image: 'https://i.postimg.cc/SNYdXhhS/Firealarm.jpg',
    features: ['Smoke Detection', 'Heat Sensors', 'Emergency Alerts', 'System Integration'],
  },
  {
    id: 11,
    name: 'Powered Roller Conveyors',
    category: 'Hardware Solution',
    description: 'Industrial powered roller conveyor systems for efficient material handling and logistics.',
    image: 'https://i.postimg.cc/tRMDCgLJ/Power_Conveyor.jpg',
    features: ['Variable Speed Control', 'Heavy Load Capacity', 'Modular Design', 'Energy Efficient'],
  },
  {
    id: 12,
    name: 'Gravity Roller Conveyor',
    category: 'Hardware Solution',
    description: 'Cost-effective gravity-fed conveyor systems for warehouses and distribution centers.',
    image: 'https://i.postimg.cc/MKf5cSSw/Conveyor.jpg',
    features: ['No Power Required', 'Low Maintenance', 'Flexible Configuration', 'Quick Installation'],
  },
  {
    id: 13,
    name: 'Industrial Generators',
    category: 'Hardware Solution',
    description: 'Heavy-duty power backup solutions and industrial generators for uninterrupted operations.',
    image: 'https://i.postimg.cc/c4thKSSJ/Generator.jpg',
    features: ['Diesel & Gas Generators', 'Automatic Transfer Switch', 'Load Management', '24/7 Emergency Support'],
  },
];

interface ProductsSectionProps {
  scrollToContact: (service: string, message: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ scrollToContact }) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const handleLearnMore = (product: typeof products[0]) => {
    // If product has PDF brochure, open it in new tab
    if (product.pdfBrochure) {
      window.open(product.pdfBrochure, '_blank');
    } else {
      // Otherwise, scroll to contact form with pre-filled message
      scrollToContact(
        'Product Inquiry',
        `I am interested in learning more about ${product.name}.\n\n${product.description}\n\nPlease provide detailed information about features, pricing, and availability.`
      );
    }
  };

  const handleViewDemo = (product: typeof products[0]) => {
    if (product.demoLinks?.web) {
      window.open(product.demoLinks.web, '_blank');
    } else {
      scrollToContact(
        'Product Inquiry',
        `I am interested in learning more about ${product.name}.\n\n${product.description}\n\nPlease provide detailed information about features, pricing, and availability.`
      );
    }
  };

  const handleRequestQuote = (product: typeof products[0]) => {
    scrollToContact(
      'Quote Request',
      `I would like to request a quote for ${product.name}.\n\n${product.description}\n\nPlease provide pricing details, implementation timeline, and customization options.\n\nThank you,`
    );
  };

  const handleRequestConsultation = () => {
    scrollToContact(
      'Consultation Request',
      'I would like to request a free consultation to discuss my requirements for your products and services. Please contact me at your earliest convenience.'
    );
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-[#EC2A2F]/10 text-[#EC2A2F] font-semibold rounded-full text-sm mb-3">
            Software & Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#273266] mb-4">
            Our Products & Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Custom software solutions, mobile applications, and enterprise systems built with cutting-edge technology.
          </p>
          <p className="text-sm text-gray-500">
            {products.filter(p => p.category?.includes('Software') || p.category?.includes('E-Commerce')).length} Software Products • {products.filter(p => p.category === 'Hardware Solution').length} Hardware Solutions
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProduct === product.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#273266]/80 via-transparent to-transparent" />

                {/* View Details Button */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    y: hoveredProduct === product.id ? 0 : 20
                  }}
                >
                  <button
                    className="w-full py-3 bg-white/90 backdrop-blur-sm text-[#273266] font-semibold rounded-xl hover:bg-white transition-colors"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                {product.category && (
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${product.category.includes('Software')
                    ? 'bg-[#273266]/10 text-[#273266]'
                    : product.category.includes('E-Commerce')
                      ? 'bg-[#EC2A2F]/10 text-[#EC2A2F]'
                      : 'bg-gray-100 text-gray-600'
                    }`}>
                    {product.category}
                  </span>
                )}

                <h3 className="text-xl font-bold text-[#273266] mb-2 group-hover:text-[#EC2A2F] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Technology Stack (for software products) */}
                {product.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Features */}
                <div className="space-y-2">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[#EC2A2F]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA - Conditional Button */}
                <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
                  {/* Show "View Demo" only for specific products */}
                  {(product.name === 'Vivify Safety App' ||
                    product.name === 'Hari Silks E-Commerce' ||
                    product.name === 'Crackers E-Commerce') ? (
                    <button
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#EC2A2F] text-white font-semibold rounded-lg hover:bg-[#d42429] transition-colors"
                      onClick={() => handleViewDemo(product)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Demo
                    </button>
                  ) : (
                    <button
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#EC2A2F] text-white font-semibold rounded-lg hover:bg-[#d42429] transition-colors"
                      onClick={() => handleRequestQuote(product)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Request Quote
                    </button>
                  )}

                  {/* Learn More Button - Always show */}
                  <button
                    className="flex items-center gap-2 text-[#273266] font-semibold hover:text-[#EC2A2F] transition-colors w-full justify-center"
                    onClick={() => handleLearnMore(product)}
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-[#273266] to-[#1a2244] rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC2A2F]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-white/70">
                Our experts can design tailored solutions for your specific requirements.
              </p>
            </div>
            <motion.button
              className="px-8 py-4 bg-[#EC2A2F] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRequestConsultation}
            >
              Request Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#273266]/80 to-transparent" />
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#273266] hover:bg-white transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProduct.name}</h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-600 text-lg mb-6">{selectedProduct.description}</p>

              <h4 className="text-xl font-bold text-[#273266] mb-4">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {selectedProduct.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#EC2A2F]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#EC2A2F]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 px-6 py-4 bg-[#EC2A2F] text-white font-semibold rounded-xl hover:bg-[#d42429] transition-colors"
                  onClick={() => {
                    handleLearnMore(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  Get More Information
                </button>
                <button
                  className="flex-1 px-6 py-4 border-2 border-[#273266] text-[#273266] font-semibold rounded-xl hover:bg-[#273266] hover:text-white transition-colors"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProductsSection;
