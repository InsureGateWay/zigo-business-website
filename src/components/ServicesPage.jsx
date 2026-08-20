import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight,
  CheckCircle,
  Database,
  Brain,
  Server,
  Code,
  Layers,
  Users,
  Globe,
  Smartphone,
  DollarSign,
  Building,
  Factory,
  ShoppingBag,
  Landmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

function ServicesPage() {
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

  const services = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Services",
      description: "We provide comprehensive data services, from collection and cleaning to analysis and visualization, helping you unlock the power of your data",
      color: "#7D582E",
      link: "/services/data-services"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI Services",
      description: "We empower businesses with cutting-edge AI solutions driving innovation and efficiency through intelligent automation and data-driven insights",
      color: "#7D582E",
      link: "/services/ai-services"
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Infrastructure Services",
      description: "We provide comprehensive infrastructure services, from design and implementation to maintenance and support, ensuring reliable operation of your critical systems",
      color: "#7D582E",
      link: "/services/infrastructure-services"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Applications Services",
      description: "We provide comprehensive application services, from design and development to deployment and maintenance, helping you achieve your business objectives",
      color: "#7D582E",
      link: "/services/applications-services"
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Platforms Services",
      description: "From strategy and design to development and maintenance, we provide end-to-end platform services that drive growth, enhance efficiency, and deliver exceptional results",
      color: "#7D582E",
      link: "/services/platforms-services"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "IT Consulting & Advisory",
      description: "We use our expertise to offer strategic consultancy tailored to your business needs. Through a client-focused approach, we understand your challenges and goals, delivering customized solutions that foster significant growth",
      color: "#7D582E",
      link: "/services/it-consulting"
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: <Factory className="w-8 h-8" /> },
    { name: "Oil & Gas", icon: <Globe className="w-8 h-8" /> },
    { name: "FMCG", icon: <ShoppingBag className="w-8 h-8" /> },
    { name: "Banks & Financial Services", icon: <Landmark className="w-8 h-8" /> },
    { name: "Public Sector", icon: <Building className="w-8 h-8" /> },
    { name: "Telcos", icon: <Smartphone className="w-8 h-8" /> }
  ];

  const partners = [
    { name: "Hewlett Packard Enterprise", logo: "HPE" },
    { name: "Microsoft Solutions Partner", logo: "Microsoft" },
    { name: "ORACLE Partner", logo: "ORACLE" },
    { name: "DLL Technologies PLATINUM PARTNER", logo: "DLL" }
  ];

  return (
    <section ref={sectionRef} className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#7D582E] to-[#a87a4a] py-20 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2MkgyNHYtMmgxMnpNMzYgMjR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Enterprise-Grade
            <br />
            <span className="font-bold">IT Solutions</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
            We deliver innovative technology solutions that drive business growth,
            operational efficiency, and competitive advantage across Africa.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-xl bg-[#ECD5AB] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <div style={{ color: service.color }}>{service.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="text-[#7D582E] font-medium text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all inline-flex"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
              INDUSTRIES <span className="font-bold text-[#7D582E]">WE SERVICE</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Solving IT challenges across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`group text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#ECD5AB] transition-all duration-300 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-[#ECD5AB]/20 text-[#7D582E] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ECD5AB]">
                    {industry.icon}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700">{industry.name}</span>
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="text-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="text-gray-700 font-semibold text-sm">
                      {partner.logo}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-[#7D582E] to-[#a87a4a] py-16 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2MkgyNHYtMmgxMnpNMzYgMjR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-6 font-light">
            Let's discuss how our services can help you achieve your goals
          </p>
          <Link to="/contact">
            <button className="bg-white text-[#7D582E] px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;