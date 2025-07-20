import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle } from 'lucide-react';
import {Link} from 'react-router-dom';

export default function Hero() {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const msgEndRef = useRef(null);

  const slides = [
    '/slider1.jpeg',
    '/slider2.jpeg', 
    '/slider3.jpeg'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setChatbotVisible(true);
      addBotMessage("Hello! I'm the Synergy AI assistant 😊");
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const addBotMessage = (t) =>
    setMessages((m) => [...m, { sender: "bot", text: t }]);
  const addUserMessage = (t) =>
    setMessages((m) => [...m, { sender: "user", text: t }]);

  const generateResponse = (i) => {
    const t = i.toLowerCase();
    if (t.includes("hello")) return "Hi there! How can I assist today?";
    if (t.includes("software"))
      return "Our Software Synergy Solutions are top-tier!";
    if (t.includes("club")) return "Synergy Club is where innovators unite.";
    if (t.includes("mall"))
      return "Synergy Mall → premium community marketplace.";
    return i ? "That's interesting—tell me more!" : "Please type something 😄";
  };

  const onSend = () => {
    const txt = inputValue.trim();
    if (!txt) return;
    addUserMessage(txt);
    setInputValue("");
    setTimeout(() => addBotMessage(generateResponse(txt)), 600);
  };

  const onKey = (e) => e.key === "Enter" && onSend();

  const cardData = [
    {
      title: "Synergy Solutions",
      desc: "Top-tier software solutions crafted for your business needs.",
      btn: "Explore Software House",
      src: "/synergy-solutions",
    },
    {
      title: "Synergy Club", 
      desc: "Join a community of innovators and tech enthusiasts.",
      btn: "Visit the Club",
      src: "synergy-club",
    },
    {
      title: "Synergy Mall",
      desc: "Discover our curated marketplace of quality goods.",
      btn: "Visit Mall",
      src: "https://www.synergymall.io/",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* Lighter Overlay for Better Balance */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          
          {/* Main Title - Reduced Size */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Welcome to Synergy Innovations Group
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed px-2">
              Synergy Innovations Group is your trusted partner for software development, 
              business transformation, and digital innovations.
            </p>
          </div>

          {/* Three Cards - Glassmorphism Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto w-full px-2 sm:px-4">
            {cardData.map((card, i) => (
              <div 
                key={i}
                className="group relative bg-white/15 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-7 border border-white/25 hover:bg-white/25 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-100 transition-colors duration-300">
                    {card.title}
                  </h2>
                  
                  <p className="text-gray-200 group-hover:text-gray-100 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed transition-colors duration-300">
                    {card.desc}
                  </p>
                  
                  {card.src ? (
                    <Link to={card.src} target="_blank" rel="noopener noreferrer">
                      <button className="w-full bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-900 hover:to-blue-900 text-white font-semibold py-2 sm:py-2.5 lg:py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs sm:text-sm lg:text-base transform hover:-translate-y-1">
                        {card.btn}
                      </button>
                    </Link>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-900 hover:to-blue-900 text-white font-semibold py-2 sm:py-2.5 lg:py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs sm:text-sm lg:text-base transform hover:-translate-y-1">
                        {card.btn}
                      </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Icon - Responsive */}
      <a
        href="https://wa.me/+923275939938"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
        </svg>
      </a>

      {/* AI Chatbot - Modern Design */}
      {chatbotVisible && (
        <div className="fixed bottom-20 right-2 sm:bottom-24 sm:right-6 w-72 sm:w-80 max-w-[calc(100vw-1rem)] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl text-gray-800 font-sans flex flex-col overflow-hidden z-50 border border-white/30">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 flex justify-between items-center font-semibold text-white">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm sm:text-base">AI Chatbot</span>
            </div>
            <button
              onClick={() => setChatbotVisible(false)}
              className="bg-white/20 hover:bg-white/30 border-none text-white text-xl cursor-pointer transition-all duration-200 p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white max-h-64 min-h-48">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`mb-3 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div className={`inline-block max-w-[85%] text-sm ${
                  m.sender === 'bot' 
                    ? 'bg-white p-3 px-4 rounded-2xl text-gray-800 shadow-sm border border-gray-100' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 px-4 rounded-2xl font-medium shadow-md'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={msgEndRef} />
          </div>
          
          {/* Input */}
          <div className="border-t border-gray-200">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={onKey}
              className="w-full border-none p-4 text-sm text-gray-800 bg-transparent focus:outline-none placeholder-gray-500"
            />
          </div>
        </div>
      )}

      {/* Slide Indicators - Modern Style */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/60 hover:bg-white/80 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </div>
  );
}