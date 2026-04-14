import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaUsers, 
  FaHandshake, 
  FaLightbulb, 
  FaBullseye, 
  FaTrophy,
  FaRocket,
  FaBrain
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Sales Management',
      icon: FaChartLine,
      color: 'primary',
      skills: [
        { name: 'Sales Management', level: 100 },
        { name: 'Channel Sales', level: 100 },
        { name: 'Distributor Management', level: 100 },
        { name: 'Data Analysis', level: 100 }
      ]
    },
    {
      title: 'Strategic Planning',
      icon: FaUsers,
      color: 'secondary',
      skills: [
        { name: 'Route to Market', level: 100 },
        { name: 'Go-to-Market Strategy', level: 100 },
        { name: 'Market Analysis', level: 90 },
        { name: 'P&L Management', level: 90 }
      ]
    },
    {
      title: 'Business Development',
      icon: FaHandshake,
      color: 'primary',
      skills: [
        { name: 'Business Development', level: 90 },
        { name: 'Market Development', level: 90 },
        { name: 'Market Penetration Strategy', level: 90 },
        { name: 'Distribution Strategy', level: 90 }
      ]
    },
    {
      title: 'Core Competencies',
      icon: FaRocket,
      color: 'secondary',
      skills: [
        { name: 'Program Management', level: 90 },
        { name: 'Strategic Planning', level: 90 },
        { name: 'Process Optimization', level: 90 },
        { name: 'Stakeholder Management', level: 90 }
      ]
    }
  ];

  
  const softSkills = [
    { icon: FaLightbulb, title: 'Communication', description: 'Exceptional communication and presentation skills for stakeholder engagement' },
    { icon: FaBullseye, title: 'Leadership', description: 'Strong leadership abilities with experience mentoring high-performing teams' },
    { icon: FaTrophy, title: 'Relationship Building', description: 'Expert in building long-term partnerships with key stakeholders' },
    { icon: FaBrain, title: 'Negotiation', description: 'Strong negotiation skills with proven track record of successful deals' }
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

  const SkillBar = ({ skill, color }) => {
    const colorClasses = {
      primary: 'bg-primary-600',
      secondary: 'bg-secondary-600'
    };

    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 font-medium">{skill.name}</span>
          <span className="text-gray-600 text-sm">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`${colorClasses[color]} h-2 rounded-full`}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white via-secondary-50 to-primary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl animate-float animation-delay-2000" />
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
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Core Competencies
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient"
          >
            Professional Skills
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive expertise in sales leadership, strategy development, and team management
          </motion.p>
        </motion.div>

        {/* Core Skills Categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card p-8 card-hover border border-white/50 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mr-4">
                      <category.icon className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full mt-2" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-secondary-700 group-hover/item:text-primary-600 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-primary-600">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-secondary-200 rounded-full h-3 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                              className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full relative overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary-200/20 to-purple-200/20 rounded-full blur-xl" />
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-primary-200/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Leadership Qualities
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-all duration-300 transform group-hover:scale-110">
                  <skill.icon className="text-primary-600 group-hover:text-white text-2xl transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
