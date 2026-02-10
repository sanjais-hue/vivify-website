import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiShieldCheck, HiArrowLeft, HiLightningBolt, HiUsers, HiStar } from 'react-icons/hi';

interface VisionMissionPageProps {
    onBack: () => void;
}

export const VisionMissionPage: React.FC<VisionMissionPageProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Back Button */}
                <motion.button
                    onClick={onBack}
                    className="mb-8 flex items-center gap-2 text-[#273266] hover:text-[#EC2A2F] font-semibold group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <HiArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </motion.button>

                {/* Hero Section */}
                <header className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-[#EC2A2F]/10 text-[#EC2A2F] font-bold rounded-full text-sm mb-4 uppercase tracking-widest">
                            Core Identity
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-[#273266] mb-6 leading-tight">
                            Our Vision & <span className="text-[#EC2A2F]">Mission</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Defining the purpose and future of Vivify Technocrats as we transform "Obsolete to Absolute".
                        </p>
                    </motion.div>
                </header>

                {/* Vision Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="w-20 h-20 bg-[#EC2A2F]/10 rounded-3xl flex items-center justify-center mb-8">
                            <HiLightBulb className="w-10 h-10 text-[#EC2A2F]" />
                        </div>
                        <h2 className="text-4xl font-bold text-[#273266] mb-6">Our Vision</h2>
                        <p className="text-2xl text-gray-600 leading-relaxed italic mb-8 border-l-4 border-[#EC2A2F] pl-6">
                            "To be a global leader in providing innovative and intelligent technology solutions that transform businesses from Obsolete to Absolute."
                        </p>
                        <div className="space-y-4">
                            {[
                                { icon: HiLightningBolt, text: 'Driving global digital transformation' },
                                { icon: HiStar, text: 'Setting benchmarks in industrial automation' },
                                { icon: HiUsers, text: 'Empowering communities through technology' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-700">
                                    <item.icon className="w-5 h-5 text-[#EC2A2F]" />
                                    <span className="font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
                    >
                        <img
                            src="/soft.jpeg"
                            alt="Our Vision"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </section>

                {/* Mission Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
                    >
                        <img
                            src="/soft-2.jpeg"
                            alt="Our Mission"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-20 h-20 bg-[#273266]/10 rounded-3xl flex items-center justify-center mb-8">
                            <HiShieldCheck className="w-10 h-10 text-[#273266]" />
                        </div>
                        <h2 className="text-4xl font-bold text-[#273266] mb-6">Our Mission</h2>
                        <p className="text-2xl text-gray-600 leading-relaxed italic mb-8 border-l-4 border-[#273266] pl-6">
                            "To empower businesses by delivering cutting-edge software and hardware solutions with excellence, reliability, and a customer-centric approach."
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <h4 className="font-bold text-[#273266] mb-2">Excellence</h4>
                                <p className="text-sm text-gray-500">Uncompromising quality in every line of code and hardware install.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <h4 className="font-bold text-[#273266] mb-2">Reliability</h4>
                                <p className="text-sm text-gray-500">Providing 24/7 support and robust systems that never fail.</p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Values Footer */}
                <motion.div
                    className="mt-20 p-12 bg-[#273266] rounded-[3rem] text-center text-white"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold mb-6">Our Core Philosophy</h3>
                    <p className="text-xl opacity-90 mb-0 font-light max-w-3xl mx-auto">
                        "Obsolete to Absolute — <span className="text-[#EC2A2F] font-bold italic">Trash into Tower</span>"
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default VisionMissionPage;
