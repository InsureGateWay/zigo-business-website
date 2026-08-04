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
  Zap,
  Package,
  BarChart3,
  Factory,
  Droplet,
  Building2,
  Landmark,
  Wifi,
  Grid
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

  // Service Categories
  const serviceCategories = [
    {
      title: "Consulting",
      icon: <Users className="w-5 h-5" />,
      description: "Strategic IT consulting for business transformation",
      items: [
        "Digital Strategy",
        "IT Governance",
        "Business Process Optimization",
        "Change Management"
      ]
    },
    {
      title: "Data Solutions",
      icon: <Database className="w-5 h-5" />,
      description: "Enterprise data management and analytics",
      items: [
        "Data Warehousing",
        "Data Integration",
        "Master Data Management",
        "Business Intelligence"
      ]
    },
    {
      title: "AI & Analytics",
      icon: <Cpu className="w-5 h-5" />,
      description: "Artificial intelligence and machine learning solutions",
      items: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Automated Decisioning"
      ]
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="w-5 h-5" />,
      description: "Cloud infrastructure and migration services",
      items: [
        "Cloud Migration",
        "Hybrid Cloud",
        "Cloud Security",
        "DevOps & Automation"
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-5 h-5" />,
      description: "Comprehensive security solutions for your business",
      items: [
        "Network Security",
        "Data Protection",
        "Threat Detection",
        "Compliance & Governance"
      ]
    },
    {
      title: "Digital Transformation",
      icon: <Zap className="w-5 h-5" />,
      description: "End-to-end digital transformation services",
      items: [
        "Process Automation",
        "Digital Workflows",
        "Legacy Modernization",
        "Innovation Strategy"
      ]
    }
  ];

  // Product Categories - Normal Dropdown Items (5 items)
  const productItems = [
    "Data Platforms",
    "AI Solutions",
    "Cloud Products",
    "Security Suite",
    "Analytics Tools"
  ];

  const serviceImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop&q=80"
  ];

  const renderMegaDropdown = (title, categories, images, imageLabels) => (
    <div
      className="
        fixed
        left-1/2
        -translate-x-1/2
        top-[80px]
        w-[96vw]
        max-w-[1800px]
        bg-white
        shadow-2xl
        rounded-2xl
        overflow-hidden
        border
        border-gray-100/50
        z-50
        hidden lg:block
      "
    >
      <div className="grid grid-cols-[1fr_360px]">
        {/* Left Content Area */}
        <div className="p-8">
          <div className="grid grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#ECD5AB]/20 text-[#7D582E] group-hover:bg-[#ECD5AB]/40 transition-colors flex-shrink-0">
                    {category.icon}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {category.title}
                    </h4>

                    <p className="text-xs text-gray-400 leading-snug mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 ml-12">
                  {category.items.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block text-xs text-gray-500 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 px-2 py-1 rounded transition-all"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Featured Image Area */}
        <div className="w-full bg-gradient-to-br from-[#7D582E]/5 to-[#ECD5AB]/20 p-8">
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-gray-600 tracking-widest uppercase">
              Featured {title}
            </h4>

            <div className="space-y-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group/image relative overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-16 object-cover rounded-xl transition-transform duration-500 group-hover/image:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                    <span className="text-white text-sm font-medium">
                      {imageLabels[index]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="flex items-center justify-center gap-2 text-sm text-[#7D582E] font-medium hover:bg-[#ECD5AB]/20 p-2 rounded-lg transition-all"
            >
              View All {title}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 px-8 py-4 bg-gray-50/50 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-xs text-gray-400">Need help?</span>

          <a href="#" className="text-xs text-[#7D582E] hover:underline">
            Contact Sales
          </a>

          <span className="text-xs text-gray-300">|</span>

          <a href="#" className="text-xs text-[#7D582E] hover:underline">
            View Case Studies
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

          <span className="text-xs text-gray-500">
            24/7 Support Available
          </span>
        </div>
      </div>
    </div>
  );

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
              alt="ZigoBiz Logo"
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

            {/* Services Dropdown - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('services')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-sm text-gray-600 hover:text-[#7D582E] transition-colors font-medium flex items-center gap-1 py-2">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {dropdownOpen === 'services' &&
                renderMegaDropdown(
                  'Services',
                  serviceCategories,
                  serviceImages,
                  [
                    'Data Analytics',
                    'Cloud Infrastructure',
                    'AI Strategy',
                    'Digital Transformation'
                  ]
                )}
            </div>

            {/* Products Dropdown - Normal Dropdown */}
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
                    <a
                      key={index}
                      href="#"
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 transition-colors"
                    >
                      {item}
                    </a>
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

            <Link to="/contact">
              <button
                className="text-white px-6 xl:px-8 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: '#7D582E' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6a4a26';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#7D582E';
                }}
              >
                Get Started
              </button>
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

        {/* Mobile Menu - Fully Responsive */}
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

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-services')}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-600 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 rounded-lg transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen === 'mobile-services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  dropdownOpen === 'mobile-services' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 space-y-3 mt-2 pb-2">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded bg-[#ECD5AB]/20 text-[#7D582E]">
                          {category.icon}
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                          {category.title}
                        </span>
                      </div>
                      <div className="pl-8 space-y-1">
                        {category.items.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block py-1.5 text-xs text-gray-500 hover:text-[#7D582E]"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
                    <a
                      key={index}
                      href="#"
                      className="block py-2.5 px-4 text-sm text-gray-500 hover:text-[#7D582E] hover:bg-[#ECD5AB]/10 rounded-lg transition-colors"
                    >
                      {item}
                    </a>
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

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button
                className="w-full mt-4 text-white px-8 py-3 rounded-full text-sm font-medium transition-all hover:shadow-lg"
                style={{ backgroundColor: '#7D582E' }}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;