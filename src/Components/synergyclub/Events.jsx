import React, { useState, useEffect } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import dayjs from "dayjs";
import { backend_url } from "../url";
import { useNavigate } from "react-router-dom";

/* =========================
   Fetch Events from API
========================= */
const fetchEvents = async () => {
  try {
    const res = await fetch(`${backend_url}api/events`);
    if (!res.ok) throw new Error("Failed to fetch events");
    const data = await res.json();
    return Array.isArray(data) ? data : data.events || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

/* =========================
   Event Card
========================= */
const EventCard = ({ event }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-lg border overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold cl-primary mb-2">{event.title}</h3>
        <p className="text-sm text-gray-700 mb-3">{event.description}</p>

        <div className="flex flex-col gap-1 mb-3 text-sm cl-primary">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {dayjs(event.date).format("MMM D, YYYY")}
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {event.location || "No location"}
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================
   Events Component
========================= */
const Events = () => {
  const [events, setEvents] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents().then((data) => {
      const normalized = data.map((e, idx) => ({ ...e, id: e._id || `event-${idx}` }));
      setEvents(normalized);
      setLoading(false);
    });
  }, []);

  const visibleEvents = showAll ? events : events.slice(0, 8);

  const handleToggle = () => {
    if (showAll) window.scrollTo({ top: 0, behavior: "smooth" });
    setShowAll(!showAll);
  };

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent animate-spin rounded-full" />
      </div>
    );

  if (!events.length)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>No events found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center cl-primary mb-10">
          Events we attend
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
