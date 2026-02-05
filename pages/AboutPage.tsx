import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.0, ease: "easeOut" }
};

const KernMetadata = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-bold tracking-[0.4em] text-[#165a72]/70 uppercase">{label}</span>
    <span className="text-xs font-medium text-black/80 tracking-wider uppercase">{value}</span>
  </div>
);

const AboutPage: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="pt-48 bg-white text-black min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="px-6 md:px-12 max-w-[1800px] mx-auto mb-20 md:mb-40"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16"
          variants={fadeInUp}
        >
          <KernMetadata label="ABOUT US" value="BRiX Network" />
          <KernMetadata label="FOUNDED" value="Nov 2014" />
        </motion.div>
        <motion.h1 
          className="font-heading text-4xl sm:text-6xl md:text-[11vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8 md:mb-12 text-[#165a72]"
          variants={fadeInUp}
        >
          Delivering <br /><span className="text-[#165a72]/40">Trust Through</span><br /><span className="text-[#ed1c24] italic">Knowledge</span>
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-[1.1] font-medium mb-6 md:mb-8 tracking-tight max-w-4xl"
          variants={fadeInUp}
        >
          A pure play Knowledge Transfer Organization committed to excellence, innovation, and professional service delivery since November 2014.
        </motion.p>
      </motion.section>

      {/* Story Section */}
      <section className="py-20 md:py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 md:mb-12 text-[#165a72]">Our DNA Culture</h2>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-12 md:mb-16">
              Innovation is ingrained in our DNA. We thrive on challenging the status quo and empowering minds through transformative knowledge transfer. At BRIX, we're not just purveyors of information—we're architects of transformation, fostering excellence at each level of service delivery.
            </p>
            
            {/* Core Values */}
            <div className="mb-12 md:mb-16">
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-6 md:mb-8 text-[#165a72]">Our Core Values</h3>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-8 md:mb-12">
                The foundation upon which BRIX is built, brick by brick
              </p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  { t: 'Innovation', d: 'Pushing boundaries and turning dreams into reality through cutting-edge solutions.', c: '#165a72' },
                  { t: 'Excellence', d: 'Commitment to delivering trust and quality in every knowledge transfer initiative.', c: '#ed1c24' },
                  { t: 'Collaboration', d: 'Fostering a culture of inclusiveness, accountability, and shared success.', c: '#165a72' },
                  { t: 'Transformation', d: 'Empowering individuals and organizations to thrive in an ever-changing landscape.', c: '#ed1c24' }
                ].map(v => (
                  <motion.div 
                    key={v.t} 
                    className="p-6 md:p-12 bg-white flex flex-col justify-between min-h-[200px] md:aspect-square group"
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className={`font-heading text-sm md:text-base font-bold uppercase tracking-widest transition-colors group-hover:text-black mb-3 md:mb-4`} style={{ color: v.c }}>
                      {v.t}
                    </h4>
                    <p className="text-xs md:text-sm text-black/70 leading-relaxed">{v.d}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="min-h-[400px] md:aspect-square bg-[#165a72] p-8 md:p-16 flex flex-col justify-end text-white shadow-3xl relative overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" alt="Story Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <motion.h3 
                className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6 md:mb-8 leading-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.0 }}
              >
                Brick by Brick.
              </motion.h3>
              <motion.p 
                className="text-base md:text-lg opacity-90 font-light mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1.0 }}
              >
                BRiX Network Pvt Ltd, established in November 2014, is a distinguished Knowledge Transfer Organization and Authorized Training Partner of Extreme Networks across PAN India.
              </motion.p>
              <motion.p 
                className="text-sm md:text-base opacity-80 font-light mb-8 md:mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 1.0 }}
              >
                We've strategically allied with leading global organizations and OEMs, bolstered by Subject Matter Experts, Lead Auditors, and Cyber Security Specialists.
              </motion.p>
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 bg-[#ed1c24] flex items-center justify-center rounded-full group cursor-pointer hover:scale-110 transition-transform"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                 <ArrowUpRight size={24} className="md:w-8 md:h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 md:py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-8 md:mb-12">
                Strategic <br /><span className="text-[#ed1c24]/60 italic">Partnerships</span>
              </h2>
              <motion.div 
                className="space-y-6 md:space-y-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="p-6 md:p-8 bg-[#f9f9f9] border-l-4 md:border-l-8 border-[#165a72]"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-[#165a72] mb-3 md:mb-4">
                    Strategic Partnerships
                  </h4>
                  <p className="text-sm md:text-base text-black/80 leading-relaxed">
                    We've strategically allied with leading global organizations and OEMs, bolstered by Subject Matter Experts, Lead Auditors, and Cyber Security Specialists.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="p-6 md:p-8 bg-[#f9f9f9] border-l-4 md:border-l-8 border-[#ed1c24]"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-[#165a72] mb-3 md:mb-4">
                    Academic Excellence
                  </h4>
                  <p className="text-sm md:text-base text-black/80 leading-relaxed">
                    Through our subsidiary, Savant Networks Academy, we partner with premier universities to establish Knowledge Transfer Centers, elevating student skillsets nationwide.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="aspect-[4/3] bg-[#165a72] overflow-hidden shadow-2xl"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Strategic Partnerships" 
                className="w-full h-full object-cover brightness-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-20 md:py-40 bg-[#f8f9fa] border-t border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <motion.div 
            className="mb-16 md:mb-24 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-6 md:mb-8">
              What We <span className="text-[#ed1c24]/60 italic">Do</span>
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-3 md:space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id} 
                className="bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4 }}
              >
                <motion.button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-4 md:p-8 text-left flex justify-between items-center hover:bg-[#165a72]/5 transition-colors"
                  whileHover={{ backgroundColor: "rgba(22, 90, 114, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">
                      {service.number}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#165a72]">
                      {service.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {expandedService === service.id ? (
                      <ChevronUp size={20} className="md:w-6 md:h-6 text-[#165a72] flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="md:w-6 md:h-6 text-[#165a72] flex-shrink-0" />
                    )}
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedService === service.id ? "auto" : 0,
                    opacity: expandedService === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-4 md:px-8 pb-4 md:pb-8 border-t border-black/5">
                    <motion.div 
                      className="pt-4 md:pt-8 grid md:grid-cols-2 gap-6 md:gap-8"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div>
                        <p className="text-base md:text-lg text-black/80 leading-relaxed mb-6 md:mb-8">
                          {service.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-[#165a72] mb-4 md:mb-6">
                          Sub-items
                        </h4>
                        <div className="space-y-2 md:space-y-3">
                          {service.features.map((feature, j) => (
                            <motion.div 
                              key={j} 
                              className="flex items-start gap-3 md:gap-4"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3 + j * 0.1, duration: 0.5 }}
                            >
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ed1c24] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs md:text-sm text-black/70 leading-relaxed">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;