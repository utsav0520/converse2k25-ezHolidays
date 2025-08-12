import React, { useEffect, useState } from "react";
import Slide from "./Slide.jsx";

const slides = [
  {
    image:
      "https://www.ezholidays.in/upload/slider/travel-the-world-with-ease.jpg",
    title: "Travel the world with ease",
    subtitle: "A new perspective on the world",
    url: "https://www.ezholidays.in/tours/",
  },
  {
    image: "https://www.ezholidays.in/upload/slider/sizzling-spain.jpg",
    title: "Sizzling Spain",
    subtitle: "Come & Discover it.",
    url: "https://www.ezholidays.in/tours/international-tours/sizzling-spain/",
  },
  {
    image:
      "https://www.ezholidays.in/upload/slider/singapore-malaysia-amp-cruise.jpg",
    title: "Singapore Malaysia & Cruise",
    subtitle: "Where passion and possibilities meet.",
    url: "https://www.ezholidays.in/tours/international-tours/singapore-malaysia-amp-cruise/",
  },
  {
    image: "https://www.ezholidays.in/upload/slider/cherry-blossom-japan.jpg",
    title: "Cherry Blossom Japan",
    subtitle: "A time of rebirth, with verdant greenery and perfect weather",
    url: "https://www.ezholidays.in/tours/international-tours/cherry-blossom-japan/",
  },
  {
    image: "https://www.ezholidays.in/upload/slider/vietnam.jpg",
    title: "Vietnam",
    subtitle: "One thing is for sure, Vietnam is a country of diversity.",
    url: "https://www.ezholidays.in/tours/international-tours/vietnam/",
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
