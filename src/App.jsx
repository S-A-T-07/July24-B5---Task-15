import ImageSlider from './components/ImageSlider';
import ParallaxSection from './components/ParallaxSection';
import './App.css';

const slides = [
  {
    image: '/images/img1.png',
    author: 'MARVEL_STUDIOS',
    title: 'Spider-Man: Homecoming',
    year: '2017',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.'
  },
  {
    image: '/images/img2.jpg',
    author: 'MARVEL_STUDIOS',
    title: 'Spider-Man: Into the Spider-Verse',
    year: '2018',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.'
  },
  {
    image: '/images/img3.jpg',
    author: 'MARVEL_STUDIOS',
    title: 'Spider-Man: Far From Home',
    year: '2019',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.'
  },
  {
    image: '/images/img4.jpg',
    author: 'MARVEL_STUDIOS',
    title: 'Spider-Man: No Way Home',
    year: '2021',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.'
  },
  {
    image: '/images/img5.jpg',
    author: 'MARVEL_STUDIOS',
    title: 'Spider-Man: Across the Spider-Verse',
    year: '2023',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.'
  }
];

const parallaxSections = [
  {
    image: '/images/para1.jpg',
    title: 'MARVEL STUDIOS',
    description: 'Marvel Studios, LLC, formerly known as Marvel Films, is an American film and television production company. The studio was founded in 1993 by Avi Arad as part of Marvel Entertainment and has been led by producer Kevin Feige, who serves as its president, since 2007.',
    height: '750px'
  },
  {
    image: '/images/para2.jpg',
    title: 'Spider-Man in MARVEL',
    description: 'In February 2015, Disney, Marvel Studios, and Sony made a deal to share the Spider-Man film rights, leading to a new iteration of Spider-Man being introduced and integrated into the Marvel Cinematic Universe.',
    height: '1000px'
  },
  {
    image: '/images/para3.jpg',
    title: 'Tom Holland as Spider-Man',
    description: 'In 2016, he made his debut in the Marvel Cinematic Universe (MCU) playing Spider-Man / Peter Parker in Captain America: Civil War (2016). He would go on to play the role for six of the franchise\'s films, including his own standalone films Spider-Man: Homecoming (2017), Far From Home (2019) and No Way Home (2021).',
    height: '790px'
  }
];

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#home">Home</a>
          <a href="#contacts">Contacts</a>
          <a href="#info">Info</a>
        </nav>
      </header>
      <ImageSlider slides={slides} />
      <ParallaxSection sections={parallaxSections} />
    </>
  );
}

export default App;