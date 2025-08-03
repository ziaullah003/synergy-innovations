import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Calendar, 
  Clock, 
  MapPin,
  Users,
  Star,
  Zap,
  Eye,
  EyeOff,
  Filter,
  Search,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Heart,
  Share2
} from 'lucide-react';

// Mock database functions
const mockAPI = {
  fetchEvents: async () => {
    return [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
        title: "Partnership with Techkhwa",
        duration: "Aug 15, 2025",
        time: "10:00 AM - 4:00 PM",
        organizer: "Tech Innovation Team",
        status: "upcoming",
        date: "2025-08-15",
        location: "Tech Hub, Peshawar",
        capacity: 50,
        enrolled: 25,
        rating: 4.8,
        category: "partnership",
        priority: "high",
        description: "Strategic partnership announcement and collaboration meeting with Techkhwa for upcoming technology initiatives and joint projects.",
        highlights: ["Networking opportunities", "Technology showcase", "Strategic partnerships", "Innovation talks"],
        requirements: ["No prerequisites", "Business attire recommended"],
        registrationDeadline: "2025-08-10",
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample1/viewform",
        tags: ["Technology", "Partnership", "Innovation"],
        estimatedDuration: "6 hours"
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
        priority: "medium",
        description: "Joint collaboration event focusing on research and development projects with Institute of Management Sciences.",
        highlights: ["Research presentations", "Academic partnerships", "Student engagement", "Future projects"],
        requirements: ["Academic background preferred", "Research interest"],
        registrationDeadline: "2025-08-18",
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample2/viewform",
        tags: ["Research", "Academia", "Collaboration"],
        estimatedDuration: "4 hours"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
        title: "Matrix Pakistan Collaboration",
        duration: "Aug 25, 2025",
        time: "11:00 AM - 3:00 PM",
        organizer: "Strategic Partnership Team",
        status: "upcoming",
        date: "2025-08-25",
        location: "Matrix Office, Islamabad",
        capacity: 30,
        enrolled: 12,
        rating: 4.9,
        category: "collaboration",
        priority: "high",
        description: "Strategic collaboration meeting with Matrix Pakistan for technology partnerships and business development opportunities.",
        highlights: ["Business strategy", "Tech partnerships", "Market expansion", "Innovation pipeline"],
        requirements: ["Business background helpful", "Professional attire"],
        registrationDeadline: "2025-08-22",
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample3/viewform",
        tags: ["Business", "Strategy", "Partnership"],
        estimatedDuration: "4 hours"
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
        priority: "high",
        description: "Google Developer Groups cloud computing workshop featuring hands-on sessions, networking opportunities, and industry insights.",
        highlights: ["Cloud computing", "Hands-on workshops", "Google technologies", "Developer networking"],
        requirements: ["Basic programming knowledge", "Laptop required", "Google account"],
        registrationDeadline: "2025-09-01",
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample4/viewform",
        tags: ["Cloud", "Google", "Development"],
        estimatedDuration: "8 hours"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        title: "GDG Event - GIKI",
        duration: "Sep 12, 2025",
        time: "1:00 PM - 7:00 PM",
        organizer: "Developer Community GIKI",
        status: "upcoming",
        date: "2025-09-12",
        location: "Ghulam Ishaq Khan Institute",
        capacity: 80,
        enrolled: 45,
        rating: 4.5,
        category: "meetup",
        priority: "medium",
        description: "Developer community meetup at GIKI campus with technical sessions, project showcases, and peer networking.",
        highlights: ["Project showcases", "Technical sessions", "Peer networking", "Career guidance"],
        requirements: ["Student ID or professional background", "Interest in technology"],
        registrationDeadline: "2025-09-08",
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample5/viewform",
        tags: ["Community", "Projects", "Networking"],
        estimatedDuration: "6 hours"
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
        priority: "high",
        description: "Annual AI Developer Festival featuring workshops, keynote talks, AI project competitions, and extensive networking opportunities.",
        highlights: ["AI competitions", "Keynote speakers", "Workshop sessions", "Innovation showcase"],
        requirements: ["Basic AI/ML knowledge helpful", "Laptop with Python environment"],
        registrationDeadline: "2025-09-15",
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample6/viewform",
        tags: ["AI", "Machine Learning", "Competition"],
        estimatedDuration: "8 hours"
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop",
        title: "Media Workshop (2 Days)",
        duration: "Sep 22-23, 2025",
        time: "9:00 AM - 5:00 PM",
        organizer: "Digital Media Team",
        status: "upcoming",
        date: "2025-09-22",
        location: "Conference Hall, Peshawar",
        capacity: 40,
        enrolled: 32,
        rating: 4.4,
        category: "workshop",
        priority: "medium",
        description: "Comprehensive 2-day workshop on effective use of media in technology projects, social media marketing, and digital content creation.",
        highlights: ["Content creation", "Social media strategy", "Digital marketing", "Brand building"],
        requirements: ["No prerequisites", "Camera/smartphone for practical sessions"],
        registrationDeadline: "2025-09-20",
        registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample7/viewform",
        tags: ["Media", "Marketing", "Content"],
        estimatedDuration: "16 hours"
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

  const canRegister = event.status === 'upcoming' && event.registrationDeadline && 
                     new Date(event.registrationDeadline) > new Date();

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
      <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-2 border-blue-300 overflow-hidden">
        
        <div className="relative z-10 p-6">
          <div className="relative mb-6 group">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLiked(!liked);
                  }}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                    liked ? 'bg-blue-300 text-blue-950' : 'bg-white/80 text-blue-950 hover:bg-blue-300'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={liked ? 'currentColor' : 'none'} />
                </button>
                <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-blue-950 hover:bg-blue-300 transition-all duration-300 hover:scale-110">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <div className={`absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full text-blue-950 text-xs font-bold bg-blue-300 ${
                event.priority === 'high' ? 'animate-pulse' : ''
              }`}>
                {event.priority === 'high' && <Zap className="w-3 h-3" />}
                {event.priority === 'medium' && <Star className="w-3 h-3" />}
                {event.priority === 'low' && <Clock className="w-3 h-3" />}
                {event.priority.toUpperCase()}
              </div>

              {canRegister && (
                <div className="absolute bottom-4 left-4 bg-blue-300 text-blue-950 px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                  Registration Open
                </div>
              )}
            </div>

            <div className="absolute -bottom-3 left-4 flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow-lg border border-blue-300">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(event.rating) ? 'text-blue-300 fill-current' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-xs font-bold text-blue-950 ml-1">{event.rating}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {event.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {event.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-blue-300 text-blue-950 text-xs rounded-full font-medium hover:bg-blue-300 transition-colors duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-blue-950">
                  <Calendar className="w-4 h-4 text-blue-300" />
                  <span>{event.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-950">
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-950">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span className="truncate">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-950">
                  <Users className="w-4 h-4 text-blue-300" />
                  <span>{event.enrolled}/{event.capacity}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs text-blue-950 mb-1">
                  <span>Registration Progress</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-blue-300 transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
              showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-4 pt-4 border-t border-blue-300">
                <p className="text-sm text-blue-950 leading-relaxed">
                  {event.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-blue-950 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-300" />
                    Event Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-blue-950">
                        <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {event.requirements && (
                  <div>
                    <h4 className="font-semibold text-blue-950 mb-2">Requirements</h4>
                    <ul className="text-sm text-blue-950 space-y-1">
                      {event.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 text-blue-300 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-300 text-blue-950 rounded-xl transition-all duration-300 hover:scale-105 flex-1"
              >
                {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showDetails ? 'Hide Details' : 'View Details'}
              </button>
              
              {canRegister && (
                <button
                  onClick={handleRegisterClick}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-300 text-blue-950 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex-1 justify-center group"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-blue-300 hover:shadow-2xl transition-all duration-500 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-2xl font-bold text-blue-950 transition-all duration-300 ${
          isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
        }`}>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-3 hover:bg-blue-300 rounded-xl transition-all duration-300 hover:scale-110 group"
          >
            <RotateCcw className="w-5 h-5 text-blue-300 hover:text-blue-950 group-hover:rotate-180 transition-all duration-500" />
          </button>
          <button
            onClick={() => navigateMonth(1)}
            className="p-3 hover:bg-blue-300 rounded-xl transition-all duration-300 hover:scale-110 group"
          >
            <ArrowRight className="w-5 h-5 text-blue-300 hover:text-blue-950 group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map(day => (
          <div key={day} className="p-3 text-center text-sm font-bold text-blue-950 bg-blue-300 rounded-lg">
            {day}
          </div>
        ))}
      </div>
      
      <div className={`grid grid-cols-7 gap-2 transition-all duration-300 ${
        isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}>
        {Array.from({ length: firstDay }, (_, i) => (
          <div key={`empty-${i}`} className="p-3"></div>
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
              className={`p-3 text-sm rounded-xl transition-all duration-300 relative hover:scale-110 font-medium ${
                isSelected 
                  ? 'bg-blue-300 text-blue-950 shadow-lg scale-110' 
                  : isToday
                    ? 'bg-blue-300 text-blue-950 shadow-md'
                    : hasEventOnDay 
                      ? 'bg-blue-300 text-blue-950 hover:shadow-lg' 
                      : 'text-blue-950 hover:bg-gray-100'
              }`}
            >
              {day}
              {hasEventOnDay && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 rounded-full animate-ping"></div>
              )}
              {isToday && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
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
      if (view === 'completed') return event.status === 'completed' && matchesSearch;
      return matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date': return new Date(a.date) - new Date(b.date);
        case 'rating': return b.rating - a.rating;
        case 'capacity': return b.capacity - a.capacity;
        case 'priority': 
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        default: return 0;
      }
    });

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-300 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-blue-300 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-2xl font-bold text-blue-950 mb-2 animate-pulse">Loading Amazing Events...</h2>
          <p className="text-blue-950">Preparing something special for you</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="relative z-10">
            <h1 className="text-6xl font-bold text-blue-950 mb-6">
              Collaborative Events & Partnerships
            </h1>
            <p className="text-xl text-blue-950 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive events and build meaningful partnerships. Experience innovation, networking, and growth opportunities.
            </p>
          </div>
        </div>

        <div className="mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-950 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, organizers, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-80 bg-white rounded-2xl shadow-lg border border-blue-300 focus:ring-4 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 text-blue-950"
                />
              </div>

              <div className="flex bg-white rounded-2xl shadow-lg border border-blue-300 overflow-hidden">
                {['all', 'upcoming', 'completed'].map((filterView) => (
                  <button
                    key={filterView}
                    onClick={() => setView(filterView)}
                    className={`px-6 py-3 font-medium capitalize transition-all duration-300 ${
                      view === filterView
                        ? 'bg-blue-300 text-blue-950 shadow-lg'
                        : 'text-blue-950 hover:bg-gray-100'
                    }`}
                  >
                    {filterView} Events
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white rounded-2xl shadow-lg border border-blue-300 px-4 py-3">
                <Filter className="w-5 h-5 text-blue-950" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 text-blue-950 font-medium cursor-pointer"
                >
                  <option value="date">Sort by Date</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="capacity">Sort by Capacity</option>
                  <option value="priority">Sort by Priority</option>
                </select>
                <ChevronDown className="w-4 h-4 text-blue-950" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 border border-blue-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-6 bg-blue-300 rounded-2xl text-blue-950">
                <h3 className="text-3xl font-bold">{events.length}</h3>
                <p className="text-blue-950">Total Events</p>
              </div>
              <div className="text-center p-6 bg-blue-300 rounded-2xl text-blue-950">
                <h3 className="text-3xl font-bold">{events.filter(e => e.status === 'upcoming').length}</h3>
                <p className="text-blue-950">Upcoming Events</p>
              </div>
              <div className="text-center p-6 bg-blue-300 rounded-2xl text-blue-950">
                <h3 className="text-3xl font-bold">{events.reduce((sum, e) => sum + e.enrolled, 0)}</h3>
                <p className="text-blue-950">Total Registrations</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-blue-950">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                <span>Registration Open</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <span>High Priority</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <span>Medium Priority</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div className="xl:col-span-3">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-32 h-32 mx-auto mb-6 bg-blue-300 rounded-full flex items-center justify-center">
                  <Search className="w-16 h-16 text-blue-950" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">No Events Found</h3>
                <p className="text-blue-950 max-w-md mx-auto">
                  We couldn't find any events matching your search criteria. Try adjusting your filters or search terms.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredEvents.map((event, index) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    index={index}
                    isVisible={visibleCards.has(index)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="xl:col-span-1">
            <InteractiveCalendar
              events={events}
              onDateSelect={setSelectedDate}
              selectedDate={selectedDate}
            />

            <div className="mt-8 bg-white rounded-3xl shadow-xl p-6 border border-blue-300">
              <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-300" />
                Quick Stats
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-300 rounded-xl">
                  <span className="text-blue-950 font-medium">Most Popular</span>
                  <span className="text-blue-950 font-bold">AI Devfest</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-blue-300 rounded-xl">
                  <span className="text-blue-950 font-medium">Next Event</span>
                  <span className="text-blue-950 font-bold">Aug 15</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-blue-300 rounded-xl">
                  <span className="text-blue-950 font-medium">Avg Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-blue-950 fill-current" />
                    <span className="text-blue-950 font-bold">
                      {(events.reduce((sum, e) => sum + e.rating, 0) / events.length).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-300 rounded-3xl shadow-xl p-6 text-blue-950">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Highlights
              </h3>
              
              <div className="space-y-3">
                {events
                  .filter(e => e.status === 'upcoming')
                  .slice(0, 3)
                  .map((event, idx) => (
                    <div key={event.id} className="bg-white rounded-xl p-3 border border-blue-300">
                      <div className="font-semibold text-sm mb-1 text-blue-950">{event.title}</div>
                      <div className="text-xs text-blue-950 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {event.duration}
                      </div>
                    </div>
                  ))}
              </div>
              
              <button className="w-full mt-4 bg-white border border-blue-300 rounded-xl py-3 px-4 font-semibold transition-all duration-300 hover:scale-105 text-blue-950 hover:bg-blue-300">
                View Full Calendar
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-300 rounded-3xl shadow-2xl p-12 text-blue-950 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
              <p className="text-xl text-blue-950 mb-8 max-w-2xl mx-auto">
                Don't miss out on exciting partnerships, workshops, and networking opportunities. 
                Register for events that match your interests and grow your professional network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-950 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-300">
                  Browse All Events
                </button>
                <button className="border-2 border-white text-white bg-blue-950 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-950 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  Contact Organizers
                </button>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;