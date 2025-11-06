import { motion } from 'framer-motion';

interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1001,
        background: 'linear-gradient(135deg, #3498db 0%, #2ecc71 100%)',
        border: 'none',
        color: 'white',
        width: '50px',
        height: '50px',
        borderRadius: '12px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
      }}
    >
      ☰
    </motion.button>
  );
};

export default MobileMenuButton;

