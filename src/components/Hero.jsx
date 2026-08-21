<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { ArrowRight, Cloud, Database, Cpu, Shield, X } from 'lucide-react';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show an alert
    alert('Thank you! We will contact you shortly.');
    closeModal();
  };

=======
import React from 'react';
import { ArrowRight, BriefcaseBusiness, Cloud, Database, Cpu, Shield, ShieldCheck, TrendingUp, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
>>>>>>> 15693e152abf8dd84f1046becf6a8262dc28ff5c
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block relative bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3RDU4MkUiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2MkgyNHYtMmgxMnpNMzYgMjR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="grid grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#7D582E] leading-[1.1] mb-4">
                Unlocking the Potential
                <br />
                <span className="font-bold text-[#7D582E]">of Enterprise Data and AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-light mb-6">
                Creating Insights, Empowering Decisions
              </p>
<<<<<<< HEAD
              <button
                onClick={openModal}
                className="bg-[#7D582E] text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 mb-8"
              >
                Schedule a Free Consultation
=======
              <Link to="/contact" className="inline-flex bg-[#7D582E] text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:shadow-xl transform hover:-translate-y-0.5 items-center gap-2 mb-8">
                Book a Consultation
>>>>>>> 15693e152abf8dd84f1046becf6a8262dc28ff5c
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
                Zigo Business Solutions helps organizations use data, AI, cloud, and secure digital platforms to solve practical challenges and build for sustainable growth.
              </p>
            </div>

            {/* Right - Cloud with Data Flow */}
            <div className="flex justify-center items-center">
              <div className="relative w-[500px] h-[500px] mx-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="relative w-56 h-32">
                      <div className="absolute inset-0 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" />
                      <div className="absolute -top-8 left-6 w-28 h-28 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" style={{ animationDelay: '0.3s' }} />
                      <div className="absolute -top-6 right-6 w-24 h-24 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" style={{ animationDelay: '0.6s' }} />
                      <div className="absolute -bottom-4 left-12 w-16 h-16 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" style={{ animationDelay: '0.9s' }} />
                      <div className="absolute -bottom-4 right-12 w-20 h-20 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" style={{ animationDelay: '1.2s' }} />
                      <Cloud className="absolute inset-0 w-full h-full text-[#7D582E] p-2" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -inset-12 bg-[#ECD5AB]/20 rounded-full blur-3xl animate-pulse" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 z-20">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#7D582E]/20 flex items-center justify-center shadow-lg">
                      <Database className="w-10 h-10 text-[#7D582E]" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium whitespace-nowrap">Data Storage</div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#7D582E]/20 flex items-center justify-center shadow-lg">
                      <Cpu className="w-10 h-10 text-[#7D582E]" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium whitespace-nowrap">AI Processing</div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-400 animate-pulse" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#7D582E]/20 flex items-center justify-center shadow-lg">
                      <Shield className="w-10 h-10 text-[#7D582E]" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium whitespace-nowrap">Security</div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-400 animate-pulse" />
                  </div>
                </div>
                <svg className="absolute inset-0 w-full h-full z-5">
                  <line x1="130" y1="115" x2="220" y2="195" stroke="#7D582E" strokeWidth="2" opacity="0.3" strokeDasharray="6 6" className="animate-dash" />
                  <line x1="370" y1="115" x2="280" y2="195" stroke="#7D582E" strokeWidth="2" opacity="0.3" strokeDasharray="6 6" className="animate-dash-delayed" />
                  <line x1="250" y1="410" x2="250" y2="280" stroke="#7D582E" strokeWidth="2" opacity="0.3" strokeDasharray="6 6" className="animate-dash" />
                  <circle cx="130" cy="115" r="4" fill="#7D582E" className="animate-particle-1" />
                  <circle cx="370" cy="115" r="4" fill="#7D582E" className="animate-particle-2" />
                  <circle cx="250" cy="410" r="4" fill="#7D582E" className="animate-particle-3" />
                  <circle cx="220" cy="195" r="4" fill="#ECD5AB" className="animate-particle-4" />
                  <circle cx="280" cy="195" r="4" fill="#ECD5AB" className="animate-particle-5" />
                  <circle cx="250" cy="280" r="4" fill="#ECD5AB" className="animate-particle-6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 rounded-2xl border border-[#ECD5AB]/60 bg-[#faf7f2] p-5">
            {[
              { icon: BriefcaseBusiness, title: 'Business First', text: 'Goal-aligned solutions' },
              { icon: ShieldCheck, title: 'Secure by Design', text: 'Protection from the start' },
              { icon: TrendingUp, title: 'Scalable Foundations', text: 'Ready for sustainable growth' },
              { icon: Wrench, title: 'Practical Delivery', text: 'Clear, usable outcomes' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-3 border-r border-[#ECD5AB]/60 last:border-r-0 px-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#7D582E] shadow-sm">
                  <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="text-xs text-gray-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Cloud on Top, Content Below WITH Data Flow */}
      <div className="lg:hidden bg-white min-h-screen flex items-center">
        <div className="w-full px-4 py-6">
          {/* Cloud on Top - WITH Data Flow */}
          <div className="flex justify-center items-center mb-6">
            <div className="relative w-full max-w-sm">
              {/* Cloud with Data Flow SVG */}
              <div className="relative w-64 h-48 mx-auto">
                {/* Cloud */}
                <div className="absolute inset-0">
                  <div className="relative w-56 h-32 mx-auto mt-4">
                    <div className="absolute inset-0 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" />
                    <div className="absolute -top-6 left-5 w-24 h-24 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" style={{ animationDelay: '0.3s' }} />
                    <div className="absolute -top-4 right-5 w-20 h-20 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" style={{ animationDelay: '0.6s' }} />
                    <div className="absolute -bottom-3 left-10 w-14 h-14 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" style={{ animationDelay: '0.9s' }} />
                    <div className="absolute -bottom-3 right-10 w-16 h-16 bg-[#ECD5AB] rounded-full opacity-40 animate-cloud-pulse" style={{ animationDelay: '1.2s' }} />
                    <Cloud className="absolute inset-0 w-full h-full text-[#7D582E] p-2" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Data Flow Lines - Mobile Version */}
                <svg className="absolute inset-0 w-full h-full z-5">
                  <line x1="120" y1="80" x2="60" y2="140" stroke="#7D582E" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" className="animate-dash" />
                  <line x1="180" y1="80" x2="240" y2="140" stroke="#7D582E" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" className="animate-dash-delayed" />
                  <line x1="150" y1="100" x2="150" y2="160" stroke="#7D582E" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" className="animate-dash" />
                  <circle cx="120" cy="80" r="3" fill="#7D582E" className="animate-particle-mobile-1" />
                  <circle cx="180" cy="80" r="3" fill="#7D582E" className="animate-particle-mobile-2" />
                  <circle cx="150" cy="100" r="3" fill="#7D582E" className="animate-particle-mobile-3" />
                  <circle cx="60" cy="140" r="3" fill="#ECD5AB" className="animate-particle-mobile-4" />
                  <circle cx="240" cy="140" r="3" fill="#ECD5AB" className="animate-particle-mobile-5" />
                  <circle cx="150" cy="160" r="3" fill="#ECD5AB" className="animate-particle-mobile-6" />
                </svg>

                {/* Systems */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#7D582E]/20 flex items-center justify-center shadow-lg z-10">
                      <Database className="w-6 h-6 text-[#7D582E]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-gray-400 mt-0.5 font-medium">Data</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#7D582E]/20 flex items-center justify-center shadow-lg z-10">
                      <Cpu className="w-6 h-6 text-[#7D582E]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-gray-400 mt-0.5 font-medium">AI</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#7D582E]/20 flex items-center justify-center shadow-lg z-10">
                      <Shield className="w-6 h-6 text-[#7D582E]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] text-gray-400 mt-0.5 font-medium">Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Below */}
          <div className="text-center mt-16">
            <h1 className="text-2xl sm:text-3xl font-light text-[#7D582E] leading-[1.1] mb-2">
              Unlocking the Potential
              <br />
              <span className="font-bold text-[#7D582E]">of Enterprise Data and AI</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-light mb-3">
              Creating Insights, Empowering Decisions
            </p>
<<<<<<< HEAD
            <button
              onClick={openModal}
              className="bg-[#7D582E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-xl flex items-center gap-2 mx-auto mb-3"
            >
              Schedule a Free Consultation
=======
            <Link to="/contact" className="bg-[#7D582E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-xl flex items-center gap-2 mx-auto mb-3 w-fit">
              Book a Consultation
>>>>>>> 15693e152abf8dd84f1046becf6a8262dc28ff5c
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-4">
              We help organizations use data, AI, cloud, and secure digital platforms to solve practical business challenges.
            </p>
            <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 mb-1.5 rounded-lg bg-[#ECD5AB]/50 flex items-center justify-center">
                  <BriefcaseBusiness className="w-4 h-4 text-[#7D582E]" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="text-base font-semibold text-[#7D582E]">Business</div>
                <div className="text-[10px] text-gray-400 tracking-wider uppercase">First</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 mb-1.5 rounded-lg bg-[#ECD5AB]/50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#7D582E]" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="text-base font-semibold text-[#7D582E]">Secure</div>
                <div className="text-[10px] text-gray-400 tracking-wider uppercase">By Design</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 mb-1.5 rounded-lg bg-[#ECD5AB]/50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#7D582E]" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="text-base font-semibold text-[#7D582E]">Scalable</div>
                <div className="text-[10px] text-gray-400 tracking-wider uppercase">Foundations</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 mb-1.5 rounded-lg bg-[#ECD5AB]/50 flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-[#7D582E]" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="text-base font-semibold text-[#7D582E]">Practical</div>
                <div className="text-[10px] text-gray-400 tracking-wider uppercase">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#7D582E] transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-light text-[#7D582E] mb-2">
                Schedule a <span className="font-bold">Free Consultation</span>
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill in your details and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7D582E] text-white py-3 rounded-lg font-semibold hover:bg-[#6a4a26] transition-all transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2"
                >
                  Send Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
=======
>>>>>>> 15693e152abf8dd84f1046becf6a8262dc28ff5c
    </>
  );
}

export default Hero;
