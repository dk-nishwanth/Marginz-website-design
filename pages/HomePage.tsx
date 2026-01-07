import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

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
              <KernMetadata label="Division" value="Technical Excellence" />
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
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">SUCCESS WORK</span>
              <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72]">
                About <br /><span className="text-black/5 italic font-normal">BRiX Network</span>
              </h2>
              <div className="mt-16 relative group">
                 <div className="absolute -inset-4 bg-[#165a72]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <div className="relative aspect-[4/3] overflow-hidden shadow-2xl border border-black/5">
                    <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80" alt="BRIX Workspace" className="w-full h-full object-cover brightness-110" />
                 </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="max-w-3xl ml-auto">
                <p className="text-3xl md:text-4xl text-black/90 leading-[1.1] font-light mb-16 tracking-tight">
                  BRiX Network Pvt Ltd is a pure play Knowledge transfer Organization, incorporated in <span className="text-[#165a72] font-medium">November 2014</span>, with ATP feature from extreme networks.
                </p>
                <div className="grid md:grid-cols-2 gap-16 border-t border-black/10 pt-16">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-[2px] bg-[#165a72]"></div>
                       <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#165a72]">Vision</span>
                    </div>
                    <p className="text-black/80 leading-relaxed text-sm">To enable, excellence at each level, process and service delivery.</p>
                    <div className="aspect-[4/3] overflow-hidden mt-6">
                      <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" alt="Vision" className="w-full h-full object-cover brightness-110" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-[2px] bg-[#ed1c24]"></div>
                       <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">Mission</span>
                    </div>
                    <p className="text-black/80 leading-relaxed text-sm">Premium Knowledge Transfer, innovation and professional service delivery that drives eminence.</p>
                    <div className="aspect-[4/3] overflow-hidden mt-6">
                      <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80" alt="Mission" className="w-full h-full object-cover brightness-110" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-40 bg-white border-t border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">Our Expertise</span>
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72]">
              Service <span className="text-black/5 italic font-normal">Excellence</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Advanced Technology', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80' },
              { title: 'Learning & Development', image: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=600&q=80' },
              { title: 'Domain Compliance', image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80' },
              { title: 'Professional Services', image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80' }
            ].map((service, i) => (
              <div key={i} className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-[#165a72] group-hover:text-[#ed1c24] transition-colors">
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Brand Colors */}
      <section className="py-60 bg-white border-t border-black/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-[10px] font-bold tracking-[1.2em] text-[#165a72]/60 mb-16 block uppercase">CALL TO ACTION</span>
          <h2 className="font-heading text-6xl md:text-[10vw] font-bold tracking-tighter uppercase mb-16 text-[#165a72] leading-[0.8]">
            BRIX | <br /><span className="text-[#ed1c24]/30 italic font-normal">Excellence is a Habit</span>
          </h2>
          <button onClick={() => setActivePage('contact')} className="group relative px-20 py-8 bg-[#165a72] text-white font-bold uppercase tracking-[0.5em] text-[10px] overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl">
            <span className="relative z-10">Call Us Now</span>
            <div className="absolute inset-0 bg-[#ed1c24] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;