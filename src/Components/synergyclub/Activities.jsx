import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backend_url } from "../url";
import { Calendar, MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

/* ============================
   Fetch Activities
============================ */
const fetchActivities = async () => {
  try {
    const res = await fetch(`${backend_url}api/activities`);
    if (!res.ok) throw new Error("Failed to fetch activities");
    const data = await res.json();
    return Array.isArray(data) ? data : data.activities || [data];
  } catch (err) {
    console.error(err);
    return [];
  }
};

/* ============================
   Helpers
============================ */
const parseDate = (d) => (d ? new Date(d) : null);

const formatDate = (d) => {
  const date = parseDate(d);
  if (!date || isNaN(date.getTime())) return "Invalid date";
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const isDeadlinePassed = (deadline) => {
  const d = parseDate(deadline);
  return d ? new Date() > d : false;
};

/* ============================
   Calendar Component
============================ */
const ActivityCalendar = ({ activities, selectedDate, onDateSelect }) => {
  const [current, setCurrent] = useState(new Date());

  const daysInMonth = new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate();
  const firstDay = new Date(current.getFullYear(), current.getMonth(), 1).getDay();

  const hasEvent = (day) => {
    const check = new Date(current.getFullYear(), current.getMonth(), day);
    return activities.some((a) => {
      const s = parseDate(a.startDate);
      const e = parseDate(a.endDate);
      return s && e && check >= s && check <= e;
    });
  };

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  return (
    <div className="bg-white border shadow rounded-2xl p-4 w-full md:w-1/3">
      {/* Header */}
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-semibold cl-primary">
          {monthNames[current.getMonth()]} {current.getFullYear()}
        </h3>
        <div className="flex gap-1">
          <button
            onClick={() => setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1))}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft size={18} className="cl-primary" />
          </button>
          <button
            onClick={() => setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1))}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight size={18} className="cl-primary" />
          </button>
        </div>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 text-center text-sm font-medium cl-primary mb-1">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => <div key={d}>{d}</div>)}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-sm">
        {Array.from({ length: firstDay }).map((_, i) => <div key={`b-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isSelected =
            selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === current.getMonth();

          return (
            <button
              key={day}
              onClick={() => onDateSelect(new Date(current.getFullYear(), current.getMonth(), day))}
              className={`p-1.5 h-9 rounded relative flex items-center justify-center ${
                isSelected ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
            >
              {day}
              {hasEvent(day) && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ============================
   Main Activities Component
============================ */
const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchActivities().then((data) => {
      const normalized = data.map((a, idx) => ({ ...a, id: a._id || `activity-${idx}` }));
      setActivities(normalized);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-cl-primary border-t-transparent animate-spin rounded-full" />
      </div>
    );

  if (!activities.length)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>No activities found.</p>
      </div>
    );

  return (
    <div className="min-h-screen py-10 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center cl-primary mb-5">
          Courses & Activities
        </h1>

        {/* Side by side layout */}
        <div className="flex flex-col md:flex-row gap-6">
          <ActivityCalendar
            activities={activities}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />

          <div className="flex-1 space-y-5">
            {activities.map((event) => {
              const deadlinePassed = isDeadlinePassed(event.applicationDeadline);

              return (
                <div
                  key={event.id}
                  className="border rounded-2xl shadow p-4 bg-white flex flex-col md:flex-row gap-4"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full md:w-1/3 h-40 md:h-48 object-cover rounded-lg border"
                  />

                  <div className="flex-1 flex flex-col justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-bold mb-1 cl-primary">{event.title}</h2>
                      <p className="text-gray-700 text-sm mb-2">{event.description}</p>

                      {/* Info boxes */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-cl-primary text-sm">
                          <MapPin size={16} /> {event.location || "No location"}
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-cl-primary text-sm">
                          <strong>Instructor:</strong> {event.instructor || "Unknown"}
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-cl-primary text-sm">
                          <strong>Type:</strong> {event.paid ? "Paid" : "Free"}
                        </div>
                      </div>

                      {/* Dates */}
                      <div className="flex flex-wrap flex-col gap-2 mt-2 text-sm text-gray-700">
                        <div className="px-3 flex py-1 bg-primary/10 rounded-full cl-primary">
                          <Calendar className="mr-2" size={16} /> {formatDate(event.startDate)} - {formatDate(event.endDate)}
                        </div>
                        <div className="px-3 py-1 bg-primary/10 rounded-full cl-primary">
                          <strong>Apply by:</strong> {formatDate(event.applicationDeadline)}
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <button
                      onClick={() => !deadlinePassed && navigate(`/synergy-club/applyform/${event._id}`, { state: { paid: event.paid , title:event.title} })}
                      disabled={deadlinePassed}
                      className={`mt-3 py-2 px-4 w-max rounded-lg  flex items-center gap-2 justify-center text-sm font-medium ${
                        deadlinePassed
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-primary text-white hover:opacity-90 hover:cursor-pointer"
                      }`}
                    >
                      <ExternalLink size={16} /> {deadlinePassed ? "Deadline Passed" : "Apply Now"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
