import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { HERO_SLIDES, STATS, CLIENTS, SERVICES, PROJECTS } from '../constants';

const KernMetadata = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-bold tracking-[0.4em] text-[#0B4F6C]/70 uppercase">{label}</span>
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
      {/* Hero Section */}
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
                'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
                'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80'
              ][activeSlide]} 
              className="w-full h-full object-cover brightness-90 contrast-110" 
              alt="Digital Infrastructure"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#0B4F6C]/3" />
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
            <div className="mb-6">
              <h1 className="font-heading text-6xl md:text-[9.5vw] font-bold tracking-tighter uppercase text-[#0B4F6C] leading-[0.82]">
                {HERO_SLIDES[activeSlide].title}
              </h1>
              <p className="font-heading text-2xl md:text-4xl font-medium tracking-tight text-[#0B4F6C]/70 mt-4">
                {HERO_SLIDES[activeSlide].subtitle}
              </p>
            </div>
            <p className="text-[#0B4F6C]/90 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl bg-white/80 backdrop-blur-lg p-6 border-l-4 border-[#0B4F6C] shadow-lg">
              {HERO_SLIDES[activeSlide].text}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-16"
          >
            <button 
              onClick={() => setActivePage('contact')}
              className="group relative px-16 py-6 bg-[#0B4F6C] text-white font-bold uppercase tracking-[0.5em] text-[10px] overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-[#ed1c24] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </button>
          </motion.div>
        </div>

        {/* Client Ticker */}
        <div className="absolute bottom-12 left-0 w-full border-y border-black/5 py-8 overflow-hidden bg-white/95 backdrop-blur-xl">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 mr-16">
                {CLIENTS.map((client, i) => (
                  <React.Fragment key={`${setIndex}-${i}`}>
                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0B4F6C]/60 hover:text-[#0B4F6C] transition-colors">
                      {client.name}
                    </span>
                    {i < CLIENTS.length - 1 && <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full" />}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-40 bg-[#f9fafa]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">ABOUT MARGINZ SOLUTIONS</span>
              <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C]">
                The Architecture of <br /><span className="text-black/5 italic font-normal">Unassailable Digital</span><br /><span className="text-[#ed1c24]">Resilience</span>
              </h2>
              <div className="mt-16 relative group">
                 <div className="absolute -inset-4 bg-[#0B4F6C]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <div className="relative aspect-[4/3] overflow-hidden shadow-2xl border border-black/5">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="MARGINZ Team" className="w-full h-full object-cover brightness-110" />
                 </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="max-w-3xl ml-auto">
                <p className="text-3xl md:text-4xl text-black/90 leading-[1.1] font-light mb-16 tracking-tight">
                  MARGINZ is positioned at the definitive apex of digital transformation, where uncompromising resilience is not a feature but a foundational strategic imperative. Our mission is to deliver <span className="text-[#0B4F6C] font-medium">Precision Engineering</span>, crafting high-performance systems that secure a decisive competitive edge for major enterprises.
                </p>
                <p className="text-xl text-black/80 leading-relaxed mb-16">
                  Our enduring narrative is defined by sustained performance: we systematically dissolve operational complexities, achieving near-zero friction across all critical workflows. This deliberate process, embodied in our proprietary Frictionless Framework, guarantees maximum enterprise uptime and provides a clear, uninterrupted pathway to your strategic objectives.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/10 pt-16">
                  {STATS.map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-4xl md:text-5xl font-heading font-bold text-[#0B4F6C]">{stat.value}</div>
                      <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 bg-[#f8f9fa] border-t border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">BUILDING YOUR DIGITAL ADVANTAGE</span>
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C]">
              Service <span className="text-black/5 italic font-normal">Portfolio</span>
            </h2>
            <p className="text-xl text-black/80 leading-relaxed max-w-2xl mx-auto mt-8">
              What We Build - Key Deliverables
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {SERVICES.map((service, i) => (
              <div key={service.id} className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">{service.number}</span>
                    <div className="w-12 h-[1px] bg-[#0B4F6C]/20"></div>
                  </div>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0B4F6C]/60 block mb-2">
                      {i === 0 ? 'Innovation' : i === 1 ? 'Quality & Accessibility' : 'Client Success'}
                    </span>
                  </div>
                  <h4 className="font-heading text-2xl font-bold uppercase tracking-tight text-[#0B4F6C] group-hover:text-[#ed1c24] transition-colors mb-6">
                    {service.title}
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <button 
                  onClick={() => setActivePage('services')}
                  className="flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase text-[#0B4F6C] hover:text-[#ed1c24] transition-colors"
                >
                  Expand <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-40 bg-white border-t border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">OUR SUCCESS STORIES</span>
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C]">
              Turning Challenges <br /><span className="text-[#ed1c24]/30 italic">Into Opportunities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.slice(0, 6).map((project) => (
              <div key={project.id} className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">{project.category}</span>
                    <span className="text-[10px] font-bold text-black/50">{project.year}</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold uppercase tracking-tight text-[#0B4F6C] group-hover:text-[#ed1c24] transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => setActivePage('projects')}
              className="group relative px-16 py-6 bg-[#0B4F6C] text-white font-bold uppercase tracking-[0.5em] text-[10px] overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10">View All Projects</span>
              <div className="absolute inset-0 bg-[#ed1c24] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 bg-[#f8f9fa] border-t border-black/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-[10px] font-bold tracking-[1.2em] text-[#0B4F6C]/60 mb-16 block uppercase">GET CONSULTATION</span>
          <h2 className="font-heading text-6xl md:text-[10vw] font-bold tracking-tighter uppercase mb-16 text-[#0B4F6C] leading-[0.8]">
            Get Tailored Advice <br /><span className="text-[#ed1c24]/30 italic font-normal">For Your Business</span>
          </h2>
          <p className="text-xl text-black/80 leading-relaxed mb-16 max-w-3xl mx-auto">
            Connect with our experts to receive personalized IT guidance that aligns with your goals, challenges, and growth strategy. Our comprehensive approach transforms your business objectives into powerful technological assets.
          </p>
          <button 
            onClick={() => setActivePage('contact')}
            className="group relative px-20 py-8 bg-[#0B4F6C] text-white font-bold uppercase tracking-[0.5em] text-[10px] overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-[#ed1c24] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
