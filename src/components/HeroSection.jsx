import { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [bgColor, setBgColor] = useState('black');

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(prev => prev === 'black' ? 'pink' : 'black');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`hero-section ${bgColor}`}>
      <div className="hero-content">
        <div className="collage-element collage-1">◆</div>
        <div className="collage-element collage-2">★</div>
        <div className="collage-element collage-3">◆</div>
        
        <h1 className="hero-title">
           Daniela
          <br />
          <span className="highlight expresion-highlight">Baltazar</span>
          <br />
          Vázquez
        </h1>
        
        <p className="hero-subtitle">
          Diseñadora Textil 
        </p>

        <button className="hero-button" onClick={scrollToProjects}>
          Explorar Proyectos
        </button>

        <div className="scroll-indicator">
          <span>↓</span>
        </div>
      </div>

      {/* Elementos decorativos tipo collage */}
      <div className="decorative-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default HeroSection;
