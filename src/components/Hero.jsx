import React from 'react';
import { ArrowRight, Cloud, Database, Cpu, Shield } from 'lucide-react';

function Hero() {
  // Logo data
  const logos = [
    { name: 'Shell', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Shell_logo.svg/1200px-Shell_logo.svg.png' },
    { name: 'Ericsson', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ericsson_logo.svg/1200px-Ericsson_logo.svg.png' },
    { name: 'MTN', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/MTN_Group_logo.svg/1200px-MTN_Group_logo.svg.png' },
    { name: 'Agip', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Eni_logo.svg/1200px-Eni_logo.svg.png' },
    { name: 'Nestle', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Nestl%C3%A9.svg/1200px-Nestl%C3%A9.svg.png' },
    { name: 'Unilever', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Unilever_logo.svg/1200px-Unilever_logo.svg.png' },
    { name: 'Coca-Cola', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png' },
    { name: 'Pepsi', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo.svg/1200px-Pepsi_logo.svg.png' },
    { name: 'Samsung', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png' },
    { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png' },
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png' },
    { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' },
  ];

  // Duplicate logos for seamless scrolling
  const scrollingLogos = [...logos, ...logos, ...logos];

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
              <button className="bg-[#7D582E] text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 mb-8">
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-gray-400 text-sm max-w-xl leading-relaxed mb-12">
                We are Africa's Premier IT Firm. Our commitment to excellence drives us to provide innovative and reliable solutions that empower businesses to thrive in a data-driven world.
              </p>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-light text-[#7D582E]">18</div>
                  <div className="text-xs text-gray-400 mt-1 tracking-wider uppercase">Years</div>
                  <div className="text-xs text-gray-300">Proven Track Record</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light text-[#7D582E]">9</div>
                  <div className="text-xs text-gray-400 mt-1 tracking-wider uppercase">Operating Countries</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light text-[#7D582E]">50+</div>
                  <div className="text-xs text-gray-400 mt-1 tracking-wider uppercase">Corporate Customers</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light text-[#7D582E]">400+</div>
                  <div className="text-xs text-gray-400 mt-1 tracking-wider uppercase">Professionals</div>
                </div>
              </div>
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
            <button className="bg-[#7D582E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-xl flex items-center gap-2 mx-auto mb-3">
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-4">
              We are Africa's Premier IT Firm. Our commitment to excellence drives us to provide innovative and reliable solutions.
            </p>
            <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
              <div>
                <div className="text-xl font-light text-[#7D582E]">18</div>
                <div className="text-[10px] text-gray-400 tracking-wider uppercase">Years</div>
              </div>
              <div>
                <div className="text-xl font-light text-[#7D582E]">9</div>
                <div className="text-[10px] text-gray-400 tracking-wider uppercase">Countries</div>
              </div>
              <div>
                <div className="text-xl font-light text-[#7D582E]">50+</div>
                <div className="text-[10px] text-gray-400 tracking-wider uppercase">Clients</div>
              </div>
              <div>
                <div className="text-xl font-light text-[#7D582E]">400+</div>
                <div className="text-[10px] text-gray-400 tracking-wider uppercase">Pros</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Strip - Animated Scroll Right to Left */}
      <div className="w-full bg-gray-50 border-y border-gray-100 overflow-hidden py-4">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right-to-left whitespace-nowrap">
            {scrollingLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                style={{ minWidth: '120px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = `<span class="text-sm font-semibold text-gray-400">${logo.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;