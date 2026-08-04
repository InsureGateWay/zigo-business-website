import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Building2,
  Globe,
  Users,
  ShieldCheck,
  Zap,
  ChevronRight
} from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const contactInfo = [
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: "Office Address", 
      value: "123 Victoria Island, Lagos, Nigeria"
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: "Phone Number", 
      value: "+234 800 000 0000"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: "Email Address", 
      value: "info@zigobiz.com"
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      label: "Working Hours", 
      value: "Mon - Fri: 8:00 AM - 6:00 PM"
    }
  ];

  return (
    <>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full inline-block" style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}>
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-4">
              Let's Start a <span className="font-bold" style={{ color: '#7D582E' }}>Conversation</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Whether you have a question, project, or partnership opportunity — we're here to help.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Flip Card */}
            <div 
              className="relative h-[480px] cursor-pointer group"
              onClick={handleFlip}
            >
              <div 
                className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7D582E]/90 via-[#7D582E]/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full">
                        24/7 Support
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                        <Users className="w-4 h-4 text-white" />
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">We're Here to Help</h3>
                      <p className="text-white/70 text-sm">Click to view our contact details</p>
                      <div className="mt-3 flex items-center gap-2 text-white/40 text-xs">
                        <span>Click to flip</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-100">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                      <div className="p-2.5 rounded-xl" style={{ backgroundColor: '#ECD5AB' }}>
                        <Building2 className="w-5 h-5 text-[#7D582E]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">Contact Details</h4>
                        <p className="text-xs text-gray-400">Reach out to our team</p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      {contactInfo.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all"
                        >
                          <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: '#ECD5AB' }}>
                            <div style={{ color: '#7D582E' }}>{item.icon}</div>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{item.label}</p>
                            <p className="text-sm text-gray-700 font-medium">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100 text-center">
                      <span className="text-xs text-gray-400">Click to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="h-[480px] bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-gray-800">Send a Message</h3>
                <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7D582E] focus:outline-none focus:ring-2 focus:ring-[#ECD5AB]/30 transition-all text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7D582E] focus:outline-none focus:ring-2 focus:ring-[#ECD5AB]/30 transition-all text-sm"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7D582E] focus:outline-none focus:ring-2 focus:ring-[#ECD5AB]/30 transition-all text-sm"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#7D582E] focus:outline-none focus:ring-2 focus:ring-[#ECD5AB]/30 transition-all resize-none text-sm min-h-[80px]"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl text-white font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#7D582E' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#6a4a26';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#7D582E';
                  }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="text-center p-2 rounded-xl bg-white">
                  <ShieldCheck className="w-4 h-4 text-[#7D582E] mx-auto" />
                  <p className="text-[9px] text-gray-400 mt-0.5">Secure</p>
                </div>
                <div className="text-center p-2 rounded-xl bg-white">
                  <Zap className="w-4 h-4 text-[#7D582E] mx-auto" />
                  <p className="text-[9px] text-gray-400 mt-0.5">Fast</p>
                </div>
                <div className="text-center p-2 rounded-xl bg-white">
                  <Users className="w-4 h-4 text-[#7D582E] mx-auto" />
                  <p className="text-[9px] text-gray-400 mt-0.5">Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section - Full Width */}
      <div className="w-full bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-0">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full inline-block" style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}>
              Visit Us
            </span>
            <h3 className="text-3xl font-light text-gray-900 mt-3">
              Find Us at Our <span className="font-bold" style={{ color: '#7D582E' }}>Headquarters</span>
            </h3>
          </div>
        </div>

        <div className="w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.195722067639!2d3.4214848!3d6.5033354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2b2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ZigoBiz Office Location"
            className="w-full"
          ></iframe>

          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl" style={{ backgroundColor: '#ECD5AB' }}>
                <MapPin className="w-4 h-4 text-[#7D582E]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">ZigoBiz HQ</h4>
                <p className="text-xs text-gray-500">Victoria Island, Lagos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex items-center gap-3">
              <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: '#ECD5AB' }}>
                <Phone className="w-4 h-4 text-[#7D582E]" />
              </div>
              <div>
                <p className="text-[9px] text-gray-400 uppercase">Call</p>
                <p className="text-xs font-semibold text-gray-700">+234 800 000 0000</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex items-center gap-3">
              <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: '#ECD5AB' }}>
                <Mail className="w-4 h-4 text-[#7D582E]" />
              </div>
              <div>
                <p className="text-[9px] text-gray-400 uppercase">Email</p>
                <p className="text-xs font-semibold text-gray-700">info@zigobiz.com</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex items-center gap-3">
              <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: '#ECD5AB' }}>
                <Clock className="w-4 h-4 text-[#7D582E]" />
              </div>
              <div>
                <p className="text-[9px] text-gray-400 uppercase">Hours</p>
                <p className="text-xs font-semibold text-gray-700">Mon-Fri 8AM-6PM</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex items-center gap-3">
              <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: '#ECD5AB' }}>
                <Globe className="w-4 h-4 text-[#7D582E]" />
              </div>
              <div>
                <p className="text-[9px] text-gray-400 uppercase">Follow</p>
                <p className="text-xs font-semibold text-gray-700">@zigobiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flip Card CSS */}
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
    </>
  );
}

export default Contact;
