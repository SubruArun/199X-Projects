import React, { useState } from 'react';
import { ImagePlus, Play, X } from 'lucide-react';
import { galleryImages, galleryVideos } from '../mock';

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" 
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-gray-900/80 hover:bg-red-600 rounded-lg transition-colors z-10"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      
      <div 
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {image.placeholder ? (
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <ImagePlus className="w-24 h-24 text-gray-600 mx-auto mb-4" />
              <p className="text-white text-2xl font-semibold">{image.title}</p>
              <p className="text-gray-400 text-lg mt-2">{image.description}</p>
            </div>
          </div>
        ) : (
          <img
            src={image.imageUrl}
            alt={image.title}
            className="w-full h-auto rounded-xl"
          />
        )}
        <div className="mt-4 text-center">
          <p className="text-white text-xl font-semibold">{image.title}</p>
          <p className="text-gray-400 mt-1">{image.description}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const filteredContent = () => {
    if (activeTab === 'images') return galleryImages;
    if (activeTab === 'videos') return galleryVideos;
    return [...galleryImages, ...galleryVideos];
  };

  return (
    <>
      <section id="gallery" className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-red-600">Memories</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Epic moments captured in time</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'all'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('images')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'images'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Images
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'videos'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Videos
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent().map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="group relative aspect-video bg-gray-200 dark:bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 cursor-pointer"
                onClick={() => {
                  if (item.type === 'image') {
                    setSelectedImage(item);
                  }
                }}
              >
                {item.type === 'video' ? (
                  // Video thumbnail with play button
                  <a
                    href={item.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                        <p className="text-gray-300 text-xs mt-1">{item.description}</p>
                      </div>
                    </div>
                  </a>
                ) : item.placeholder ? (
                  // Image placeholder
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 group-hover:scale-105 transition-transform duration-300">
                    <ImagePlus className="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4 group-hover:text-red-600 transition-colors duration-300" />
                    <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">{item.description}</p>
                  </div>
                ) : (
                  // Actual image
                  <div className="absolute inset-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-300 text-xs mt-1">{item.description}</p>
                    </div>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

export default Gallery;