import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Training from './components/Training';
import Certifications from './components/Certifications';
import PersonalInterest from './components/PersonalInterest';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Training />
        <Certifications />
        <PersonalInterest />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
