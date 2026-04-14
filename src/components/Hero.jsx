import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Phone } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallax = document.getElementById('hero-parallax');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-purple-800 animate-gradient">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated gradient orbs */}
        <div id="hero-parallax" className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" />
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-400 to-primary-400 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-primary-300 to-purple-300 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-4000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full mix-blend-screen filter blur-2xl opacity-40 animate-pulse-slow" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-6xl font-black mb-6 leading-tight text-white tracking-tight text-shadow-xl"
          >
            David Sam
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-primary-200 font-semibold tracking-wide">
              Senior Sales Manager
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed text-shadow"
          >
            Accomplished sales and business leader with rich experience driving revenue growth and strategic partnerships
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="btn-primary bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-700/40 transform hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="btn-secondary border-2 border-white/30 text-white hover:bg-white hover:text-primary-700 hover:text-white backdrop-blur-sm hover:border-white transform hover:scale-105 transition-all duration-300"
            >
              View Experience
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            <a 
              href="https://www.linkedin.com/in/david-sam-he-him-82769b52/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:amz.davidsam@gmail.com"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={20} />
            </a>
            <a 
              href="tel:+916364543615"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-110"
            >
              <Phone size={20} />
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <a
              href="#about"
              className="animate-bounce text-white/80 hover:text-white transition-colors duration-300"
            >
              <FaArrowDown size={30} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
