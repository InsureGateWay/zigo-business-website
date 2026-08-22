import React, { useEffect, useState } from 'react';
import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const solutionItems = [
  { name: 'Data Platforms', to: '/products/data-platforms' },
  { name: 'AI Solutions', to: '/products/ai-solutions' },
  { name: 'Cloud Solutions', to: '/products/cloud-products' },
  { name: 'Security Solutions', to: '/products/security-suite' },
  { name: 'Analytics Solutions', to: '/products/analytics-tools' },
];

const productItems = [
  {
    name: 'CheckIt24',
    description: 'On-ground verification',
    href: 'https://checkit24-6e5bf.web.app',
  },
  {
    name: 'Zigo AI',
    description: 'Document intelligence',
    href: 'https://zigoai.app/',
  },
  {
    name: 'Zigo Trust',
    description: 'Safer digital transactions',
    href: 'https://trust.zigoai.app/',
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

  const toggleDropdown = (name) => {
    setDropdownOpen((current) => (current === name ? null : name));
  };

  const linkClass = (path) =>
    `text-sm font-medium transition-colors hover:text-[#7D582E] ${
      location.pathname === path ? 'text-[#7D582E]' : 'text-gray-600'
    }`;

  const dropdownButtonClass = (active) =>
    `flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-[#7D582E] ${
      active ? 'text-[#7D582E]' : 'text-gray-600'
    }`;

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-gray-100 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="flex items-center gap-2" aria-label="Zigo Business Solutions home">
            <img
              src="/logo512.png"
              alt=""
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
            <div className="flex items-center">
              <span className="text-xl font-light tracking-wide text-[#7D582E] sm:text-2xl">
                ZIGO<span className="font-bold text-[#ECD5AB]">BIZ</span>
              </span>
              <span className="ml-1 text-[10px] font-light text-gray-400 sm:text-xs">LTD</span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/services" className={linkClass('/services')}>Services</Link>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('solutions')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('solutions')}
                className={dropdownButtonClass(location.pathname.startsWith('/products/'))}
                aria-expanded={dropdownOpen === 'solutions'}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen === 'solutions' && (
                <div className="absolute left-0 top-full w-60 rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                  {solutionItems.map(({ name, to }) => (
                    <Link
                      key={to}
                      to={to}
                      className={`block px-5 py-2.5 text-sm transition-colors hover:bg-[#ECD5AB]/10 hover:text-[#7D582E] ${
                        location.pathname === to ? 'bg-[#ECD5AB]/10 text-[#7D582E]' : 'text-gray-600'
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('products')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('products')}
                className={dropdownButtonClass(false)}
                aria-expanded={dropdownOpen === 'products'}
                aria-haspopup="true"
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen === 'products' && (
                <div className="absolute left-0 top-full w-72 rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                  {productItems.map(({ name, description, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 px-5 py-3 transition-colors hover:bg-[#ECD5AB]/10"
                      aria-label={`${name} (opens in a new tab)`}
                    >
                      <span>
                        <span className="block text-sm font-semibold text-gray-800">{name}</span>
                        <span className="mt-0.5 block text-xs text-gray-500">{description}</span>
                      </span>
                      <ExternalLink className="h-4 w-4 shrink-0 text-[#7D582E]" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className={linkClass('/about')}>About</Link>
            <Link
              to="/contact"
              className="rounded-full bg-[#7D582E] px-6 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#6a4a26] hover:shadow-lg xl:px-7"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="max-h-[70vh] overflow-y-auto border-t border-gray-100 py-4">
            <Link to="/" className="block rounded-lg px-4 py-3 font-medium text-gray-600 hover:bg-[#ECD5AB]/10 hover:text-[#7D582E]">Home</Link>
            <Link to="/services" className="block rounded-lg px-4 py-3 font-medium text-gray-600 hover:bg-[#ECD5AB]/10 hover:text-[#7D582E]">Services</Link>

            <div>
              <button
                type="button"
                onClick={() => toggleDropdown('mobile-solutions')}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-600 hover:bg-[#ECD5AB]/10 hover:text-[#7D582E]"
                aria-expanded={dropdownOpen === 'mobile-solutions'}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen === 'mobile-solutions' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${dropdownOpen === 'mobile-solutions' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-1 pb-2 pl-4">
                  {solutionItems.map(({ name, to }) => (
                    <Link key={to} to={to} className="block rounded-lg px-4 py-2.5 text-sm text-gray-500 hover:bg-[#ECD5AB]/10 hover:text-[#7D582E]">
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => toggleDropdown('mobile-products')}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-600 hover:bg-[#ECD5AB]/10 hover:text-[#7D582E]"
                aria-expanded={dropdownOpen === 'mobile-products'}
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen === 'mobile-products' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${dropdownOpen === 'mobile-products' ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-1 pb-2 pl-4">
                  {productItems.map(({ name, description, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg px-4 py-2.5 hover:bg-[#ECD5AB]/10"
                      aria-label={`${name} (opens in a new tab)`}
                    >
                      <span>
                        <span className="block text-sm font-medium text-gray-700">{name}</span>
                        <span className="block text-xs text-gray-400">{description}</span>
                      </span>
                      <ExternalLink className="h-4 w-4 text-[#7D582E]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className="block rounded-lg px-4 py-3 font-medium text-gray-600 hover:bg-[#ECD5AB]/10 hover:text-[#7D582E]">About</Link>
            <Link
              to="/contact"
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
