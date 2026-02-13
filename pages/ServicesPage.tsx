import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const ScrollSection = ({ children }: { children: React.ReactNode }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="pt-24 md:pt-48 bg-white text-black min-h-screen pb-20 md:pb-40 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1800px] mx-auto mb-20 md:mb-40">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-6 md:mb-8 block"
        >
          BUILDING YOUR DIGITAL ADVANTAGE
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.8] mb-6 md:mb-12 text-[#0B4F6C]"
        >
          Service <br /><span className="text-[#ed1c24] italic">Portfolio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-[1.1] font-medium mb-4 md:mb-8 tracking-tight max-w-4xl"
        >
          What We Build - Key Deliverables
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-black/80 leading-relaxed max-w-3xl"
        >
          Our services are engineered to build and sustain your company's core digital strength. We focus on creating high-performance, stable systems that eliminate operational friction and accelerate your growth.
        </motion.p>
      </section>

      {/* Services Grid */}
      <ScrollSection>
      <section className="py-20 md:py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {SERVICES.map((service, i) => (
              <div key={service.id} className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 p-6 md:p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">{service.number}</span>
                    <div className="w-12 h-[1px] bg-[#0B4F6C]/20"></div>
                  </div>
                  <div className="mb-6">
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-[#0B4F6C]/60 block mb-2">
                      {i === 0 ? 'Innovation' : i === 1 ? 'Quality & Accessibility' : 'Client Success'}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-[#0B4F6C] group-hover:text-[#ed1c24] transition-colors mb-6">
                    {service.title}
                  </h3>
                  <p className="text-black/80 leading-relaxed mb-8 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
                
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="flex items-center gap-2 text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-[#0B4F6C] hover:text-[#ed1c24] transition-colors"
                >
                  Expand
                  {expandedService === service.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {expandedService === service.id && (
                  <div className="mt-8 pt-8 border-t border-black/10">
                    <h4 className="font-heading text-xs md:text-sm font-bold uppercase tracking-tight text-[#0B4F6C] mb-4">
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full flex-shrink-0"></div>
                          <span className="text-xs md:text-sm text-black/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollSection>

      {/* Methodology Section */}
      <ScrollSection>
      <section className="py-20 md:py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="mb-12 md:mb-24 text-center">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C] mb-6 md:mb-8">
              Our Signature <br /><span className="text-[#ed1c24]/70 italic">Development Framework</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed max-w-3xl mx-auto mb-2 md:mb-4">
              MARGINZ Agile-Enterprise Methodology (MAE)
            </p>
            <p className="text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
              Our methodology ensures that complexity is translated into a simple, high-velocity build cycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                phase: '01',
                title: 'Strategic Discovery & Architecture Design',
                description: 'We begin every project with comprehensive discovery sessions that go beyond traditional requirements gathering.',
                features: ['Business Process Analysis', 'Stakeholder Mapping', 'Technical Architecture Planning', 'Risk Assessment & Mitigation']
              },
              {
                phase: '02',
                title: 'Iterative Development with Continuous Validation',
                description: 'Our development process follows iterative cycles that ensure continuous progress while maintaining quality standards.',
                features: ['Sprint Planning Excellence', 'Daily Collaboration', 'Continuous Integration', 'Stakeholder Reviews']
              },
              {
                phase: '03',
                title: 'Quality Assurance & Testing',
                description: 'Our QA process extends beyond traditional testing to include comprehensive validation of business requirements.',
                features: ['Automated Testing Framework', 'User Acceptance Testing', 'Performance Optimization', 'Security Validation']
              }
            ].map((phase) => (
              <div key={phase.phase} className="p-6 md:p-12 bg-[#f9f9f9] border-l-8 border-[#0B4F6C] hover:bg-white transition-all group shadow-sm hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">Phase {phase.phase}</span>
                  <div className="w-12 h-[1px] bg-[#0B4F6C]/20"></div>
                </div>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-[#0B4F6C] group-hover:text-[#ed1c24] transition-colors mb-6">
                  {phase.title}
                </h3>
                <p className="text-black/80 leading-relaxed mb-8 text-sm md:text-base">
                  {phase.description}
                </p>
                <div className="space-y-3">
                  {phase.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#ed1c24] rounded-full flex-shrink-0"></div>
                      <span className="text-xs md:text-sm text-black/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollSection>
    </div>
  );
};

export default ServicesPage;
