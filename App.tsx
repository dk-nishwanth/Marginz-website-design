
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 38);
    const timeout = setTimeout(() => setLoading(false), 4200);
    return () => { clearInterval(timer); clearTimeout(timeout); };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center w-full max-w-md px-12">
          <div className="mb-16 flex items-center justify-center">
            <img 
              src="/marginz logo.jpg" 
              className="h-20 w-auto object-contain" 
              alt="MARGINZ" 
            />
          </div>
          <div className="w-full h-[1px] bg-black/5 relative mb-4">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-[#0B4F6C]" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[9px] font-bold tracking-[0.5em] text-[#0B4F6C]/60 uppercase">
            <span>Systems Online</span>
            <span>{progress}%</span>
          </div>
        </motion.div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="relative selection:bg-[#165a72] selection:text-white min-h-screen bg-white overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderContent()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default App;
