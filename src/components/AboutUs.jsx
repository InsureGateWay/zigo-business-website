import React, { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Users, 
  Globe, 
  Target, 
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Heart,
  Lightbulb,
  Handshake,
  Rocket
} from 'lucide-react';

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stats = [
    { number: "18", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> },
    { number: "9", label: "Countries Operating", icon: <Globe className="w-6 h-6" /> },
    { number: "50+", label: "Corporate Customers", icon: <Users className="w-6 h-6" /> },
    { number: "400+", label: "IT Professionals", icon: <Target className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Excellence",
      description: "We are driven by a relentless pursuit of excellence in everything we do."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Customer First",
      description: "Our customers' success is our success. We build lasting partnerships."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation at Heart",
      description: "We embrace innovation and continuously push the boundaries of what's possible."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity & Trust",
      description: "We operate with the highest standards of integrity, transparency, and ethics."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agility & Speed",
      description: "We adapt quickly to change and deliver solutions with speed and precision."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sustainable Growth",
      description: "We create sustainable value for our clients, employees, and communities."
    }
  ];

  const milestones = [
    { year: "2008", title: "Founded in Lagos", description: "Started with a vision to transform Africa's IT landscape" },
    { year: "2012", title: "First International Office", description: "Expanded operations to Ghana and Kenya" },
    { year: "2016", title: "AI & Data Practice", description: "Launched specialized AI and data analytics division" },
    { year: "2020", title: "Cloud Innovation Hub", description: "Established cloud innovation center of excellence" },
    { year: "2023", title: "Pan-African Expansion", description: "Now serving 9 countries across Africa" },
    { year: "2024", title: "Industry Leadership", description: "Recognized as Africa's premier IT firm" }
  ];

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">
      {/* Section Header */}
      <div className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full" style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}>
                About Zigo Business Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6 leading-tight">
              Africa's Premier 
              <br />
              <span className="font-bold relative">
                <span className="relative" style={{ color: '#7D582E' }}>
                  IT Innovation Firm
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: '#ECD5AB' }}></span>
              </span>
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              We are a pan-African IT company committed to transforming businesses through 
              innovative technology solutions. With 18 years of experience, we've helped 
              over 50 corporate customers across 9 countries achieve their digital ambitions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#ECD5AB' }}>
                    <div style={{ color: '#7D582E' }}>{stat.icon}</div>
                  </div>
                </div>
                <div className="text-4xl font-bold" style={{ color: '#7D582E' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values - Full Width Light Grey Background */}
      <div className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900">
              Our Core <span className="font-bold" style={{ color: '#7D582E' }}>Values</span>
            </h3>
            <p className="text-gray-500 mt-2">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#ECD5AB] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-md" style={{ backgroundColor: '#ECD5AB' }}>
                      <div style={{ color: '#7D582E' }}>{value.icon}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey / Milestones */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900">
              Our <span className="font-bold" style={{ color: '#7D582E' }}>Journey</span>
            </h3>
            <p className="text-gray-500 mt-2">Key milestones in our growth story</p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#ECD5AB] hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                      <div className="flex items-center gap-3 mb-2" style={{ color: '#7D582E' }}>
                        <span className="text-sm font-bold">{milestone.year}</span>
                        <span className="text-xs text-gray-400">|</span>
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#7D582E' }}>
                          Milestone
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">{milestone.title}</h4>
                      <p className="text-sm text-gray-500">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-16">
                    <div className="w-4 h-4 rounded-full border-4" style={{ backgroundColor: '#7D582E', borderColor: '#ECD5AB' }}></div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us - Full Width Section */}
      <div className="w-full bg-gradient-to-r from-[#7D582E] to-[#a87a4a] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-16 text-white relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Choose Zigo Business Solutions?</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                We combine deep industry expertise with cutting-edge technology to deliver 
                solutions that drive real business value.
              </p>
              <div className="space-y-3">
                {[
                  "18 years of proven track record",
                  "400+ skilled IT professionals",
                  "9 countries across Africa",
                  "50+ corporate customers",
                  "Industry-specific expertise"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#ECD5AB]" strokeWidth={2} />
                    <span className="text-sm text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="w-6 h-6 text-[#ECD5AB]" />
                  <h4 className="font-semibold">Innovation First</h4>
                </div>
                <p className="text-sm text-white/80">We invest heavily in R&D to bring you the latest technologies.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-[#ECD5AB]" />
                  <h4 className="font-semibold">Customer-Centric</h4>
                </div>
                <p className="text-sm text-white/80">Your success is our success. We build long-term partnerships.</p>
              </div>
              <button
                className="bg-white text-[#7D582E] px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 mt-2 group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-2">
              Ready to <span className="font-bold" style={{ color: '#7D582E' }}>Transform</span> Your Business?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Let's discuss how we can help you achieve your digital goals.
            </p>
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
              <span>Contact Our Team</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
