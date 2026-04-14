import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaMapMarkerAlt,
  FaCheck,
  FaRocket,
  FaHandshake,
  FaChartLine,
  FaStar
} from 'react-icons/fa';
import { Phone } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'amz.davidsam@gmail.com',
      href: 'mailto:amz.davidsam@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+916364543615',
      href: 'tel:+916364543615',
      color: 'primary'
    },
    {
      icon: FaLinkedin,
      target: "_blank",
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/david-sam-he-him-82769b52/',
      color: 'primary'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bangalore, IN',
      href: 'https://maps.google.com/?q=Bangalore,+IN',
      target: '_blank',
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Get In <span className="text-primary-600">Touch</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to discuss how I can help drive your sales success? Let's connect and explore opportunities together.
          </motion.p>
        </motion.div>

        {/* Enhanced Get In Touch Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-8 text-white">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl font-bold mb-4 text-center"
              >
                Let's Build Something Amazing Together
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-primary-100 text-center text-lg"
              >
                I'm here to help you achieve your sales goals and drive exceptional growth
              </motion.p>
            </div>

            {/* Contact Cards Grid */}
            <div className="p-4 sm:p-6 lg:p-8">
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8"
              >
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      target={info.target || '_self'}
                      href={info.href}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`bg-gradient-to-br from-${info.color}-50 to-${info.color === 'primary' ? 'purple' : 'primary'}-50 rounded-2xl p-4 sm:p-6 border border-${info.color}-100 hover:shadow-xl transition-all duration-300 group`}
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-${info.color}-500 to-${info.color === 'primary' ? 'purple' : 'primary'}-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className="text-white text-lg sm:text-xl" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1 font-medium">{info.label}</div>
                          <div className="text-lg font-bold text-gray-900 group-hover:text-${info.color}-600 transition-colors duration-300">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Why Work With Me Section */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 border border-primary-100"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  <FaStar className="text-warning-500 mr-2" />
                  Why Partner With Me?
                  <FaStar className="text-warning-500 ml-2" />
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: FaRocket, text: "Proven track record of exceeding sales targets by 150%+" },
                    { icon: FaHandshake, text: "Expertise in building high-performing sales teams" },
                    { icon: FaChartLine, text: "Strategic approach to market expansion" },
                    { icon: FaCheck, text: "Strong client relationship management skills" }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-white text-sm" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Accelerate Your Sales Growth?
            </h3>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss how my expertise can help you achieve your sales targets and build a winning team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:amz.davidsam@gmail.com" className="btn-primary bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-700/40 transform hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white">
                Schedule a Consultation
              </a>
              <a href="tel:+916364543615" className="btn-secondary border-2 border-white/30 text-white hover:bg-white hover:text-primary-700 hover:text-white backdrop-blur-sm hover:border-white transform hover:scale-105 transition-all duration-300">
                Call Directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
