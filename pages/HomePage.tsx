import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

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

interface HomePageProps {
  setActivePage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* CinematicHero - Rotating Hero Carousel */}
      <section className="relative h-screen bg-white overflow-hidden flex flex-col justify-center border-b border-black/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={[
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
                'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80',
                'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80',
                'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80',
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80'
              ][activeSlide]} 
              className="w-full h-full object-cover brightness-90 contrast-110" 
              alt="Corporate Environment"
            />
            {/* Brand Gradient Overlays - Reduced opacity for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#165a72]/3" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 w-full px-6 md:px-12 max-w-[1800px] mx-auto">
          <div className="flex flex-col gap-4 mb-12">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex gap-8">
              <KernMetadata label="Division" value={HERO_SLIDES[activeSlide].label} />
              <KernMetadata label="ADVANTAGE" value={`0${activeSlide + 1} / 0${HERO_SLIDES.length}`} />
            </motion.div>
          </div>

          <motion.div
            key={activeSlide + '-title'}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[95%]"
          >
            <h1 className="font-heading text-6xl md:text-[9.5vw] font-bold tracking-tighter uppercase text-[#165a72] leading-[0.82] mb-10">
              {HERO_SLIDES[activeSlide].title}
            </h1>
            <p className="text-[#165a72]/90 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl bg-white/80 backdrop-blur-lg p-6 border-l-4 border-[#165a72] shadow-lg">
              {HERO_SLIDES[activeSlide].text}
            </p>
          </motion.div>
        </div>

        {/* Client Ticker - Branded */}
        <div className="absolute bottom-12 left-0 w-full border-y border-black/5 py-8 overflow-hidden bg-white/95 backdrop-blur-xl">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of clients */}
            <div className="flex items-center gap-16 mr-16">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Extreme Networks</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Wipro</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Infosys</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">TCS</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Tech Mahindra</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">HCL Technologies</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Accenture</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Cognizant</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-16 mr-16">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Extreme Networks</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Wipro</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Infosys</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">TCS</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Tech Mahindra</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">HCL Technologies</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Accenture</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors">Cognizant</span>
              <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* EditorialAbout - Brand Highlight */}
      <section className="py-40 bg-[#f9fafa]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">SUCCESS WORK</span>
              <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-12">
                About <br /><span className="text-[#165a72]/40 italic font-normal">BRiX Network</span>
              </h2>
              
              {/* Key Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-8 mb-16"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="p-8 bg-white border-l-4 border-[#165a72] shadow-sm"
                  variants={scaleIn}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-4xl font-bold text-[#165a72] mb-2">2014</div>
                  <div className="text-sm text-black/70 uppercase tracking-wider">Established</div>
                </motion.div>
                <motion.div 
                  className="p-8 bg-white border-l-4 border-[#ed1c24] shadow-sm"
                  variants={scaleIn}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-4xl font-bold text-[#165a72] mb-2">PAN</div>
                  <div className="text-sm text-black/70 uppercase tracking-wider">India Coverage</div>
                </motion.div>
              </motion.div>

              <motion.p 
                className="text-xl text-black/80 leading-relaxed mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.0 }}
              >
                A pure play <span className="text-[#165a72] font-semibold">Knowledge Transfer Organization</span> committed to setting benchmarks in professional service delivery and business compliance awareness.
              </motion.p>

              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1.0 }}
              >
                <div className="w-12 h-[2px] bg-[#ed1c24]"></div>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#165a72]">Authorized Training Partner</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <motion.div 
                className="aspect-[4/3] overflow-hidden shadow-2xl border border-black/5 relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80" alt="BRIX Workspace" className="w-full h-full object-cover brightness-110 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#165a72]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </motion.div>
              
              {/* Vision & Mission Cards */}
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="p-6 bg-white shadow-sm border-l-4 border-[#165a72] hover:shadow-lg transition-shadow"
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-[#165a72] rounded-full"></div>
                    <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#165a72]">Vision</span>
                  </div>
                  <p className="text-sm text-black/80 leading-relaxed">
                    To enable excellence at each level, process and service delivery.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="p-6 bg-white shadow-sm border-l-4 border-[#ed1c24] hover:shadow-lg transition-shadow"
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-[#ed1c24] rounded-full"></div>
                    <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#ed1c24]">Mission</span>
                  </div>
                  <p className="text-sm text-black/80 leading-relaxed">
                    Premium Knowledge Transfer and innovation that drives eminence.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-40 bg-white border-t border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <motion.div 
            className="mb-24 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">WHAT WE DO</span>
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72]">
              Our <span className="text-[#165a72]/40 italic font-normal">Services</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { number: '01', title: 'Advance Technology Domain', description: 'Premium knowledge transfer on advance technology, enablement programs, vendor neutral programs, OEM enablement & certification programs, CLOUD, SDx, Infrastructure automation tools, learning & development domain', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80' },
              { number: '02', title: 'Learning & Development Domain', description: 'Enabling potential minds and its creativity through fostering programs on noetic science, leadership & management, coaching, business skills, behavioural skills and cross culture', image: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=600&q=80' },
              { number: '03', title: 'Domain Compliances & Governance', description: 'To validate \'RESKILL TO STAY RELEVANT\' in the evolving world of applied science, we render services for project management and expert, ITIL-SERIES, JIRA Project management, CEM, CISA, CISM, CISSP, certified data centre professional and specialist and certified IT management', image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80' },
              { number: '04', title: 'Professional Service Domain', description: 'The magnitude maximizes to render services on Infosec, VA/PT, mobile security scanning and reporting, baseline auditing, IT infrastructure auditing, readiness auditing, comprehensive auditing, knowledge management services, project management & implementation program', image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80' }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 p-8"
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="aspect-[4/3] overflow-hidden mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                  />
                </motion.div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">{service.number}</span>
                    <motion.div 
                      className="w-8 h-[1px] bg-[#165a72]/20"
                      whileHover={{ width: 32 }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                  <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-[#165a72] group-hover:text-[#ed1c24] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-black/70 leading-relaxed">
                    {service.description.substring(0, 120)}...
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-40 bg-[#f8f9fa] border-t border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <motion.div 
            className="mb-24 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-16">
              HAPPY <span className="text-[#ed1c24]/60 italic">CLIENTS</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex justify-center items-center gap-16 flex-wrap opacity-60 hover:opacity-100 transition-opacity"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              'Extreme Networks', 'Wipro', 'Infosys', 'TCS', 'Tech Mahindra', 'HCL Technologies', 'Accenture', 'Cognizant'
            ].map((client, i) => (
              <motion.div 
                key={i} 
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#165a72]/60 hover:text-[#165a72] transition-colors group-hover:text-[#ed1c24]">
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - Brand Colors */}
      <section className="py-60 bg-white border-t border-black/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <motion.div 
          className="max-w-5xl mx-auto px-6 relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.span 
            className="text-[10px] font-bold tracking-[1.2em] text-[#165a72]/60 mb-16 block uppercase"
            variants={fadeInUp}
          >
            CALL TO ACTION
          </motion.span>
          <motion.h2 
            className="font-heading text-6xl md:text-[10vw] font-bold tracking-tighter uppercase mb-16 text-[#165a72] leading-[0.8]"
            variants={fadeInUp}
          >
            BRIX | <br /><span className="text-[#ed1c24]/60 italic font-normal">Excellence is a Habit</span>
          </motion.h2>
          <motion.button 
            onClick={() => setActivePage('contact')} 
            className="group relative px-20 py-8 bg-[#165a72] text-white font-bold uppercase tracking-[0.5em] text-[10px] overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Call Us Now</span>
            <div className="absolute inset-0 bg-[#ed1c24] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;