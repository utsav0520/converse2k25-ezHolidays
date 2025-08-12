import React from "react";
import { ezHolidayLogo, converseLogo } from "../assets/index";

function AppBar() {
  return (
    <div className="bg-transperent border-b border-primary p-2">
      <div className="flex items-center justify-between">
        {/* Left Logo */}
        <img
          src={converseLogo}
          alt="Converse Logo"
          className="h-16 md:h-14 lg:h-20 w-auto transition-all duration-300"
        />

        {/* Center Title on medium+ screens */}
        <div className="hidden md:block text-primary text-center px-2 flex-1">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
            Our Official Trip Partner
          </h2>
        </div>

        {/* Right Logo */}
        <img
          src={ezHolidayLogo}
          alt="EZ Holidays Logo"
          className="h-16 md:h-14 lg:h-20 w-auto transition-all duration-300"
        />
      </div>

      {/* Title for small screens (mobile only) */}
      <div className="block md:hidden text-primary text-center mt-2">
        <h2 className="text-lg font-semibold tracking-wide">
          Our Official Trip Partner
        </h2>
      </div>
    </div>
  );
}

export default AppBar;
