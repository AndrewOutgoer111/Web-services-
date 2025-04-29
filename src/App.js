import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slider from 'react-slick';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { useEffect } from 'react';

import AboutPage from './components/AboutPage';

const App = () => {
  // Variables to track touch start
  let startX = 0;
  let startY = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const dx = Math.abs(e.touches[0].clientX - startX);
    const dy = Math.abs(e.touches[0].clientY - startY);
    const isHorizontalSwipe = dx > dy;

    document.querySelectorAll(".slide-iframe").forEach((iframe) => {
      iframe.style.pointerEvents = isHorizontalSwipe ? "none" : "auto";
    });
  };

  const handleAfterChange = () => {
    // Always re-enable pointer events after swipe ends
    document.querySelectorAll(".slide-iframe").forEach((iframe) => {
      iframe.style.pointerEvents = "auto";
    });
  };

  useEffect(() => {
    const container = document.querySelector(".slideshow-container");
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);

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

      <div className="slideshow-container" role="region" aria-label="Website Showcase">
        <Slider {...sliderSettings}>
          {githubPages.map((page, index) => (
            <div key={index} className="slide">
              <div className="iframe-container" style={{ width: '100%', height: '100%' }}>
                <iframe
                  src={page.url}
                  title={`GitHub Page ${index + 1}`}
                  className="slide-iframe"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    pointerEvents: 'auto',
                  }}
                ></iframe>
              </div>
              <h3 className="slide-caption">{page.caption}</h3>
            </div>
          ))}
        </Slider>
      </div>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to AndreWillDoIt! We specialize in providing simple and effective web solutions
          for small to medium businesses. Our goal is to make technology work for you, with a focus
          on quality and convenience.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-links">
          <a href="https://wa.me/+971544571947" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
            <FaWhatsapp className="contact-icon" /> WhatsApp
          </a>
          <a href="https://t.me/YOUR_TELEGRAM_USERNAME" target="_blank" rel="noopener noreferrer" className="contact-link telegram">
            <FaTelegramPlane className="contact-icon" /> Telegram
          </a>
          <a href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/" target="_blank" rel="noopener noreferrer" className="contact-link instagram">
            <FaInstagram className="contact-icon" /> Instagram
          </a>
        </div>
      </section>
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
