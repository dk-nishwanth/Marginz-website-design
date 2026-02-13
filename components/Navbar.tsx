
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
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNav = (id: string) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-4 sm:px-6 md:px-12 py-4 md:py-6 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-3 md:py-4 border-b border-black/5' : ''}`}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <button onClick={() => handleNav('home')} className="flex items-center gap-4 group">
            <img 
              src="/marginz logo.jpg" 
              className="h-6 md:h-8 lg:h-10 w-auto object-contain" 
              style={{ maxWidth: '200px' }}
              alt="MARGINZ" 
            />
          </button>

          <div className="flex items-center gap-6 md:gap-12">
            <div className="hidden lg:flex items-center gap-6 md:gap-8">
              {menuItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-[8px] md:text-[9px] lg:text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:text-[#0B4F6C] ${activePage === item.id ? 'text-[#0B4F6C]' : 'text-black/60'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-4 group lg:hidden"
            >
              <div className="w-10 md:w-12 h-10 md:h-12 bg-[#0B4F6C]/5 rounded-full flex items-center justify-center group-hover:bg-[#0B4F6C] group-hover:text-white transition-all duration-500">
                <Menu size={16} className="md:w-5 md:h-5" />
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
            <div className="p-6 md:p-12 flex justify-between items-center">
               <img src="/marginz logo.jpg" alt="MARGINZ" className="h-8 md:h-10" />
               <button 
                onClick={() => setIsOpen(false)}
                className="w-12 md:w-16 h-12 md:h-16 bg-[#0B4F6C] text-white rounded-full flex items-center justify-center hover:bg-[#ed1c24] transition-colors duration-500 shadow-xl"
              >
                <X size={20} className="md:w-7 md:h-7" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24">
              <div className="space-y-4 md:space-y-6">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`block font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[10vw] font-bold tracking-tighter text-left uppercase leading-none hover:text-[#0B4F6C] transition-all duration-500 ${activePage === item.id ? 'text-[#0B4F6C]' : 'text-[#0B4F6C]/40'}`}
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
