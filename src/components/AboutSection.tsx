import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from './CountUp';
import { HiStar, HiLightBulb, HiShieldCheck, HiUserGroup } from 'react-icons/hi';

export const AboutSection: React.FC = () => {
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
    'Electronic Security Systems',
    'Fire Alarm Systems',
    'Access Control Solutions',
    'CCTV Surveillance',
    'Voltage Regulators',
    'IT Networking & Cabling',
    'System Integration',
    'Software Installation'
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-[#EC2A2F]/10 text-[#EC2A2F] font-semibold rounded-full text-sm mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#273266] mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two decades of transforming businesses with cutting-edge electronic solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Image Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                  alt="Team collaboration"
                  className="w-full h-56 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80"
                  alt="Technical work"
                  className="w-full h-56 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&q=80"
                  alt="Security systems"
                  className="w-full h-56 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                  alt="Access control"
                  className="w-full h-56 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80"
                  alt="Modern technology"
                  className="w-full h-56 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
                  alt="Professional team"
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#273266] text-white p-6 rounded-2xl shadow-xl"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold">20+</div>
              <div className="text-white/80">Years</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Name Origin */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#273266] mb-4">
                VIVIFY TECHNOCRATS
              </h3>
              <p className="text-gray-600 mb-4">
                Our name <span className="text-[#EC2A2F] font-semibold">"Vivify"</span> is derived from Latin meaning 
                <span className="text-[#273266] font-semibold"> rebirth or resurrection</span>. 
              </p>
              <div className="p-4 bg-[#273266] rounded-xl mb-6">
                <p className="text-white font-medium text-lg">
                  "Obsolete to Absolute" — <span className="text-[#EC2A2F]">Trash into Tower</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              We are electronic solution providers and Technical Manpower Providers with about 
              <span className="text-[#273266] font-semibold"> two decades of hands-on experience</span> on 
              diversified electronic equipment related to all sorts of electronic security equipment, 
              fire alarm systems, access control systems, CCTV, voltage regulators, and more.
            </p>

            <p className="text-gray-600 mb-8">
              Our teams are specialized in installation, testing, commissioning, maintaining, and 
              servicing of electronics and electrical equipment. We have a separate team for IT 
              networking, cabling, system integration works, and software installation & upgradation works.
            </p>

            {/* Expertise Tags */}
            <div className="mb-8">
              <h4 className="text-[#273266] font-semibold mb-4">Our Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#273266] hover:border-[#EC2A2F] hover:text-[#EC2A2F] transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              className="px-8 py-4 bg-[#EC2A2F] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section with CountUp */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {achievements.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100 hover:border-[#EC2A2F]/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#273266] mb-2 flex items-center justify-center">
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  startCounting={isStatsInView}
                />
              </div>
              <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#273266] text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:border-[#EC2A2F] transition-colors"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#273266]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#EC2A2F]/10 transition-colors">
                    <IconComponent className="w-8 h-8 text-[#273266] group-hover:text-[#EC2A2F] transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-[#273266] mb-2 group-hover:text-[#EC2A2F] transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{value.description}</p>
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
