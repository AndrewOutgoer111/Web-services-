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
  // Slider configuration
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // URLs for GitHub deployed pages
  const githubPages = [
    { url: 'https://andrewoutgoer111.github.io/mas1/', caption: 'Page 1' },
    { url: 'https://andrewoutgoer111.github.io/webpage2/', caption: 'Page 2' },
    { url: 'https://andrewoutgoer111.github.io/webpage3/', caption: 'Page 3' },
    { url: 'https://andrewoutgoer111.github.io/webpage4/', caption: 'Page 4' },
    { url: 'https://andrewoutgoer111.github.io/webpage5/', caption: 'Page 5' },
  ];

  // Home component with GitHub page links in the slideshow
  const HomeWithSlideshow = () => (
    <div>
      {/* Headline Section */}
      <section className="headline-section">
        <h1 className="headline">Order Your Website Solution Today!</h1>
      </section>

      {/* Slideshow Section */}
      <div className="slideshow-container" role="region" aria-label="Website Showcase">
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

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to AndreWillDoIt! We specialize in providing simple and effective web solutions
          for small to medium businesses. Our goal is to make technology work for you, with a focus
          on quality and convenience.
        </p>
      </section>

      {/* Contact Section */}
      

<section id="contact" className="contact-section">
  <h2>Contact Me</h2>
  <div className="contact-links">
    <a href="https://wa.me/+971544571947" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
      <FaWhatsapp className="contact-icon" />
     WhatsApp
    </a>
    <a href="https://t.me/YOUR_TELEGRAM_USERNAME" target="_blank" rel="noopener noreferrer" className="contact-link telegram">
      <FaTelegramPlane className="contact-icon" />
      Telegram
    </a>
    <a href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/" target="_blank" rel="noopener noreferrer" className="contact-link instagram">
      <FaInstagram className="contact-icon" />
      Instagram
    </a>
  </div>
</section>


    </div>
  );

  return (
    <Router>
      <div className="App">
        {/* Header */}
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

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomeWithSlideshow />} />
            <Route path="/about" element={<AboutPage />} />
            
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer-container">
  <div className="footer-left">
    <p>© 2025 AndreWillDoIt. All rights reserved.</p>
  </div>
  <div className="footer-right">
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="contact-icon" 
      aria-label="WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
    <a 
      href="https://t.me/AndrewWillDoIt" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="contact-icon" 
      aria-label="Telegram"
    >
      <i className="fab fa-telegram-plane"></i>
    </a>
    <a 
      href="https://instagram.com/AndrewWillDoIt" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="contact-icon" 
      aria-label="Instagram"
    >
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</footer>


      </div>
    </Router>
  );
};

export default App;