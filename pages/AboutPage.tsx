import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../constants';

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
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-40">
        <div className="flex gap-4 mb-16">
          <KernMetadata label="ABOUT US" value="BRiX Network" />
          <KernMetadata label="FOUNDED" value="Nov 2014" />
        </div>
        <h1 className="font-heading text-6xl md:text-[11vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#165a72]">
          Delivering <br /><span className="text-[#165a72]/40">Trust Through</span><br /><span className="text-[#ed1c24] italic">Knowledge</span>
        </h1>
        <p className="text-3xl md:text-4xl text-black leading-[1.1] font-medium mb-8 tracking-tight max-w-4xl">
          A pure play Knowledge Transfer Organization committed to excellence, innovation, and professional service delivery since November 2014.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-heading text-5xl font-bold uppercase tracking-tighter mb-12 text-[#165a72]">Our DNA Culture</h2>
            <p className="text-xl text-black leading-relaxed mb-16">
              Innovation is ingrained in our DNA. We thrive on challenging the status quo and empowering minds through transformative knowledge transfer. At BRIX, we're not just purveyors of information—we're architects of transformation, fostering excellence at each level of service delivery.
            </p>
            
            {/* Core Values */}
            <div className="mb-16">
              <h3 className="font-heading text-3xl font-bold uppercase tracking-tighter mb-8 text-[#165a72]">Our Core Values</h3>
              <p className="text-lg text-black/80 leading-relaxed mb-12">
                The foundation upon which BRIX is built, brick by brick
              </p>
              
              <div className="grid sm:grid-cols-2 gap-px bg-black/10">
                {[
                  { t: 'Innovation', d: 'Pushing boundaries and turning dreams into reality through cutting-edge solutions.', c: '#165a72' },
                  { t: 'Excellence', d: 'Commitment to delivering trust and quality in every knowledge transfer initiative.', c: '#ed1c24' },
                  { t: 'Collaboration', d: 'Fostering a culture of inclusiveness, accountability, and shared success.', c: '#165a72' },
                  { t: 'Transformation', d: 'Empowering individuals and organizations to thrive in an ever-changing landscape.', c: '#ed1c24' }
                ].map(v => (
                  <div key={v.t} className="p-12 bg-white flex flex-col justify-between aspect-square group">
                    <h4 className={`font-heading font-bold uppercase tracking-widest transition-colors group-hover:text-black mb-4`} style={{ color: v.c }}>
                      {v.t}
                    </h4>
                    <p className="text-sm text-black/70 leading-relaxed">{v.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="aspect-square bg-[#165a72] p-16 flex flex-col justify-end text-white shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" alt="Story Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h3 className="font-heading text-6xl font-bold uppercase mb-8 leading-none">Brick by Brick.</h3>
              <p className="text-lg opacity-90 font-light max-w-sm mb-8">
                BRiX Network Pvt Ltd, established in November 2014, is a distinguished Knowledge Transfer Organization and Authorized Training Partner of Extreme Networks across PAN India.
              </p>
              <p className="text-base opacity-80 font-light max-w-sm mb-12">
                We've strategically allied with leading global organizations and OEMs, bolstered by Subject Matter Experts, Lead Auditors, and Cyber Security Specialists.
              </p>
              <div className="w-20 h-20 bg-[#ed1c24] flex items-center justify-center rounded-full group cursor-pointer hover:scale-110 transition-transform">
                 <ArrowUpRight size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-12">
                Strategic <br /><span className="text-[#ed1c24]/60 italic">Partnerships</span>
              </h2>
              <div className="space-y-8">
                <div className="p-8 bg-[#f9f9f9] border-l-8 border-[#165a72]">
                  <h4 className="font-heading text-xl font-bold uppercase tracking-tight text-[#165a72] mb-4">
                    Strategic Partnerships
                  </h4>
                  <p className="text-black/80 leading-relaxed">
                    We've strategically allied with leading global organizations and OEMs, bolstered by Subject Matter Experts, Lead Auditors, and Cyber Security Specialists.
                  </p>
                </div>
                
                <div className="p-8 bg-[#f9f9f9] border-l-8 border-[#ed1c24]">
                  <h4 className="font-heading text-xl font-bold uppercase tracking-tight text-[#165a72] mb-4">
                    Academic Excellence
                  </h4>
                  <p className="text-black/80 leading-relaxed">
                    Through our subsidiary, Savant Networks Academy, we partner with premier universities to establish Knowledge Transfer Centers, elevating student skillsets nationwide.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-[#165a72] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Strategic Partnerships" 
                className="w-full h-full object-cover brightness-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-40 bg-[#f8f9fa] border-t border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-8">
              What We <span className="text-[#ed1c24]/60 italic">Do</span>
            </h2>
          </div>

          <div className="space-y-4">
            {SERVICES.map((service, i) => (
              <div key={service.id} className="bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-[#165a72]/5 transition-colors"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">
                      {service.number}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#165a72]">
                      {service.title}
                    </h3>
                  </div>
                  {expandedService === service.id ? (
                    <ChevronUp size={24} className="text-[#165a72]" />
                  ) : (
                    <ChevronDown size={24} className="text-[#165a72]" />
                  )}
                </button>
                
                {expandedService === service.id && (
                  <div className="px-8 pb-8 border-t border-black/5">
                    <div className="pt-8 grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-lg text-black/80 leading-relaxed mb-8">
                          {service.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-[#165a72] mb-6">
                          Sub-items
                        </h4>
                        <div className="space-y-3">
                          {service.features.map((feature, j) => (
                            <div key={j} className="flex items-center gap-4">
                              <div className="w-2 h-2 bg-[#ed1c24] rounded-full"></div>
                              <span className="text-sm text-black/70">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;