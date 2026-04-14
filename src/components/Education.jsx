import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaBuilding, 
  FaAward, 
  FaBook, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaTrophy
} from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Business Administration',
      institution: 'The American College, Madurai',
      location: 'Madurai, Tamil Nadu',
      period: '2008 - 2010',
      gpa: '8.3',
      type: 'postgraduate',
      highlights: ['Business Strategy', 'Leadership', 'Financial Management', 'Marketing'],
      icon: FaGraduationCap,
      color: 'primary'
    },
    {
      degree: 'PG Dip in Supply Chain Management',
      institution: 'Anna University, Coimbatore',
      location: 'Coimbatore, Tamil Nadu',
      period: '2009',
      gpa: 'N/A',
      type: 'postgraduate',
      highlights: ['Supply Chain Strategy', 'Logistics Management', 'Operations Planning', 'Procurement'],
      icon: FaGraduationCap,
      color: 'primary'
    },
    {
      degree: 'Bachelor of Engineering',
      institution: 'Anna University, Chennai',
      location: 'Chennai, Tamil Nadu',
      period: '2002 - 2007',
      gpa: 'N/A',
      type: 'undergraduate',
      highlights: ['Engineering Fundamentals', 'Technical Skills', 'Project Management', 'Research'],
      icon: FaGraduationCap,
      color: 'primary'
    }
  ];

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

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float animation-delay-3000" />
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
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Academic Journey
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient"
          >
            Education
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
          >
            Strong educational foundation with business and engineering expertise that drives strategic sales leadership
          </motion.p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                variants={scaleVariants}
                className="group"
              >
                <div className="glass-card p-6 md:p-8 card-hover border border-white/50 relative overflow-hidden h-full">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${edu.color}-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-${edu.color}-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-xl md:text-2xl lg:text-3xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-600 font-semibold text-lg">{edu.institution}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-secondary-600">
                        <FaMapMarkerAlt className="mr-2 text-primary-500" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                      <div className="flex items-center text-secondary-600">
                        <FaCalendarAlt className="mr-2 text-primary-500" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      {edu.gpa !== 'N/A' && (
                        <div className="flex items-center text-secondary-600">
                          <FaAward className="mr-2 text-primary-500" />
                          <span className="font-medium">GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-secondary-900 mb-4 flex items-center">
                        <FaBook className="mr-2 text-warning-500" />
                        Key Focus Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 text-sm rounded-full font-medium hover:from-primary-200 hover:to-purple-200 transition-all duration-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 bg-${edu.color}-100 text-${edu.color}-700 text-xs rounded-full font-semibold uppercase tracking-wide`}>
                        {edu.type === 'postgraduate' ? 'Postgraduate' : 'Undergraduate'}
                      </span>
                      <div className="flex items-center text-warning-500">
                        <FaStar className="mr-1" />
                        <span className="text-sm font-medium">Academic Excellence</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-200/20 to-purple-200/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-primary-200/20 rounded-full blur-2xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
