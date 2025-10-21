import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Calendar,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ExternalLink,
  Search,
} from "lucide-react";

// ✅ Updated mock API — properly formatted ISO date strings
const mockAPI = {
  fetchActivities: async () => {
    return [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
        title: "Front-End Course",
        instructor: "Abdul Malik",
        startDate: "2025-09-01",
        endDate: "2025-09-30",
        applicationDeadline: "2025-08-30",
        location: "Lab 1",
        description:
          "Comprehensive web development training covering HTML, CSS, JavaScript, and modern frameworks.",
        paid: false,
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1581092334394-63c83fd4f6c9?w=400&h=300&fit=crop",
        title: "UI/UX Design Bootcamp",
        instructor: "Fatima Khan",
        startDate: "2025-10-15",
        endDate: "2025-11-05",
        applicationDeadline: "2025-10-13",
        location: "Lab 2",
        description:
          "Learn how to design intuitive and modern user interfaces using Figma and Adobe XD.",
        paid: false,
      },
    ];
  },
};

// ✅ Helper — returns status label
const getStatus = (start, end) => {
  const now = new Date();
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (isNaN(startDate) || isNaN(endDate)) return "Unknown";
  if (now < startDate) return "Upcoming";
  if (now > endDate) return "Completed";
  return "In Progress";
};

// ✅ Parse date safely & optionally to end of day
const parseDate = (dateStr, endOfDay = false) => {
  if (!dateStr) return null;
  const iso = dateStr.includes("T")
    ? dateStr
    : `${dateStr}${endOfDay ? "T23:59:59" : "T00:00:00"}`;
  const d = new Date(iso);
  return isNaN(d) ? null : d;
};

// ✅ Format date like "October 5, 2025"
const formatFormalDate = (dateStr) => {
  const date = parseDate(dateStr);
  if (!date) return "Invalid date";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// ✅ Calendar Component
const ActivityCalendar = ({ activities, onDateSelect, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDay = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const hasActivity = (day) => {
    const checkDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    return activities.some((a) => {
      const start = parseDate(a.startDate);
      const end = parseDate(a.endDate, true);
      return start && end && checkDate >= start && checkDate <= end;
    });
  };

  const navigateMonth = (dir) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + dir);
    setCurrentDate(newDate);
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDay(currentDate);
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  return (
    <div className="bg-white rounded-2xl border shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold cl-primary">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button onClick={() => navigateMonth(-1)} className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft size={18} className="cl-primary" />
          </button>
          <button onClick={() => navigateMonth(1)} className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight size={18} className="cl-primary" />
          </button>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2 text-center text-sm font-medium cl-primary">
        {dayNames.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-sm">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="p-2" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const hasEvent = hasActivity(day);
          const isSelected =
            selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();
          const isToday =
            today.getDate() === day &&
            today.getMonth() === currentDate.getMonth() &&
            today.getFullYear() === currentDate.getFullYear();

          return (
            <button
              key={day}
              onClick={() =>
                onDateSelect(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  )
                )
              }
              className={`relative p-2 rounded-lg transition-all w-full h-10
                ${isSelected ? "bg-primary text-white" : "hover:bg-gray-100 cl-primary"} 
                ${isToday && !isSelected ? "border border-primary" : ""}
              `}
            >
              {day}
              {hasEvent && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ✅ Accordion Item
const AccordionItem = ({ event, isOpen, onToggle, index }) => {
  const navigate = useNavigate();
  const status = getStatus(event.startDate, event.endDate);

  const deadlineDate = parseDate(event.applicationDeadline, true);
  const deadlinePassed = deadlineDate ? new Date() > deadlineDate : false;

  const statusColor =
    status === "Upcoming"
      ? "bg-green-200 text-black"
      : status === "In Progress"
      ? "bg-yellow-200 text-black"
      : "bg-gray-200 text-black";

  return (
    <div
      className={`bg-white border rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg ${
        isOpen ? "border-primary" : ""
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className="p-5 flex flex-wrap justify-between items-center gap-2 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <h3 className="text-lg md:text-xl font-semibold text-black">
            {event.title}
          </h3>

          <div className="flex items-center text-sm text-gray-600 gap-2 flex-wrap">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 cl-primary" />
              <span>
                {formatFormalDate(event.startDate)} - {formatFormalDate(event.endDate)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 cl-primary" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1 text-xs md:text-sm font-semibold rounded-full ${statusColor}`}
          >
            {status}
          </span>
          <ChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180 cl-primary" : "cl-primary"
            }`}
          />
        </div>
      </div>

      <div
        className={`transition-all overflow-hidden ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="p-4 border-t grid md:grid-cols-2 gap-5">
          <div>
            <div className="rounded-xl overflow-hidden border">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-75 object-cover"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white border rounded-lg p-3 shadow-sm">
              <h4 className="font-semibold cl-primary mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Course Details
              </h4>
              <div className="space-y-2 text-sm text-black">
                <p>
                  <strong>Instructor:</strong> {event.instructor}
                </p>
                <p>
                  <strong>Type:</strong> {event.paid ? "Paid" : "Free"}
                </p>
                <p>
                  <strong>Application Deadline:</strong>{" "}
                  {formatFormalDate(event.applicationDeadline)}
                </p>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-3 shadow-sm">
              <h4 className="font-semibold cl-primary mb-2">Description</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="bg-white border rounded-lg p-3 shadow-sm">
              <button
                disabled={deadlinePassed}
                className={`w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  deadlinePassed
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-primary cursor-pointer text-white hover:opacity-90"
                }`}
                onClick={() =>
                  !deadlinePassed &&
                  navigate(`/synergy-club/applyform/${event.id}`, {
                    state: { paid: event.paid },
                  })
                }
              >
                <ExternalLink className="w-4 h-4" />
                {deadlinePassed ? "Deadline Passed" : "Apply Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Activities Component
const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await mockAPI.fetchActivities();
      const updated = data.map((a) => ({
        ...a,
        status: getStatus(a.startDate, a.endDate),
      }));
      setActivities(updated);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = activities.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayed = showAll ? filtered : filtered.slice(0, 8);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold cl-primary mb-2">
            Courses & Activities
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Explore our upcoming and ongoing learning programs.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-end mb-6">
          <div className="relative w-full md:w-1/3">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:border-primary outline-none w-full"
            />
          </div>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ActivityCalendar
              activities={activities}
              onDateSelect={setSelectedDate}
              selectedDate={selectedDate}
            />
          </div>

          <div className="lg:col-span-2 space-y-5">
            {displayed.length > 0 ? (
              displayed.map((a, i) => (
                <AccordionItem
                  key={a.id}
                  event={a}
                  index={i}
                  isOpen={openAccordion === i}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === i ? null : i)
                  }
                />
              ))
            ) : (
              <p className="text-gray-500 text-center py-10">
                No activities found.
              </p>
            )}

            {filtered.length > 8 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => {
                    setShowAll(!showAll);
                    if (showAll)
                      window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
                >
                  {showAll ? "Show Less" : "Browse More Events"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
