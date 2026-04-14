import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendar, 
  FaTrophy, 
  FaChartLine, 
  FaMapMarkerAlt,
  FaFilter,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaIndustry,
  FaStar,
  FaArrowRight,
  FaUsers
} from 'react-icons/fa';
import abinbevLogo from '../assets/abinbev.jpg';
import lorealLogo from '../assets/LOreal_logo.svg.png';
import redbullLogo from '../assets/redbull.avif';
import pepsicoLogo from '../assets/pepsico.jpg';
import relianceLogo from '../assets/Reliance_Communications_Logo.svg.png';
import hdfcLogo from '../assets/HDFC-Bank.png';

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'timeline'

  // Company logo mapping
  const companyLogos = {
    'Ab In-Bev India Pvt Ltd': abinbevLogo,
    'Loreal India Pvt Ltd': lorealLogo,
    'Redbull India Pvt Ltd': redbullLogo,
    'PepsiCo India Holding Pvt Ltd': pepsicoLogo,
    'Reliance Communications Ltd': relianceLogo,
    'HDFC Bank Ltd': hdfcLogo
  };
  const experiences = [
    {
      title: 'Area Sales Manager',
      company: 'Ab In-Bev India Pvt Ltd',
      period: 'Nov 2023 - Present',
      location: 'Karnataka',
      achievements: [
        'Directed P&L management for Karnataka territory, optimizing resource allocation to ensure profitability',
        'Developed and mentored high-performing sales team of 15 Spartans and 7 SDPs from inception',
        'Established comprehensive sales operations and implemented Route to Market (RTM) strategy from ground up',
        'Pioneered launch of \'Hurricane\' product line, achieving 10% market share within two years'
      ],
      highlights: ['P&L Management', 'Team Leadership', 'Route to Market', 'Product Launch']
    },
    {
      title: 'Area Sales Manager',
      company: 'Loreal India Pvt Ltd',
      period: 'Jul 2022 - Nov 2023',
      location: 'Karnataka',
      achievements: [
        'Oversaw territory sales operations and cultivated digital strategies within salon industry',
        'Integrated social commerce across 750+ new salons, securing partnerships with 90% of A & B category salons',
        'Negotiated key account partnership with prominent spin salon chain, generating 50 lakh annual revenue',
        'Revitalized go-to-market strategy, significantly expanding market coverage and touchpoints'
      ],
      highlights: ['Digital Strategy', 'Social Commerce', 'Key Account Management', 'GTM Strategy']
    },
    {
      title: 'Distributor Partner Manager',
      company: 'Redbull India Pvt Ltd',
      period: 'May 2020 - Jul 2022',
      location: 'South Karnataka',
      achievements: [
        'Managed distributor partner relations across designated geographical territory',
        'Expanded town coverage by 2x through establishing 34 new sub-distributor partnerships',
        'Implemented successful display program enrolling over 400 Eating & Drinking outlets',
        'Deployed \'Project Octopus\' initiative, onboarding 650+ new outlets within nine months'
      ],
      highlights: ['Distributor Management', 'Network Expansion', 'Display Programs', 'Project Management']
    },
    {
      title: 'Area Sales Incharge',
      company: 'PepsiCo India Holding Pvt Ltd',
      period: 'Apr 2012 - May 2020',
      location: 'Bangalore',
      achievements: [
        'Administered sales and distribution operations, expanding on-premise and off-premise channels',
        'Expanded on-premise distribution channel, adding 100+ new outlets with 45% year-to-date sales growth',
        'Secured major event sponsorships at NIT - Festember and Pragyan, displacing competitors',
        'Doubled foods business revenue from 1.72 crore to 3.1 crore over three-year period'
      ],
      highlights: ['Channel Distribution', 'Event Sponsorship', 'Revenue Growth', 'Territory Management']
    },
    {
      title: 'Channel Sales Manager',
      company: 'Reliance Communications Ltd',
      period: 'May 2011 - Apr 2012',
      location: 'Chennai',
      achievements: [
        'Directed channel sales activities within designated territory, driving revenue growth',
        'Strengthened relationships with channel partners, optimizing distribution networks',
        'Implemented strategic signage campaigns, increasing on-time activations significantly',
        'Doubled revenue within assigned territory through effective channel management strategies'
      ],
      highlights: ['Channel Sales', 'Partner Relations', 'Distribution Optimization', 'Revenue Growth']
    },
    {
      title: 'Personal Banker',
      company: 'HDFC Bank Ltd',
      period: 'Jun 2010 - May 2011',
      location: 'Chennai',
      achievements: [
        'Built and managed portfolio of high-net-worth individual clients, providing personalized financial advice',
        'Expanded customer base by acquiring new HNI clients and deepening existing relationships',
        'Drove growth of Current Account and Savings Account deposits through focused sales strategies',
        'Exceeded sales targets, generating 5+ crore in CASA deposits within first year'
      ],
      highlights: ['HNI Management', 'Wealth Management', 'Deposit Growth', 'Client Acquisition']
    }
  ];


  const displayExperiences = experiences;

  const toggleCardExpansion = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float animation-delay-3000" />
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
              Professional Journey
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient"
          >
            Career Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
          >
            A track record of driving exceptional sales performance and building successful teams across diverse industries
          </motion.p>
        </motion.div>

        {/* Interactive Controls */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-12"
        >
          {/* View Mode Toggle */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/50">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  viewMode === 'cards'
                    ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-md'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                <FaBriefcase className="inline mr-2" />
                Cards View
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  viewMode === 'timeline'
                    ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-md'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                <FaCalendar className="inline mr-2" />
                Timeline View
              </button>
            </div>
          </motion.div>
          
        </motion.div>

        {/* Dynamic Content Display */}
        <AnimatePresence mode="wait">
          {viewMode === 'cards' ? (
            <motion.div
              key="cards-view"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="grid gap-8"
            >
              {displayExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  layout
                  className="group"
                >
                  <div className="glass-card p-8 card-hover border border-white/50 relative overflow-hidden cursor-pointer"
                       onClick={() => toggleCardExpansion(index)}>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-gray-200">
                            <img 
                              src={companyLogos[exp.company]} 
                              alt={exp.company}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-primary-600 font-semibold text-lg">{exp.company}</p>
                          </div>
                          <div className="md:hidden">
                            {expandedCard === index ? <FaChevronUp /> : <FaChevronDown />}
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:items-end space-y-2">
                          <div className="flex items-center text-secondary-600">
                            <FaCalendar className="mr-2 text-primary-500" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center text-secondary-600">
                            <FaMapMarkerAlt className="mr-2 text-primary-500" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Achievements */}
                      <AnimatePresence>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: expandedCard === index ? 'auto' : 0, opacity: expandedCard === index ? 1 : 0 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-6">
                            <h4 className="text-lg font-bold text-secondary-900 mb-4 flex items-center">
                              <FaTrophy className="mr-2 text-warning-500" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, idx) => (
                                <motion.li 
                                  key={idx} 
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start group/item"
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                                  <span className="text-secondary-700 leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Skills/Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 text-sm rounded-full font-medium hover:from-primary-200 hover:to-purple-200 transition-all duration-300 cursor-default"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Expand/Collapse Indicator */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center text-primary-600 font-medium">
                          {expandedCard === index ? (
                            <><FaChevronUp className="mr-1" /> Show Less</>
                          ) : (
                            <><FaChevronDown className="mr-1" /> Show More</>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-200/20 to-purple-200/20 rounded-full blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-primary-200/20 rounded-full blur-2xl" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="timeline-view"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-500" />
              
              {displayExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-500 rounded-full z-10 shadow-lg" />
                  
                  {/* Content Card */}
                  <motion.div
                    variants={itemVariants}
                    className={`ml-20 md:ml-0 md:w-5/12 glass-card p-6 card-hover border border-white/50 ${
                      index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden border border-gray-200">
                        <img 
                          src={companyLogos[exp.company]} 
                          alt={exp.company}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900">{exp.title}</h3>
                        <p className="text-primary-600 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-secondary-600 text-sm">
                        <FaCalendar className="mr-2 text-primary-500" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-secondary-600 text-sm">
                        <FaMapMarkerAlt className="mr-2 text-primary-500" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 text-xs rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {exp.highlights.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                          +{exp.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float animation-delay-2000" />
            </div>
            
            <div className="relative z-10">
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Career Impact</h3>
                <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                  Transforming businesses through strategic leadership and exceptional sales performance
                </p>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '15+', label: 'Years Experience', icon: FaCalendar },
                  { value: '$50M+', label: 'Revenue Generated', icon: FaChartLine },
                  { value: '200+', label: 'Team Members Led', icon: FaUsers },
                  { value: '15+', label: 'Industry Awards', icon: FaTrophy }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="text-center group"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                        <Icon className="text-3xl mb-3 mx-auto text-primary-200" />
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                          className="text-4xl font-bold mb-2"
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-primary-100 text-sm font-medium">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Call to Action */}
              <motion.div 
                variants={itemVariants}
                className="text-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/David Sam SM Resume.pdf', '_blank')}
                  className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 hover:shadow-xl transition-shadow duration-300"
                >
                  <span>View Full Resume</span>
                  <FaArrowRight />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
