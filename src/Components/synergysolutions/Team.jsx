import React, { useEffect, useState, useRef } from "react";
import { Star, Award, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { backend_url as BACKEND_URL } from "../url";

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const swiperRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [teamArr, setTeamArr] = useState([]);

  // -------------------------------
  // ✅ Fetch Team API Here

useEffect(() => {
  const fetchTeam = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}api/ssteam/all`);
      const data = await res.json();

      console.log("Fetched team data:", data);

      if (data?.success && Array.isArray(data.members)) {
        setTeamArr(data.members);
      } else {
        setTeamArr([]);
      }

    } catch (error) {
      console.error("Error fetching team:", error);
      setTeamArr([]);
    }
  };

  fetchTeam();
}, []);


  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
      setCurrentSlide(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const cardWidthPercentage = 100 / slidesPerView;
  const translateX = currentSlide * cardWidthPercentage;

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-slate-100 py-4 px-2 pb-10">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Users className="w-8 h-8 text-blue-900" />
            <span className="bg-gradient-to-r font-bold from-blue-900 to-blue-900 bg-clip-text text-transparent text-sm tracking-wider uppercase">
              Our Team
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3">
            Meet the
            <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
              {" "}Innovators
            </span>
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
                width: "90%",
              }}
            >
              {teamArr.length === 0 ? (
                <div className="text-center text-gray-500 py-10 w-full">
                  No team members found.
                </div>
              ) : (
                teamArr.map((team) => (
                  <div
                    key={team._id}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${cardWidthPercentage}%` }}
                  >
                    <div className="sw group cursor-pointer">
                      <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-slate-200/50 backdrop-blur-sm">
                        <div className="text-center space-y-4">

                          {/* Image */}
                          <div className="relative mx-auto">
                            <div className="w-28 h-28 rounded-full bg-primary p-1 mx-auto">
                              <img
                                src={team.img}
                                alt={team.name}
                                className="w-full h-full rounded-full object-cover border-4 border-white"
                              />
                            </div>
                          </div>

                          {/* Name */}
                          <h2 className="text-xl font-bold text-blue-900">
                            {team.name}
                          </h2>

                          {/* Role */}
                          <div className="flex items-center justify-center space-x-2">
                            <Award className="w-4 h-4 text-black" />
                            <h4 className="text-black font-semibold text-sm">{team.role}</h4>
                          </div>

                          {/* Specialty */}
                          <div className="pt-2">
                            <div className="flex flex-wrap flex-col gap-3 justify-center">
                              <span className="bg-gradient-to-r from-gray-50 to-gray-100 text-black px-3 py-2 rounded-full text-xs font-medium border border-gray-200">
                                {team.specialties}
                              </span>
                              <span className="bg-primary text-white px-3 py-2 rounded-full text-xs font-medium">
                                Joined: {team.joined}
                              </span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Navigation */}
          {maxSlides > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="swiper-button-prev slider-arrow absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-slate-200 p-3 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </button>

              <button
                onClick={handleNext}
                className="swiper-button-next slider-arrow absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-slate-200 p-3 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </button>

              <div className="swiper-pagination flex justify-center mt-8 space-x-3">
                {Array.from({ length: maxSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-blue-900 w-8 shadow-lg"
                        : "bg-slate-300"
                    }`}
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
