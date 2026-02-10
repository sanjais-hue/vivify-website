
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiCheckCircle } from 'react-icons/hi';

interface ContactSectionProps {
  autoFillService?: string;
  autoFillMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ autoFillService, autoFillMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  // Auto-fill form when props change - works every time
  useEffect(() => {
    if (autoFillService) {
      setFormData(prev => ({
        ...prev,
        service: autoFillService
      }));
    }
  }, [autoFillService]);

  useEffect(() => {
    if (autoFillMessage) {
      setFormData(prev => ({
        ...prev,
        message: autoFillMessage
      }));
    }
  }, [autoFillMessage]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailSubject = `New Inquiry from ${formData.name} - ${formData.service || 'General Inquiry'}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Service Required: ${formData.service || 'Not specified'}

Message:
${formData.message}
    `.trim();

    // Open default email client with pre-filled details
    const mailtoLink = `mailto:vivifytechnocrats.dg@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Simulate sending delay
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 500);
  };

  const contactInfo = [
    {
      icon: HiPhone,
      title: 'Phone',
      lines: ['+91 9150126167', '+91 9840337359']
    },
    {
      icon: HiMail,
      title: 'Email',
      lines: ['vivifytechnocrats.dg@gmail.com']
    },
    {
      icon: HiLocationMarker,
      title: 'Address',
      lines: ['No 3&4 No 2B, 1st Floor, Mugappair Rd,', 'Padi, Chennai, Tamil Nadu 600058']
    },
    {
      icon: HiClock,
      title: 'Office Hours',
      lines: ['Monday - Saturday', '9:00 AM - 6:00 PM']
    }
  ];

  const services = [
    'Select a Service',
    'Software Solutions',
    'Mobile App Development',
    'ERP/HR Management Systems',
    'E-Commerce Development',
    'IT Consultancy',
    'CCTV Surveillance',
    'Access Control Systems',
    'Fire Alarm Systems',
    'Conveyor Systems',
    'IT Infrastructure',
    'Technical Manpower',
    'Project Management',
    'Other'
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-[#EC2A2F]/10 text-[#EC2A2F] font-semibold rounded-full text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#273266] mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Reach out to us for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#273266] mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EC2A2F] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EC2A2F] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EC2A2F] focus:border-transparent outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EC2A2F] focus:border-transparent outline-none transition-all"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EC2A2F] focus:border-transparent outline-none transition-all bg-white"
                >
                  {services.map((service, index) => (
                    <option key={index} value={service === 'Select a Service' ? '' : service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EC2A2F] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${isSubmitted
                  ? 'bg-green-500 text-white'
                  : isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-[#EC2A2F] text-white'
                  }`}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitted ? (
                  <>
                    <HiCheckCircle className="w-6 h-6" />
                    Message Sent Successfully!
                  </>
                ) : isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Inquiry'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-[#EC2A2F]/30 transition-colors"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#273266] rounded-xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-[#273266] mb-1">{info.title}</h4>
                        {info.lines.map((line, idx) => (
                          <p key={idx} className="text-gray-600 text-sm break-all">{line}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map */}
            <a
              href="https://www.google.com/maps/search/Vivify+Technocrats/@13.0956897,80.1780539,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-4 rounded-2xl shadow-lg border border-gray-100"
              title="Open Vivify Technocrats location in Google Maps"
            >
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&q=80"
                  alt="Map Preview - Vivify Technocrats, Padi, Chennai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#273266]/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                    <div className="w-12 h-12 bg-[#EC2A2F] rounded-full flex items-center justify-center mx-auto mb-2">
                      <HiLocationMarker className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-[#273266] font-bold">Vivify Technocrats</p>
                    <p className="text-gray-500 text-sm">No 3&4 No 2B, 1st Floor, Mugappair Rd, Padi, Chennai, Tamil Nadu 600058</p>
                    <p className="text-gray-400 text-xs mt-1">Plus Code: 35WG+8H Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.a
                href="tel:+919840337359"
                className="flex items-center justify-center gap-3 p-4 bg-[#273266] text-white rounded-xl font-semibold hover:bg-[#1a2244] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiPhone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:vivifytechnocrats.dg@gmail.com"
                className="flex items-center justify-center gap-3 p-4 bg-[#EC2A2F] text-white rounded-xl font-semibold hover:bg-[#d42429] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiMail className="w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
