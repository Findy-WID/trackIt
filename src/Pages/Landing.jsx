import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Landing.css"

import image1L from '../assets/landing/image1 La.jpg';
import image2L from '../assets/landing/image2 L.jpg';
import image3L from '../assets/landing/img3 L.jpg';
import Logo from '../assets/Tack it logo.png';

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      image: image1L,
      title: "Track Your Expenses",
      description: "Take control of your finances with our intuitive expense tracking system"
    },
    {
      image: image2L,
      title: "Analyze Your Spending",
      description: "Visualize your spending patterns with detailed analytics and reports"
    },
    {
      image: image3L,
      title: "Achieve Your Goals",
      description: "Set financial goals and track your progress towards achieving them"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === carouselData.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? carouselData.length - 1 : currentSlide - 1);
  };

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="landing-nav">
        <div className="nav-logo">
          <div className='nav-logo-container'>
            <Link to="/">
              <img src={Logo} className="logo" alt="TrackIt Logo" style={{ opacity: 1 }} />
            </Link>
          </div>
        </div>
        <div className="nav-buttons">
          <Link to="/login" className="nav-btn login-btn">Login</Link>
          <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link>
        </div>
      </nav>

      {/* Relative wrapper for carousel background + content */}
      <div className="landing-hero relative">
        {/* Background Carousel */}
        <div className="carousel-background absolute top-0 left-0 w-full h-full z-0">
          <div className="carousel-content">
            {carouselData.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <img src={slide.image} alt={slide.title} />
              </div>
            ))}
          </div>

          <button className="carousel-button prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-button next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="carousel-indicators">
            {carouselData.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Content on top */}
        <div className="landing-content relative z-10">
          <h1 style={{ color: "#552C88" }}>Welcome to TrackIt</h1>
          <p>Your Personal Expense Tracking Solution</p>
          <div className="cta-buttons">
            <Link to="/signup" className="get-started-btn">Get Started</Link>
            <Link to="/login" className="login-link">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
