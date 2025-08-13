import React, { useState, useRef } from 'react';
import { Crown, Star, Award, Users, ChevronLeft, ChevronRight, Calendar, Code, Activity, CalendarX } from 'lucide-react';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('current');
  const [currentSlide, setCurrentSlide] = useState({ current: 0, alumni: 0 });
  const scrollContainerRef = useRef(null);

  // Current Team Members
  const currentTeam = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Club President",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2023",
      projectsCompleted: 8,
      status: "Active",
      specialties: ["Leadership", "Strategy"]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Technical Lead",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2023",
      projectsCompleted: 12,
      status: "Active",
      specialties: ["Full Stack", "DevOps"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2024",
      projectsCompleted: 6,
      status: "Active",
      specialties: ["UI/UX", "Prototyping"]
    },
    {
      id: 4,
      name: "David Kim",
      role: "Backend Developer",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2024",
      projectsCompleted: 9,
      status: "Active",
      specialties: ["Node.js", "Databases"]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Event Coordinator",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2024",
      projectsCompleted: 5,
      status: "Active",
      specialties: ["Event Planning", "Community"]
    },
    {
      id: 6,
      name: "Alex Martinez",
      role: "Product Manager",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      joinedYear: "2023",
      projectsCompleted: 7,
      status: "Active",
      specialties: ["Product Strategy", "Analytics"]
    }
  ];

  // Senior Alumni
  const seniorAlumni = [
    {
      id: 7,
      name: "Rachel Wang",
      role: "Former President",
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      endYear: "2023",
      achievements: ["Founded 3 startups", "Published researcher", "Tech Innovation Award"],
      specialties: ["Entrepreneurship", "Research"]
    },
    {
      id: 8,
      name: "James Wilson",
      role: "Former Tech Lead",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      endYear: "2022",
      achievements: ["AWS Certified", "Open source contributor", "System Architecture Expert"],
      specialties: ["Cloud Computing", "System Design"]
    },
    {
      id: 9,
      name: "Amanda Foster",
      role: "Former Design Lead",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      endYear: "2023",
      achievements: ["Design Award Winner", "Design Mentor", "UX Innovation Leader"],
      specialties: ["Design Systems", "User Research"]
    },
    {
      id: 10,
      name: "Kevin Zhang",
      role: "Former VP Engineering",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      endYear: "2022",
      achievements: ["App Store Featured", "Tech Speaker", "Mobile Innovation Pioneer"],
      specialties: ["Mobile Development", "Team Leadership"]
    },
    {
      id: 11,
      name: "Sophie Chen",
      role: "Former Marketing Director",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      endYear: "2021",
      achievements: ["Marketing Excellence", "Brand Champion", "Community Growth Leader"],
      specialties: ["Digital Marketing", "Brand Strategy"]
    }
  ];

  const getCurrentData = () => activeCategory === 'current' ? currentTeam : seniorAlumni;
  const currentData = getCurrentData();

  const switchCategory = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Width of one card plus gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Width of one card plus gap
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="bg-blue-300 rounded-2xl p-4 shadow-xl">
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-black mb-6 leading-none">
            Our 
            <span className="text-blue-300"> Collective</span>
          </h1>
          <p className="text-xl md:text-2xl text-black font-medium max-w-4xl mx-auto leading-relaxed">
            Discover the talented individuals driving innovation and the distinguished alumni who established our legacy
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-3xl p-3 shadow-2xl border border-blue-100">
            <div className="flex space-x-3">
              <button
                onClick={() => switchCategory('current')}
                className={`flex items-center space-x-4 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
                  activeCategory === 'current'
                    ? 'bg-blue-300 text-black shadow-xl scale-105'
                    : 'text-black hover:text-blue-300 hover:bg-blue-50 hover:scale-102'
                }`}
              >
                <Activity className="w-6 h-6" />
                <span>Current Team</span>
                <div className="bg-white bg-opacity-25 px-3 py-1.5 rounded-full text-sm font-bold">
                  {currentTeam.length}
                </div>
              </button>
              <button
                onClick={() => switchCategory('alumni')}
                className={`flex items-center space-x-4 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
                  activeCategory === 'alumni'
                    ? 'bg-blue-300 text-black shadow-xl scale-105'
                    : 'text-black hover:text-blue-300 hover:bg-blue-50 hover:scale-102'
                }`}
              >
                <Crown className="w-6 h-6" />
                <span>Senior Alumni</span>
                <div className="bg-white bg-opacity-25 px-3 py-1.5 rounded-full text-sm font-bold">
                  {seniorAlumni.length}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-300 hover:bg-blue-400 text-black p-4 rounded-full transition-all duration-300 z-10 shadow-xl hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-300 hover:bg-blue-400 text-black p-4 rounded-full transition-all duration-300 z-10 shadow-xl hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto px-16 py-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {currentData.map((member) => (
              <div 
                key={member.id}
                className="flex-shrink-0 w-80 group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-8 hover:scale-105 border border-blue-100 h-full">
                  <div className="text-center space-y-6 h-full flex flex-col">
                    {/* Profile Section */}
                    <div className="relative mx-auto">
                      <div className="w-32 h-32 rounded-3xl bg-blue-300 p-1.5 mx-auto shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <img 
                          src={member.img} 
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full rounded-3xl object-cover border-4 border-white"
                        />
                      </div>
                      <div className="absolute -top-3 -right-3 bg-blue-300 rounded-2xl p-3 shadow-xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        {activeCategory === 'alumni' ? 
                          <Crown className="w-5 h-5 text-black fill-current" /> :
                          <Star className="w-5 h-5 text-black fill-current" />
                        }
                      </div>
                    </div>
                    
                    {/* Name & Role */}
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-black group-hover:text-blue-700 transition-colors duration-300">
                        {member.name}
                      </h2>
                      <div className="flex items-center justify-center space-x-2">
                        <Award className="w-5 h-5 text-blue-300 flex-shrink-0" />
                        <h4 className="text-black font-semibold text-base">
                          {member.role}
                        </h4>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="py-4">
                      {activeCategory === 'current' ? (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-300 rounded-2xl p-4 border border-blue-200">
                            <div className="flex items-center justify-center space-x-2 mb-2">
                              <Calendar className="w-4 h-4 text-black" />
                              <span className="text-xs font-semibold text-black uppercase tracking-wide">Joined</span>
                            </div>
                            <span className="text-lg font-bold text-black">{member.joinedYear}</span>
                          </div>
                          <div className="bg-blue-300 rounded-2xl p-4 border border-blue-200">
                            <div className="flex items-center justify-center space-x-2 mb-2">
                              <Code className="w-4 h-4 text-black" />
                              <span className="text-xs font-semibold text-black uppercase tracking-wide">Projects</span>
                            </div>
                            <span className="text-lg font-bold text-black">{member.projectsCompleted}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-blue-300 rounded-2xl p-4 border border-blue-200">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <CalendarX className="w-5 h-5 text-black" />
                            <span className="text-sm font-semibold text-black uppercase tracking-wide">Left</span>
                          </div>
                          <span className="text-xl font-bold text-black">{member.endYear}</span>
                        </div>
                      )}
                    </div>

                    {/* Achievements Section - Only for Alumni */}
                    {activeCategory === 'alumni' && member.achievements && (
                      <div className="bg-blue-300 rounded-2xl p-5 border border-blue-200 shadow-inner">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                          <Award className="w-5 h-5 text-black" />
                          <span className="text-sm font-bold text-black tracking-wide uppercase">Achievements</span>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="bg-white bg-opacity-20 text-black px-3 py-2 rounded-full text-xs font-semibold border border-black border-opacity-30 hover:border-opacity-50 transition-all duration-300 hover:scale-110 shadow-sm"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Specialties */}
                    <div className="flex-grow flex flex-col justify-end mt-6">
                      <div className="flex flex-wrap gap-3 justify-center">
                        {member.specialties && member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 px-4 py-2.5 rounded-2xl text-sm font-semibold border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
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

        {/* Stats Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-3xl px-12 py-6 shadow-2xl border border-blue-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">{currentTeam.length}</div>
              <div className="text-sm font-semibold text-black uppercase tracking-wide">Active Members</div>
            </div>
            <div className="w-px h-12 bg-blue-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">{seniorAlumni.length}</div>
              <div className="text-sm font-semibold text-black uppercase tracking-wide">Alumni</div>
            </div>
            <div className="w-px h-12 bg-blue-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">{currentTeam.length + seniorAlumni.length}</div>
              <div className="text-sm font-semibold text-black uppercase tracking-wide">Total Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;