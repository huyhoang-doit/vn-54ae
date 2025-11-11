import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        marginTop: '60px',
        padding: '24px 40px',
        background: 'linear-gradient(135deg, #ecf0f1 0%, #d5dbdb 100%)',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          color: '#555',
          fontSize: '14px',
          lineHeight: '1.6',
        }}
      >
        <p style={{ margin: 0, opacity: 0.8 }}>
          Tài liệu có sử dụng chatbot AI của{' '}
          <span style={{ fontWeight: 600, color: '#3498db' }}>Gemini</span> và{' '}
          <span style={{ fontWeight: 600, color: '#3498db' }}>NoteBookLM</span> để tổng hợp thông tin,{' '}
          <span style={{ fontWeight: 600, color: '#3498db' }}>Claude AI</span> để hỗ trợ code
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

