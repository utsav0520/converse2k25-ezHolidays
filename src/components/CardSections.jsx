import React from "react";
import { bali, dubai, georgia, newzeakand, uk, thiland } from "../assets/index";
// import AlarmOnIcon from "@mui/icons-material/AlarmOn"; // remove if unused

const cardData = [
  {
    title: "8 Nights Gorgeous Georgia",
    Desc: "From the cobbled streets of 🏛️ Tbilisi to the fresh mountain air of 🏔️ Gudauri  , from the hidden gems of  🌄 Kutaisi to the relaxing Black Seaside charm of  🌊 Batumi , this EZ Holidays Georgian Getaway has it all !  Book your 8-night Gorgeous Georgia getaway now with EZ Holidays",
    end: "An unforgettable journey awaits!",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13465",
    image: georgia,
  },
  {
    title: "🌟11 Days UK, Scotland & Ireland🇬🇧 🏴 🇮🇪",
    Desc: "From the royal charm of London Bridge 🌉, to the historic streets of Edinburgh, from the scenic Highlands of Inverness, the cultural pulse of Glasgow, the maritime legacy 🚢of Belfast to the vibrant energy of Dublin — this 11 Days EZ Holidays Great Britain trip has it all!",
    end: "Celebrate Winters in grand style as you explore the magic of the British Isles!",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13465",
    image: uk,
  },
  {
    title: "🌟8 Days Beautiful Bali 🇮🇩 ",
    Desc : "From diving into Ubud’s artistic soul 🌻and tranquil rice terraces 🌱to soaking up the serenity of Nusa Dua’s resort beaches 🏖️and coastal views to feeling the vibrant energy of Kuta’s sun-soaked beaches, nightlife 🌃and shopping 🛍️- this 8 Days EZ Holidays Beautiful Bali Trip has it all.",
    end: "Embrace charm, culture, and beauty at every step— an unforgettable journey awaits!",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13496",
    image: bali,
  },
  {
    title: "🌟 7 Nights Dazzling Dubai 🇦🇪",
    Desc : "From the  iconic landmarks like the Burj Khalifa🏙️ and Dubai Frame to luxurious shopping 🛍️ at Dubai Mall and Gold Souk, from an exhilarating Desert Safari experience 🏜️ to relaxing at stunning beaches 🌊 and enjoying Dubai Marina vibes,from adventure 🎢 at top attractions like IMG Worlds & Dubai Parks to feeling spellbound at the sight from The View at the Palm 🌴🌴🌴-  this 8 Days EZ Holidays Dazzling Dubai trip  has it all.",
    end: "Let the magic of the Emirates leave you dazzled!",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13454",
    image: dubai,
  },
  {
    title: "🌟11 Days Naturally New Zealand 🇳🇿",
    Desc : "From Auckland’s volcanic  🌋skyline, to Rotorua’s geothermal heart♨️ ,from Queenstown’s adventurous  thrills like original bungee and jet‑boat culture to alpine views atop Bob’s Peak or the Nevis bungy drop 🧗‍♂️ , from ancient blue ice carves of Franz Josef Glacier  to the International Antarctic 🐧Centre experience in Christchurch-this 11 days EZ Holidays New Zealand odyssey has it all.",
    end: "A trip that merges volcanic flair, geothermal wonder, icy drama, adrenaline‑filled peaks and garden‑city charm into one seamlessly unforgettable journey !",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13397",
    image: newzeakand,
  },
  {
    title: "🌟10 Days Thrilling Thailand 🇹🇭",
    Desc : "From Phuket’s golden Patong Beach and majestic 45 m Big Buddha statue 🏖️🕌 — through Krabi’s stunning cliffs,finally concluding in Bangkok’s kaleidoscope of gilded Grand Palace, the peaceful Reclining Buddha at Wat Pho, canal cruises, tuk‑tuk street‑food tours in Chinatown, and rooftop bars overlooking a neon skyline 🌆🥢✨-this 10‑day EZ Holidays Thailand Trip has it all.",
    end: "Travel to a destination where every sunrise brings a new excitement and every sunset seals a brilliant memory!",
    url: "https://itinerary.digital/qi/e-z-holidays/diwali-2025/13323",
    image: thiland,
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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div key={card.title} className="m-2">
            <div
              className="card h-160 shadow-lg border-0 p-4"
              style={{
                backgroundColor: "rgba(250, 250, 250 , 0.4)",
                borderRadius: "1.5rem",
                backdropFilter: "blur(6px)",
                color: "white",
              }}
            >
              {/* Image */}
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
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-muted">No Image Available</span>
                )}
              </div>

              {/* Card Body */}
              <div className="card-body d-flex flex-column text-white mt-3">
                <h5 className="card-title fw-bold mb-2 text-lg">{card.title}</h5>

                <p
                  className="mb-2"
                  style={{ fontSize: "0.95rem", lineHeight: "1.5" }}
                >
                  {card.Desc}
                </p>

                {/* End Note */}
                <p
                  className="text-sm font-italic text-light mb-3"
                  style={{ fontStyle: "italic", fontSize: "0.85rem" }}
                >
                  {card.end}
                </p>

                {/* Button */}
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm mt-auto text-white text-center"
                  style={{
                    backgroundColor: "#443E32",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    fontWeight: "500",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#D38C02";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#443E32";
                  }}
                  aria-label={`More about ${card.title}`}
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
