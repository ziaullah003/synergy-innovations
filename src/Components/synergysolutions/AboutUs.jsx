import React from 'react'
import './assets/Css/About.css'



const AboutUs = () => {
  return ( 
    <>
  <div><section class="about-hero">
        <div class="container">
            <div class="about-hero-content">
                <h1 class="animate-fadeInUp">About <span>Synergy Solutions</span></h1>
                <p class="animate-fadeInUp delay-1">We're a specialized recruitment agency connecting exceptional talent with leading companies in insurance, healthcare, pharmaceutical, and FMCG industries.</p>
                <a href="#our-story" class="btn animate-fadeInUp delay-2">Discover Our Story</a>
            </div>
        </div>
    </section>

    <section id="our-story" class="our-story">
        <div class="container">
            <div class="story-container">
                <div class="story-content">
                    <h2>Our Story</h2>
                    <p>Founded in 2023, Synergy Solutions began with one vision: to transform the recruitment process through personalized service and deep industry expertise. From humble beginnings, we’ve grown into a trusted talent acquisition partner for companies across the insurance, healthcare, pharmaceutical, and FMCG sectors.</p>
                    <p>Early on, we recognized a gap in the market — the need for recruiters who truly understand the specialized requirements of insurance companies, brokers, healthcare providers, pharmaceutical firms, and FMCG brands. By focusing exclusively on these industries, we’ve developed deep-rooted expertise and built strong networks that allow us to connect the right talent with the right opportunities.</p>
                    <p>Today, we continue to evolve and grow, but our commitment to personalized service, industry specialization, and ethical recruitment practices remains unchanged.</p>
                </div>
                <div class="story-img">
                    <img src="/founder5.jpeg" alt="Synergy Solutions Team" />
                </div>
            </div>
        </div>
    </section>

    <section class="mission-vision">
        <div class="container">
            <div class="mission-vision-container">
                <div class="mission-card">
                    <div class="card-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3 class="card-title">Our Mission</h3>
                    <p class="card-text">To revolutionize talent acquisition in specialized industries by providing personalized recruitment solutions that create meaningful connections between exceptional candidates and forward-thinking companies.</p>
                    <p class="card-text">We strive to understand the unique needs of each client and candidate, ensuring perfect matches that drive success and growth for all parties involved.</p>
                </div>
                <div class="vision-card">
                    <div class="card-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3 class="card-title">Our Vision</h3>
                    <p class="card-text">To be the most trusted recruitment partner in the insurance, healthcare, pharmaceutical, and FMCG industries, known for our expertise, integrity, and the lasting value we create for our clients and candidates.</p>
                    <p class="card-text">We envision a future where every organization has access to the specialized talent they need to thrive, and every professional can find fulfilling work that matches their skills and aspirations.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
    </>
    )
  
}
export default AboutUs;