import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ activeSection, onSectionChange, isOpen = false, onClose }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(!isOpen);
    }
  }, [isOpen, isMobile]);

  const menuItems = [
    { id: 'banner', label: 'Trang Chủ', icon: '🏠' },
    { id: 'khai-niem-dan-toc', label: 'Khái niệm dân tộc', icon: '📚' },
    { id: 'chu-nghia-mac-lenin', label: 'Chủ nghĩa Mác-Lênin', icon: '✊' },
    { id: 'dan-toc-viet-nam', label: '54 Dân tộc Việt Nam', icon: '🇻🇳' },
  ];

  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && isMobile && (
        <div
          onClick={() => setIsCollapsed(true)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        />
      )}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: isCollapsed ? '80px' : '280px',
          background: 'linear-gradient(180deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)',
          boxShadow: '4px 0 20px rgba(0, 0, 0, 0.3)',
          zIndex: 1000,
          transition: 'width 0.3s ease',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transform: isMobile && isCollapsed ? 'translateX(-100%)' : 'translateX(0)',
        }}
      >
      {/* Logo/Header */}
      <div
        style={{
          padding: '24px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '80px',
        }}
      >
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: '#ecf0f1',
              fontSize: '20px',
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
          >
            DÂN TỘC & TÔN GIÁO
          </motion.div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#ecf0f1',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '6px',
            fontSize: '18px',
            transition: 'all 0.3s',
            minWidth: '36px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          {isCollapsed ? '☰' : '✕'}
        </button>
      </div>

      {/* Menu Items */}
      <nav
        style={{
          flex: 1,
          padding: '20px 0',
          overflowY: 'auto',
        }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => scrollToSection(item.id)}
            style={{
              padding: isCollapsed ? '16px 20px' : '16px 24px',
              margin: '4px 12px',
              borderRadius: '12px',
              cursor: 'pointer',
              background:
                activeSection === item.id
                  ? 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)'
                  : 'transparent',
              color: activeSection === item.id ? '#fff' : '#bdc3c7',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              transition: 'all 0.3s ease',
              borderLeft: activeSection === item.id ? '4px solid #3498db' : '4px solid transparent',
              boxShadow:
                activeSection === item.id
                  ? '0 4px 12px rgba(52, 152, 219, 0.3)'
                  : 'none',
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = '#ecf0f1';
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#bdc3c7';
              }
            }}
          >
            <span style={{ fontSize: '24px', minWidth: '24px' }}>{item.icon}</span>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  fontSize: '15px',
                  fontWeight: activeSection === item.id ? '600' : '400',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </motion.span>
            )}
          </motion.div>
        ))}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            padding: '20px',
            borderTop: '2px solid rgba(255, 255, 255, 0.1)',
            color: '#95a5a6',
            fontSize: '12px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '11px', opacity: 0.7 }}>
            Vấn đề dân tộc và tôn giáo
          </div>
        </motion.div>
      )}
    </motion.aside>
    </>
  );
};

export default Sidebar;

