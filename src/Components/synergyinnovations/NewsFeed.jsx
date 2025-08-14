import React, { useState } from 'react';
import { Calendar, MapPin, Eye, ChevronRight, BookOpen, Newspaper, Users, TrendingUp, Clock, Sparkles, Zap, Star, MessageCircle } from 'lucide-react';

const ContentHub = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample content data
  const contentPosts = [
    {
      id: 1,
      title: "Breaking: Synergy Solutions Wins Industry Innovation Award 2024",
      author: "Sarah Johnson",
      authorRole: "Communications Director",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "We're thrilled to announce that Synergy Solutions has been recognized with the prestigious Industry Innovation Award for our groundbreaking work in sustainable technology solutions.",
      fullDescription: "We're thrilled to announce that Synergy Solutions has been recognized with the prestigious Industry Innovation Award for our groundbreaking work in sustainable technology solutions. This award acknowledges our commitment to developing cutting-edge technologies that not only drive business success but also contribute to environmental sustainability. Our innovative approach has helped over 200 clients reduce their carbon footprint by 40% while increasing operational efficiency. This recognition validates our mission to create technology solutions that benefit both business and society.",
      date: "March 15, 2024",
      place: "Tech Innovation Summit, San Francisco",
      category: "News",
      type: "news",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "The Future of Remote Work: Insights from Our Latest Survey",
      author: "Michael Chen",
      authorRole: "Head of Research",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Our comprehensive survey of 5,000 professionals reveals surprising trends about the evolution of remote work and its impact on productivity and work-life balance.",
      fullDescription: "Our comprehensive survey of 5,000 professionals reveals surprising trends about the evolution of remote work and its impact on productivity and work-life balance. Key findings include: 78% of employees report higher productivity when working remotely, 65% prefer hybrid models over fully remote or in-office arrangements, and 82% believe that remote work tools have fundamentally changed how teams collaborate. The survey also highlighted the importance of digital communication skills, with 91% of respondents saying these skills are now essential for career advancement. These insights are shaping how organizations worldwide approach their future workplace strategies.",
      date: "March 10, 2024",
      place: "Research Department, Virtual",
      category: "Article",
      type: "article",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "My Journey: From Intern to Team Lead in 3 Years",
      author: "Emma Rodriguez",
      authorRole: "Development Team Lead",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Reflecting on my incredible journey at Synergy Solutions - the challenges, learning experiences, and mentorship that shaped my career growth.",
      fullDescription: "Reflecting on my incredible journey at Synergy Solutions - the challenges, learning experiences, and mentorship that shaped my career growth. When I started as an intern three years ago, I never imagined I'd be leading a team of talented developers today. The key factors in my growth were: embracing every learning opportunity, seeking feedback actively, taking on challenging projects, and most importantly, having amazing mentors who believed in my potential. To anyone starting their career journey, remember that growth happens outside your comfort zone. Every project, every mistake, and every success is a stepping stone. I'm grateful for this company's culture of nurturing talent and providing opportunities for growth.",
      date: "March 5, 2024",
      place: "Personal Reflection",
      category: "Story",
      type: "story",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Team Building Success: Our Best Practices for Virtual Teams",
      author: "David Park",
      authorRole: "HR Director",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Sharing our proven strategies for building strong, connected teams in a virtual environment. These practices have improved our team cohesion by 60%.",
      fullDescription: "Sharing our proven strategies for building strong, connected teams in a virtual environment. These practices have improved our team cohesion by 60% over the past year. Our approach includes: weekly virtual coffee chats, collaborative online workshops, recognition programs that celebrate both professional and personal milestones, and quarterly virtual retreats with interactive activities. We've learned that intentional relationship-building is crucial in virtual settings. Regular check-ins, transparent communication, and creating safe spaces for both work and personal sharing have been game-changers. The investment in team culture pays dividends in productivity, retention, and overall job satisfaction.",
      date: "February 28, 2024",
      place: "HR Department, Global",
      category: "Post",
      type: "post",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Industry Report: Digital Transformation Trends 2024",
      author: "Lisa Zhang",
      authorRole: "Strategy Analyst",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      shortDescription: "Our annual industry report analyzing the key digital transformation trends shaping businesses in 2024, based on data from over 1,000 organizations.",
      fullDescription: "Our annual industry report analyzing the key digital transformation trends shaping businesses in 2024, based on data from over 1,000 organizations. Key trends include: AI integration in everyday business processes (85% adoption rate), cloud-first infrastructure strategies, enhanced cybersecurity measures, and the rise of low-code/no-code platforms. We're seeing a shift from digital transformation as a project to digital evolution as a continuous process. Organizations that embrace this mindset are outperforming their peers by 23% in revenue growth and 31% in customer satisfaction scores. This report provides actionable insights for leaders navigating the digital landscape.",
      date: "February 20, 2024",
      place: "Research Center, Boston",
      category: "Article",
      type: "article",
      readTime: "12 min read"
    }
  ];

  const categories = ['All', 'News', 'Article', 'Story', 'Post'];

  const filteredPosts = activeFilter === 'All' 
    ? contentPosts 
    : contentPosts.filter(post => post.category === activeFilter);

  const toggleExpanded = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'News': return <Newspaper className="w-4 h-4" />;
      case 'Article': return <BookOpen className="w-4 h-4" />;
      case 'Story': return <Users className="w-4 h-4" />;
      case 'Post': return <MessageCircle className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    return 'bg-blue-300';
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div 
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-blue-300 rounded-full opacity-20 animate-pulse" 
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-bounce" 
          style={{ animationDuration: '3s' }}
        ></div>
        <div 
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-25 animate-bounce" 
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Sparkles className="w-16 h-16 text-blue-300 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-300 mb-6 animate-pulse">
            Content Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, articles, stories, and insights from our team and industry experts.
          </p>
          <div className="mt-8 relative">
            <div className="h-1 w-24 bg-blue-300 mx-auto rounded-full animate-pulse"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <Star className="w-6 h-6 text-blue-300 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-500 flex items-center gap-3 relative overflow-hidden ${
                activeFilter === category
                  ? 'bg-blue-300 text-white shadow-2xl'
                  : 'bg-white text-gray-700 shadow-lg'
              }`}
            >
              <div className="absolute inset-0 bg-blue-400 opacity-0 transition-opacity duration-1000"></div>
              {category !== 'All' && (
                <div className={`p-2 rounded-full ${activeFilter === category ? 'bg-white/20' : 'bg-blue-100'}`}>
                  {getCategoryIcon(category)}
                </div>
              )}
              <span className="relative z-10">{category}</span>
              {activeFilter === category && (
                <Zap className="w-5 h-5 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-white/50"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden rounded-t-3xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`${getCategoryColor(post.category)} text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl flex items-center gap-2`}>
                    {getCategoryIcon(post.category)}
                    {post.category}
                  </span>
                </div>
                
                {/* Read Time Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Clock className="w-4 h-4 text-blue-300" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-5 relative">
                {/* Sparkle Animation */}
                <div className="absolute top-2 right-2">
                  <Sparkles className="w-5 h-5 text-blue-300 animate-ping" />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-blue-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base">{post.author}</p>
                    <p className="text-gray-500 text-sm">{post.authorRole}</p>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-blue-300 line-clamp-2 leading-tight">
                  {post.title}
                </h2>

                {/* Date and Place */}
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="p-1 rounded-full bg-blue-100">
                      <Calendar className="w-4 h-4 text-blue-300" />
                    </div>
                    <span className="font-medium">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="p-1 rounded-full bg-blue-100">
                      <MapPin className="w-4 h-4 text-blue-300" />
                    </div>
                    <span className="font-medium">{post.place}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {expandedPost === post.id ? post.fullDescription : post.shortDescription}
                </p>

                {/* Read More Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => toggleExpanded(post.id)}
                    className="inline-flex items-center gap-2 bg-blue-300 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg"
                  >
                    <Eye className="w-5 h-5" />
                    <span>{expandedPost === post.id ? 'Show Less' : 'Read More'}</span>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${expandedPost === post.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-20">
          <button className="bg-blue-300 text-white px-12 py-5 rounded-3xl font-bold text-xl transition-all duration-500 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-400 opacity-0 transition-opacity duration-1000"></div>
            <div className="flex items-center gap-3 relative z-10">
              <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Load More Amazing Content</span>
              <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '3s', animationDelay: '1s' }} />
            </div>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-white rounded-3xl p-10 shadow-2xl border border-white/50 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full animate-pulse"></div>
            <div 
              className="absolute top-1/2 right-0 w-24 h-24 bg-blue-200 rounded-full animate-pulse" 
              style={{ animationDelay: '1s' }}
            ></div>
            <div 
              className="absolute bottom-0 left-1/2 w-20 h-20 bg-blue-300 rounded-full animate-pulse" 
              style={{ animationDelay: '2s' }}
            ></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-blue-300 mb-2">Content Analytics</h3>
              <p className="text-gray-600">Discover our content ecosystem</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="p-4 rounded-2xl bg-blue-100">
                    <Newspaper className="w-10 h-10 text-blue-300 animate-bounce" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">45</h3>
                <p className="text-gray-600 text-sm font-medium">Breaking News</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="p-4 rounded-2xl bg-blue-100">
                    <BookOpen className="w-10 h-10 text-blue-300 animate-bounce" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">128</h3>
                <p className="text-gray-600 text-sm font-medium">Deep Articles</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="p-4 rounded-2xl bg-blue-100">
                    <Users className="w-10 h-10 text-blue-300 animate-bounce" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">89</h3>
                <p className="text-gray-600 text-sm font-medium">Success Stories</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="p-4 rounded-2xl bg-blue-100">
                    <TrendingUp className="w-10 h-10 text-blue-300 animate-bounce" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">234K</h3>
                <p className="text-gray-600 text-sm font-medium">Total Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHub;