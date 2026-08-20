import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Brain,
  Cpu,
  BarChart3,
  Network,
  Database,
  Cloud,
  Server,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Users,
  Award,
  GitBranch,
  FileSearch,
  Code,
  Workflow,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

function AIServices() {
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

  const serviceCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Strategy & Consulting",
      description: "Strategic guidance to align AI with your business objectives",
      items: [
        "Development of AI strategies aligned with business goals",
        "Identification of AI opportunities for efficiency and growth",
        "Guidance on AI adoption and seamless integration",
        "Best practices and roadmap development",
        "AI readiness assessment"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Transform data into actionable intelligence with machine learning",
      items: [
        "Machine learning and predictive analytics",
        "Predictive modeling for forecasting and risk assessment",
        "AI-driven business intelligence and visualization",
        "Customer analytics for personalized experiences",
        "Real-time data insights"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Platform Implementation",
      description: "Deploy and integrate AI platforms tailored to your needs",
      items: [
        "Deployment of AI platforms and solutions",
        "Cloud-based AI services (AWS, Google Cloud)",
        "Integration with existing systems",
        "Scalable AI infrastructure",
        "Performance monitoring and optimization"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering for AI",
      description: "Build robust data infrastructure to support AI deployment",
      items: [
        "Data infrastructure for AI deployment",
        "Data integration and warehousing",
        "AI model training and governance",
        "Big data solutions for AI processing",
        "Data quality and preparation"
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Enhanced Decision-Making",
      description: "AI-driven analysis uncovers patterns and trends for proactive decision-making"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Task Automation",
      description: "Automate repetitive tasks through NLP and robotic process automation"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Operational Efficiency",
      description: "AI-driven insights optimize workflows and improve collaboration"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Competitive Advantage",
      description: "Leverage AI for digital transformation and stay ahead of the competition"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Future-Ready Foundation",
      description: "Robust data and infrastructure ecosystem enables seamless AI adoption"
    }
  ];

  const platforms = [
    { name: "AWS AI Services", icon: <Cloud className="w-8 h-8" />, color: "#FF9900" },
    { name: "Google Cloud AI", icon: <Cloud className="w-8 h-8" />, color: "#4285F4" },
    { name: "Machine Learning", icon: <Cpu className="w-8 h-8" />, color: "#7D582E" },
    { name: "Predictive Analytics", icon: <BarChart3 className="w-8 h-8" />, color: "#7D582E" }
  ];

  const caseStudies = [
    {
      title: "AI-Powered Customer Analytics",
      description: "Implemented AI-driven analytics for customer personalization and engagement"
    },
    {
      title: "Predictive Maintenance Solution",
      description: "Developed machine learning models for equipment failure prediction"
    },
    {
      title: "Intelligent Process Automation",
      description: "Automated repetitive tasks using NLP and RPA for operational efficiency"
    },
    {
      title: "AI Strategy & Digital Transformation",
      description: "Developed comprehensive AI strategy for enterprise-wide digital transformation"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#7D582E] to-[#a87a4a] py-24 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2MkgyNHYtMmgxMnpNMzYgMjR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
                  AI Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
                Empower Intelligent
                <br />
                <span className="font-bold">Action Through AI</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl font-light mb-6">
                Leverage our deep expertise in analytics and data management to deliver AI solutions 
                that drive innovation and transform business operations.
              </p>
              <Link to="/contact">
                <button className="bg-white text-[#7D582E] px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                  Schedule a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
                <div className="absolute inset-8 bg-white/5 rounded-full border border-white/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-white/90" strokeWidth={1} />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ECD5AB] rounded-xl flex items-center justify-center shadow-lg">
                  <Cpu className="w-8 h-8 text-[#7D582E]" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#ECD5AB] rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-8 h-8 text-[#7D582E]" />
                </div>
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-16 h-16 bg-[#ECD5AB] rounded-xl flex items-center justify-center shadow-lg">
                  <Network className="w-8 h-8 text-[#7D582E]" />
                </div>
                <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-16 h-16 bg-[#ECD5AB] rounded-xl flex items-center justify-center shadow-lg">
                  <Database className="w-8 h-8 text-[#7D582E]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#7D582E]">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mt-4 mb-4">
              AI-Powered <span className="font-bold text-[#7D582E]">Solutions</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Comprehensive AI services to drive innovation and digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#ECD5AB]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#ECD5AB] group-hover:scale-110">
                      <div className="text-[#7D582E] group-hover:text-[#7D582E]">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#7D582E] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              AI <span className="font-bold text-[#7D582E]">Platform Expertise</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Leveraging leading AI platforms and technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gray-50">
                    <div style={{ color: platform.color }}>{platform.icon}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Why Choose Our <span className="font-bold text-[#7D582E]">AI Services</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Transform your business with intelligent automation and predictive insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ECD5AB]/20 flex items-center justify-center mb-4 text-[#7D582E]">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              <span className="font-bold text-[#7D582E]">Case Studies</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Real-world success stories from our AI implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7D582E] flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{study.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{study.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-[#7D582E] to-[#a87a4a] py-20 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2MkgyNHYtMmgxMnpNMzYgMjR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-white/80 mb-8 font-light">
            Partner with us for your AI transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-[#7D582E] px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2">
                Schedule a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/services">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white hover:text-[#7D582E] inline-flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Client-oriented
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Independent
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Competent
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Results-driven
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIServices;