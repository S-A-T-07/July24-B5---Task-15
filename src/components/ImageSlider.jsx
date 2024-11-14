import { useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const showSlider = useCallback((type) => {
    setCurrentIndex(prevIndex => {
      if (type === 'next') {
        return (prevIndex + 1) % slides.length;
      } else {
        return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
      }
    });
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => clearInterval(timer);
  }, [showSlider]);

  return (
    <div className={`carousel ${currentIndex === 0 ? 'first' : ''}`}>
      <div className="list">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`item ${index === currentIndex ? 'active' : ''}`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <div className="author">{slide.author}</div>
              <div className="title">{slide.title}</div>
              <div className="topic">{slide.year}</div>
              <div className="des">{slide.description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {slides.map((slide, index) => (
          <div key={index} className="item">
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <div className="title">MARVEL</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={() => showSlider('prev')}>&lt;</button>
        <button id="next" onClick={() => showSlider('next')}>&gt;</button>
      </div>
      
      <div className="time"></div>
    </div>
  );
};

export default ImageSlider;