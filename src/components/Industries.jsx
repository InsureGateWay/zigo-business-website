import React, { useState } from 'react';
import { 
  Factory, 
  Droplet, 
  Package, 
  Building2, 
  Landmark, 
  Wifi,
  ArrowRight,
  CheckCircle,
  Globe
} from 'lucide-react';

function Industries() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const industries = [
    {
      icon: <Factory className="w-10 h-10" strokeWidth={1.5} />,
      name: "Manufacturing",
      description: "Smart manufacturing solutions for Industry 4.0",
      benefits: [
        "Predictive Maintenance",
        "Supply Chain Optimization",
        "Quality Control AI",
        "Production Automation"
      ],
      color: "#7D582E",
      bgColor: "#ECD5AB"
    },
    {
      icon: <Droplet className="w-10 h-10" strokeWidth={1.5} />,
      name: "Oil & Gas",
      description: "Digital transformation for energy sector",
      benefits: [
        "Asset Management",
        "Safety Monitoring",
        "Exploration Analytics",
        "Pipeline Optimization"
      ],
      color: "#1a5c3a",
      bgColor: "#d4edda"
    },
    {
      icon: <Package className="w-10 h-10" strokeWidth={1.5} />,
      name: "FMCG",
      description: "End-to-end supply chain solutions",
      benefits: [
        "Demand Forecasting",
        "Inventory Optimization",
        "Route Planning",
        "Consumer Insights"
      ],
      color: "#c0392b",
      bgColor: "#f8d7da"
    },
    {
      icon: <Building2 className="w-10 h-10" strokeWidth={1.5} />,
      name: "Banks & Financial Services",
      description: "Secure and compliant fintech solutions",
      benefits: [
        "Fraud Detection",
        "Risk Analytics",
        "Customer Experience",
        "Regulatory Compliance"
      ],
      color: "#2c3e50",
      bgColor: "#d5d8dc"
    },
    {
      icon: <Landmark className="w-10 h-10" strokeWidth={1.5} />,
      name: "Public Sector",
      description: "Digital government and citizen services",
      benefits: [
        "E-Governance",
        "Data Security",
        "Service Delivery",
        "Smart Cities"
      ],
      color: "#1a5276",
      bgColor: "#d6eaf8"
    },
    {
      icon: <Wifi className="w-10 h-10" strokeWidth={1.5} />,
      name: "Telcos",
      description: "Network optimization and 5G solutions",
      benefits: [
        "Network Analytics",
        "Customer Retention",
        "5G Implementation",
        "IoT Integration"
      ],
      color: "#6c3483",
      bgColor: "#ebdef0"
    }
  ];

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full" style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}>
              Industries We Serve
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6 leading-tight">
            Solving IT Challenges Across
            <br />
            <span className="font-bold relative">
              <span className="relative" style={{ color: '#7D582E' }}>
                Diverse Industries
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: '#ECD5AB' }}></span>
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
            We deliver specialized solutions tailored to your industry's unique demands and challenges.
          </p>
        </div>
        
        {/* Industries Grid - Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const isFlipped = flippedIndex === index;
            
            return (
              <div
                key={index}
                className="relative h-[380px] cursor-pointer perspective-1000"
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front Side */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    {/* Decorative Top Bar */}
                    <div
                      className="h-2 w-full"
                      style={{ backgroundColor: industry.color }}
                    ></div>
                    
                    <div className="p-8 flex flex-col items-center justify-center h-full">
                      {/* Icon with Animation */}
                      <div
                        className="p-4 rounded-full mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6"
                        style={{ backgroundColor: industry.bgColor }}
                      >
                        <div style={{ color: industry.color }}>{industry.icon}</div>
                      </div>
                      
                      {/* Industry Name */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                        {industry.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-500 text-sm text-center mb-4">
                        {industry.description}
                      </p>
                      
                      {/* Hover/Click Indicator */}
                      <div className="flex items-center gap-2 text-xs font-medium transition-all duration-300 group-hover:gap-3">
                        <span style={{ color: industry.color }}>Click to explore</span>
                        <ArrowRight 
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                          style={{ color: industry.color }}
                        />
                      </div>
                      
                      {/* Floating Decorative Element */}
                      <div
                        className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-10"
                        style={{ backgroundColor: industry.color }}
                      ></div>
                      <div
                        className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10"
                        style={{ backgroundColor: industry.color }}
                      ></div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-lg overflow-hidden"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    {/* Decorative Top Bar */}
                    <div
                      className="h-2 w-full"
                      style={{ backgroundColor: industry.color }}
                    ></div>
                    
                    <div className="p-8 flex flex-col h-full">
                      {/* Industry Name on Back */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: industry.bgColor }}
                        >
                          <div className="w-5 h-5" style={{ color: industry.color }}>
                            {industry.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {industry.name}
                        </h3>
                      </div>
                      
                      {/* Key Benefits */}
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">
                          Key Solutions
                        </p>
                        <ul className="space-y-2.5">
                          {industry.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle 
                                className="w-4 h-4 flex-shrink-0 mt-0.5" 
                                style={{ color: industry.color }}
                                strokeWidth={2}
                              />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Click to Flip Back */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center">
                        <span className="text-xs text-gray-400">
                          Click to flip back
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-md">
            <Globe className="w-5 h-5 text-[#7D582E]" strokeWidth={1.5} />
            <span className="text-sm text-gray-600">
              Serving <span className="font-bold text-[#7D582E]">9 countries</span> across Africa
            </span>
          </div>
          <div className="mt-6">
            <button
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{ backgroundColor: '#7D582E' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6a4a26';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7D582E';
              }}
            >
              <span>Talk to Our Industry Experts</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D Flip */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}

export default Industries;
