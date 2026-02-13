import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const KernMetadata = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-bold tracking-[0.4em] text-[#0B4F6C]/70 uppercase">{label}</span>
    <span className="text-xs font-medium text-black/80 tracking-wider uppercase">{value}</span>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="pt-48 bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-40">
        <div className="flex gap-4 mb-16">
          <KernMetadata label="ABOUT US" value="MARGINZ Solutions" />
          <KernMetadata label="EXPERTISE" value="MERN Stack Masters" />
        </div>
        <h1 className="font-heading text-6xl md:text-[11vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#0B4F6C]">
          Deploying <br /><span className="text-black/5">Enterprise-Grade</span><br /><span className="text-[#ed1c24] italic">Digital Foundations</span>
        </h1>
        <p className="text-3xl md:text-4xl text-black leading-[1.1] font-medium mb-8 tracking-tight max-w-4xl">
          The Architecture of Unassailable Digital Resilience
        </p>
      </section>

      {/* Story Section */}
      <section className="py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">OUR MISSION</span>
              <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C] mb-16">
                Precision <br /><span className="text-black/5 italic font-normal">Engineering</span>
              </h2>
              
              <div className="space-y-8 mb-16">
                <p className="text-2xl md:text-3xl text-black leading-[1.2] font-light tracking-tight">
                  MARGINZ is positioned at the definitive apex of digital transformation, where uncompromising resilience is not a feature but a foundational strategic imperative.
                </p>
                <p className="text-lg text-black/80 leading-relaxed">
                  Our mission is to deliver Precision Engineering, crafting high-performance systems that secure a decisive competitive edge for major enterprises. Our enduring narrative is defined by sustained performance: we systematically dissolve operational complexities, achieving near-zero friction across all critical workflows.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-12">
                <div className="aspect-[4/3] bg-[#0B4F6C] overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                    alt="MARGINZ Team" 
                    className="w-full h-full object-cover brightness-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F6C]/90 to-transparent flex items-end p-12">
                    <div className="text-white">
                      <h3 className="font-heading text-5xl font-bold uppercase mb-4 leading-none">Expert Team</h3>
                      <p className="text-xl opacity-90 font-light">22+ Professionals</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-10 bg-white border-l-4 border-[#0B4F6C] shadow-sm hover:shadow-xl transition-all">
                    <div className="text-5xl font-heading font-bold text-[#0B4F6C] mb-4">99.99%</div>
                    <div className="text-xs uppercase tracking-[0.4em] text-black/60 font-bold">Operational Uptime</div>
                  </div>
                  <div className="p-10 bg-white border-l-4 border-[#ed1c24] shadow-sm hover:shadow-xl transition-all">
                    <div className="text-5xl font-heading font-bold text-[#0B4F6C] mb-4">70+</div>
                    <div className="text-xs uppercase tracking-[0.4em] text-black/60 font-bold">Project Mandates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">CORE VALUES</span>
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C] mb-8">
              Our Core <span className="text-[#ed1c24]/30 italic">Principles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
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
            ].map((v, i) => (
              <div key={v.t} className="group relative overflow-hidden bg-[#f9f9f9] hover:bg-white transition-all shadow-sm hover:shadow-2xl p-12">
                <div className="absolute top-0 left-0 w-2 h-full transition-all duration-500" style={{ backgroundColor: v.c }}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/40">0{i + 1}</span>
                    <div className="w-12 h-[1px] bg-black/10"></div>
                  </div>
                  <h4 className={`font-heading text-2xl font-bold uppercase tracking-tight mb-4 transition-colors`} style={{ color: v.c }}>
                    {v.t}
                  </h4>
                  <p className="text-base text-black/70 leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="aspect-[4/3] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                alt="Technology" 
                className="w-full h-full object-cover brightness-110"
              />
            </div>
            
            <div>
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-10 block">TECHNOLOGY EXCELLENCE</span>
              <h3 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#0B4F6C] mb-8 leading-tight">
                Transcendental Stack Mastery
              </h3>
              <p className="text-xl text-black/80 leading-relaxed mb-8">
                We practice a specialized, client-centric Agile model, engineered to maintain maximum feature flow and zero operational friction.
              </p>
              <p className="text-base text-black/70 leading-relaxed mb-12">
                Our proprietary methodology combines agile principles with enterprise-grade project management practices, ensuring complex projects are delivered on time while maintaining flexibility to adapt to changing requirements.
              </p>
              
              <div className="flex gap-8">
                <div className="flex-1 p-8 bg-white border-l-4 border-[#0B4F6C] shadow-sm">
                  <div className="text-4xl font-heading font-bold text-[#0B4F6C] mb-2">MERN</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-black/60 font-bold">Stack Masters</div>
                </div>
                <div className="flex-1 p-8 bg-white border-l-4 border-[#ed1c24] shadow-sm">
                  <div className="text-4xl font-heading font-bold text-[#0B4F6C] mb-2">24/7</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-black/60 font-bold">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C] mb-8">
              Our <span className="text-[#ed1c24]/30 italic">Approach</span>
            </h2>
            <p className="text-xl text-black/80 leading-relaxed max-w-3xl mx-auto">
              MARGINZ has perfected a development methodology that combines agile principles with enterprise-grade project management practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="font-heading text-4xl font-bold uppercase tracking-tight text-[#0B4F6C] mb-8">
                Frictionless Framework
              </h3>
              <p className="text-lg text-black/80 leading-relaxed mb-8">
                This deliberate process, embodied in our proprietary Frictionless Framework, guarantees maximum enterprise uptime and provides a clear, uninterrupted pathway to your strategic objectives.
              </p>
              <p className="text-base text-black/70 leading-relaxed">
                Our approach ensures that complex projects are delivered on time and exceed client expectations while maintaining flexibility to adapt to changing requirements.
              </p>
            </div>
            <div className="aspect-[4/3] bg-[#0B4F6C]/5 overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80" 
                alt="Framework" 
                className="w-full h-full object-cover brightness-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#f8f9fa] border-t border-black/5 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-16 text-[#0B4F6C] leading-[0.8]">
            Ready to Build <br /><span className="text-[#ed1c24]/30 italic">Your Future?</span>
          </h2>
          <p className="text-xl text-black/80 leading-relaxed mb-16 max-w-2xl mx-auto">
            We are your essential partner in engineering the very infrastructure of tomorrow's market leadership.
          </p>
          <button className="group relative px-20 py-8 bg-[#0B4F6C] text-white font-bold uppercase tracking-[0.5em] text-[10px] overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-[#ed1c24] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
