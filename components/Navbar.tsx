
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Our Team', id: 'team' },
    { name: 'Our Program', id: 'program' },
    { name: 'Career', id: 'career' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNav = (id: string) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 py-6 md:px-12 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-black/5' : ''}`}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <button onClick={() => handleNav('home')} className="flex items-center gap-4 group">
            <div className="h-10 md:h-12 w-auto flex items-center">
              {/* Replace with actual logo image if hosted, otherwise using a high-fidelity placeholder styled after the brand */}
              <img 
                src="/brix-logo.png" 
                alt="BRIX Network" 
                className="h-full object-contain brightness-100 contrast-125"
              />
            </div>
          </button>

          <div className="flex items-center gap-12">
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:text-[#165a72] ${activePage === item.id ? 'text-[#165a72]' : 'text-black/60'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-4 group lg:hidden"
            >
              <div className="w-12 h-12 bg-[#165a72]/5 rounded-full flex items-center justify-center group-hover:bg-[#165a72] group-hover:text-white transition-all duration-500">
                <Menu size={18} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[200] bg-white text-black flex flex-col"
          >
            <div className="p-12 flex justify-between items-center">
               <img src="/brix-logo.png" alt="BRIX" className="h-12" />
               <button 
                onClick={() => setIsOpen(false)}
                className="w-16 h-16 bg-[#165a72] text-white rounded-full flex items-center justify-center hover:bg-[#ed1c24] transition-colors duration-500 shadow-xl"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-12 md:px-24">
              <div className="space-y-6">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`block font-heading text-6xl md:text-[10vw] font-bold tracking-tighter text-left uppercase leading-none hover:text-[#165a72] transition-all duration-500 ${activePage === item.id ? 'text-[#165a72]' : 'text-black/5'}`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
