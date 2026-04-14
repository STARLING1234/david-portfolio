import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaArrowRight
} from 'react-icons/fa';

const Training = () => {
  const trainingData = [
    {
      title: 'Business Skill Development',
      institution: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
      organization: 'Government of India',
      period: 'Professional Training',
      type: 'Government Certification',
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
    <section id="training" className="section-padding bg-gradient-to-br from-purple-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl animate-float animation-delay-3000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-200/10 rounded-full blur-3xl animate-float animation-delay-1000" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Professional Development
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient"
          >
            Skill <span className="text-purple-600">Building</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
          >
            Formal training under Government of India programs enhancing business expertise and management capabilities
          </motion.p>
        </motion.div>

        {/* Main Training Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl sm:max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {trainingData.map((training, index) => {
            return (
              <motion.div
                key={index}
                variants={scaleVariants}
                className="group"
              >
                <div className="glass-card p-6 sm:p-8 card-hover border border-white/50 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 group-hover:text-purple-600 transition-colors duration-300 mb-3">
                        {training.title}
                      </h3>
                      <p className="text-purple-600 font-semibold text-lg sm:text-xl mb-2">{training.institution}</p>
                      <p className="text-secondary-600 text-base sm:text-lg">{training.organization}</p>
                      <div className="flex justify-center items-center space-x-3 sm:space-x-4 mt-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs sm:text-sm rounded-full font-medium">
                          {training.type}
                        </span>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs sm:text-sm rounded-full font-medium">
                          {training.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-center mb-6">
                      <p className="text-secondary-600 text-base sm:text-lg leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
                        Undertook formal training in Business Skill Development under the Ministry of Micro, Small and Medium Enterprises (MSME), 
                        Government of India, gaining comprehensive knowledge in entrepreneurship, business planning, and management practices.
                      </p>
                    </div>

                    {/* Achievement Badge */}
                    <div className="text-center">
                      <div 
                        onClick={() => window.open('/Training Certificate.pdf', '_blank')}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-primary-600 text-white rounded-full cursor-pointer hover:from-purple-700 hover:to-primary-700 transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="font-semibold">View Certificate</span>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-primary-200/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-purple-200/20 rounded-full blur-2xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Training;
