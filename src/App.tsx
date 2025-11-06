import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import ContentSection from './components/ContentSection';
import MobileMenuButton from './components/MobileMenuButton';
import { motion } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('banner');
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background" style={{ display: 'flex' }}>
        {isMobile && <MobileMenuButton onClick={() => setSidebarOpen(!sidebarOpen)} />}
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div
          style={{
            marginLeft: isMobile ? '0' : '280px',
            width: isMobile ? '100%' : 'calc(100% - 280px)',
            transition: 'margin-left 0.3s ease',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Banner />
            <main style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
              <ContentSection />
            </main>
          </motion.div>
        </div>
      </div>
    </Router>
  );
}
export default App;