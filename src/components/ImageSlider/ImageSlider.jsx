import { useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);
  const nextRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const showSlider = (type) => {
    const sliderItemsDom = sliderRef.current.querySelectorAll('.item');
    const thumbnailItemsDom = thumbnailBorderRef.current.querySelectorAll('.item');
    
    if (type === 'next') {
      sliderRef.current.appendChild(sliderItemsDom[0]);
      thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
      carouselRef.current.classList.add('next');
    } else {
      sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, timeRunning);
  };

  useEffect(() => {
    const thumbnailItems = thumbnailBorderRef.current.querySelectorAll('.item');
    thumbnailBorderRef.current.appendChild(thumbnailItems[0]);

    const autoNext = setInterval(() => {
      if (nextRef.current) {
        nextRef.current.click();
      }
    }, timeAutoNext);

    return () => clearInterval(autoNext);
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div className="item" key={index}>
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

      <div className="thumbnail" ref={thumbnailBorderRef}>
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <div className="title">MARVEL</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={() => showSlider('prev')}>{'<'}</button>
        <button id="next" ref={nextRef} onClick={() => showSlider('next')}>{'>'}</button>
      </div>

      <div className="time" ref={timeRef}></div>
    </div>
  );
};

export default ImageSlider;