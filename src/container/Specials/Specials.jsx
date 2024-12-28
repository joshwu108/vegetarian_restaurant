import React, { useState, useEffect } from 'react';
import './Specials.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import Slider from 'react-slick';  // Import react-slick

const Specials = () => {
  // Carousel settings
  const settings = {
    dots: true,          // Show dots for navigation
    infinite: true,      // Loop the carousel
    speed: 500,          // Transition speed in milliseconds
    slidesToShow: 1,     // Number of slides to show at once
    slidesToScroll: 1,   // Number of slides to scroll at a time
    autoplay: true,      // Auto-play the carousel
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
  };

  return (
    <div className="app__Specials" id="Specials">
      <FadeInSection>
        <div className="app__Specials-title">
          <h1 className="headtext__cormorant">Special Events & More</h1>
        </div>
      </FadeInSection>
      <FadeInSection translateYAmount={30}>
        <div className="app__Specials-carousel">
          <Slider {...settings}>
            <div className="carousel-slide">
              <img src={images.dining} alt="Dining Event" className="app__Specials-img" />
              <div className="carousel-text">
                <h2 className="app__specialMenu-menu_heading">Events and Private Dining</h2>
                <p className="app__p__cormorant">
                  Our restaurant proudly boasts 3 private dining rooms, each capable of hosting 30 guests, perfect for family reunions and team dinners. Book now!
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={images.christmas} alt="Christmas Event" className="app__Specials-img" />
              <div className="carousel-text">
                <h2 className="app__specialMenu-menu_heading">Christmas and New Year's Eve</h2>
                <p className="app__p__cormorant">
                  Enjoy a 25% discount for dinner on Christmas Eve and New Year's Eve, featuring unique holiday classics. Book your spot today!
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={images.catering} alt="Catering Event" className="app__Specials-img" />
              <div className="carousel-text">
                <h2 className="app__specialMenu-menu_heading">Catering</h2>
                <p className="app__p__cormorant">
                  Offering special catering services for large events. Request catering services 2 weeks in advance. Reach out for more details!
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Specials;