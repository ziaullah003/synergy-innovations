import React, { useState, useEffect } from 'react';
import { Users, Calendar, MapPin, Target, Award, TrendingUp, Heart, ChevronRight, Star, Building, Handshake, BookOpen } from 'lucide-react';
import { User } from 'lucide-react';

const AboutHome = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [countUp, setCountUp] = useState({
    members: 0,
    events: 0,
    branches: 0,
    satisfaction: 0
  });

  const timelineData = [
    {
      year: "2023",
      title: "The Launching",
      description: "In 2023, we brought the Software Synergy Club to life with a simple yet powerful aim — to create a space where people could learn, grow, and sharpen their technical abilities. From exploring new technologies to sharing practical knowledge, the club began as a small initiative with a big vision for the future.",
      milestone: "25 Founding Members"
    },
    {
      year: "2024",
      title: "A Year of Progress",
      description: "At the very start of 2024, we brought in a fresh team to steer the 2024–2025 session with new energy and ideas. Over the months, our reach grew steadily, and by the end of the year, we had welcomed around 400 students. Alongside this growth, we introduced a series of well-crafted, impactful courses aimed at equipping learners with valuable, real-world skills..",
      milestone: "450+ Active Members"
    },
    
    {
      year: "2024",
      title: "Innovation Hub",
      description: "In 2024, we stepped into a new phase of innovation, hosting a variety of student-focused events and hands-on workshops. During the same year, we began working on plans to establish branches in multiple universities, expanding our reach and impact. From this wave of progress, Software Synergy Solutions — our own software house — was launched towards the end of the year, marking a major milestone in our journey.",
      milestone: "300+ Community Members"
    },
    {
      year: "2025",
      title: "Excellence Recognition",
      description: "In 2025, we expanded into several universities, partnered with organizations dedicated to student welfare, and organized e-commerce workshops, webinars, and seminars to promote awareness and skill-building. Our community achieved a remarkable success rate with high student and member satisfaction. We also welcomed a new team for the 2025–2026 session — recognized as one of the strongest teams in our history.",
      milestone: "25+ Global Branches"
    }
  ];

  const stats = [
    { icon: Users, number: 500, suffix: "+", label: "Active Members", color: "from-blue-400 to-blue-600" },
    { icon: Calendar, number: 50, suffix: "+", label: "Annual Events", color: "from-green-400 to-green-600" },
    { icon: MapPin, number: 25, suffix: "+", label: "Global Branches", color: "from-purple-400 to-purple-600" },
    { icon: Award, number: 95, suffix: "%", label: "Member Satisfaction", color: "from-orange-400 to-orange-600" }
  ];

  const expertise = [
    { icon: Users, title: "Community Building", description: "Fostering meaningful connections and relationships" },
    { icon: BookOpen, title: "Skill Development", description: "Workshops and learning programs for personal growth" },
    { icon: Handshake, title: "Networking Events", description: "Professional networking and collaboration opportunities" },
    { icon: Target, title: "Leadership Programs", description: "Developing future leaders and change-makers" },
    { icon: User, title: "Career Counceling", description: "Shape your future in the guidence of technical experts" },
    { icon: Heart, title: "Social Impact", description: "Community service and social responsibility initiatives" }
  ];



  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timelineData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const increment = 50;
      
      stats.forEach((stat, index) => {
        let current = 0;
        const target = stat.number;
        const step = target / (duration / increment);
        
        const counter = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(counter);
          }
          
          setCountUp(prev => ({
            ...prev,
            [stat.label.toLowerCase().replace(' ', '')]: Math.floor(current)
          }));
        }, increment);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white mb-6">
      {/* Expertise Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Our Areas of Focus</h2>
            <p className="text-xl text-gray-600">How we create value for our community members</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      

      {/* Timeline Section */}
      <section className="text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-blue-950">A timeline of growth, impact, and community building</p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 space-x-8">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 bg-blue-300/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 ${
                    activeTimeline === index 
                      ? 'border-blue-300 shadow-2xl scale-105' 
                      : 'border-blue-700/50 hover:border-blue-500'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-black">{item.year}</span>
                      
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-black leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {timelineData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimeline(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTimeline === index ? 'bg-blue-700 scale-125' : 'bg-black hover:bg-blue-950'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-10 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Achievements that showcase our community's strength</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const statKey = stat.label.toLowerCase().replace(' ', '');
              const currentValue = countUp[statKey] || 0;
              
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
                >
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-blue-950">
                        {currentValue}{stat.suffix}
                      </h3>
                      <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      

      

      
    </div>
  );
};

export default AboutHome;