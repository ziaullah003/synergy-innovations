import React, { useState } from 'react';
import { ExternalLink, Code, Smartphone, Globe, Palette, Search, Video, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EcoCommerce Mobile App",
      description: "A sustainable shopping platform with AI-powered recommendations and carbon footprint tracking for eco-conscious consumers.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format&q=80",
      link: "https://ecocommerce-demo.com",
      category: "Mobile App",
      tech: 'React Native',
    },

  ];

  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const displayedProjects = isMobile && !showAll ? projects.slice(0, 5) : projects;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-black  bg-clip-text  text-sm font-semibold tracking-wider uppercase">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Projects We've
            <span className="text-cyan-600 bg-clip-text "> Delivered</span>
          </h1>
          <p className="text-lg md:text-xl font-semibold text-black max-w-3xl mx-auto">
            Discover our latest work and the innovative solutions we've crafted for clients across various industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-700 transform hover:scale-[1.02] hover:bg-primary ${
                hoveredProject === project.id ? 'shadow-2xl shadow-blue-500/20' : 'shadow-lg hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideUp 0.6s ease-out forwards'
              }}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-32 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-slate-700">
                  {project.icon}
                  <span>{project.category}</span>
                </div>

                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:scale-105"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-cyan-600 mb-2 md:mb-3 group-hover:text-black transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-black text-xs md:text-sm leading-relaxed mb-4 md:mb-6 group-hover:transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    <span
                      className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-full group-hover:bg-white group-hover:text-blue-900 transition-colors duration-300"
                    >
                      {project.tech}
                    </span>
                </div>
              </div>

              
            </div>
          ))}
        </div>

        {/* Show More/Less Buttons */}
        {isMobile && !showAll && projects.length > 5 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-blue-900 to-blue-900 text-white px-8 py-4 rounded-full text-base font-semiboldtransform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View More Projects
            </button>
          </div>
        )}

        {isMobile && showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="bg-gradient-to-r from-blue-900 to-blue-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-slate-700 hover:to-slate-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Show Less
            </button>
            </div>
        )}

       
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;