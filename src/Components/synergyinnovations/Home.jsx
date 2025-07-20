import React from 'react';
import Hero from './Hero'
import About from './About'
import Founder from './Founder'
import Products from './Products'
import "./assets/Css/app.css"; // Import custom styles
let Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Founder />
      <Products />
      
    </>
  );
}
export default Home;