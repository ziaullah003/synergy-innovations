import React, { useState, useRef } from 'react';
import {
  Crown,
  Star,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Activity,
  CalendarX
} from 'lucide-react';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('current');
  const scrollContainerRef = useRef(null);

  const currentTeam = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Club President",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2023"
    },
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Club President",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2023"
    },
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Club President",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2023"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Technical Lead",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2023"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2024"
    }
  ];

  const seniorAlumni = [
    {
      id: 7,
      name: "Rachel Wang",
      role: "Former President",
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      endYear: "2023"
    },
    {
      id: 8,
      name: "James Wilson",
      role: "Former Tech Lead",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      endYear: "2022"
    }
  ];

  const getCurrentData = () =>
    activeCategory === 'current' ? currentTeam : seniorAlumni;

  const switchCategory = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -280,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 280,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className=" bg-blue-50 py-8 px-4 md:px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center space-x-4 mb-5">
            <div className="bg-blue-300 rounded-2xl p-2 shadow-xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-semibold text-black uppercase tracking-widest mb-1">
                Software Synergy Club
              </span>
              <span className="block text-2xl font-bold text-black">
                Team Portfolio
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-black mb-3 leading-none">
            Our <span className="text-blue-800">Collective</span>
          </h1>
          <p className="text-base md:text-xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
            Discover the talented individuals driving innovation and the distinguished alumni who established our legacy
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-3xl p-2 shadow-2xl border border-blue-100">
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0">
              <button
                onClick={() => switchCategory('current')}
                className={`flex items-center justify-center space-x-2 px-6 py-2 rounded-2xl font-bold text-sm md:text-md transition-all duration-500 transform ${
                  activeCategory === 'current'
                    ? 'bg-blue-300 text-black shadow-xl scale-105'
                    : 'text-black hover:text-blue-300 hover:bg-blue-50 hover:scale-102'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>Current Team</span>
                <div className="bg-white bg-opacity-25 px-2 py-1 rounded-full text-sm font-bold">
                  {currentTeam.length}
                </div>
              </button>
              <button
                onClick={() => switchCategory('alumni')}
                className={`flex items-center justify-center space-x-2 px-6 py-2 rounded-2xl font-bold text-sm md:text-md transition-all duration-500 transform ${
                  activeCategory === 'alumni'
                    ? 'bg-blue-300 text-black shadow-xl scale-105'
                    : 'text-black hover:text-blue-300 hover:bg-blue-50 hover:scale-102'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span>Senior Alumni</span>
                <div className="bg-white bg-opacity-25 px-2 py-1 rounded-full text-sm font-bold">
                  {seniorAlumni.length}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div className="relative">
          {/* Navigation Buttons - visible on all screens */}
          <button
            onClick={scrollLeft}
            className="flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-blue-300 hover:bg-blue-400 text-black p-3 rounded-full transition-all duration-300 z-10 shadow-xl hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-blue-300 hover:bg-blue-400 text-black p-3 rounded-full transition-all duration-300 z-10 shadow-xl hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto pb-6 px-8 sm:px-16 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {getCurrentData().map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-64 sm:w-72 snap-center"
              >
                <div className="bg-white rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-blue-100">
                  <div className="text-center space-y-4">
                    {/* Profile Section */}
                    <div className="relative mx-auto">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-blue-300 p-1 mx-auto shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img
                          src={member.img}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full rounded-3xl object-cover border-2 border-white"
                        />
                      </div>
                      <div className="absolute -top-3 -right-3 bg-blue-300 rounded-2xl p-2 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                        {activeCategory === 'alumni' ? (
                          <Crown className="w-4 h-4 text-black fill-current" />
                        ) : (
                          <Star className="w-4 h-4 text-black fill-current" />
                        )}
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div>
                      <h2 className="text-lg sm:text-2xl font-bold text-black hover:text-blue-700 transition-colors duration-300">
                        {member.name}
                      </h2>
                      <div className="flex items-center justify-center space-x-2">
                        <Award className="w-4 h-4 text-blue-300" />
                        <h4 className="text-black font-semibold text-sm sm:text-base">
                          {member.role}
                        </h4>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="py-2">
                      {activeCategory === 'current' ? (
                        <div className="bg-blue-300 rounded-2xl p-2 border border-blue-200">
                          <div className="flex items-center justify-center space-x-2">
                            <Calendar className="w-4 h-4 text-black" />
                            <span className="font-bold text-black uppercase">
                              Session
                            </span>
                            <span className="text-black">
                              {member.joinedYear}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-blue-300 rounded-2xl p-2 border border-blue-200">
                          <div className="flex items-center justify-center space-x-2">
                            <CalendarX className="w-4 h-4 text-black" />
                            <span className="font-bold text-black uppercase">
                              Left
                            </span>
                            <span className="text-black">{member.endYear}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CSS for hiding scrollbar */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        
      </div>
    </div>
  );
};

export default Team;
