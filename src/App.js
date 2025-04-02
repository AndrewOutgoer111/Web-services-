import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slider from 'react-slick';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

// Component Imports
import AboutPage from './components/AboutPage';

const App = () => {
  // Function to disable iframe interaction during swipe
  const handleBeforeChange = () => {
    document.querySelectorAll(".slide-iframe").forEach((iframe) => {
      iframe.style.pointerEvents = "none"; // Instantly disable interaction
    });
  };

  // Function to re-enable iframe interaction after swipe
  const handleAfterChange = () => {
    requestAnimationFrame(() => {
      document.querySelectorAll(".slide-iframe").forEach((iframe) => {
        iframe.style.pointerEvents = "auto"; // Instantly re-enable interaction
      });
    });
  };

  // Slider configuration
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400, // Faster response for swipes
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipe: true,
    touchMove: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  // URLs for GitHub deployed pages
  const githubPages = [
    { url: 'https://andrewoutgoer111.github.io/mas1/', caption: 'Page 1' },
    { url: 'https://andrewoutgoer111.github.io/webpage2/', caption: 'Page 2' },
    { url: 'https://andrewoutgoer111.github.io/webpage3/', caption: 'Page 3' },
    { url: 'https://andrewoutgoer111.github.io/webpage4/', caption: 'Page 4' },
    { url: 'https://andrewoutgoer111.github.io/webpage5/', caption: 'Page 5' },
  ];

  const HomeWithSlideshow = () => (
    <div>
      <section className="headline-section">
        <h1 className="headline">Order Your Website Solution Today!</h1>
      </section>

      <div className="slideshow-container">
        <Slider {...sliderSettings}>
          {githubPages.map((page, index) => (
            <div key={index} className="slide">
              <iframe
                src={page.url}
                title={`GitHub Page ${index + 1}`}
                className="slide-iframe"
                loading="lazy"
              ></iframe>
              <h3 className="slide-caption">{page.caption}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-container">
            <div className="brand-name">
              <Link to="/" aria-label="Brand Name">AndreWillDoIt</Link>
            </div>
            <nav>
              <ul className="nav-list">
                <li><Link to="/" aria-label="Home Page">Home</Link></li>
                <li><Link to="/about" aria-label="About Page">About</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomeWithSlideshow />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
