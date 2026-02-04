import React from 'react';
import { PARTNERS, PROJECTS } from '../constants';

const ProgramPage: React.FC = () => {
  return (
    <div className="pt-48 bg-white text-black min-h-screen pb-40">
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
        <span className="text-[10px] font-bold tracking-[0.6em] text-[#165a72] mb-8 block uppercase">OUR PROGRAM</span>
        <h1 className="font-heading text-7xl md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#165a72]">
          Training Programs <br /><span className="text-[#ed1c24]/60 italic">& Partnerships</span>
        </h1>
        <p className="text-3xl md:text-4xl text-black leading-[1.1] font-medium mb-8 tracking-tight max-w-4xl">
          Comprehensive training programs and strategic partnerships designed to drive excellence and innovation.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl font-bold uppercase tracking-tighter mb-8 text-[#165a72]">Experience Excellence</h2>
              <p className="text-xl text-black leading-relaxed mb-8">
                Experience comprehensive training programs and strategic partnerships that drive exponential growth and innovation.
              </p>
              <p className="text-lg text-black/80 leading-relaxed">
                Our programs and alliances open doors to unparalleled opportunities, empowering businesses to thrive in today's competitive landscape.
              </p>
            </div>
            <div className="aspect-[4/3] bg-[#165a72] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Training Programs" 
                className="w-full h-full object-cover brightness-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#ed1c24] mb-8 block uppercase">Strategic Alliances</span>
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-12">
              Our <span className="text-[#165a72]/40 italic">Partners</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {PARTNERS.map((partner, i) => (
              <div key={partner.id} className="p-16 bg-[#f9f9f9] border-l-8 border-[#165a72] hover:bg-white transition-all group shadow-sm hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img 
                    src={i === 0 ? 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80' : 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80'} 
                    alt={partner.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-[2px] bg-[#ed1c24]"></div>
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">Partner 0{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-3xl font-bold uppercase mb-4 text-[#165a72] group-hover:text-[#ed1c24] transition-colors">
                    {partner.name}
                  </h3>
                  <h4 className="font-heading text-xl font-bold uppercase mb-8 text-[#165a72]/70">
                    {partner.title}
                  </h4>
                  <p className="text-black/80 leading-relaxed text-lg">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Portfolio Section */}
      <section className="py-40 bg-[#f8f9fa] border-t border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#165a72] mb-8 block uppercase">Portfolio</span>
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72]">
              Our Work <span className="text-[#ed1c24]/60 italic">Portfolio</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
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
                    <span className="text-[10px] font-bold text-[#165a72]/70">{project.year}</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold uppercase tracking-tight text-[#165a72] group-hover:text-[#ed1c24] transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-16 text-[#165a72] leading-[0.8]">
            Partner <br /><span className="text-[#ed1c24]/60 italic">With Us</span>
          </h2>
          <p className="text-xl text-black/80 leading-relaxed mb-16 max-w-2xl mx-auto">
            Join our network of strategic alliances and unlock new possibilities for growth and innovation.
          </p>
          <button className="group relative px-20 py-8 bg-[#165a72] text-white font-bold uppercase tracking-[0.5em] text-[10px] overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl">
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-[#ed1c24] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProgramPage;