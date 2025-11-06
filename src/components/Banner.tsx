import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bannerStyle = {
    position: 'relative' as const,
    height: '500px',
    backgroundImage: 'url("/images/banner31.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed' as const,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    scrollMarginTop: '64px',
  };

  const overlayStyle = {
    position: 'absolute' as const,
    inset: 0,
    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.4) 0%, rgba(46, 204, 113, 0.35) 50%, rgba(231, 76, 60, 0.3) 100%)',
  };

  const contentStyle = {
    position: 'absolute' as const,
    textAlign: 'center' as const,
    zIndex: 10,
    width: '90%',
    maxWidth: '1000px',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '3px 3px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
    fontFamily: '"Roboto Condensed", sans-serif',
    letterSpacing: '1.5px',
    textTransform: 'uppercase' as const,
    lineHeight: '1.3',
  };

  // Tách text thành từng chữ để animate riêng
  const titleText = 'VẤN ĐỀ DÂN TỘC VÀ TÔN GIÁO TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI';
  const words = titleText.split(' ');

  // Floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  // Framer motion container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      id="banner"
      style={bannerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated overlay với gradient */}
      <motion.div
        style={overlayStyle}
        animate={{
          background: [
            'linear-gradient(135deg, rgba(52, 152, 219, 0.4) 0%, rgba(46, 204, 113, 0.35) 50%, rgba(231, 76, 60, 0.3) 100%)',
            'linear-gradient(135deg, rgba(46, 204, 113, 0.4) 0%, rgba(231, 76, 60, 0.35) 50%, rgba(52, 152, 219, 0.3) 100%)',
            'linear-gradient(135deg, rgba(52, 152, 219, 0.4) 0%, rgba(46, 204, 113, 0.35) 50%, rgba(231, 76, 60, 0.3) 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.6)',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            zIndex: 5,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Decorative shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '3px solid rgba(255, 255, 255, 0.2)',
          zIndex: 5,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          width: '80px',
          height: '80px',
          borderRadius: '20px',
          border: '3px solid rgba(255, 255, 255, 0.2)',
          zIndex: 5,
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Parallax content */}
      <motion.div
        style={contentStyle}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
      >
        <motion.div
          style={titleStyle}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={itemVariants}
              style={{
                display: 'inline-block',
                marginRight: '0.4em',
                marginBottom: '0.2em',
              }}
              whileHover={{
                scale: 1.1,
                color: '#f1c40f',
                textShadow: '0 0 20px rgba(241, 196, 15, 0.8)',
                transition: { duration: 0.2 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle với animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            fontSize: '18px',
            fontWeight: 300,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            letterSpacing: '1px',
            marginTop: '16px',
            color: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          Dân tộc và quan hệ dân tộc ở Việt Nam
        </motion.div>
      </motion.div>

      {/* Bottom wave effect */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(to top, rgba(236, 240, 241, 0.95), transparent)',
          zIndex: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </motion.div>
  );
};

export default Banner;