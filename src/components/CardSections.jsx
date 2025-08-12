import React from "react";
import { ezHolidayLogo, converseLogo } from "../assets/index";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

const cardData = [
  {
    title: "Australia - New Zealand Delights",
    duration: "13 Nights 14 Days",
    url: "https://www.ezholidays.in/tours/international-tours/australia-new-zealand-delights/",
    image: ezHolidayLogo,
  },
  {
    title: "Blissful Bhutan",
    duration: "06 Nights 07 Days",
    url: "https://www.ezholidays.in/tours/international-tours/blissful-bhutan/",
    image: ezHolidayLogo,
  },
  {
    title: "Admirable America",
    duration: "23 Nights - 24 Days",
    url: "https://www.ezholidays.in/tours/international-tours/admirable-america/",
    image: converseLogo,
  },
  {
    title: "Singapore Malaysia & Cruise",
    duration: "08 Nights - 09 Days",
    url: "https://www.ezholidays.in/tours/international-tours/singapore-malaysia-amp-cruise/",
    image: ezHolidayLogo,
  },
  {
    title: "Eastern Europe",
    duration: "08 Nights - 09 Days",
    url: "https://www.ezholidays.in/tours/international-tours/eastern-europe/",
    image: ezHolidayLogo,
  },
];

function CardSections() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark text-3xl">
          🌴 Summer Specials <span className="text-2xl">2025</span>
        </h2>
        <p className="text-muted">
          Explore our top travel packages this summer
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cardData.map((card, idx) => (
          <div key={idx} className="m-4">
            <div
              className="card h-100 shadow-lg border-0 p-4"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "1.5rem",
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                style={{
                  height: "250px",
                  overflow: "hidden",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                  backgroundColor: card.image ? "transparent" : "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-100"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span className="text-muted">No Image Available</span>
                )}
              </div>

              {/* Card Body */}
              <div className="card-body d-flex flex-column text-white">
                <h6
                  className="card-title fw-semibold mb-2"
                  style={{ fontSize: "1rem" }}
                >
                  {card.title}
                </h6>

                <div
                  className="d-flex align-items-center text-light mb-3"
                  style={{ fontSize: "0.85rem" }}
                >
                  <AlarmOnIcon fontSize="small" className="me-2" />
                  {card.duration}
                </div>

                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm mt-auto text-white text-center"
                  style={{
                    backgroundColor: "#4A90E2",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    fontWeight: "500",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#357ABD";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#4A90E2";
                  }}
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSections;
