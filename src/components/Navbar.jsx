import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Phone } from 'lucide-react';

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Skill Building', href: '#training' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Personal Interest', href: '#personal-interest' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'training', 'certifications', 'personal-interest', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-xl py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                isScrolled ? 'opacity-90' : 'opacity-100'
              }`}
            >
              <span className={`font-extrabold text-2xl relative inline-block ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span className="relative z-10">Portfolio</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-400 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30 ${
                  isScrolled ? 'opacity-10' : 'opacity-20'
                }`}></div>
                <div className={`absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}></div>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? isScrolled 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-white bg-white/20'
                    : isScrolled 
                      ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-4 mx-0 sm:mx-0">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block py-2 px-4 rounded-md font-medium transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-primary-100 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-center space-x-4 px-2">
              <a href="https://www.linkedin.com/in/david-sam-he-him-82769b52/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-primary-600 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:amz.davidsam@gmail.com" 
                 className="text-gray-600 hover:text-primary-600 transition-colors">
                <FaEnvelope size={20} />
              </a>
              <a href="tel:+916364543615" 
                 className="text-gray-600 hover:text-primary-600 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
