import React, { useEffect, useState, useRef } from 'react';
import { motivationalQuotes } from '../mock';

const MotivationalQuotes = () => {
  const [quotes, setQuotes] = useState([...motivationalQuotes, ...motivationalQuotes]); // Duplicate for seamless loop
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;
        
        // Reset when halfway through (seamless loop)
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-red-950 dark:bg-red-950/30 border-y border-red-900/50 overflow-hidden">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-white">
          Words from the <span className="text-red-400">Legends</span>
        </h3>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex space-x-8 overflow-x-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {quotes.map((quote, index) => (
          <div
            key={`${quote.id}-${index}`}
            className="inline-flex items-center space-x-4 bg-black/30 backdrop-blur-sm px-8 py-4 rounded-lg border border-red-800/30 flex-shrink-0"
          >
            <div className="flex flex-col">
              <p className="text-white text-lg font-medium whitespace-normal max-w-md">
                "{quote.quote}"
              </p>
              <p className="text-red-400 text-sm font-semibold mt-2">
                - {quote.memberName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MotivationalQuotes;