import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../url";
import { useNavigate } from "react-router-dom";

const SynergyFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [actRes, evRes, annRes] = await Promise.all([
          axios.get(`${backend_url}api/activities`),
          axios.get(`${backend_url}api/events`),
          axios.get(`${backend_url}api/announcements`),
        ]);

        const activities = Array.isArray(actRes.data?.activities)
          ? actRes.data.activities
          : [];
        const events = Array.isArray(evRes.data?.events) ? evRes.data.events : [];
        const announcements = Array.isArray(annRes.data?.announcements)
          ? annRes.data.announcements
          : [];

        const combined = [
          ...activities.map((item) => ({ ...item, type: "activity" })),
          ...events.map((item) => ({ ...item, type: "event" })),
          ...announcements.map((item) => ({ ...item, type: "announcement" })),
        ];

        combined.sort(
          (a, b) => new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt)
        );

        setFeedItems(combined);
      } catch (error) {
        console.error("Error fetching feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading)
    return <div className="text-center mt-20 text-gray-600">Loading feed...</div>;

  if (feedItems.length === 0)
    return <div className="text-center mt-20 text-gray-600">No feed items found.</div>;

  return (
    <div className="container mx-auto px-4 md:px-12 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-dark dark:text-white">
        Synergy Club Notifications
      </h1>

      <div className="flex flex-col gap-4 items-center">
        {feedItems.map((item) => (
          <FeedCard key={item._id || item.id} item={item} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default SynergyFeed;

const FeedCard = ({ item, navigate }) => {
  const { image, title, description, date, type, _id } = item;

  const handleClick = () => {
    if (type === "activity") navigate(`/synergy-club/activities`);
    if (type === "event") navigate(`/synergy-club/events`);
    if (type === "announcement") {
    // Open the link from the DB
    if (item.link) {
      window.open(item.link, "_blank"); // Opens in a new tab
      // Or use: window.location.href = item.link; // opens in the same tab
    } else {
      console.warn("No link available for this announcement");
    }
  }
  };

  return (
    <div
      onClick={handleClick}
      className="w-full md:w-2/3 flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-dark-2 shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Small rounded image */}
      <div className="flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
            N/A
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
  <div className="flex justify-between items-start">
    <h3 className="text-sm md:text-base font-medium text-black  truncate">
      {title}
    </h3>
    <span className="text-xs text-gray-900 dark:text-gray-400">
      {date ? new Date(date).toLocaleDateString() : ""}
    </span>
  </div>
  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3 break-words overflow-hidden">
    {description}
  </p>
  <span className="mt-1 inline-block text-[10px] text-primary font-semibold uppercase">
    {type} <span className="ml-100"></span> Click to view details
  </span>
</div>

    </div>
  );
};
