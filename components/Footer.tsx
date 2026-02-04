
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActivePage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Our Team', id: 'team' },
    { name: 'Our Program', id: 'program' },
    { name: 'Career', id: 'career' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNav = (id: string) => {
    if (setActivePage) {
      setActivePage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white pt-40 pb-20 border-t border-black/5 relative z-10">
      <div className="w-full px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 mb-40">
          <div className="lg:col-span-6">
            <img src="/brix-logo.png" className="h-20 mb-12" alt="BRIX" />
            <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12 text-[#165a72]">
              ADVANTAGE <br /><span className="text-[#165a72]/40">IN KNOWLEDGE.</span>
            </h2>
            <div className="flex gap-10">
              {['LinkedIn', 'Instagram', 'Twitter'].map(s => (
                <a key={s} href="#" className="text-[10px] font-bold tracking-[0.5em] text-[#165a72]/60 uppercase hover:text-[#ed1c24] transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#165a72]/70 uppercase mb-12 block">Structure</span>
            <ul className="space-y-6">
              {sections.map(s => (
                <li key={s.id}>
                  <button 
                    onClick={() => handleNav(s.id)} 
                    className="text-xs font-bold uppercase tracking-widest text-black/70 hover:text-[#165a72] transition-colors"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#165a72]/70 uppercase mb-12 block">Connect</span>
            <div className="space-y-12">
              <div>
                <p className="text-xs font-bold text-[#165a72] uppercase tracking-[0.4em] mb-4">India / Bangalore</p>
                <p className="text-black/70 text-[11px] leading-relaxed font-bold uppercase tracking-widest">
                  Karnataka, India<br />
                  info@brixnet.in<br />
                  +91 80 4131 0000
                </p>
              </div>
              <a href="mailto:info@brixnet.in" className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.5em] uppercase text-[#ed1c24] hover:text-[#165a72] transition-colors border-b border-[#ed1c24]/20 pb-4">
                Inquire <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-black/5 gap-10">
          <div className="text-[9px] font-bold text-[#165a72]/70 uppercase tracking-[0.5em]">
            Authorized Training Partner / Extreme Networks
          </div>
          <div className="text-[9px] font-bold tracking-[0.5em] text-[#165a72]/60 uppercase">
            © 2025 / BRiX Network Pvt Ltd
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
