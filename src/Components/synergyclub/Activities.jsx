import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Calendar, 
  User, 
  Users, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  MapPin,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';

// Mock database functions - replace with actual API calls
const mockAPI = {
  // Fetch all activities
  fetchActivities: async () => {
    return [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
        title: "Front-End Course",
        duration: "Sep 2023-Dec 2023",
        instructor: "Abdul Malik",
        status: "completed",
        date: "2023-09-01",
        location: "Lab 1",
        capacity: 30,
        enrolled: 28,
        description: "Comprehensive web development training covering HTML, CSS, JavaScript, and modern frameworks.",
        requirements: ["Basic computer knowledge", "Laptop required"],
        applicationDeadline: null,
        applicationForm: null
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=300&fit=crop",
        title: "Python Course",
        duration: "March 2024-Sep 2024",
        instructor: "Zaryab Ahmad",
        status: "completed",
        date: "2024-03-01",
        location: "Computer Lab",
        capacity: 25,
        enrolled: 25,
        description: "In-depth Python programming course covering fundamentals to advanced concepts.",
        requirements: ["Programming basics helpful but not required"],
        applicationDeadline: null,
        applicationForm: null
      },
      {
        id: 9,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
        title: "Python Interviews",
        duration: "Feb 2024",
        team: "Synergy Club",
        status: "completed",
        date: "2024-02-01",
        location: "Interview Room",
        capacity: 20,
        enrolled: 18,
        description: "Intensive interview preparation sessions focused on Python technical questions, coding challenges, and best practices.",
        requirements: ["Basic Python knowledge"],
        applicationDeadline: null,
        applicationForm: null
      },
      {
        id: 10,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        title: "Canva Short Course",
        duration: "June 2024-July 2024",
        instructor: "Ziaullah",
        status: "completed",
        date: "2024-06-01",
        location: "Design Lab",
        capacity: 30,
        enrolled: 25,
        description: "Creative design workshop using Canva for professional graphics, social media content, presentations, and marketing materials.",
        requirements: ["No prerequisites"],
        applicationDeadline: null,
        applicationForm: null
      },
      {
        id: 11,
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop",
        title: "Crypto Course",
        duration: "March 2025-Apr 2025",
        instructor: "Hasanat Moiz",
        status: "completed",
        date: "2025-03-01",
        location: "Finance Lab",
        capacity: 20,
        enrolled: 20,
        description: "Comprehensive cryptocurrency and blockchain technology course covering fundamentals, trading strategies, DeFi concepts, and market analysis.",
        requirements: ["Basic financial knowledge helpful"],
        applicationDeadline: null,
        applicationForm: null
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        title: "Daraz Seminar",
        duration: "27 Feb 2025",
        instructor: "Awais Ahmad",
        status: "completed",
        date: "2025-02-27",
        location: "Main Hall",
        capacity: 100,
        enrolled: 85,
        description: "Informative session about e-commerce opportunities on Daraz platform, seller registration, product listing strategies, and digital marketing techniques.",
        requirements: ["No prerequisites"],
        applicationDeadline: null,
        applicationForm: null
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        title: "Daraz Course",
        duration: "March 2025",
        instructor: "Awais Ahmad",
        status: "completed",
        date: "2025-03-01",
        location: "E-commerce Lab",
        capacity: 25,
        enrolled: 23,
        description: "Complete e-commerce training program focusing on Daraz marketplace operations, inventory management, customer service, and scaling online businesses.",
        requirements: ["Basic business knowledge helpful"],
        applicationDeadline: null,
        applicationForm: null
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
        title: "Awareness Campaign",
        duration: "20 Nov 2023",
        team: "SSC & CCS",
        status: "completed",
        date: "2023-11-20",
        location: "Campus Wide",
        capacity: 200,
        enrolled: 180,
        description: "Community outreach initiative promoting digital literacy, cybersecurity awareness, and technology education.",
        requirements: ["No prerequisites"],
        applicationDeadline: null,
        applicationForm: null
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop",
        title: "Advanced React Workshop",
        duration: "Aug 15-20, 2025",
        instructor: "Sarah Johnson",
        status: "upcoming",
        date: "2025-08-15",
        location: "Tech Hub",
        capacity: 20,
        enrolled: 12,
        description: "Master advanced React concepts including hooks, context, and performance optimization.",
        requirements: ["Basic React knowledge", "JavaScript proficiency", "Laptop with Node.js"],
        applicationDeadline: "2025-08-10",
        applicationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample1/viewform"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        title: "UI/UX Design Bootcamp",
        duration: "Aug 25-30, 2025",
        instructor: "Alex Chen",
        status: "upcoming",
        date: "2025-08-25",
        location: "Design Studio",
        capacity: 15,
        enrolled: 8,
        description: "Comprehensive design bootcamp covering user research, wireframing, and prototyping.",
        requirements: ["Design portfolio (optional)", "Figma account"],
        applicationDeadline: "2025-08-20",
        applicationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample2/viewform"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        title: "Data Science Seminar",
        duration: "Sep 5, 2025",
        instructor: "Dr. Maria Rodriguez",
        status: "upcoming",
        date: "2025-09-05",
        location: "Main Auditorium",
        capacity: 100,
        enrolled: 45,
        description: "Introduction to data science, machine learning, and career opportunities.",
        requirements: ["No prerequisites"],
        applicationDeadline: "2025-09-01",
        applicationForm: "https://docs.google.com/forms/d/e/1FAIpQLSexample3/viewform"
      }
    ];
  }
};

const AccordionItem = ({ event, isOpen, onToggle, index }) => {
  const handleApplyClick = (e) => {
    e.stopPropagation();
    // Open Google Form in a new tab
    if (event.applicationForm) {
      window.open(event.applicationForm, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback if no specific form URL is provided
      alert('Application form will be available soon. Please check back later.');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-gray-500 text-white';
      case 'upcoming': return 'bg-green-500 text-white';
      case 'ongoing': return 'bg-blue-500 text-white';
      default: return 'bg-blue-300 text-blue-900';
    }
  };

  const canApply = event.status === 'upcoming' && event.applicationDeadline && 
                   new Date(event.applicationDeadline) > new Date();

  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform hover:scale-[1.02] animate-fade-in-up border-l-4 ${
        isOpen ? 'shadow-2xl border-blue-300' : 'shadow-lg hover:shadow-xl border-blue-300/50'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Header */}
      <div
        className={`p-6 cursor-pointer transition-all duration-500 relative overflow-hidden ${
          isOpen ? 'bg-gradient-to-r from-blue-300 to-blue-400 text-white' : 'bg-white hover:bg-blue-50'
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className={`text-xl font-bold transition-all duration-500 ${
                isOpen ? 'text-white' : 'text-blue-900'
              }`}>
                {event.title}
              </h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <Calendar className={`w-4 h-4 ${isOpen ? 'text-blue-100' : 'text-blue-300'}`} />
                <span className={`text-sm ${isOpen ? 'text-blue-100' : 'text-blue-700'}`}>
                  {event.duration}
                </span>
              </div>
              {event.location && (
                <div className="flex items-center space-x-2">
                  <MapPin className={`w-4 h-4 ${isOpen ? 'text-blue-100' : 'text-blue-300'}`} />
                  <span className={`text-sm ${isOpen ? 'text-blue-100' : 'text-blue-700'}`}>
                    {event.location}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <ChevronDown 
            className={`w-6 h-6 transition-all duration-500 ${
              isOpen ? 'rotate-180 text-blue-100' : 'text-blue-300'
            }`}
          />
        </div>
      </div>

      {/* Expanded Content */}
      <div 
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="relative group">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-blue-300/30">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
              
              {event.status === 'completed' && (
                <div className="absolute top-3 right-3 bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
                  ✓ Completed
                </div>
              )}
              
              {event.status === 'upcoming' && canApply && (
                <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                  Applications Open
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="space-y-4">
              {/* Event Details */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-300/30">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Event Details
                </h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-blue-300/10 rounded-lg">
                    <span className="text-sm text-blue-900 font-medium">Duration:</span>
                    <span className="font-bold text-blue-900">{event.duration}</span>
                  </div>
                  
                  {event.instructor && (
                    <div className="flex justify-between p-3 bg-blue-300/10 rounded-lg">
                      <span className="text-sm text-blue-900 font-medium">Instructor:</span>
                      <span className="font-bold text-blue-900">{event.instructor}</span>
                    </div>
                  )}
                  
                  {event.capacity && (
                    <div className="flex justify-between p-3 bg-blue-300/10 rounded-lg">
                      <span className="text-sm text-blue-900 font-medium">Capacity:</span>
                      <span className="font-bold text-blue-900">{event.enrolled}/{event.capacity}</span>
                    </div>
                  )}
                  
                  {event.applicationDeadline && (
                    <div className="flex justify-between p-3 bg-blue-300/10 rounded-lg">
                      <span className="text-sm text-blue-900 font-medium">Apply By:</span>
                      <span className="font-bold text-blue-900">
                        {new Date(event.applicationDeadline).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-300/30">
                <h4 className="font-semibold text-blue-900 mb-3">Description</h4>
                <p className="text-sm text-blue-900 leading-relaxed mb-3">
                  {event.description}
                </p>
                
                {event.requirements && event.requirements.length > 0 && (
                  <>
                    <h5 className="font-semibold text-blue-900 mb-2">Requirements:</h5>
                    <ul className="text-sm text-blue-900 space-y-1">
                      {event.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-300 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Application Button */}
              {canApply && (
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-300/30">
                  <button
                    onClick={handleApplyClick}
                    className="w-full bg-blue-300 hover:bg-blue-400 text-blue-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                    Apply via Google Form
                  </button>
                  <p className="text-xs text-blue-700 text-center mt-2">
                    Opens in a new tab
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityCalendar = ({ activities, onDateSelect, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const hasActivity = (day) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dateStr = checkDate.toISOString().split('T')[0];
    return activities.some(activity => activity.date === dateStr);
  };
  
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };
  
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-300/30">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-blue-900">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-blue-300" />
          </button>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-blue-300" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-blue-300">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }, (_, i) => (
          <div key={`empty-${i}`} className="p-2"></div>
        ))}
        
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const hasEvent = hasActivity(day);
          const isSelected = selectedDate && 
            selectedDate.getDate() === day && 
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();
          
          return (
            <button
              key={day}
              onClick={() => {
                const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                onDateSelect(newDate);
              }}
              className={`p-2 text-sm rounded-lg transition-all duration-200 relative ${
                isSelected 
                  ? 'bg-blue-300 text-white' 
                  : hasEvent 
                    ? 'bg-blue-100 text-blue-900 hover:bg-blue-200' 
                    : 'text-blue-900 hover:bg-blue-50'
              }`}
            >
              {day}
              {hasEvent && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-300 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('upcoming'); // 'upcoming', 'completed', 'all'
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await mockAPI.fetchActivities();
        setActivities(data);
      } catch (error) {
        console.error('Failed to load activities:', error);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.instructor?.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (view === 'upcoming') return activity.status === 'upcoming' && matchesSearch;
    if (view === 'completed') return activity.status === 'completed' && matchesSearch;
    return matchesSearch;
  });

  const upcomingActivities = activities.filter(activity => activity.status === 'upcoming');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-300 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-900 font-medium">Loading activities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Activities & Events
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Discover our comprehensive courses and upcoming events. Join us to enhance your skills and knowledge.
          </p>
        </div>

        {/* Navigation & Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2">
              {['upcoming', 'completed', 'all'].map((viewType) => (
                <button
                  key={viewType}
                  onClick={() => setView(viewType)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    view === viewType
                      ? 'bg-blue-300 text-blue-900'
                      : 'bg-white text-blue-700 hover:bg-blue-100 border border-blue-300/50'
                  }`}
                >
                  {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
              <input
                type="text"
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-blue-300/50 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 outline-none w-64"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <ActivityCalendar 
              activities={activities}
              onDateSelect={setSelectedDate}
              selectedDate={selectedDate}
            />
          </div>

          {/* Activities List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredActivities.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">No Activities Found</h3>
                  <p className="text-blue-700">
                    {searchTerm ? 'Try adjusting your search terms.' : 'No activities match your current filter.'}
                  </p>
                </div>
              ) : (
                filteredActivities.map((activity, index) => (
                  <AccordionItem
                    key={activity.id}
                    event={activity}
                    isOpen={openAccordion === index}
                    onToggle={() => setOpenAccordion(openAccordion === index ? null : index)}
                    index={index}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-300/30">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">
              {activities.length}
            </h3>
            <p className="text-blue-700 font-medium">Total Activities</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-300/30">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">
              {upcomingActivities.length}
            </h3>
            <p className="text-blue-700 font-medium">Upcoming Events</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-300/30">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">
              {activities.filter(a => a.status === 'completed').length}
            </h3>
            <p className="text-blue-700 font-medium">Completed</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-300/30">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">
              {activities.reduce((sum, activity) => sum + (activity.enrolled || 0), 0)}
            </h3>
            <p className="text-blue-700 font-medium">Total Participants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;