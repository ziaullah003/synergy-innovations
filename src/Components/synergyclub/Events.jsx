import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Calendar, 
  Clock, 
  MapPin,
  Users,
  Star,
  Eye,
  EyeOff,
  Filter,
  Search,
  ArrowRight,
  RotateCcw,
  Heart,
  Share2,
  Plus
} from 'lucide-react';

// Mock database functions
const mockAPI = {
  fetchEvents: async () => {
    return [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
        title: "Partnership with Techkhwa",
        duration: "Aug 15, 2024",
        time: "10:00 AM - 4:00 PM",
        organizer: "Tech Innovation Team",
        status: "upcoming",
        date: "2025-08-15",
        location: "Tech Hub, Peshawar",
        capacity: 50,
        enrolled: 25,
        rating: 4.8,
        category: "partnership",
        description: "Strategic partnership announcement and collaboration meeting with Techkhwa for upcoming technology initiatives.",
        tags: ["Technology", "Partnership", "Innovation"],
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample1/viewform"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=300&fit=crop",
        title: "Collaboration with I'm Sciences",
        duration: "Aug 20, 2025",
        time: "2:00 PM - 6:00 PM",
        organizer: "Research & Development Team",
        status: "upcoming",
        date: "2025-08-20",
        location: "Institute of Management Sciences",
        capacity: 40,
        enrolled: 18,
        rating: 4.6,
        category: "collaboration",
        description: "Joint collaboration event focusing on research and development projects with Institute of Management Sciences.",
        tags: ["Research", "Academia", "Collaboration"],
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample2/viewform"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
        title: "Matrix Pakistan Collaboration",
        duration: "Aug 25, 2024",
        time: "11:00 AM - 3:00 PM",
        organizer: "Strategic Partnership Team",
        status: "previous",
        date: "2024-08-25",
        location: "Matrix Office, Islamabad",
        capacity: 30,
        enrolled: 12,
        rating: 4.9,
        category: "collaboration",
        description: "Strategic collaboration meeting with Matrix Pakistan for technology partnerships and business development.",
        tags: ["Business", "Strategy", "Partnership"],
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample3/viewform"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        title: "GDG Cloud Event - NIC Islamabad",
        duration: "Sep 5, 2025",
        time: "9:00 AM - 5:00 PM",
        organizer: "Google Developer Groups",
        status: "upcoming",
        date: "2025-09-05",
        location: "National Incubation Center, Islamabad",
        capacity: 100,
        enrolled: 65,
        rating: 4.7,
        category: "workshop",
        description: "Google Developer Groups cloud computing workshop featuring hands-on sessions and networking opportunities.",
        tags: ["Cloud", "Google", "Development"],
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample4/viewform"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        title: "GDG Event - GIKI",
        duration: "Sep 12, 2025",
        time: "1:00 PM - 7:00 PM",
        organizer: "Developer Community GIKI",
        status: "previous",
        date: "2025-07-12",
        location: "Ghulam Ishaq Khan Institute",
        capacity: 80,
        enrolled: 45,
        rating: 4.5,
        category: "meetup",
        description: "Developer community meetup at GIKI campus with technical sessions and project showcases.",
        tags: ["Community", "Projects", "Networking"]
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
        title: "GDG AI Devfest - I'm Sciences",
        duration: "Sep 18, 2025",
        time: "10:00 AM - 6:00 PM",
        organizer: "AI Research Community",
        status: "upcoming",
        date: "2025-09-18",
        location: "Institute of Management Sciences",
        capacity: 120,
        enrolled: 88,
        rating: 4.9,
        category: "festival",
        description: "Annual AI Developer Festival featuring workshops, keynote talks, and AI project competitions.",
        tags: ["AI", "Machine Learning", "Competition"],
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample6/viewform"
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop",
        title: "Media Workshop (2 Days)",
        duration: "Sep 22-23, 2025",
        time: "9:00 AM - 5:00 PM",
        organizer: "Digital Media Team",
        status: "previous",
        date: "2025-07-22",
        location: "Conference Hall, Peshawar",
        capacity: 40,
        enrolled: 32,
        rating: 4.4,
        category: "workshop",
        description: "Comprehensive 2-day workshop on effective use of media in technology projects.",
        tags: ["Media", "Marketing", "Content"]
      }
    ];
  }
};

const EventCard = ({ event, index, isVisible }) => {
  const [liked, setLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleRegisterClick = (e) => {
    e.stopPropagation();
    if (event.registrationForm) {
      window.open(event.registrationForm, '_blank', 'noopener,noreferrer');
    } else {
      alert('Registration will open soon!');
    }
  };

  const canRegister = event.status === 'upcoming' && event.registrationForm;
  const progressPercentage = (event.enrolled / event.capacity) * 100;

  return (
    <div 
      className={`group relative overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        animationDelay: `${index * 0.5}s`
      }}
    >
      <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-blue-200 overflow-hidden">
        <div className="relative z-10 p-4 md:p-6">
          <div className="relative mb-4 md:mb-6 group">
            <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-md">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-2 md:top-4 right-2 md:right-4 flex gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLiked(!liked);
                  }}
                  className={`p-1.5 md:p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                    liked ? 'bg-blue-300 text-blue-950' : 'bg-white/80 text-blue-950 hover:bg-blue-300'
                  }`}
                >
                  <Heart className="w-3 h-3 md:w-4 md:h-4" fill={liked ? 'currentColor' : 'none'} />
                </button>
                <button className="p-1.5 md:p-2 rounded-full bg-white/80 backdrop-blur-sm text-blue-950 hover:bg-blue-300 transition-all duration-300 hover:scale-110">
                  <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>

              {canRegister && (
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-blue-300 text-blue-950 px-2 md:px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                  Registration Open
                </div>
              )}
            </div>

            <div className="absolute -bottom-2 md:-bottom-3 left-2 md:left-4 flex items-center gap-1 bg-white rounded-full px-2 md:px-3 py-1 shadow-lg border border-blue-300">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 ${i < Math.floor(event.rating) ? 'text-blue-300 fill-current' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-xs font-bold text-blue-950 ml-1">{event.rating}</span>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-blue-950 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                {event.title}
              </h3>
              
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                {event.tags.slice(0, 3).map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-0.5 md:py-1 bg-blue-100 text-blue-950 text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-4 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 md:gap-2 text-blue-950">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  <span className="truncate">{event.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-blue-950">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  <span className="truncate">{event.time}</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-blue-950 col-span-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-blue-950">
                  <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  <span>{event.enrolled}/{event.capacity}</span>
                </div>
                <div className="text-xs text-blue-950">
                  {Math.round(progressPercentage)}% filled
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2 overflow-hidden mb-3 md:mb-4">
                <div 
                  className="h-full bg-blue-300 transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
              showDetails ? 'max-h-40 md:max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pt-3 md:pt-4 border-t border-blue-200">
                <p className="text-xs md:text-sm text-blue-950 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            <div className="flex gap-2 md:gap-3 pt-2 md:pt-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 bg-gray-100 hover:bg-blue-100 text-blue-950 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 flex-1 text-xs md:text-sm"
              >
                {showDetails ? <EyeOff className="w-3 h-3 md:w-4 md:h-4" /> : <Eye className="w-3 h-3 md:w-4 md:h-4" />}
                {showDetails ? 'Less' : 'Details'}
              </button>
              
              {canRegister && (
                <button
                  onClick={handleRegisterClick}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-2 bg-blue-600 text-white rounded-lg md:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex-1 justify-center group text-xs md:text-sm"
                >
                  <span>Register</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveCalendar = ({ events, onDateSelect, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isAnimating, setIsAnimating] = useState(false);
  
  const navigateMonth = (direction) => {
    setIsAnimating(true);
    setTimeout(() => {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() + direction);
      setCurrentDate(newDate);
      setIsAnimating(false);
    }, 150);
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const hasEvent = (day) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dateStr = checkDate.toISOString().split('T')[0];
    return events.some(event => event.date === dateStr);
  };
  
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 border border-blue-200 hover:shadow-xl transition-all duration-500">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className={`text-lg md:text-2xl font-bold text-blue-950 transition-all duration-300 ${
          isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
        }`}>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-1 md:gap-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 md:p-3 hover:bg-blue-100 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 group"
          >
            <RotateCcw className="w-4 h-4 md:w-5 md:h-5 text-blue-600 group-hover:rotate-180 transition-all duration-500" />
          </button>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 md:p-3 hover:bg-blue-100 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 group"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 md:mb-4">
        {dayNames.map(day => (
          <div key={day} className="p-1.5 md:p-3 text-center text-xs md:text-sm font-bold text-blue-950 bg-blue-100 rounded-md md:rounded-lg">
            {day}
          </div>
        ))}
      </div>
      
      <div className={`grid grid-cols-7 gap-1 md:gap-2 transition-all duration-300 ${
        isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}>
        {Array.from({ length: firstDay }, (_, i) => (
          <div key={`empty-${i}`} className="p-1.5 md:p-3"></div>
        ))}
        
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const hasEventOnDay = hasEvent(day);
          const isSelected = selectedDate && 
            selectedDate.getDate() === day && 
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();
          const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
          
          return (
            <button
              key={day}
              onClick={() => {
                const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                onDateSelect(newDate);
              }}
              className={`p-1.5 md:p-3 text-xs md:text-sm rounded-lg md:rounded-xl transition-all duration-300 relative hover:scale-110 font-medium ${
                isSelected 
                  ? 'bg-blue-600 text-white shadow-lg scale-110' 
                  : isToday
                    ? 'bg-blue-300 text-blue-950 shadow-md'
                    : hasEventOnDay 
                      ? 'bg-blue-100 text-blue-950 hover:shadow-lg' 
                      : 'text-blue-950 hover:bg-gray-100'
              }`}
            >
              {day}
              {hasEventOnDay && (
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('all');
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [sortBy, setSortBy] = useState('date');
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await mockAPI.fetchEvents();
        setEvents(data);
        
        data.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards(prev => new Set([...prev, index]));
          }, index * 200);
        });
      } catch (error) {
        console.error('Failed to load events:', error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    loadEvents();
  }, []);

  const filteredEvents = events
    .filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.organizer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      if (view === 'upcoming') return event.status === 'upcoming' && matchesSearch;
      if (view === 'previous') return event.status === 'previous' && matchesSearch;
      return matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date': return new Date(a.date) - new Date(b.date);
        case 'rating': return b.rating - a.rating;
        case 'capacity': return b.capacity - a.capacity;
        default: return 0;
      }
    });

  // For mobile view, show only 3 events initially
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayEvents = isMobile && !showMore ? filteredEvents.slice(0, 3) : filteredEvents;

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-300 border-t-transparent rounded-full animate-spin mx-auto mb-4 md:mb-6"></div>
            <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 border-4 border-blue-300 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-950 mb-2 animate-pulse">Loading Events...</h2>
          <p className="text-blue-950 text-sm md:text-base">Preparing something special for you</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-6 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16 relative">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-6xl font-bold text-blue-950 mb-4 md:mb-6">
              Events & Partnerships
            </h1>
            <p className="text-base md:text-xl text-blue-950 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive events and build meaningful partnerships. Experience innovation and networking.
            </p>
          </div>
        </div>

        <div className="mb-6 md:mb-12 space-y-4 md:space-y-6">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-950 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 md:pl-10 pr-4 py-2.5 md:py-3 w-full bg-white rounded-xl md:rounded-2xl shadow-lg border border-blue-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all duration-300 text-blue-950 text-sm md:text-base"
              />
            </div>

            <div className="flex bg-white rounded-xl md:rounded-2xl shadow-lg border border-blue-300 overflow-hidden">
              {['all', 'upcoming', 'previous'].map((filterView) => (
                <button
                  key={filterView}
                  onClick={() => setView(filterView)}
                  className={`px-4 md:px-6 py-2.5 md:py-3 font-medium capitalize transition-all duration-300 text-xs md:text-sm ${
                    view === filterView
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-blue-950 hover:bg-gray-100'
                  }`}
                >
                  {filterView}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 justify-between">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-blue-300 p-3 md:p-6 flex-1">
              <div className="grid grid-cols-3 gap-2 md:gap-6">
                <div className="text-center">
                  <h3 className="text-lg md:text-3xl font-bold text-blue-950">{events.length}</h3>
                  <p className="text-blue-950 text-xs md:text-sm">Total</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-3xl font-bold text-blue-950">{events.filter(e => e.status === 'upcoming').length}</h3>
                  <p className="text-blue-950 text-xs md:text-sm">Upcoming</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-3xl font-bold text-blue-950">{events.reduce((sum, e) => sum + e.enrolled, 0)}</h3>
                  <p className="text-blue-950 text-xs md:text-sm">Registered</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white rounded-xl md:rounded-2xl shadow-lg border border-blue-300 px-3 md:px-4 py-2.5 md:py-3">
              <Filter className="w-4 h-4 md:w-5 md:h-5 text-blue-950" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-blue-950 font-medium cursor-pointer text-xs md:text-sm"
              >
                <option value="date">Date</option>
                <option value="rating">Rating</option>
                <option value="capacity">Capacity</option>
              </select>
              <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-blue-950" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-8">
          <div className="xl:col-span-3 order-2 xl:order-1">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12 md:py-20">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 md:w-16 md:h-16 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-4">No Events Found</h3>
                <p className="text-blue-950 max-w-md mx-auto text-sm md:text-base">
                  We couldn't find any events matching your search criteria. Try adjusting your filters.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                  {displayEvents.map((event, index) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      index={index}
                      isVisible={visibleCards.has(index)}
                    />
                  ))}
                </div>
                
                {/* Show More Button for Mobile */}
                {isMobile && filteredEvents.length > 3 && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Plus className={`w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-45' : ''}`} />
                      {showMore ? `Show Less` : `Show ${filteredEvents.length - 3} More Events`}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="xl:col-span-1 order-1 xl:order-2">
            <div className="hidden xl:block">
              <InteractiveCalendar
                events={events}
                onDateSelect={setSelectedDate}
                selectedDate={selectedDate}
              />

              <div className="mt-8 bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 border border-blue-200">
                <h3 className="text-lg md:text-xl font-bold text-blue-950 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  Quick Stats
                </h3>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                    <span className="text-blue-950 font-medium text-sm">Most Popular</span>
                    <span className="text-blue-950 font-bold text-sm">AI Devfest</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                    <span className="text-blue-950 font-medium text-sm">Next Event</span>
                    <span className="text-blue-950 font-bold text-sm">Aug 15</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                    <span className="text-blue-950 font-medium text-sm">Avg Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-blue-600 fill-current" />
                      <span className="text-blue-950 font-bold text-sm">
                        {(events.reduce((sum, e) => sum + e.rating, 0) / events.length).toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 text-blue-950 border border-blue-200">
                <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Upcoming Highlights
                </h3>
                
                <div className="space-y-3">
                  {events
                    .filter(e => e.status === 'upcoming')
                    .slice(0, 3)
                    .map((event) => (
                      <div key={event.id} className="bg-white rounded-xl p-3 border border-blue-200 hover:shadow-md transition-all duration-300">
                        <div className="font-semibold text-sm mb-1 text-blue-950 line-clamp-1">{event.title}</div>
                        <div className="text-xs text-blue-700 flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {event.duration}
                        </div>
                      </div>
                    ))}
                </div>
                
                <button className="w-full mt-4 bg-white border border-blue-300 rounded-xl py-3 px-4 font-semibold transition-all duration-300 hover:scale-105 text-blue-950 hover:bg-blue-100 text-sm">
                  View Full Calendar
                </button>
              </div>
            </div>

            {/* Mobile Calendar - Compact Version */}
            <div className="xl:hidden mb-6">
              <InteractiveCalendar
                events={events}
                onDateSelect={setSelectedDate}
                selectedDate={selectedDate}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl md:rounded-3xl shadow-xl p-8 md:p-12 text-blue-950 relative overflow-hidden border border-blue-200">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Join Our Community?</h2>
              <p className="text-base md:text-xl text-blue-700 mb-6 md:mb-8 max-w-2xl mx-auto">
                Don't miss out on exciting partnerships, workshops, and networking opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  Browse All Events
                </button>
                <button className="border-2 border-blue-600 text-blue-600 bg-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  Contact Organizers
                </button>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-blue-200/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 md:w-32 md:h-32 bg-blue-200/30 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;