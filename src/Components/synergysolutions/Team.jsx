import React, { useEffect, useState, useRef } from 'react';
import { Star, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const swiperRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const teamArr = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      specialties: [ "Team Leadership"],
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      specialties: ["System Architecture", "AI/ML"],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Design",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      specialties: ["UI/UX Design", "Brand Identity"],
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Developer",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      specialties: ["React/Next.js", "Node.js"],
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      specialties: ["Digital Marketing"],
    },
    {
      id: 6,
      name: "Alex Martinez",
      role: "Product Manager",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      specialties: ["Product Strategy", "User Research"],
    },
    {
      id: 7,
      name: "Rachel Wang",
      role: "Data Scientist",
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      specialties: ["Machine Learning", "Data Analysis"],
    },
    {
      id: 8,
      name: "James Wilson",
      role: "DevOps Engineer",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      specialties: ["CI/CD", "Containerization"],
    }
  ];

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(4); // Show 4 cards on desktop and larger screens
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // Show 2 cards on tablet
      } else {
        setSlidesPerView(1); // Show 1 card on mobile
      }
      setCurrentSlide(0); // Reset to first slide when switching views
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max slides based on slides per view
  const maxSlides = Math.max(1, teamArr.length - slidesPerView + 1);

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused && !isTransitioning && maxSlides > 1) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentSlide, isTransitioning, maxSlides]);

  const handleNext = () => {
    if (isTransitioning || maxSlides <= 1) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning || maxSlides <= 1) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || maxSlides <= 1) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Calculate the translation based on current slide and card width
  const cardWidthPercentage = 100 / slidesPerView;
  const translateX = currentSlide * cardWidthPercentage;

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-slate-100 py-4 px-4 pb-10">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Users className="w-8 h-8 text-blue-900" />
            <span className="bg-gradient-to-r font-bold from-blue-900 to-blue-900 bg-clip-text text-transparent text-sm  tracking-wider uppercase">
              Our Team
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3">
            Meet the
            <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent"> Innovators</span>
          </h1>
          <p className="text-lg md:text-xl text-black font-semibold max-w-3xl mx-auto">
            Our talented team of experts dedicated to delivering exceptional results and driving innovation
          </p>
        </div>

        {/* Swiper Container */}
        <div 
          ref={swiperRef}
          className="swiper_container relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-2xl p-5">
            {/* Slides */}
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${translateX}%)`,
                width: '100%'
              }}
            >
              {teamArr.map((team) => (
                <div 
                  key={team.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${cardWidthPercentage}%` }}
                >
                  <div className="sw group cursor-pointer">
                    <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-slate-200/50 backdrop-blur-sm">
                      <div className="text-center space-y-4">
                        {/* Profile Image with Gradient Border */}
                        <div className="relative mx-auto">
                          <div className={`w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-blue-400 p-1 mx-auto`}>
                            <img 
                              src={team.img} 
                              alt={`${team.name} - ${team.role}`}
                              className="w-full h-full rounded-full object-cover border-4 border-white"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2 shadow-lg">
                            <Star className="w-4 h-4 text-white fill-current" />
                          </div>
                        </div>
                        
                        {/* Name */}
                        <h2 className="text-xl font-bold text-blue-900 group-hover:text-black transition-colors duration-300 leading-tight">
                          {team.name}
                        </h2>
                        
                        {/* Role */}
                        <div className="flex items-center justify-center space-x-2">
                          <Award className="w-4 h-4 text-black font-semibold flex-shrink-0" />
                          <h4 className="text-black font-semibold text-sm leading-tight">
                            {team.role}
                          </h4>
                        </div>

                        {/* Specialties */}
                        <div className="pt-2">
                          <div className="flex flex-wrap gap-2 justify-center">
                            {team.specialties.slice(0, 2).map((specialty, idx) => (
                              <span
                                key={idx}
                                className="bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100 hover:border-blue-300 transition-colors duration-300"
                              >
                                {specialty}
                              </span>
                            ))}
                            {team.specialties.length > 2 && (
                              <span className="bg-gradient-to-r from-gray-50 to-gray-100 text-slate-500 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                                +{team.specialties.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Only show if we have multiple slides */}
          {maxSlides > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="swiper-button-prev slider-arrow absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-slate-200 p-3 rounded-full transition-all duration-300 group z-10 shadow-xl hover:shadow-2xl backdrop-blur-sm"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
              </button>
              
              <button
                onClick={handleNext}
                className="swiper-button-next slider-arrow absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-slate-200 p-3 rounded-full transition-all duration-300 group z-10 shadow-xl hover:shadow-2xl backdrop-blur-sm"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
              </button>

              {/* Pagination */}
              <div className="swiper-pagination flex justify-center mt-8 space-x-3">
                {Array.from({ length: maxSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-blue-900 to-blue-900 w-8 shadow-lg' 
                        : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
                    }`}
                    disabled={isTransitioning}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        

        
      </div>
    </div>
  );
};

export default Team;