// components/Slideshow.js
import React from 'react';
import Slider from 'react-slick';
import './Slideshow.css'; // Optional: additional custom styling

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    arrows: true,
  };

  // Array of preview images or website screenshots
  const websitePreviews = [
    { id: 1, src: '/path/to/image1.jpg', alt: 'Website 1' },
    { id: 2, src: '/path/to/image2.jpg', alt: 'Website 2' },
    { id: 3, src: '/path/to/image3.jpg', alt: 'Website 3' },
    { id: 4, src: '/path/to/image4.jpg', alt: 'Website 4' },
    { id: 5, src: '/path/to/image5.jpg', alt: 'Website 5' },
    { id: 6, src: '/path/to/image6.jpg', alt: 'Website 6' },
    { id: 7, src: '/path/to/image7.jpg', alt: 'Website 7' },
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {websitePreviews.map((preview) => (
          <div key={preview.id}>
            <img src={preview.src} alt={preview.alt} className="slideshow-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
