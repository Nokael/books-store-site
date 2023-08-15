import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import book from "../../assets/img/book.jpg"
import bookPage from "../../assets/img/bookpic.jpg"


const TestimonialCarousel = () => {
  const testimonials = [
    {
      bookCover: book,
      testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      posterName: 'John Doe',
    },
    {
      bookCover: bookPage,
      testimony: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      posterName: 'Jane Smith',
    },
    {
        bookCover: book,
        testimony: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        posterName: 'Jane Smith',
      }, {
        bookCover: bookPage,
        testimony: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        posterName: 'Jane Smith',
      },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide => (currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide => (currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1));
  };

  return (
    <div className="testimonial-carousel">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="d-flex align-items-center">
                <div className="book-cover">
                  <img src={testimonial.bookCover} height='300px'
                width='200px' alt="Book Cover" />
                </div>
                <div className="testimonial-content">
                  <p>{testimonial.testimony}</p>
                  <p className="poster-name">{testimonial.posterName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={handlePrevSlide}
        >
          <FontAwesomeIcon icon={faAngleLeft}/>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={handleNextSlide}
        >
                    <FontAwesomeIcon icon={faAngleRight}/>
        </button>
        <ol className="carousel-indicators">
          {testimonials.map((_, index) => (
            <li
              key={index}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
            ></li>
          ))}
        </ol>
      </div>

    </div>
  );
};

export default TestimonialCarousel;
