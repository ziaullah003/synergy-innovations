import React, { useState, useRef } from "react";
import {
  Crown,
  Star,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Activity,
  CalendarX,
  Search,
} from "lucide-react";

const Team = () => {
  const [activeCategory, setActiveCategory] = useState("current");
  const [searchTerm, setSearchTerm] = useState("");
  const scrollContainerRef = useRef(null);

  // ✅ Unified team data with "type" property
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Club President",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      session: "2025-26",
      type: "current",
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Vice President",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      session: "2024-25",
      type: "senior",
    },
    {
      id: 3,
      name: "Ava Martinez",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop&face=center&auto=format&q=80",
      session: "2025-26",
      type: "current",
    },
  ];

  // ✅ Filter based on category & search
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.type === (activeCategory === "current" ? "current" : "senior") &&
      (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <div className="py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-4 mb-5">
            <div className=" rounded-2xl p-2 shadow-xl">
              <Users className="w-10 h-10 text-black" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-semibold  uppercase tracking-widest mb-1">
                Software Synergy Club
              </span>
              <span className="block text-2xl font-bold">
                Team Portfolio
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold mb-3 leading-none">
            Our <span className="">Collective</span>
          </h1>
          <p className="text-base md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Discover the talented individuals driving innovation and the distinguished alumni who built our legacy.
          </p>
        </div>

        {/* Search and Category */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          {/* Category Buttons */}
          <div className=" rounded-3xl p-2 shadow-2xl flex">
            <button
              onClick={() => setActiveCategory("current")}
              className={`flex items-center justify-center space-x-2 px-5 py-2 rounded-2xl font-semibold text-sm md:text-md transition-all duration-500 ${
                activeCategory === "current"
                  ? "bg-primary text-white shadow-lg"
                  : "cl-primary hover:bg-blue-100"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Current Team</span>
            </button>
            <button
              onClick={() => setActiveCategory("alumni")}
              className={`flex items-center justify-center space-x-2 px-5 py-2 rounded-2xl font-semibold text-sm md:text-md transition-all duration-500 ${
                activeCategory === "alumni"
                  ? "bg-primary text-white shadow-lg"
                  : "text-black"
              }`}
            >
              <Crown className="w-4 h-4" />
              <span>Senior Alumni</span>
            </button>
          </div>
          {/* Search Bar */}
          <div className="relative w-full sm:w-72 border-2 rounded-2xl shadow-lg">
            <Search className="absolute left-3 top-2.5 text-balck  w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-blue-800 placeholder-black rounded-2xl pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
            />
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white text-blue-800 hover:bg-blue-100 p-3 rounded-full transition-all duration-300 shadow-xl hover:scale-110 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white text-blue-800 hover:bg-blue-100 p-3 rounded-full transition-all duration-300 shadow-xl hover:scale-110 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto pb-6 px-8 sm:px-16 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-64 sm:w-72 snap-center"
              >
                <div className="bg-white text-blue-800 rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                  <div className="text-center space-y-4">
                    {/* Profile */}
                    <div className="relative mx-auto">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-blue-100 p-1 mx-auto shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full rounded-3xl object-cover border-2 border-blue-800"
                        />
                      </div>
                      <div className="absolute -top-3 -right-3 bg-blue-800 text-white rounded-2xl p-2 shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                        {member.type === "senior" ? (
                          <Crown className="w-4 h-4" />
                        ) : (
                          <Star className="w-4 h-4" />
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <h2 className="text-lg sm:text-2xl font-bold">
                        {member.name}
                      </h2>
                      <div className="flex items-center justify-center space-x-2">
                        <Award className="w-4 h-4 text-blue-500" />
                        <h4 className="font-semibold text-sm sm:text-base">
                          {member.role}
                        </h4>
                      </div>
                    </div>

                    {/* Session */}
                    <div className="bg-blue-100 rounded-2xl p-2 border border-blue-300">
                      <div className="flex items-center justify-center space-x-2">
                        {member.type === "senior" ? (
                          <>
                            <CalendarX className="w-4 h-4" />
                            <span className="font-bold uppercase">Left</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4" />
                            <span className="font-bold uppercase">Session</span>
                          </>
                        )}
                        <span>{member.session}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
