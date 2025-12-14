import React, { useState, useEffect } from 'react';
import { Code, Users, Lightbulb, Clock, Target, CheckCircle, Globe, Smartphone, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSS = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: '15+', label: 'Projects Completed', icon: CheckCircle },
    { number: '1.5', label: 'Years Experience', icon: Clock },
    { number: '1700+', label: 'CVs Received', icon: Users },
    { number: '2024', label: 'Internship Launch', icon: Target }
  ];

  const services = [
    { title: 'Web Development', description: 'Modern, responsive websites', icon: Monitor },
    { title: 'AI Development', description: 'Smart, data-driven technologies', icon: Lightbulb },
    { title: 'Mobile Apps', description: 'Android and iOS platforms', icon: Smartphone },
    { title: 'Custom Software', description: 'Tailored business solutions', icon: Code }
  ];

  const whyChooseUs = [
    'Focus on building long-term relationships with our clients',
    'Work closely with you throughout the entire development process',
    'Keep everything transparent and clear from day one',
    'Offer free consultations so you can explore your options without pressure'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary bg-primary via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-10 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              Software Synergy
              <span className="block text-blue-300 mt-2">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white-100 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Where Expertise Meets Innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
              <div className="bg-blue-300 white px-6 py-3 rounded-full font-semibold">
                 Software Development
              </div>
              <div className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-300 hover:text-cl-blue transition-all duration-300">
                AI Solutions
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating animation elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-20 animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-bounce animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 rounded-xl transition-all duration-700 transform hover:scale-105 ${
                    currentStat === index 
                      ? 'bg-primary text-white shadow-2xl' 
                      : 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900 hover:shadow-lg'
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-4 ${currentStat === index ? 'text-white' : 'text-blue-950'}`} />
                  <div className={`text-3xl font-bold mb-2 ${currentStat === index ? 'text-white' : 'text-blue-950'}`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm font-medium ${currentStat === index ? 'text-white' : 'text-blue-950'}`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold cl-primary mb-8 transition-all duration-1000 transform ${
              isVisible['who-we-are'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Who We Are
            </h2>
            <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
              isVisible['who-we-are'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="text-left">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We are a professional <span className="font-semibold cl-primary">software development company</span> based on years of hands-on experience and a passion for technology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team includes expert developers, project managers, and creative minds who work together to bring your digital ideas to life.
                </p>
              </div>
              <div className="relative">
                <div className="bg-primary  p-8 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Users className="w-16 h-16 cl-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
                  <p className="white">Dedicated professionals working together to deliver exceptional results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      

      {/* Internship Program Section */}
      <section id="internship" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 transform ${
              isVisible['internship'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Our Global Impact
            </h2>
            <div className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 md:p-12 transition-all duration-1000 transform ${
              isVisible['internship'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Globe className="w-16 h-16 cl-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                Remote Internship Program 2024
              </h3>
              <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                We launched a global remote internship program focused on web development, 
                receiving over <span className="font-bold cl-primary">1,700 CVs</span> from 
                aspiring developers and students worldwide.
              </p>
              <p className="text-black">
                This program helped us contribute to the global tech community while identifying emerging talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl md:text-5xl font-bold cl-primary text-center mb-16 transition-all duration-1000 transform ${
            isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Why Choose Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                    isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CheckCircle className="w-6 h-6 cl-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Content Side */}
              <div className="lg:col-span-5">
                <div className={`transition-all duration-1000 transform ${
                  isVisible['founders'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <h2 className="text-4xl md:text-5xl font-bold cl-primary mb-6">
                    Meet Our Founders
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
                    At the heart of Synergy Innovations Group are two visionary minds, Zia Ullah and Salman Elahi. 
                    United by a passion for technology, entrepreneurship, and community development, they co-founded 
                    Synergy to build a platform where innovation meets impact. With a shared dream of empowering youth 
                    and bridging gaps in tech education, they have led the creation of flagship ventures including 
                    Synergy Solutions, Synergy Club, and Synergy Mall. Their leadership reflects a perfect blend of 
                    technical expertise, strategic thinking, and a deep commitment to creating opportunities for the 
                    next generation. Together, they are shaping the future—one idea at a time.
                  </p>
                  
                  <div className="pt-8">
                    <div className="flex items-center mb-4">
                      <h3 className="text-lg font-bold text-gray-600">Founders</h3>
                      <span className="ml-3 h-px w-8 bg-gray-400"></span>
                    </div>
                    <div className="flex items-center">
                      <h4 className="text-xl font-semibold cl-primary">Salman Elahi & Zia Ullah</h4>
                      <span className="ml-3 h-px w-8 bg-primary"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer */}
              <div className="lg:col-span-1"></div>

              {/* Image Side */}
              <div className="lg:col-span-6">
                <div className={`relative z-10 transition-all duration-1000 transform ${
                  isVisible['founders'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <div className="relative inline-block">
                    <img
                      src="/founder5.jpeg"
                      alt="Founders - Salman Elahi & Zia Ullah"
                      className="w-full max-w-lg h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                    />
                    
                    {/* Decorative SVG Pattern */}
                    <div className="absolute -bottom-8 -left-8 z-[-1]">
                      <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-60"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#1e40af" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#1e40af" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#1e40af" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#1e40af" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#1e40af" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#1e40af" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#1e40af" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#1e40af" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#1e40af" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#1e40af" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#1e40af" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#1e40af" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#1e40af" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#1e40af" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#1e40af" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#1e40af" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#1e40af" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#1e40af" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#1e40af" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#1e40af" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#1e40af" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#1e40af" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#1e40af" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#1e40af" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#1e40af" />
                      </svg>
                    </div>

                    {/* Background accent */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-primar text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 transform ${
              isVisible['vision'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Our Vision
            </h2>
            <div className={`transition-all duration-1000 transform ${
              isVisible['vision'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Target className="w-16 h-16 text-white mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                Our vision is to become a trusted name among top software development companies, 
                known for quality, innovation, and client satisfaction.
              </p>
              <p className="text-lg text-white mb-12">
                We don't just build software — we build partnerships that last.
              </p>
              <div className="bg-white cl-primary px-8 py-4 rounded-full inline-block font-bold text-lg hover:bg-white transition-colors duration-300 cursor-pointer">
                At Software Synergy Solutions, your success is our success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Ready to Build Something Great Together?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're a startup, small business, or large enterprise, 
            we're ready to support your digital journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/synergy-solutions/contact"} className="bg-primary text-white px-8 py-4 rounded-full font-semibold  transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Project
            </Link>
      
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSS;