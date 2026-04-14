import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaAward, 
  FaCertificate, 
  FaGraduationCap, 
  FaStar, 
  FaCheckCircle, 
  FaExternalLinkAlt,
  FaCalendar,
  FaBuilding,
  FaMedal,
  FaTrophy,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaClock,
  FaGlobe,
  FaBriefcase
} from 'react-icons/fa';

const Certifications = () => {

  const certifications = [
    {
      title: 'Channel Management and Retailing',
      issuer: 'IE Business School',
      organization: '',
      date: 'May 2020',
      category: 'business',
      level: 'Professional',
      status: 'Completed',
      credentialId: 'IE-CMR-2020-001',
      skills: ['Channel Strategy', 'Retail Management', 'Distribution Planning', 'Sales Operations'],
      description: 'Professional certification in channel management and retailing from IE Business School, covering strategic distribution and retail operations.',
      icon: FaAward,
      color: 'primary',
      verified: true,
      featured: true
    },
    {
      title: 'Negotiation: Essential Strategy & Skills',
      issuer: 'Coursera',
      organization: '',
      date: 'May 2020',
      category: 'business',
      level: 'Professional',
      status: 'Completed',
      credentialId: 'COUR-NEG-2020-002',
      skills: ['Negotiation Strategy', 'Communication Skills', 'Conflict Resolution', 'Deal Making'],
      description: 'Comprehensive negotiation certification from Coursera covering essential strategies and skills for effective negotiation in business contexts.',
      icon: FaCertificate,
      color: 'primary',
      verified: true,
      featured: true
    },
    {
      title: 'Strategy Masterclass',
      issuer: 'PepsiCo',
      organization: '',
      date: 'N/A',
      category: 'business',
      level: 'Executive',
      status: 'Completed',
      credentialId: 'PEPSI-STRAT-003',
      skills: ['Strategic Planning', 'Business Analysis', 'Market Strategy', 'Leadership'],
      description: 'Executive strategy masterclass from PepsiCo focusing on advanced strategic planning, business analysis, and market leadership development.',
      icon: FaTrophy,
      color: 'primary',
      verified: true,
      featured: true
    }
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const displayCertifications = certifications;

  return (
    <section id="certifications" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl animate-float animation-delay-3000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-200/10 rounded-full blur-3xl animate-float animation-delay-1000" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Professional Certifications
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient"
          >
            Certifications
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
          >
            Professional certifications that validate expertise and commitment to continuous learning in business, sales, and leadership domains
          </motion.p>
        </motion.div>


        {/* Certification Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {displayCertifications.map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <motion.div
                key={index}
                variants={scaleVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div 
                  className={`glass-card p-6 card-hover border border-white/50 relative overflow-hidden ${
                    cert.featured ? 'ring-2 ring-blue-200 ring-offset-2' : ''
                  }`}
                >
                  {/* Featured Badge */}
                  {cert.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <FaStar className="text-yellow-300" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Verification Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <FaCheckCircle />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${cert.color}-500/5 to-${cert.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-6 mt-8">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${cert.color}-500 to-${cert.color}-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mx-auto mb-4`}>
                        <Icon className="text-white text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                        {cert.title}
                      </h3>
                      <p className={`${cert.color}-600 font-semibold text-sm mb-1`}>{cert.issuer}</p>
                      <p className="text-secondary-600 text-sm">{cert.organization}</p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <span className={`px-2 py-1 bg-${cert.color}-100 text-${cert.color}-700 text-xs rounded-full font-medium`}>
                        {cert.level}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium flex items-center space-x-1">
                        <FaCalendar className="text-xs" />
                        <span>{cert.date}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-secondary-600 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-primary-200/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-blue-200/20 rounded-full blur-2xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
