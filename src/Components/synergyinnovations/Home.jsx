import React from 'react';
import Hero from './Hero'
import About from './About'
import Products from './Products'
import "./assets/Css/app.css"; // Import custom styles
import Header from './Header';
import Footer from './Footer';
import { Router, Route,  } from 'react-router-dom';
let Home = () => {
  return (
    <>
     <Header />
      <Hero />
      <About />
      <Products />
      <Footer />
    </>
  );
}
export default Home;