import { useEffect } from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ sections }) => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxSections = document.querySelectorAll('.parallax-item');
      
      parallaxSections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        const sectionOffsetTop = section.offsetTop;
        const speed = 0.5;
        
        section.style.backgroundPositionY = `${(scrollPosition - sectionOffsetTop) * speed}px`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-section">
      {sections.map((section, index) => (
        <div
          key={index}
          className="parallax-item"
          style={{ 
            backgroundImage: `url(${section.image})`,
            height: section.height
          }}
        >
          <div className="parallax-content">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxSection;