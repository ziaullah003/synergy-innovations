import React, { useState, useEffect } from 'react';
import { Users, Calendar, MapPin, Target, Award, TrendingUp, Globe, Heart, ChevronRight, Star, Building, Handshake, BookOpen } from 'lucide-react';

const SynergyClubAbout = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [countUp, setCountUp] = useState({
    members: 0,
    events: 0,
    branches: 0,
    satisfaction: 0
  });

  const timelineData = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started Synergy Club with 25 founding members sharing a vision to create meaningful connections and foster community growth.",
      milestone: "25 Founding Members"
    },
    {
      year: "2020",
      title: "Rapid Growth",
      description: "Expanded to 150+ members and launched our first annual community summit. Established core programs for networking and skill development.",
      milestone: "150+ Active Members"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened our first international branches in 5 cities. Launched virtual events platform reaching members worldwide.",
      milestone: "5 Global Branches"
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Became a recognized innovation hub with 300+ members. Launched mentorship programs and community impact initiatives.",
      milestone: "300+ Community Members"
    },
    {
      year: "2024",
      title: "Excellence Recognition",
      description: "Achieved 95% member satisfaction rate. Established partnerships with leading organizations and expanded to 25+ branches globally.",
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
    { icon: Globe, title: "Global Outreach", description: "Connecting communities across different regions" },
    { icon: Heart, title: "Social Impact", description: "Community service and social responsibility initiatives" }
  ];

  const achievements = [
    "Best Community Organization 2023",
    "Excellence in Member Engagement",
    "Outstanding Social Impact Award",
    "Innovation in Community Building"
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
    <div className="bg-gradient-to-br from-gray-50 to-white">
      {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6">About Synergy Club</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-300 to-blue-950 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-blue-950">Who We Are</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Synergy Club, founded in 2018, is a vibrant community organization that brings together individuals from diverse backgrounds to create meaningful connections, foster personal growth, and drive positive change. Our community of 500+ active members spans across 25+ branches globally, united by a shared vision of collaboration and innovation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are believers of growth through connection! A growth driven by community, learning, and shared experiences. Having worked with members from various industries and organized numerous impactful events, we have built a strong foundation showcasing our commitment to excellence.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-blue-950 mb-4">Our Mission</h4>
                <p className="text-gray-700">
                  To create an inclusive platform where individuals can connect, learn, and grow together while making a positive impact in their communities and beyond.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
                  alt="Community gathering"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <h5 className="text-2xl font-bold text-blue-950">6+</h5>
                    <p className="text-gray-600">Years of Impact</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <h5 className="text-2xl font-bold text-blue-950">40+</h5>
                    <p className="text-gray-600">Countries Reached</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-blue-200">A timeline of growth, impact, and community building</p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-8 space-x-8">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 bg-blue-900/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 ${
                    activeTimeline === index 
                      ? 'border-blue-300 shadow-2xl scale-105' 
                      : 'border-blue-700/50 hover:border-blue-500'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-blue-300">{item.year}</span>
                      <div className="px-3 py-1 bg-blue-400 text-blue-950 rounded-full text-sm font-bold">
                        {item.milestone}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-blue-200 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {timelineData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimeline(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTimeline === index ? 'bg-blue-300 scale-125' : 'bg-blue-700 hover:bg-blue-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-blue-50 to-white">
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

      {/* Expertise Section */}
      <section className="py-20 bg-white">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Synergy Club?</h2>
            <p className="text-xl text-blue-200">What makes our community special</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Inclusive and welcoming environment",
              "Diverse community from 40+ countries",
              "Regular networking and learning events",
              "Professional development opportunities",
              "Global presence with local impact",
              "Strong community support system"
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-blue-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-300/20"
              >
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
                <p className="text-blue-100 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600">Awards and recognition for our community impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-blue-950 text-lg">{achievement}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Become part of a vibrant community that's dedicated to growth, connection, and positive impact. 
            Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105">
              Join Our Community
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SynergyClubAbout;