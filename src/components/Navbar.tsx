import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // ✅ Only Home & Contact remain in the normal nav
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-3 z-50 flex justify-center">
  <div className="bg-gray-200 border border-gray-300 shadow-sm rounded-full w-[60%] px-6 py-1 flex items-center justify-between" style={{ minHeight: 48 }}>
        {/* Logo */}
        <Link to="/" className="flex items-center -ml-2 md:-ml-4">
          <div className="h-12 overflow-hidden flex items-center">
            <img
              src="https://i.ibb.co/yBX30fTS/IMG-0202-removebg-preview.png"
              alt="CodexSpace logo"
              className="w-auto object-contain"
              style={{ width: 420, maxWidth: '60%' }}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-black"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* ✅ Services Button */}
          <Link
            to="/services"
            className="text-sm font-medium px-4 py-1.5 rounded-full bg-black text-white hover:bg-gray-800 transition"
          >
            Services
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
  <div className="absolute top-16 w-[90%] mx-auto bg-gray-200 border border-gray-300 rounded-2xl shadow-md p-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-black"
            >
              {link.name}
            </Link>
          ))}
          {/* ✅ Services Button (Mobile) */}
          <Link
            to="/services"
            className="block text-center text-sm font-medium mt-4 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800"
          >
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
