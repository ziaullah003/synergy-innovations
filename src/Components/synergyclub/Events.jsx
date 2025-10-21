import React, { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import dayjs from "dayjs";

const eventsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
    title: "Partnership with Techkhwa",
    date: "2025-10-15",
    location: "Tech Hub, Peshawar",
    description:
      "Strategic partnership announcement and collaboration meeting with Techkhwa for upcoming technology initiatives.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581092334394-63c83fd4f6c9?w=400&h=300&fit=crop",
    title: "UI/UX Design Bootcamp",
    date: "2025-11-05",
    location: "Lab 2",
    description:
      "Learn how to design intuitive and modern user interfaces using Figma and Adobe XD.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    title: "Matrix Pakistan Collaboration",
    date: "2025-11-10",
    location: "Matrix Office, Islamabad",
    description:
      "Strategic collaboration meeting with Matrix Pakistan for technology partnerships and business development.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    title: "GDG Cloud Event - NIC Islamabad",
    date: "2025-12-05",
    location: "National Incubation Center, Islamabad",
    description:
      "Google Developer Groups cloud computing workshop featuring hands-on sessions and networking opportunities.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    title: "GDG Event - GIKI",
    date: "2025-12-15",
    location: "Ghulam Ishaq Khan Institute",
    description:
      "Developer community meetup at GIKI campus with technical sessions and project showcases.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    title: "Hackathon 2025",
    date: "2025-12-25",
    location: "NUTech, Islamabad",
    description:
      "An innovation challenge where developers and designers collaborate to build creative tech solutions in 48 hours.",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c52?w=400&h=300&fit=crop",
    title: "AI Conference",
    date: "2026-01-10",
    location: "Islamabad Convention Center",
    description:
      "Annual conference featuring experts discussing artificial intelligence advancements and future trends.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    title: "Tech Career Fair",
    date: "2026-02-01",
    location: "FAST University, Islamabad",
    description:
      "Meet top employers and explore tech career opportunities in Pakistan’s leading IT sector.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c9?w=400&h=300&fit=crop",
    title: "Innovation Expo",
    date: "2026-02-20",
    location: "Expo Center, Lahore",
    description:
      "Showcasing startups, innovations, and emerging technologies from across Pakistan.",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6cce0b48?w=400&h=300&fit=crop",
    title: "Women in Tech Summit",
    date: "2026-03-08",
    location: "Karachi Tech Park",
    description:
      "Celebrating women in technology with keynote speakers, workshops, and networking sessions.",
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-700 mb-3">{event.description}</p>

        <div className="flex items-center gap-2 text-sm text-gray-800 mb-2">
          <Calendar className="w-4 h-4 text-primary" />
          {dayjs(event.date).format("MMM D, YYYY")}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-800">
          <MapPin className="w-4 h-4 text-primary" />
          {event.location}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [showAll, setShowAll] = useState(false);
  const [events] = useState(eventsData);

  const visibleEvents = showAll ? events : events.slice(0, 8);

  const handleToggle = () => {
    if (showAll) {
      // Scroll back to top smoothly when clicking "Show Less"
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-10">
          Events
        </h1>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Browse More Button */}
        {events.length > 8 && (
          <div className="text-center mt-10">
            <button
              onClick={handleToggle}
              className="px-6 py-3 rounded-xl font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-300"
            >
              {showAll ? "Show Less" : "Browse More Events"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
