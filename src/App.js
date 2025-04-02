import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

// Component Imports
import AboutPage from './components/AboutPage';

const App = () => {
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    const iframes = document.querySelectorAll(".slide-iframe");
    iframes.forEach((iframe) => {
      iframe.style.pointerEvents = isSwiping ? "none" : "auto";
    });
  }, [isSwiping]);

  const handleBeforeChange = () => {
    setIsSwiping(true);
  };

  const handleAfterChange = () => {
    setTimeout(() => setIsSwiping(false), 500);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipe: true,
    touchMove: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

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

        <footer className="footer-container">
          <div className="footer-left">
            <p>© 2025 AndreWillDoIt. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="https://wa.me/+971544571947" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://t.me/YOUR_TELEGRAM_USERNAME" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
            <a href="https://instagram.com/YOUR_INSTAGRAM_USERNAME" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
