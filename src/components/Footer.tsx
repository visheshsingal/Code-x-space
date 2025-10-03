import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white w-full min-h-[400px] overflow-hidden px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

        {/* Left Side - Brand */}
        <div className="flex flex-col justify-between h-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            CODEXSPACE
          </h1>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
            <span>FACEBOOK</span>
            <span>•</span>
            <span>LINKEDIN</span>
            <span>•</span>
            <span>TWITTER</span>
          </div>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col justify-between h-full text-sm mt-8 md:mt-0">
          {/* About */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xs text-gray-500 tracking-wide mb-2">ABOUT</h2>
            <p className="text-gray-300 leading-relaxed">
              CODEXSPACE: Outsmarting attackers, securing tomorrow. At CODEXSPACE, 
              we don’t just defend — we outsmart.
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xs text-gray-500 tracking-wide mb-2">NAVIGATION</h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-gray-400">
              {["Home", "Services", "About", "Contact"].map((item, idx) => (
                <React.Fragment key={idx}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                  {idx < 3 && <span className="text-gray-500">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-xs text-gray-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <span>DESIGN BY CODER</span>
            <span>04</span>
          </div>
        </div>
      </div>

      {/* Subtle background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
