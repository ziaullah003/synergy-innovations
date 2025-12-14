import React, { useState, useEffect, useRef } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export default function Hero() {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const msgEndRef = useRef(null);

  const slides = ["/slider1.jpeg", "/slider2.jpg", "/slider3.jpg", "/slider4.jpg", "/slider5.jpg"];

  const sendMessageToBot = async (message, history = []) => {
    try {
      const payload = { message, conversation_history: history };
      const res = await axios.post(`${API_BASE_URL}/chat`, payload, {
        headers: { "Content-Type": "application/json" },
        timeout: 20000,
      });
      return res.data;
    } catch (err) {
      console.error("Chatbot API error:", err);
      return { response: "⚠️ Unable to connect to chatbot.", timestamp: new Date().toISOString() };
    }
  };

  const addBotMessage = (text, timestamp) =>
    setMessages((prev) => [...prev, { sender: "bot", text, timestamp }]);

  const addUserMessage = (text) =>
    setMessages((prev) => [...prev, { sender: "user", text, timestamp: new Date().toISOString() }]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setChatbotVisible(true);
      const welcomeText =
        "Hello! 👋 Welcome to Synergy Innovations. How can I help you today?";
      addBotMessage(welcomeText, new Date().toISOString());
      setConversationHistory([{ role: "assistant", content: welcomeText }]);

      try {
        setIsLoading(true);
        const res = await sendMessageToBot("Hello", [{ role: "assistant", content: welcomeText }]);
        addBotMessage(res.response, res.timestamp);
        setConversationHistory((prev) => [...prev, { role: "assistant", content: res.response }].slice(-5));
      } finally {
        setIsLoading(false);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const onSend = async () => {
    const text = inputValue.trim();
    if (!text) return;

    addUserMessage(text);
    setInputValue("");
    const newHistory = [...conversationHistory, { role: "user", content: text }].slice(-5);
    setConversationHistory(newHistory);

    setIsLoading(true);
    try {
      const res = await sendMessageToBot(text, newHistory);
      const botText = res?.response || "Sorry, I did not get a response.";
      addBotMessage(botText, res?.timestamp || new Date().toISOString());
      setConversationHistory((prev) => [...prev, { role: "assistant", content: botText }].slice(-5));
    } catch (err) {
      console.error(err);
      addBotMessage("⚠️ Server error. Please try again.", new Date().toISOString());
    } finally {
      setIsLoading(false);
    }
  };

  const onKey = (e) => e.key === "Enter" && onSend();

  const cardData = [
    { title: "Synergy Solutions", desc: "Top-tier software solutions crafted for your business needs.", btn: "Explore Software House", src: "/synergy-solutions" },
    { title: "Synergy Club", desc: "Join a community of innovators and tech enthusiasts.", btn: "Visit the Club", src: "/synergy-club" },
    { title: "Synergy Mall", desc: "Discover our curated marketplace of quality goods.", btn: "Visit Mall", src: "https://www.synergymall.io/" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="container mx-auto text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4 mt-7">Welcome to Synergy Innovations Group</h1>
          <p className="max-w-xl mx-auto mb-12">Software development, digital innovation & business transformation.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardData.map((c, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:scale-105 transition">
                <h2 className="text-xl font-bold mb-3">{c.title}</h2>
                <p className="mb-4 text-sm">{c.desc}</p>
                <Link to={c.src} target="_blank">
                  <button className="bg-primary px-4 py-2 rounded-xl text-white font-semibold">{c.btn}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-24 bg-green-500 p-4 rounded-full shadow-xl z-50 hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} color="white" />
      </a>

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setChatbotVisible((prev) => !prev)}
        className="fixed bottom-3 hover:cursor-pointer right-6 bg-primary p-4 rounded-full shadow-xl z-50 hover:bg-blue-700 transition flex items-center justify-center"
      >
        <FiMessageCircle size={24} color="white" />
      </button>


{/* Chatbot Panel */}
{chatbotVisible && (
  <div className="fixed bottom-18 right-2 w-75 sm:w-50 md:w-70 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col
                  h-[350px] sm:h-[300px] md:h-[350px]">
    {/* Header */}
    <div className="bg-primary text-white p-3 flex justify-between items-center">
      <span className="flex items-center gap-2">
        <FiMessageCircle size={18} />Syn Solutions
      </span>
      <button onClick={() => setChatbotVisible(false)}>
        <FiX size={18} />
      </button>
    </div>

    {/* Messages Container */}
    <div className="flex-1 overflow-y-auto p-3 bg-gray-50 space-y-2">
      {messages.map((m, i) => (
        <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
          <span className={`inline-block px-3 py-2 rounded-xl max-w-[70%] text-sm 
            ${m.sender === "user" ? "bg-blue-600 text-white" : "bg-white border shadow"}`}>
            {m.text}
          </span>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-start space-x-1">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-400"></span>
        </div>
      )}
      <div ref={msgEndRef} />
    </div>

    {/* Input + Send Button */}
    <div className="flex border-t p-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onKey}
        placeholder="Ask me anything..."
        className="flex-1 p-2 rounded-l-xl border focus:outline-none text-sm"
        disabled={isLoading}
      />
      <button
        onClick={onSend}
        className="bg-primary px-4 rounded-r-xl text-white font-semibold hover:bg-blue-700 transition"
      >
        Send
      </button>
    </div>
  </div>
)}


    </div>
  );
}
