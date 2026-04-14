import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRunning, 
  FaMedal, 
  FaTrophy, 
  FaStopwatch, 
  FaHeartbeat,
  FaFire,
  FaStar,
  FaChartLine,
  FaRoad,
  FaUsers,
  FaAward,
  FaBolt,
  FaFlagCheckered,
  FaGraduationCap,
  FaGamepad,
  FaMusic,
  FaBook,
  FaCamera,
  FaMountain,
  FaBicycle
} from 'react-icons/fa';

const PersonalInterest = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const interests = [
    {
      id: 'running',
      title: '10K Race Running',
      subtitle: 'Consistent Participant',
      description: 'Dedicated 10K race participant with proven performance & consistent training.',
      achievement: 'Working towards sub-45 timing',
      icon: FaRunning,
      color: 'primary',
      stats: {
        races: '30+',
        bestTime: '48:32',
        targetTime: '45:00',
        frequency: 'Weekly'
      },
      highlights: ['Endurance', 'Speed Training', 'Consistency', 'Goal Setting'],
      featured: true,
      bgGradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'badminton',
      title: 'Shuttle Badminton',
      subtitle: 'District-Level Winner',
      description: 'Achieved district-level victory in school shuttle badminton team competition.',
      achievement: 'Team Champion',
      icon: FaMedal,
      color: 'secondary',
      stats: {
        level: 'District',
        position: '1st Place',
        achievement: 'Team Winner',
        category: 'Shuttle'
      },
      highlights: ['Teamwork', 'Strategy', 'Agility', 'Competition'],
      featured: true,
      bgGradient: 'from-purple-500 to-pink-500'
    }
  ];

  const runningMilestones = [
    { icon: FaFlagCheckered, label: 'First 10K', achieved: true },
    { icon: FaStopwatch, label: 'Sub-50 Minute', achieved: true },
    { icon: FaBolt, label: 'Sub-45 Minute', achieved: false, target: true },
    { icon: FaTrophy, label: 'Top 10 Finish', achieved: false, target: true }
  ];

  const badmintonAchievements = [
    { icon: FaAward, label: 'District Champion', achieved: true },
    { icon: FaUsers, label: 'Team Captain', achieved: true },
    { icon: FaStar, label: 'Best Smasher', achieved: true },
    { icon: FaMedal, label: 'Sportsmanship Award', achieved: true }
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

  const slideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="personal-interest" className="section-padding bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-200/20 rounded-full blur-3xl animate-float animation-delay-3000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-float animation-delay-1000" />
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
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Personal Interests
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient"
          >
            Beyond <span className="text-orange-600">Professional Life</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
          >
            Active lifestyle and competitive spirit that drives personal growth and work-life balance
          </motion.p>
        </motion.div>

        {/* Main Interest Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            const isSelected = selectedInterest === interest.id;
            const isHovered = hoveredCard === interest.id;
            
            return (
              <motion.div
                key={interest.id}
                variants={scaleVariants}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(interest.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setSelectedInterest(isSelected ? null : interest.id)}
                className="group cursor-pointer"
              >
                <div className={`glass-card p-8 card-hover border border-white/50 relative overflow-hidden ${
                  isSelected ? 'ring-4 ring-orange-300 ring-offset-4' : ''
                } ${interest.featured ? 'shadow-2xl' : 'shadow-lg'}`}>
                  {/* Featured Badge */}
                  {interest.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1"
                      >
                        <FaStar className="text-yellow-300" />
                        <span>Featured</span>
                      </motion.div>
                    </div>
                  )}

                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${interest.bgGradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      animate={{ 
                        rotate: isHovered ? 360 : 0,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 bg-gradient-to-br ${interest.bgGradient} rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-6`}
                    >
                      <Icon className="text-white text-3xl" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-orange-600 transition-colors duration-300 mb-2 text-center">
                      {interest.title}
                    </h3>
                    <p className={`${interest.color}-600 font-semibold text-lg mb-4 text-center`}>
                      {interest.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-secondary-600 text-center mb-4">
                      {interest.description}
                    </p>

                    {/* Achievement */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full">
                        <FaTrophy className="text-orange-600" />
                        <span className="font-semibold">{interest.achievement}</span>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(interest.stats).map(([key, value], idx) => (
                        <motion.div
                          key={key}
                          variants={slideVariants}
                          custom={idx}
                          className="text-center p-3 bg-white/50 rounded-xl backdrop-blur-sm border border-white/30"
                        >
                          <div className="text-lg font-bold text-secondary-900">{value}</div>
                          <div className="text-xs text-secondary-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {interest.highlights.map((highlight, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * idx }}
                            className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs rounded-full font-medium"
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    <motion.div
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full text-orange-600">
                        <FaHeartbeat />
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-2xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed View */}
        <AnimatePresence>
          {selectedInterest && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              {selectedInterest === 'running' && (
                <motion.div
                  variants={slideVariants}
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200"
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center flex items-center justify-center">
                    <FaRunning className="mr-3 text-blue-600" />
                    Running Journey & Milestones
                    <FaRunning className="ml-3 text-blue-600" />
                  </h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {runningMilestones.map((milestone, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className={`text-center p-4 rounded-2xl border-2 ${
                          milestone.achieved 
                            ? 'bg-green-50 border-green-300' 
                            : milestone.target
                            ? 'bg-yellow-50 border-yellow-300'
                            : 'bg-gray-50 border-gray-300'
                        }`}
                      >
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                          milestone.achieved 
                            ? 'bg-green-500 text-white' 
                            : milestone.target
                            ? 'bg-yellow-500 text-white'
                            : 'bg-gray-400 text-white'
                        }`}>
                          <milestone.icon className="text-lg" />
                        </div>
                        <div className="font-semibold text-sm mb-1">{milestone.label}</div>
                        <div className={`text-xs ${
                          milestone.achieved 
                            ? 'text-green-700' 
                            : milestone.target
                            ? 'text-yellow-700'
                            : 'text-gray-600'
                        }`}>
                          {milestone.achieved ? 'Achieved!' : milestone.target ? 'In Progress' : 'Future Goal'}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {selectedInterest === 'badminton' && (
                <motion.div
                  variants={slideVariants}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200"
                >
                  <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center flex items-center justify-center">
                    <FaMedal className="mr-3 text-purple-600" />
                    Badminton Achievements
                    <FaMedal className="ml-3 text-purple-600" />
                  </h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {badmintonAchievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 rounded-2xl bg-purple-50 border-2 border-purple-300"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-500 text-white flex items-center justify-center">
                          <achievement.icon className="text-lg" />
                        </div>
                        <div className="font-semibold text-sm mb-1 text-purple-900">{achievement.label}</div>
                        <div className="text-xs text-purple-700">Achieved</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PersonalInterest;
