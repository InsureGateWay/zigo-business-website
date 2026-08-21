import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cpu,
  Cloud,
  Database,
  Shield,
  Users,
  Zap
} from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  // Product Categories with links
  const productItems = [
    { name: "Data Platforms", link: "/products/data-platforms" },
    { name: "AI Solutions", link: "/products/ai-solutions" },
    { name: "Cloud Products", link: "/products/cloud-products" },
    { name: "Security Suite", link: "/products/security-suite" },
    { name: "Analytics Tools", link: "/products/analytics-tools" }
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'text-[#7D582E]' : 'text-gray-600';
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg border-b border-gray-100'
          : 'bg-white shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo512.png"
              alt="Zigo Business Solutions Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <div className="flex items-center">
              <span
                className="text-xl sm:text-2xl font-light tracking-wide"
                style={{ color: '#7D582E' }}
              >
                ZIGO
                <span className="font-bold" style={{ color: '#ECD5AB' }}>
                  BIZ
                </span>
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 ml-1 font-light">
                LTD
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className={`text-sm hover:text-[#7D582E] transition-colors font-medium ${isActive('/')}`}>
              Home
            </Link>

            <Link to="/services" className={`text-sm hover:text-[#7D582E] transition-colors font-medium ${isActive('/services')}`}>
              Services
            </Link>

            {/* Products Dropdown with Links */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('products')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-sm text-gray-600 hover:text-[#7D582E] transition-colors font-medium flex items-center gap-1 py-2">
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen === 'products' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {dropdownOpen === 'products' && (
                <div className="absolute top-8 left-0 bg-white shadow-xl rounded-lg w-56 py-2 border border-gray-100">
                  {productItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className={`block w-full text-left px-5 py-2.5 text-sm hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 transition-colors ${
                        location.pathname === item.link ? 'text-[#7D582E] bg-[#ECD5AB]/10' : 'text-gray-600'
                      }`}
                      onClick={() => setDropdownOpen(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className={`text-sm hover:text-[#7D582E] transition-colors font-medium ${isActive('/about')}`}>
              About
            </Link>

            <Link to="/contact" className={`text-sm hover:text-[#7D582E] transition-colors font-medium ${isActive('/contact')}`}>
              Contact
            </Link>

            <Link
              to="/contact"
              className="rounded-full bg-[#7D582E] px-6 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-[#6a4a26] hover:shadow-lg xl:px-8"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-100 overflow-y-auto max-h-[70vh]">
            <Link
              to="/"
              className="block py-3 px-4 text-gray-600 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/services"
              className="block py-3 px-4 text-gray-600 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            {/* Mobile Products */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-products')}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-600 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 rounded-lg transition-colors font-medium"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen === 'mobile-products' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  dropdownOpen === 'mobile-products' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 space-y-1 mt-2 pb-2">
                  {productItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className={`block w-full text-left py-2.5 px-4 text-sm rounded-lg transition-colors ${
                        location.pathname === item.link
                          ? 'text-[#7D582E] bg-[#ECD5AB]/10'
                          : 'text-gray-500 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10'
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        setDropdownOpen(null);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="block py-3 px-4 text-gray-600 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block py-3 px-4 text-gray-600 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full rounded-full bg-[#7D582E] px-8 py-3 text-center text-sm font-medium text-white transition-all hover:bg-[#6a4a26] hover:shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;