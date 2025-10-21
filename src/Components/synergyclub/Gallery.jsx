import React, { useState, useEffect } from 'react';
import { 
  Search,
  Filter,
  Grid3X3,
  Camera,
  Share2,
  Download,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Plus
} from 'lucide-react';

// Mock gallery data with Unsplash demo images
const mockGalleryAPI = {
  fetchGalleryImages: async () => {
    return [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
        title: "Tech Partnership Summit 2024",
        event: "Partnership with Techkhwa",
        location: "Tech Hub, Peshawar",

        category: "partnership"
      }
    ];
  }
};

const ImageModal = ({ image, isOpen, onClose, onNext, onPrev, currentIndex, totalImages }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `${image.title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Image */}
        <div className="relative max-w-full max-h-full">
          <img
            src={image.url}
            alt={image.title}
            className="max-w-full max-h-full object-contain rounded-lg md:rounded-2xl shadow-2xl"
          />
          
          {/* Image Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6 rounded-b-lg md:rounded-b-2xl">
            <div className="text-white">
              <h3 className="text-lg md:text-2xl font-bold mb-2">{image.title}</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm mb-3 md:mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  {image.location}
                </div>
                
              </div>
              
              <div className="flex items-center justify-between">
                <div className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium capitalize">
                  {image.category}
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs">
                    {currentIndex + 1} of {totalImages}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                    <button
                      onClick={handleDownload}
                      className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Download className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryCard = ({ image, index, isVisible, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden cursor-pointer transition-all duration-1000 ease-out transform min-w-0 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ 
        transitionDelay: `${index * 80}ms`
      }}
      onClick={onClick}
    >
      <div className="relative bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 overflow-hidden w-full">
        
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-blue-100 animate-pulse flex items-center justify-center">
              <Camera className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            </div>
          )}
          
          <img
            src={image.url}
            alt={image.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-white font-bold text-sm line-clamp-2 mb-1">{image.title}</h3>
              <p className="text-blue-200 text-xs line-clamp-1">{image.event}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle share
              }}
              className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-blue-950 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Share2 className="w-3 h-3" />
            </button>
          </div>

          {/* Zoom Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-medium capitalize">
              {image.category}
            </span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-3">
          <div className="flex items-center justify-between text-xs text-blue-700 mb-2">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{image.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await mockGalleryAPI.fetchGalleryImages();
        setImages(data);
        
        // Stagger animation for cards
        data.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards(prev => new Set([...prev, index]));
          }, index * 80);
        });
      } catch (error) {
        console.error('Failed to load gallery:', error);
      } finally {
        setTimeout(() => setLoading(false), 800);
      }
    };

    loadImages();
  }, []);

  const filteredImages = images.filter(image => {
    const matchesSearch = 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.photographer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Mobile responsive - show limited images initially
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayImages = isMobile && !showMore ? filteredImages.slice(0, 6) : filteredImages;

  const categories = ['all', ...new Set(images.map(img => img.category))];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative">
            <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-blue-300 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 border-4 border-blue-300 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-950 mb-2 animate-pulse">Loading Gallery...</h2>
          <p className="text-blue-950 text-sm">Preparing beautiful moments for you</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-6 md:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-3 md:mb-4">
            Event Gallery
          </h1>
          <p className="text-sm md:text-lg text-blue-950 max-w-2xl mx-auto leading-relaxed">
            Capturing memorable moments from our partnerships, workshops, and collaborative events.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 md:mb-8 space-y-4">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-blue-950 flex items-center gap-1 mr-2">
              <Filter className="w-4 h-4" />
              Category:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg font-medium capitalize transition-all duration-300 text-xs ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-blue-100 text-blue-950 hover:bg-blue-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          
        </div>

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Camera className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-blue-950 mb-2">No Images Found</h3>
            <p className="text-blue-950 max-w-md mx-auto text-sm">
              No images match your current search criteria. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {displayImages.map((image, index) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  index={index}
                  isVisible={visibleCards.has(index)}
                  onClick={() => openModal(image, index)}
                />
              ))}
            </div>

            {/* Show More Button for Mobile */}
            {isMobile && filteredImages.length > 6 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md"
                >
                  <Plus className={`w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-45' : ''}`} />
                  {showMore ? `Show Less` : `Show ${filteredImages.length - 6} More Photos`}
                </button>
              </div>
            )}
          </>
        )}

        

        {/* Image Modal */}
        <ImageModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
          currentIndex={currentImageIndex}
          totalImages={filteredImages.length}
        />
      </div>
    </div>
  );
};

export default Gallery;