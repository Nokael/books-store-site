import React from 'react';
import './Home.css';
import bookpg from '../../assets/img/book.jpg';
import { Link } from 'react-router-dom';
import Library from '../Library/Library';
import Faq from '../Faqs/Faqs';
import TestimonialCarousel from '../Testimonial/TestimonialCarousel';
import backgroundImage from "../../assets/img/inclinedbook.jpg"


const Home = () => {

  

  return (
    <div>
        <div className="hero-banner bg-dark text-light text-center py-5">
          <img src={backgroundImage} height='20px'
            width='1000px' alt="Hero Banner" className="img-fluid" />
          <div className="container">
            <h1 className="display-4">Welcome to My Website</h1>
            <p className="lead">This is a simple example of a hero banner using Bootstrap with MERN stack.</p>
            <button className="btn btn-primary btn-lg">Learn More</button>
          </div>
        </div>
          {/* <img src={backgroundImage} alt='hero background image' /> */}
      
     
    
    <Library />

    <section id='aboutSection'>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </section>
    <TestimonialCarousel />

    <h1>Frequently Asked Questions</h1>
    <Faq question = "Question 1" answer = "Answer 1"/>
    <Faq question = "Question 2" answer = "Answer 2"/>
    <Faq question = "Question 3" answer = "Answer 3"/>
    <Faq question = "Question 4" answer = "Answer 4"/>
    <Faq question = "Question 5" answer = "Answer 5"/>


    </div>
  );
};

export default Home;