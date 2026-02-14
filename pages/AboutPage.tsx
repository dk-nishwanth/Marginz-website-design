import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const KernMetadata = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-bold tracking-[0.4em] text-[#0B4F6C]/70 uppercase">{label}</span>
    <span className="text-xs font-medium text-black/80 tracking-wider uppercase">{value}</span>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-48 bg-white text-black min-h-screen animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1800px] mx-auto mb-20 md:mb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-2 md:gap-4 mb-8 md:mb-16 flex-wrap"
        >
          <KernMetadata label="ABOUT US" value="MARGINZ Solutions" />
          <KernMetadata label="EXPERTISE" value="MERN Stack Masters" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.8] mb-6 md:mb-12 text-[#0B4F6C]"
        >
          Deploying <br /><span className="text-black/30">Enterprise-Grade</span><br /><span className="text-[#ed1c24] italic">Digital Foundations</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-[1.1] font-medium mb-4 md:mb-8 tracking-tight max-w-4xl"
        >
          The Architecture of Unassailable Digital Resilience
        </motion.p>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-24">
            <div className="lg:col-span-5">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-6 md:mb-10 block">OUR MISSION</span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C] mb-8 md:mb-16">
                Precision <br /><span className="text-black/30 italic font-normal">Engineering</span>
              </h2>
              
              <div className="space-y-6 md:space-y-8 mb-8 md:mb-16">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black leading-[1.2] font-light tracking-tight">
                  MARGINZ is positioned at the definitive apex of digital transformation, where uncompromising resilience is not a feature but a foundational strategic imperative.
                </p>
                <p className="text-base sm:text-lg md:text-lg text-black/80 leading-relaxed">
                  Our mission is to deliver Precision Engineering, crafting high-performance systems that secure a decisive competitive edge for major enterprises. Our enduring narrative is defined by sustained performance: we systematically dissolve operational complexities, achieving near-zero friction across all critical workflows.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-6 md:space-y-12">
                <div className="aspect-[4/3] bg-[#0B4F6C] overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                    alt="MARGINZ Team" 
                    className="w-full h-full object-cover brightness-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F6C]/90 to-transparent flex items-end p-6 md:p-12">
                    <div className="text-white">
                      <h3 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-2 md:mb-4 leading-none">Expert Team</h3>
                      <p className="text-base md:text-xl opacity-90 font-light">22+ Professionals</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="p-6 md:p-10 bg-white border-l-4 border-[#0B4F6C] shadow-sm hover:shadow-xl transition-all">
                    <div className="text-3xl md:text-5xl font-heading font-bold text-[#0B4F6C] mb-2 md:mb-4">99.99%</div>
                    <div className="text-[8px] sm:text-[9px] md:text-xs uppercase tracking-[0.4em] text-black/60 font-bold">Operational Uptime</div>
                  </div>
                  <div className="p-6 md:p-10 bg-white border-l-4 border-[#ed1c24] shadow-sm hover:shadow-xl transition-all">
                    <div className="text-3xl md:text-5xl font-heading font-bold text-[#0B4F6C] mb-2 md:mb-4">70+</div>
                    <div className="text-[8px] sm:text-[9px] md:text-xs uppercase tracking-[0.4em] text-black/60 font-bold">Project Mandates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 md:py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="mb-12 md:mb-24 text-center">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-6 md:mb-10 block">CORE VALUES</span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C] mb-6 md:mb-8">
              Our Core <span className="text-[#ed1c24]/70 italic">Principles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {[
              { 
                t: 'Precision Engineering', 
                d: 'Crafting high-performance systems with meticulous attention to detail and architectural excellence.',
                c: '#0B4F6C' 
              },
              { 
                t: 'Frictionless Framework', 
                d: 'Systematically dissolving operational complexities to achieve near-zero friction across all workflows.',
                c: '#ed1c24' 
              },
              { 
                t: 'Enterprise Uptime', 
                d: 'Guaranteeing maximum operational uptime with resilient, future-proof infrastructure.',
                c: '#0B4F6C' 
              },
              { 
                t: 'Strategic Partnership', 
                d: 'Your essential partner in engineering the infrastructure of tomorrow\'s market leadership.',
                c: '#ed1c24' 
              }
            ].map((v) => (
              <div key={v.t} className="group relative overflow-hidden bg-[#f9f9f9] hover:bg-white transition-all shadow-sm hover:shadow-2xl p-6 md:p-12">
                <div className="absolute top-0 left-0 w-2 h-full transition-all duration-500" style={{ backgroundColor: v.c }}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-black/40">0{[v.t].indexOf(v.t) + 1}</span>
                    <div className="w-12 h-[1px] bg-black/10"></div>
                  </div>
                  <h4 className={`font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 transition-colors`} style={{ color: v.c }}>
                    {v.t}
                  </h4>
                  <p className="text-sm md:text-base text-black/70 leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 md:py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="aspect-[4/3] overflow-hidden shadow-2xl order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80" 
                alt="Technology" 
                className="w-full h-full object-cover brightness-110"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-6 md:mb-10 block">TECHNOLOGY EXCELLENCE</span>
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#0B4F6C] mb-6 md:mb-8 leading-tight">
                Transcendental Stack Mastery
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-black/80 leading-relaxed mb-6 md:mb-8">
                We practice a specialized, client-centric Agile model, engineered to maintain maximum feature flow and zero operational friction.
              </p>
              <p className="text-sm md:text-base text-black/70 leading-relaxed mb-8 md:mb-12">
                Our proprietary methodology combines agile principles with enterprise-grade project management practices, ensuring complex projects are delivered on time while maintaining flexibility to adapt to changing requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                <div className="flex-1 p-6 md:p-8 bg-white border-l-4 border-[#0B4F6C] shadow-sm">
                  <div className="text-2xl md:text-4xl font-heading font-bold text-[#0B4F6C] mb-2">MERN</div>
                  <div className="text-[8px] sm:text-[9px] md:text-xs uppercase tracking-[0.3em] text-black/60 font-bold">Stack Masters</div>
                </div>
                <div className="flex-1 p-6 md:p-8 bg-white border-l-4 border-[#ed1c24] shadow-sm">
                  <div className="text-2xl md:text-4xl font-heading font-bold text-[#0B4F6C] mb-2">24/7</div>
                  <div className="text-[8px] sm:text-[9px] md:text-xs uppercase tracking-[0.3em] text-black/60 font-bold">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="mb-12 md:mb-24 text-center">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C] mb-6 md:mb-8">
              Our <span className="text-[#ed1c24]/70 italic">Approach</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/80 leading-relaxed max-w-3xl mx-auto">
              MARGINZ has perfected a development methodology that combines agile principles with enterprise-grade project management practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
            <div>
              <h3 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#0B4F6C] mb-6 md:mb-8">
                Frictionless Framework
              </h3>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-6 md:mb-8">
                This deliberate process, embodied in our proprietary Frictionless Framework, guarantees maximum enterprise uptime and provides a clear, uninterrupted pathway to your strategic objectives.
              </p>
              <p className="text-sm md:text-base text-black/70 leading-relaxed">
                Our approach ensures that complex projects are delivered on time and exceed client expectations while maintaining flexibility to adapt to changing requirements.
              </p>
            </div>
            <div className="aspect-[4/3] bg-[#0B4F6C]/5 overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                alt="Framework" 
                className="w-full h-full object-cover brightness-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-40 bg-[#f8f9fa] border-t border-black/5 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase mb-8 md:mb-16 text-[#0B4F6C] leading-[0.8]">
            Ready to Build <br /><span className="text-[#ed1c24]/70 italic">Your Future?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/80 leading-relaxed mb-8 md:mb-16 max-w-2xl mx-auto">
            We are your essential partner in engineering the very infrastructure of tomorrow's market leadership.
          </p>
          <button className="group relative px-8 sm:px-12 md:px-20 py-4 md:py-8 bg-[#0B4F6C] text-white font-bold uppercase tracking-[0.5em] text-[8px] sm:text-[9px] md:text-[10px] overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-[#ed1c24] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
