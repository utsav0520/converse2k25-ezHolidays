import React, { useState, useEffect } from "react";

function Slide({ slide, isActive }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverText, setHoverText] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isActive) return null;

  return (
    <div
      className="carousel-item"
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gridTemplateRows: isMobile ? "auto auto" : "auto",
        alignItems: "center",
        height: "100%",
        minHeight: "500px",
        color: "#fff",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* Image First on Mobile */}
      {isMobile && (
        <div
          style={{
            height: "300px",
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Text Section */}
      <div
        style={{
          padding: isMobile ? "2rem" : "6rem",
          background: "linear-gradient(135deg, #B8A889, #AA7D28)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{slide.title}</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>{slide.subtitle}</p>
        <a
          href={slide.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#443E32",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            setHoverText(true);
            e.target.style.backgroundColor = "#D38C02";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            setHoverText(false);
            e.target.style.backgroundColor = "#443E32";
            e.target.style.transform = "scale(1)";
          }}
        >
          View Details {hoverText && <span style={{ marginLeft: "10px" }}>→ Go explore!</span>}
        </a>
      </div>

      {/* Image Second on Desktop */}
      {!isMobile && (
        <div
          style={{
            height: "100%",
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  );
}

export default Slide;
