<<<<<<< HEAD
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
  Globe,
  X
} from 'lucide-react';

function Industries() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  // --- Modal state ---
  const [showExpertModal, setShowExpertModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  // --- Modal handlers ---
  const openExpertModal = () => {
    setShowExpertModal(true);
    setSubmitSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      message: '',
    });
  };

  const closeExpertModal = () => {
    setShowExpertModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Expert consultation request:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => {
        closeExpertModal();
      }, 3000);
    }, 1500);
  };

=======
import React from 'react';
import { ArrowRight, Building2, CheckCircle, Droplet, Factory, Landmark, Package, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Improve visibility, reliability, and efficiency across production operations.',
    solutions: ['Predictive maintenance', 'Quality analytics', 'Process automation'],
  },
  {
    icon: Droplet,
    name: 'Energy',
    description: 'Use secure digital systems to support asset-intensive and field operations.',
    solutions: ['Asset monitoring', 'Operational analytics', 'Safety reporting'],
  },
  {
    icon: Package,
    name: 'Consumer Goods',
    description: 'Connect demand, inventory, distribution, and customer information.',
    solutions: ['Demand forecasting', 'Inventory visibility', 'Consumer insights'],
  },
  {
    icon: Building2,
    name: 'Financial Services',
    description: 'Modernize data and customer operations with security at the core.',
    solutions: ['Risk analytics', 'Fraud monitoring', 'Customer experience'],
  },
  {
    icon: Landmark,
    name: 'Public Sector',
    description: 'Create dependable digital services that improve access and accountability.',
    solutions: ['Digital service delivery', 'Data governance', 'Secure platforms'],
  },
  {
    icon: Wifi,
    name: 'Telecommunications',
    description: 'Turn network and customer data into actionable operational insight.',
    solutions: ['Network analytics', 'Service assurance', 'Customer retention'],
  },
];

function Industries() {
>>>>>>> 15693e152abf8dd84f1046becf6a8262dc28ff5c
  return (
    <section className="bg-[#faf7f2] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#ECD5AB] px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#7D582E]">
            Industries We Support
          </span>
          <h2 className="mt-6 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
            Technology shaped around <span className="font-bold text-[#7D582E]">industry realities</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            We adapt our capabilities to the workflows, risks, and opportunities that matter in your sector.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, name, description, solutions }) => (
            <article key={name} className="rounded-2xl border border-[#ECD5AB]/45 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECD5AB]/50 text-[#7D582E]">
                <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{description}</p>
              <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                {solutions.map((solution) => (
                  <li key={solution} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#7D582E]" strokeWidth={1.8} />
                    {solution}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

<<<<<<< HEAD
        {/* Simplified CTA Section - No country list */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
            Ready to <span className="font-bold text-[#7D582E]">Transform</span> Your Business?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Let's discuss how our industry‑specific solutions can drive your success.
          </p>
          <button
            onClick={openExpertModal}
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

      {/* --- Expert Consultation Modal --- */}
      {showExpertModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={closeExpertModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeExpertModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#7D582E] transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-light text-[#7D582E] mb-2">
                Talk to Our <span className="font-bold">Industry Experts</span>
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Fill in your details and we'll connect you with a specialist who understands your industry.
              </p>

              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="expertName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="expertName"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="expertEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="expertEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="expertPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="expertPhone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                      placeholder="+234 800 000 0000"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="expertCompany" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="expertCompany"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                      placeholder="Your company"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="expertIndustry" className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <select
                      id="expertIndustry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition"
                    >
                      <option value="">Select your industry...</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Oil & Gas">Oil & Gas</option>
                      <option value="FMCG">FMCG</option>
                      <option value="Banks & Financial Services">Banks & Financial Services</option>
                      <option value="Public Sector">Public Sector</option>
                      <option value="Telcos">Telcos</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expertMessage" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="expertMessage"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none transition resize-none"
                      placeholder="Tell us about your challenges or goals..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#7D582E] text-white py-3 rounded-lg font-semibold hover:bg-[#6a4a26] transition-all transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Request <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Request Sent!</h3>
                  <p className="text-gray-500 mt-2">
                    An industry expert will reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={closeExpertModal}
                    className="mt-6 px-6 py-2 bg-[#7D582E] text-white rounded-lg font-semibold hover:bg-[#6a4a26] transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
=======
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#7D582E] px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6a4a26] hover:shadow-xl">
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
>>>>>>> 15693e152abf8dd84f1046becf6a8262dc28ff5c
    </section>
  );
}

export default Industries;