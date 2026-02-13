
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActivePage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
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
            <img src="/marginz logo.jpg" className="h-20 mb-12" alt="MARGINZ" />
            <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12 text-[#0B4F6C]">
              MARGINZ <br /><span className="text-[#0B4F6C]/40">SOLUTIONS</span>
            </h2>
            <p className="text-lg text-black/70 leading-relaxed mb-12 max-w-md">
              Transforming your digital vision into powerful business assets
            </p>
            <div className="flex gap-10">
              {['LinkedIn', 'Instagram', 'Twitter'].map(s => (
                <a key={s} href="#" className="text-[10px] font-bold tracking-[0.5em] text-[#0B4F6C]/60 uppercase hover:text-[#ed1c24] transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#0B4F6C]/70 uppercase mb-12 block">Structure</span>
            <ul className="space-y-6">
              {sections.map(s => (
                <li key={s.id}>
                  <button 
                    onClick={() => handleNav(s.id)} 
                    className="text-xs font-bold uppercase tracking-widest text-black/70 hover:text-[#0B4F6C] transition-colors"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#0B4F6C]/70 uppercase mb-12 block">Connect</span>
            <div className="space-y-12">
              <div>
                <p className="text-xs font-bold text-[#0B4F6C] uppercase tracking-[0.4em] mb-4">India / Chennai</p>
                <p className="text-black/70 text-[11px] leading-relaxed font-bold uppercase tracking-widest">
                  5th Floor, The Executive Center<br />
                  Tamarai Tech Park, Guindy<br />
                  devx.marginz@gmail.com<br />
                  +91 98400 00000
                </p>
              </div>
              <a href="mailto:devx.marginz@gmail.com" className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.5em] uppercase text-[#ed1c24] hover:text-[#0B4F6C] transition-colors border-b border-[#ed1c24]/20 pb-4">
                Inquire <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-black/5 gap-10">
          <div className="text-[9px] font-bold text-[#0B4F6C]/70 uppercase tracking-[0.5em]">
            IT Solutions & Service Company
          </div>
          <div className="text-[9px] font-bold tracking-[0.5em] text-[#0B4F6C]/60 uppercase">
            © 2026 / MARGINZ. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
