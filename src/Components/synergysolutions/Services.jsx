import React, { useState } from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Mobile App Development",
      description: "Create stunning iOS and Android applications with cutting-edge technology and user-centric design.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      id: 2,
      name: "Web Development",
      description: "Build responsive, fast, and scalable web applications using modern frameworks and technologies.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      id: 3,
      name: "UI/UX Design",
      description: "Design intuitive and beautiful user interfaces that provide exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      id: 4,
      name: "WordPress Development",
      description: "Custom WordPress websites and plugins tailored to your business needs and requirements.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      id: 5,
      name: "Graphic Design",
      description: "Creative visual solutions including logos, branding, and marketing materials for your business.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      id: 6,
      name: "SEO Optimization",
      description: "Boost your online visibility and rankings with comprehensive search engine optimization strategies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      id: 7,
      name: "Video Editing",
      description: "Professional video editing services for marketing, corporate content, and social media campaigns.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      id: 8,
      name: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your brand and reach your target audience.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&auto=format&q=80"
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Check if screen is mobile (you can adjust this breakpoint)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Show only first 4 services on mobile if showAll is false
  const displayedServices = isMobile && !showAll ? services.slice(0, 4) : services;

  return (
    <div className="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to transform your business ideas into digital reality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 overflow-hidden ${
                hoveredCard === service.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-2xl h-32 md:h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-blue-800 text-xs md:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm transform scale-105"></div>
            </div>
          ))}
        </div>

        {/* Show More Button - Only visible on mobile when not showing all */}
        {isMobile && !showAll && services.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-900 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Show More
            </button>
          </div>
        )}

        {/* Show Less Button - Only visible on mobile when showing all */}
        {isMobile && showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="bg-blue-700 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Show Less
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-700 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Let's discuss how we can help bring your ideas to life with our comprehensive software solutions.
          </p>
          <button className="bg-blue-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;