
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ProgramPage from './pages/ProgramPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'about':
        return <AboutPage />;
      case 'team':
        return <TeamPage />;
      case 'program':
        return <ProgramPage />;
      case 'career':
        return <CareerPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="relative selection:bg-[#165a72] selection:text-white min-h-screen bg-white overflow-hidden">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderContent()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default App;
