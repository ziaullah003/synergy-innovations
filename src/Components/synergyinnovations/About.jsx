import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Lightbulb, ShoppingBag, Users, Target, Globe, Zap } from 'lucide-react';
import Founder from './Founder';
const About = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);

  const AnimatedNumber = ({ target, suffix = "", duration = 2000 }) => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (isStatsVisible && !isAnimating) {
        setIsAnimating(true);
        const startTime = Date.now();
        const startValue = 0;
        const endValue = target;

        const updateNumber = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
          
          setCurrent(currentValue);
          
          if (progress < 1) {
            requestAnimationFrame(updateNumber);
          }
        };

        requestAnimationFrame(updateNumber);
      }
    }, [isStatsVisible, target, duration, isAnimating]);

    return (
      <span className="inline-block">
        {current}{suffix}
      </span>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStatsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const sections = [
    {
      id: 'solutions',
      title: 'Synergy Solutions',
      icon: <Lightbulb className="w-8 h-8" />,
      description: 'Innovative technology solutions that transform businesses and drive digital excellence.',
      longDescription: 'Our Solutions division specializes in cutting-edge software development, AI integration, and digital transformation services. We partner with enterprises to create scalable, efficient solutions that solve complex challenges and accelerate growth.',
      features: ['Custom Software Development', 'AI & Machine Learning', 'Cloud Solutions', 'Digital Transformation'],
       color: 'from-blue-300 to-blue-300'
    },
    {
      id: 'mall',
      title: 'Synergy Mall',
      icon: <ShoppingBag className="w-8 h-8" />,
      description: 'Next-generation e-commerce platform revolutionizing online shopping experiences.',
      longDescription: 'Synergy Mall represents the future of digital commerce, offering a seamless, intelligent shopping ecosystem. Our platform combines advanced analytics, personalized recommendations, and innovative payment solutions to create unparalleled customer experiences.',
      features: ['Smart Shopping Experience', 'Vendor Management', 'Analytics Dashboard', 'Mobile Commerce'],
       color: 'from-blue-300 to-blue-300'
    },
    {
      id: 'club',
      title: 'Synergy Club',
      icon: <Users className="w-8 h-8" />,
      description: 'Exclusive community fostering innovation, networking, and collaborative growth.',
      longDescription: 'Synergy Club is our premium membership community where industry leaders, entrepreneurs, and innovators connect, collaborate, and create. Members gain access to exclusive events, mentorship programs, and cutting-edge resources.',
      features: ['Exclusive Networking', 'Industry Events', 'Mentorship Programs', 'Innovation Workshops'],
      color: 'from-blue-300 to-blue-300'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Synergy Innovations
              <span className="block text-3xl md:text-4xl text-blue-600 mt-2">Group</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future through innovative solutions, revolutionary commerce, and collaborative communities. 
              We transform ideas into reality and drive progress across industries.
            </p>
          </div>
        </div>
      </div>

      {/* Main About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Divisions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our three core divisions work together to create synergistic solutions 
            that empower businesses and communities worldwide.
          </p>
        </div>

        {/* Interactive Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl ${
                activeSection === section.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color}`}></div>
              <div className="relative p-8 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-950">{section.icon}</div>
                  <ChevronRight className={`w-6 h-6 text-black transition-transform duration-300 ${
                    activeSection === section.id ? 'rotate-90' : ''
                  }`} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{section.title}</h3>
                <p className="text-black leading-relaxed">{section.description}</p>
                
                {activeSection === section.id && (
                  <div className="mt-6 animate-in slide-in-from-top-5 duration-300">
                    <p className="text-black mb-4 text-sm leading-relaxed">
                      {section.longDescription}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {section.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-black">
                          <div className="w-2 h-2 bg-blue-200 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-100 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To create synergistic ecosystems that empower businesses and individuals through innovative technology, 
              seamless commerce experiences, and collaborative communities that drive meaningful change and sustainable growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-100 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the global leader in integrated innovation, where technology solutions, commerce platforms, 
              and community networks converge to create unprecedented value and transform how the world connects, 
              collaborates, and conducts business.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="bg-gradient-to-r from-blue-200 to-blue-400 text-black rounded-2xl p-8 text-center shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-8">Driving Innovation Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold mb-2">
                <AnimatedNumber target={500} suffix="+" duration={2000} />
              </div>
              <div className="">Projects Delivered</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold mb-2">
                <AnimatedNumber target={50} suffix="+" duration={2200} />
              </div>
              <div className="">Countries Served</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold mb-2">
                <AnimatedNumber target={10} suffix="K+" duration={2400} />
              </div>
              <div>Community Members</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold mb-2">
                <AnimatedNumber target={99} suffix="%" duration={2600} />
              </div>
              <div className="">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Founder />
    </>
  );
};

export default About;