import React, { useState } from 'react';
import Slider from 'react-slick';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isSwiping, setIsSwiping] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipe: true,
    swipeToSlide: true,
    beforeChange: () => setIsSwiping(true),   // when swipe starts
    afterChange: () => setIsSwiping(false),   // when swipe ends
  };

  const slides = [
    "https://www.youtube.com/embed/your_video_id_1",
    "https://www.youtube.com/embed/your_video_id_2",
    "https://www.youtube.com/embed/your_video_id_3",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="brand-name">
            <a href="/">YourBrand</a>
          </div>
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      <main>
        <section className="headline-section">
          <h1 className="headline">Welcome to Our Website</h1>
        </section>

        <section className="slideshow-container">
          {isSwiping && <div className="swipe-overlay" />}
          <Slider {...settings}>
            {slides.map((url, index) => (
              <div key={index} className="slide">
                <iframe
                  className="slide-iframe"
                  src={url}
                  title={`Slide ${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Slider>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>We provide amazing services to our clients worldwide.</p>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-links">
            <a href="https://wa.me/your_whatsapp" className="contact-link whatsapp">
              <span className="contact-icon">📱</span> WhatsApp
            </a>
            <a href="https://t.me/your_telegram" className="contact-link telegram">
              <span className="contact-icon">✈️</span> Telegram
            </a>
            <a href="https://instagram.com/your_instagram" className="contact-link instagram">
              <span className="contact-icon">📷</span> Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="footer-container">
        <div className="footer-left">© 2025 YourBrand. All rights reserved.</div>
        <div className="footer-right">
          <a href="https://wa.me/your_whatsapp" className="contact-icon">📱</a>
          <a href="https://t.me/your_telegram" className="contact-icon">✈️</a>
          <a href="https://instagram.com/your_instagram" className="contact-icon">📷</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
