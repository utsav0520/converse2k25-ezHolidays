import React from "react";
import { ezHolidayLogo } from "../assets/index";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

function AppFottor() {
  return (
    <footer className="bg-transperent border-t border-primary text-primary px-6 py-10">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Company Info */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <div className="flex items-center gap-3">
            <img
              src={ezHolidayLogo}
              alt="EZHolidays Logo"
              className="h-24 w-auto"
            />
          </div>
          <div className="h-1 w-full bg-divider rounded-3xl"></div>
          <p className="text-sm max-w-xs">
            EZHolidays is your trusted travel partner, offering curated holiday
            packages, personalized experiences, and seamless booking — all at
            competitive prices. Discover more. Pay less. Travel smart.
          </p>
        </div>

        <div className="w-1 bg-divider rounded-3xl"></div>
        <div className="h-1 w-full bg-divider rounded-3xl md:hidden block"></div>

        {/* Address */}
        <div className="flex-1 text-center text-sm leading-relaxed">
          <h3 className="text-lg font-semibold mb-2">Our Office</h3>
          <p>
            319, Rajhans Ornate,
            <br />
            Parle Point, Surat-395007,
            <br />
            Gujarat, INDIA.
          </p>
        </div>
        <div className="w-1 bg-divider rounded-3xl"></div>
        <div className="h-1 w-full bg-divider rounded-3xl md:hidden block"></div>

        {/* Useful Links */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-2 text-sm">
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>

          {/* Website */}
          <a
            href="https://www.ezholidays.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 flex items-center gap-2"
          >
            <LanguageIcon fontSize="small" /> www.ezholidays.in
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/EZHolidays"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 flex items-center gap-2"
          >
            <InstagramIcon fontSize="small" /> Instagram
          </a>

          {/* Google Maps */}
          <a
            href="https://www.google.com/maps/place/319+Rajhans+Ornate,+Parle+Point,+Surat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 flex items-center gap-2"
          >
            <LocationOnIcon fontSize="small" /> Google Maps
          </a>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <PhoneIcon fontSize="small" />
            <span>+91 95126 55868</span>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919512655868"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 flex items-center gap-2"
          >
            <WhatsAppIcon fontSize="small" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs ">
        © {new Date().getFullYear()} EZHolidays. All rights reserved.
      </div>
    </footer>
  );
}

export default AppFottor;
