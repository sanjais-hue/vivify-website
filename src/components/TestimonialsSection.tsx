import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Vivify Technocrats transformed our entire security infrastructure. Their expertise in CCTV and access control systems is unmatched. The team's professionalism and attention to detail exceeded our expectations.",
      rating: 5,
    },
    {
      quote: "Outstanding service from start to finish. The conveyor systems they installed have significantly improved our warehouse efficiency. Their technical knowledge and support are exceptional.",
      rating: 5,
    },
    {
      quote: "We've been working with Vivify for over 5 years now. Their IT infrastructure services and maintenance support have been crucial for our operations. Highly reliable and professional team.",
      rating: 5,
    },
    {
      quote: "The fire alarm system installation was seamless. Their team handled everything professionally, from consultation to commissioning. We feel much safer now with their security solutions in place.",
      rating: 5,
    },
    {
      quote: "Exceptional technical manpower services. The engineers they provided were highly skilled and integrated seamlessly with our team. Vivify truly understands enterprise needs.",
      rating: 5,
    },
  ];

  const industries = [
    { name: 'Aviation', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&q=80' },
    { name: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&q=80' },
    { name: 'Sports', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&q=80' },
    { name: 'Manufacturing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80' },
    { name: 'Corporate', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80' },
    { name: 'Logistics', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&q=80' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#273266] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#EC2A2F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white font-semibold rounded-full text-sm mb-4">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Trusted by leading organizations across various industries
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            {/* Quote Icon */}
            <div className="absolute top-6 left-8 text-[#EC2A2F]/30">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Star Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <HiStar key={i} className="w-6 h-6 text-[#EC2A2F]" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <HiChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <HiChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#EC2A2F] w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#273266] to-transparent" />
                <div className="absolute bottom-3 left-3 text-white font-semibold text-sm">
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
