import React, { useState, useRef, useEffect } from "react";
import {  ChevronLeft, ChevronRight } from "lucide-react";

// Extended client data with work details
const clientsData = [
  {
    name: "In-Depth Story",
    logo: "https://yt3.googleusercontent.com/c45cIEU20dMXmHUV289F0bWUSUHyZq4aFhdH7LCWhJ6gMu23a7_wj2oJOv709iaTimcA3yZoFQ=s160-c-k-c0x00ffffff-no-rj",
    channelUrl: "https://www.youtube.com/@INDepthStory",
    work: [
      {
        type: "Video Editing",
        description: "Why we all need a F.R.I.E.N.D like CHANDLER!",
        image: "https://i.ytimg.com/vi/RCWh2yii8l8/hqdefault.jpg",
      },
      {
        type: "Video Editing",
        description: "Unification of Nepal - Part I || Kathmandu Attack",
        image: "https://i.ytimg.com/vi/lKwI8HTLlhc/hqdefault.jpg",
      },
      {
        type: "Video Editing",
        description: "How Koirala Family “Changed” Nepal Forever",
        image: "https://i.ytimg.com/vi/H7q8EgQgyqA/hqdefault.jpg",
      },
      {
        type: "Video Editing",
        description: "We are in DANGER, Heres How ?",
        image: "https://i.ytimg.com/vi/fpV-2rkmtf4/hqdefault.jpg",
      },
      {
        type: "Video Editing",
        description: "How Climate Change is k*lling YARSHAGUMBA",
        image: "https://i.ytimg.com/vi/M1lmjyhNL14/hqdefault.jpg",
      },
    ],
  },
  {
    name: "Misguided Nepal",
    logo: "https://yt3.googleusercontent.com/HJJdRr6SfWvfq9O3ssZhxCYf5JGbO_z04VuP4sOQaaWHDfSd-Zn1CNB3XO1xdwuJOtJgDzjJaA=s160-c-k-c0x00ffffff-no-rj",
    channelUrl: "https://www.youtube.com/embed/UC4WTbb5TRyn8SNC3sz9ubNA",
    work: [
      {
        type: "Video Editing",
        description: "When A Maize Almost ENDED The Rana Regime",
        image: "https://i.ytimg.com/vi/WApI7biJGMY/hqdefault.jpg",
      }
    ],
  },
  {
    name: "Project Kura",
    logo: "https://yt3.googleusercontent.com/U9nmDq8o6R4pHH8kePnQChham-_59Nc4AP-_ig86TebeYNbOOmupn4M085ukWVxWyKmminh-=s160-c-k-c0x00ffffff-no-rj",
    channelUrl: "https://www.youtube.com/embed/UCaLmgjsWtq_t1pCh7pGoMiA",
    work: [
      {
        type: "Thumbnail",
        description: "'Communist Hero' to ‘Zero’ ?",
        image: "https://i.ytimg.com/vi/TOR70hv9rjQ/hqdefault.jpg",
      },
    ],
  },
  {
    name: "IDS Media",
    logo: "https://yt3.googleusercontent.com/ngbhc8oe0vYwVaIrfYcTkdx-4IzC_N-S20vT9jc6M0DJ6KqN8MZvdTyC4I6Vk9vDeTLJv2rq=s160-c-k-c0x00ffffff-no-rj",
    channelUrl: "https://www.youtube.com/embed/UC4WTbb5TRyn8SNC3sz9ubNA",
    work: [
      {
        type: "Thumbnail",
        description: "The Legends Of Indra Jatra || IDS Ground Report Ep 12",
        image: "https://i.ytimg.com/vi/tpdfUITlE8U/hqdefault.jpg",
      },
      {
        type: "Thumbnail",
        description: "What do people think of K.P Oli? || IDS Ground Report",
        image: "https://i.ytimg.com/vi/OKvNZJyrII4/hqdefault.jpg",
      },
      {
        type: "Thumbnail",
        description: "Dharahara Ki SetoTower? || IDS Ground Report Ep 14",
        image: "https://i.ytimg.com/vi/2SZACddHq04/hqdefault.jpg",
      },
      {
        type: "Thumbnail",
        description: "Kathmandu's Worst Flood In Decades || IDS Ground Report Ep 13",
        image: "https://i.ytimg.com/vi/XhcVYlrEgQ0/hqdefault.jpg",
      },
    ],
  },
];

// ScrollButton component
const ScrollButton = ({ direction, onClick }) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      className={`absolute ${
        direction === "left" ? "left-2" : "right-2"
      } top-1/2 -translate-y-1/2 
      bg-white/90 p-1 rounded-full shadow-lg z-10 transition-all duration-200
      hover:bg-white`}
    >
      <Icon className="w-5 h-5 text-gray-700" />
    </button>
  );
};


// WorkPopup component
const WorkPopup = ({ work, position, isVisible }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null); // 'left' or 'right'

  const handleNext = () => {
    setSlideDirection('right'); // Set slide direction
    setActiveIndex((prevIndex) => (prevIndex + 1) % work.length);
  };

  const handlePrev = () => {
    setSlideDirection('left'); // Set slide direction
    setActiveIndex((prevIndex) => (prevIndex - 1 + work.length) % work.length);
  };

  if (work.length === 0) return null;

  return (
    <div
      className={`absolute ${position} bg-white rounded-lg shadow-xl 
      transform transition-all duration-300 ease-in-out
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      z-50 p-4`}
      style={{ width: 320 }} // Fixed width
    >
      <div className="relative h-44 rounded-lg overflow-hidden">
        {/* Slide Buttons */}
        {work.length > 1 && (
          <>
            <ScrollButton direction="left" onClick={handlePrev} />
            <ScrollButton direction="right" onClick={handleNext} />
          </>
        )}

        {/* Work Display with Slide Animation */}
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
            slideDirection === 'left' ? 'translate-x-full' : ''
          } ${slideDirection === 'right' ? '-translate-x-full' : ''}`}
        >
          <img
            src={work[activeIndex].image}
            alt={work[activeIndex].type}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white">
            <h4 className="font-bold text-lg">{work[activeIndex].type}</h4>
            <p className="text-sm opacity-90">{work[activeIndex].description}</p>
          </div>
        </div>

        {/* Slide Indicator */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out ${
            slideDirection === 'left' ? 'translate-x-0' : slideDirection === 'right' ? 'translate-x-0' : ''
          }`}
          style={{ zIndex: 1 }}
        >
          <img
            src={work[activeIndex].image}
            alt={work[activeIndex].type}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white">
            <h4 className="font-bold text-lg">{work[activeIndex].type}</h4>
            <p className="text-sm opacity-90">{work[activeIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};





// ClientCard component
// ClientCard component
const ClientCard = ({ client, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!client || !client.logo || !client.name || !client.work) {
    console.error("Invalid client data:", client);
    return null;
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  return (
    <div
      className="relative bg-white p-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-40"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={client.logo}
        alt={client.name}
        className="w-full h-16 object-contain mb-2"
      />
      <h6 className=" text-md text-center">{client.name}</h6>

      <WorkPopup
        work={client.work}
        position="top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2"
        isVisible={isHovered}
      />
    </div>
  );
};


// ClientsSection component
const ClientsSection = () => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-center mb-6">Clients</h2>
      <div className="flex flex-wrap justify-center gap-20 p-4">
        {clientsData.map((client, index) => (
          <ClientCard key={client.name} client={client} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
