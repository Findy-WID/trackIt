import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Landing.css"
import "../Styles/RecentExpenses.css"
import { IoArrowForwardCircleOutline } from "react-icons/io5";
// These are the images for the landing page
import image1L from '../assets/landing/image1 La.jpg';
import image2L from '../assets/landing/image2 L.jpg';
import image3L from '../assets/landing/img3 L.jpg';
import Logo from '../assets/Tack it logo.png';
import { color } from 'chart.js/helpers';


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

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

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
      {/* Add Navigation Bar */}
      <nav className="landing-nav">
        <div className="nav-logo" >
        <div className='nav-logo-container'>
          <Link to="/">
            <img src={Logo} className="logo" alt="TrackIt Logo" style={{opacity: 1}} />
          </Link>
        </div>
        </div>
        <div className="nav-buttons">
          <Link to="/login" className="nav-btn login-btn">Login</Link>
          <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link>
        </div>
      </nav>

      <div className="carousel-container">
        <div className="carousel-content">
          {carouselData.map((slide, index) => (
            <div 
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}

            >
              <img src={slide.image} alt={slide.title} />
              <div className="slide-content">
              <div className="landing-content">
        <h2 className='welcomeheader'>Welcome to <b>trackIt</b></h2>
        <p>Your Personal Expense Tracking Solution</p>
      </div>
      <div className='hero-advert'>

                  <h2 style={{color:'#FFC836'}}>{slide.title}</h2>
                <p>{slide.description}</p>
                <div className="cta-buttons">
                <Link to="/signup">
                        <div className="get-started-btn">
                          <button className="font-bold text-lg">Get started</button>
                          <IoArrowForwardCircleOutline className="text-xl ml-2 animate-slide" />
                        </div>
                </Link>
          <Link to="/login" className="login-link">Already have an account? Login</Link>
        </div>
      </div>
              </div>
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

     
    </div>
  );
};

export default Landing;