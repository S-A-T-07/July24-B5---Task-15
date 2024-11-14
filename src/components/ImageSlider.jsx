import { useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);
  const nextRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 10000;

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

    const handleScroll = () => {
      const parallaxSections = document.querySelectorAll('.parallax-item');
      parallaxSections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        const sectionOffsetTop = section.offsetTop;
        const speed = 0.5;
        section.style.backgroundPositionY = (scrollPosition - sectionOffsetTop) * speed + 'px';
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(autoNext);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="">Home</a>
          <a href="">Contacts</a>
          <a href="">Info</a>
        </nav>
      </header>

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          <div className="item">
            <img src="/images/img1.png" alt="Spider-Man: Homecoming" />
            <div className="content">
              <div className="author">MARVEL_STUDIOS</div>
              <div className="title">Spider-Man: Homecoming</div>
              <div className="topic">2017</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          
          <div className="item">
            <img src="/images/img2.jpg" alt="Spider-Man: Into the Spider-Verse" />
            <div className="content">
              <div className="author">MARVEL_STUDIOS</div>
              <div className="title">Spider-Man: Into the Spider-Verse</div>
              <div className="topic">2018</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/images/img3.jpg" alt="Spider-Man: Far From Home" />
            <div className="content">
              <div className="author">MARVEL_STUDIOS</div>
              <div className="title">Spider-Man: Far From Home</div>
              <div className="topic">2019</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/images/img4.jpg" alt="Spider-Man: No Way Home" />
            <div className="content">
              <div className="author">MARVEL_STUDIOS</div>
              <div className="title">Spider-Man: No Way Home</div>
              <div className="topic">2021</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/images/img5.jpg" alt="Spider-Man: Across the Spider-Verse" />
            <div className="content">
              <div className="author">MARVEL_STUDIOS</div>
              <div className="title">Spider-Man: Across the Spider-Verse</div>
              <div className="topic">2023</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>

        </div>

        <div className="thumbnail" ref={thumbnailBorderRef}>
          <div className="item">
            <img src="/images/img1.png" alt="Spider-Man: Homecoming" />
            <div className="content">
              <div className="title">MARVEL</div>
            </div>
          </div>

          <div className="item">
            <img src="/images/img2.jpg" alt="" />
            <div className="content">
              <div className="title">MARVEL</div>
            </div>
          </div>

          <div className="item">
            <img src="/images/img3.jpg" alt="" />
            <div className="content">
              <div className="title">MARVEL</div>
            </div>
          </div>

          <div className="item">
            <img src="/images/img4.jpg" alt="" />
            <div className="content">
              <div className="title">MARVEL</div>
            </div>
          </div>

          <div className="item">
            <img src="/images/img5.jpg" alt="" />
            <div className="content">
              <div className="title">MARVEL</div>
            </div>
          </div>

        </div>

        <div className="arrows">
          <button id="prev" onClick={() => showSlider('prev')}>{'<'}</button>
          <button id="next" ref={nextRef} onClick={() => showSlider('next')}>{'>'}</button>
        </div>

        <div className="time" ref={timeRef}></div>
      </div>
    </>
  );
};

export default ImageSlider;