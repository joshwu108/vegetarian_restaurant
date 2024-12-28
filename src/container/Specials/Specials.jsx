import React, { useState, useEffect } from 'react';
import './Specials.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const eventData = [
  {
    title: 'Private Dining Experience',
    image: images.dining,
    description: 'Our exclusive private dining rooms can host up to 30 guests. Perfect for intimate family reunions or team dinners.',
  },
  {
    title: 'Christmas & New Year’s Eve Specials',
    image: images.christmas,
    description: 'Celebrate the holidays with a 25% discount and a festive, luxurious dinner menu.',
  },
  {
    title: 'Catering Services',
    image: images.catering,
    description: 'Looking for gourmet catering for large events? Book our top-tier catering services for weddings, corporate dinners, and more.',
  },
];

const Specials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % eventData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + eventData.length) % eventData.length);
    } else {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % eventData.length);
    }
  };

  return (
    <div className={`app__Specials ${darkMode ? 'dark' : ''}`} id="Specials">
      <FadeInSection>
        <div className="app__Specials-title">
          <h1 className="headtext__cormorant">Special Events & More</h1>
        </div>
      </FadeInSection>

      <div className="app__Specials-carousel">
        <div className="app__Specials-img-container">
          <img
            src={eventData[currentSlide].image}
            alt="Special Event"
            className="app__Specials-img"
          />
          <div className="app__Specials-overlay">
            <div className="app__Specials-hover-content">
              <h2>{eventData[currentSlide].title}</h2>
              <p>{eventData[currentSlide].description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="app__Specials-details">
        <h2 className="app__specialMenu-menu_heading">{eventData[currentSlide].title}</h2>
        <p className="app__p__cormorant">{eventData[currentSlide].description}</p>
      </div>

      <div className="app__Specials-controls">
        <BsArrowLeftShort
          className="gallery__arrow-icon"
          onClick={() => handleArrowClick('left')}
        />
        <BsArrowRightShort
          className="gallery__arrow-icon"
          onClick={() => handleArrowClick('right')}
        />
      </div>
    </div>
  );
};

export default Specials;