import { motion } from 'framer-motion';

interface ClientLogo {
  name: string;
  logo: string;
  alt: string;
}

const clientLogos: ClientLogo[] = [
  {
    name: 'The Tamil Nadu Cricket Association',
    logo: 'https://i.postimg.cc/DmQ174vN/TNCA.png',
    alt: 'TNCA Logo'
  },
  {
    name: 'Air India',
    logo: 'https://i.postimg.cc/NL8RQ2sz/AIR-INDIA.png',
    alt: 'Air India Logo'
  },
  {
    name: 'Jet Airways',
    logo: 'https://i.postimg.cc/jC6yRnxg/JET-AIRWAYS.png',
    alt: 'Jet Airways Logo'
  },
  {
    name: 'Airports Authority of India',
    logo: 'https://i.postimg.cc/5j58fQ4K/AAI.jpg',
    alt: 'AAI Logo'
  },
  {
    name: 'Smiths Detection',
    logo: 'https://i.postimg.cc/PNb1dvX6/SMITHS.png',
    alt: 'Smiths Detection Logo'
  },
];

const TrustedClients = () => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#EC2A2F]/10 text-[#EC2A2F] font-semibold rounded-full text-sm mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#273266] mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to serve some of India's most prestigious organizations
          </p>
        </motion.div>

        {/* Scrolling Logo Container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex items-center gap-16"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedLogos.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex flex-col items-center justify-center px-8 py-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#273266]/30 hover:shadow-lg transition-all min-w-[220px] h-[140px]">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="h-16 w-auto object-contain mb-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const textFallback = document.createElement('div');
                          textFallback.className = 'text-[#273266] font-bold text-xl text-center';
                          textFallback.textContent = client.name;
                          parent.insertBefore(textFallback, target);
                        }
                      }}
                    />
                    <span className="text-gray-600 text-xs text-center font-medium">
                      {client.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
