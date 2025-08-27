import React, { useEffect, useState } from "react";
import Slide from "./Slide.jsx";
import {
  uk,
  vietham,
  thiland,
  srilanka,
  southaffrika,
  philips,
  newzeakand,
  morocoo,
  hongkong,
  easterm,
  dubai,
  bali,
  australia,
  europe,
  georgia
} from "../assets/index.js";

const slides = [
  {
    image: uk,
    title: "11 Days UK, Scotland & Ireland",
    subtitle: "Castles, Highlands & City Vibes",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13465",
  },
  {
    image: philips,
    title: "9 Days Tropical Philippines",
    subtitle: "Heritage, Beaches & Island Fun",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13332",
  },
  {
    image: morocoo,
    title: "9 Days Mind-Blowing Morocco",
    subtitle: "Souks, Spices & Desert Magic",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13338",
  },
  {
    image: thiland,
    title: "10 Days Thrilling Thailand",
    subtitle: "Beaches, Temples & Nightlife",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13323",
  },
  {
    image: newzeakand,
    title: "11 Days Naturally New Zealand",
    subtitle: "Glaciers, Lakes & Adventure",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13397",
  },
  {
    image: dubai,
    title: "7 Nights Dazzling Dubai",
    subtitle: "Skylines, Safari & Luxury",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13454",
  },
  {
    image: easterm,
    title: "10 Days Enchanting Eastern Europe",
    subtitle: "Castles, Alps & Thermal Baths",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13492",
  },
  {
    image: hongkong,
    title: "8 Days Hong Kong, Shenzhen & Macau",
    subtitle: "Disney, Skylines & Casinos",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13494",
  },
  {
    image: vietham,
    title: "9 Days Vibrant Vietnam",
    subtitle: "Heritage, Bays & City Buzz",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13495",
  },
  {
    image: bali,
    title: "8 Days Beautiful Bali",
    subtitle: "Temples, Beaches & Nightlife",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13496",
  },
  {
    image: southaffrika,
    title: "12 Days Spectacular South Africa",
    subtitle: "Safari, Cape Town & Culture",
    url: "https://itinerary.digital/di/e-z-holidays/diwali-2025/13497",
  },
  {
    image: srilanka,
    title: "10 Days Enchanting Sri Lanka",
    subtitle: "Wildlife, Tea Hills & Beaches",
    url: "https://itinerary.digital/di/e-z-holidays/diwali-2025/13499",
  },
  {
    image: australia,
    title: "12 Days Amazing Australia",
    subtitle: "Reef, Coastlines & Sydney Opera",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13491",
  },
  {
    image: europe,
    title: "14 Days Exquisite Europe",
    subtitle: "Paris, Alps & Roman Wonders",
    url: "https://itinerary.digital/di/e-z-holidays/diwali-2025/13319",
  },
  {
    image: georgia,
    title: "8 Nights Gorgeous Georgia",
    subtitle: "Mountains, Culture & Seaside",
    url: "https://itinerary.digital/di/e-z-holidays/diwali-2025/13392",
  },
];

function HighlightSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="homeSlider" style={{ position: "relative" }}>
      {/* Prev Button */}
      <button
        className="carousel-control-prev"
        onClick={goToPrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          zIndex: 1,
          color: "#fff",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      <div className="carousel-container position-relative overflow-hidden">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <Slide key={index} slide={slide} isActive={index === activeIndex} />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          zIndex: 1,
          color: "#fff",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </section>
  );
}

export default HighlightSection;
