import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaTrophy, label: 'Sales Awards', value: '15+', description: 'Industry recognition' },
    { icon: FaUsers, label: 'Team Size', value: '50+', description: 'Professionals led' },
    { icon: FaChartLine, label: 'Revenue Growth', value: '100%', description: 'Average increase' },
    { icon: FaHandshake, label: 'Client Partnerships', value: '100+', description: 'Long-term relationships' },
  ];

  const expertise = [
    {
      title: 'Sales Management & Strategy',
      description: 'Extensive experience in sales management, distribution network optimization, and strategic partnerships, consistently exceeding revenue targets.',
      highlights: ['Revenue Growth', 'Strategic Partnerships', 'Market Expansion']
    },
    {
      title: 'Go-to-Market Strategy',
      description: 'Proven ability to develop and implement go-to-market strategies, demonstrated by achieving doubled sales revenue growth and securing market share.',
      highlights: ['Market Analysis', 'Route to Market', 'Distribution Strategy']
    },
    {
      title: 'Channel Sales & Distribution',
      description: 'Expertise in channel sales and distributor management, demonstrated by expanding town coverage and establishing new sub-distributor partnerships.',
      highlights: ['Channel Sales', 'Distributor Management', 'Market Penetration']
    },
    {
      title: 'P&L Management & Business Development',
      description: 'Proficient in P&L management, market analysis, and business development, ensuring profitability and effective resource allocation.',
      highlights: ['P&L Management', 'Business Development', 'Resource Allocation']
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
    <section id="about" className="section-padding bg-white">
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
            About <span className="text-primary-600">Me</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            I am a results-driven sales and business leader with over a decade of experience across FMCG, beverages, beauty, and telecom sectors. I specialize in sales management, go-to-market strategy, distributor and key account management, and P&L ownership. Known for driving 2x revenue growth, launching new product lines to achieve double‑digit market share, and expanding distribution networks at scale. I thrive in building high-performing teams, forging strategic partnerships, and delivering sustainable growth across competitive markets.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <stat.icon className="text-primary-600 group-hover:text-white text-2xl transition-colors duration-300" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-8"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Core Expertise
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
