import React, { useState, useEffect } from "react";
import { 
  Camera, Share2, Download, X, ChevronLeft, ChevronRight, MapPin, Plus 
} from "lucide-react";
import { backend_url } from "../url";

/* ============================
   Fetch Gallery Images
============================ */
const fetchGalleryImages = async () => {
  try {
    const res = await fetch(`${backend_url}api/gallery`);
    if (!res.ok) throw new Error("Failed to fetch gallery images");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

/* ============================
   Image Modal
============================ */
const ImageModal = ({ image, isOpen, onClose, onNext, onPrev, currentIndex, totalImages }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image.url || image.image;
    link.download = `${(image.title || "image").replace(/\s+/g, "_")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-500">
      <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
        {/* Close */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
        {/* Prev/Next */}
        <button 
          onClick={onPrev} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={onNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="relative max-w-full max-h-full">
          <img 
            src={image.url || image.image} 
            alt={image.title || "Gallery image"} 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105" 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 rounded-b-2xl text-white transition-opacity duration-500">
            <h3 className="text-2xl font-bold mb-2">{image.title || "Untitled"}</h3>
            <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
              <div className="flex items-center gap-1"><MapPin /> {image.location || "Unknown"}</div>
              <div className="px-3 py-1 bg-blue-600 rounded-full capitalize">{image.category || "general"}</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">{currentIndex + 1} of {totalImages}</span>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all"><Share2 /></button>
                <button onClick={handleDownload} className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all"><Download /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================
   Gallery Card
============================ */
const GalleryCard = ({ image, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative cursor-pointer overflow-hidden transition-transform duration-500 transform hover:-translate-y-1 hover:scale-105" onClick={onClick}>
      <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 bg-blue-100 animate-pulse flex items-center justify-center">
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
          )}
          <img 
            src={image.url || image.image} 
            alt={image.title || "Gallery image"} 
            className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} 
            onLoad={() => setLoaded(true)} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold text-sm line-clamp-2">{image.title || "Untitled"}</h3>
            <p className="text-blue-200 text-xs line-clamp-1">{image.event || ""}</p>
          </div>
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full capitalize">{image.category || "general"}</span>
          </div>
        </div>
        <div className="p-2 flex items-center gap-1 text-xs text-blue-700">
          <MapPin className="w-3 h-3" /> 
          <span className="truncate">{image.location || "Unknown"}</span>
        </div>
      </div>
    </div>
  );
};

/* ============================
   Main Gallery Component
============================ */
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const res = await fetchGalleryImages(); 
      const dataArray = res.data || [];
      const normalized = dataArray.map(img => ({ ...img, _uid: img._id || img.id }));
      setImages(normalized);
      setLoading(false);
    };
    loadImages();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filtered = images.filter(img => selectedCategory === 'all' || img.category === selectedCategory);
  const displayImages = isMobile && !showMore ? filtered.slice(0, 6) : filtered;
  const categories = ["all", ...new Set(images.map(img => img.category))];

  const openModal = (img, index) => { setSelectedImage(img); setCurrentIndex(index); };
  const closeModal = () => setSelectedImage(null);
  const nextImage = () => { const idx = (currentIndex + 1) % filtered.length; setCurrentIndex(idx); setSelectedImage(filtered[idx]); };
  const prevImage = () => { const idx = (currentIndex - 1 + filtered.length) % filtered.length; setCurrentIndex(idx); setSelectedImage(filtered[idx]); };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-300 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-bold text-blue-950 animate-pulse">Loading Gallery...</h2>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Event Gallery</h1>
          <p className="text-sm md:text-lg text-blue-800 max-w-2xl mx-auto">
            Capturing memorable moments from our workshops, webinars, and events.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-900 border border-blue-200 hover:bg-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Camera className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">No Images Found</h3>
            <p className="text-blue-800 max-w-md mx-auto text-sm">No images match your current filters.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {displayImages.map((img, idx) => (
                <GalleryCard key={img._uid} image={img} onClick={() => openModal(img, idx)} />
              ))}
            </div>

            {isMobile && filtered.length > 6 && (
              <div className="text-center mt-6">
                <button 
                  onClick={() => setShowMore(!showMore)} 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 shadow-md transition-all"
                >
                  <Plus className={`w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-45' : ''}`} />
                  {showMore ? 'Show Less' : `Show ${filtered.length - 6} More Photos`}
                </button>
              </div>
            )}
          </>
        )}

        <ImageModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
          currentIndex={currentIndex}
          totalImages={filtered.length}
        />
      </div>
    </div>
  );
};

export default Gallery;
