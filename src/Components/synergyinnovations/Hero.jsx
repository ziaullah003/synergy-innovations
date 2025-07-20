// Hero.jsx
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./assets/Css/slider.css"; // Import custom styles

export default function Hero() {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const msgEndRef = useRef(null);

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
    return i ? "That’s interesting—tell me more!" : "Please type something 😄";
  };

  const onSend = () => {
    const txt = inputValue.trim();
    if (!txt) return;
    addUserMessage(txt);
    setInputValue("");
    setTimeout(() => addBotMessage(generateResponse(txt)), 600);
  };

  const onKey = (e) => e.key === "Enter" && onSend();
  const onBtnClick = (t) => alert(`Clicked → "${t}"`);

  return (
    <div className="hero-container">

      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        className="hero-slider "
      >
        <SwiperSlide style={{ backgroundImage: `url(/slider1.jpeg)` }} />
        <SwiperSlide style={{ backgroundImage: `url(/slider2.jpeg)` }} />
        <SwiperSlide style={{ backgroundImage: `url(/slider3.jpeg)` }} />
      </Swiper>

      {/* Overlay Cards */}
      {/* Overlay Title + Cards */}
      <div className="card-container-wrapper">
        <h1 className="hero-title">Welcome to Software Innovations Group</h1>
        <p className="hero-desc">Synergy Innovations Group is your trusted partner for software development, business transformation, and digital innovations. 
        </p>
        <div className="card-container">
          {[
            {
              title: "Synergy Solutions",
              desc: "Top-tier software solutions crafted for your business needs.",
              btn: "Explore Software House",
            },
            {
              title: "Synergy Club",
              desc: "Join a community of innovators and tech enthusiasts.",
              btn: "Visit the Club",
            },
            {
              title: "Synergy Mall",
              desc: "Discover our curated marketplace of quality goods.",
              btn: "Visit Mall",
              src: "https://www.synergymall.io/",
            },
          ].map((card, i) => (
            <div className="card" key={i}>
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
              <a href={card.src} target="_blank">
                <button className="btn" >
                {card.btn}
              </button>
              </a>
              
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: 25,
          right: 25,
          background: "#25d366",
          width: 60,
          height: 60,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
          zIndex: 1100,
        }}
      >
        <i
          className="fab fa-whatsapp"
          style={{ color: "#fff", fontSize: 28 }}
        />
      </a>

      {/* AI Chatbot */}
      <section
        role="region"
        aria-label="AI Chatbot"
        style={{
          position: "fixed",
          bottom: 95,
          right: 25,
          width: 320,
          maxWidth: "90vw",
          background: "#0056b3",
          borderRadius: "12px 12px 0 0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          color: "#fff",
          fontFamily: "sans-serif",
          display: chatbotVisible ? "flex" : "none",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 1100,
        }}
      >
        <div
          style={{
            background: "#003f8a",
            padding: "0.75rem 1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "600",
          }}
        >
          <span>AI Chatbot</span>
          <button
            onClick={() => setChatbotVisible(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>
        <div
          style={{
            flex: 1,
            padding: "1rem",
            overflowY: "auto",
            background: "#e8f0fe",
            color: "#333",
          }}
          ref={msgEndRef}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                textAlign: m.sender === "user" ? "right" : "left",
                margin: "0.5rem 0",
                background: m.sender === "bot" ? "#fff" : "transparent",
                display: "inline-block",
                padding: m.sender === "bot" ? "0.5rem 0.75rem" : 0,
                borderRadius: m.sender === "bot" ? 12 : 0,
                color: m.sender === "user" ? "#0056b3" : "#333",
                fontWeight: m.sender === "user" ? 600 : 400,
              }}
            >
              {m.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Ask me anything..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={onKey}
          style={{
            border: "none",
            borderTop: "1px solid #ccc",
            padding: "0.75rem 1rem",
            fontSize: 14,
          }}
        />
      </section>
    </div>
  );
}
