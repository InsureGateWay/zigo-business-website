import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Database, 
  Network, 
  Layers, 
  Cloud, 
  Server, 
  Cpu,
  CheckCircle,
  BarChart3,
  FileSearch,
  GitBranch,
  Zap,
  Shield,
  Users,
  Globe,
  Award,
  TrendingUp,
  Code,
  Workflow,
  HardDrive,
  PieChart
} from 'lucide-react';

function DataServices() {
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
      icon: <Network className="w-8 h-8" />,
      title: "Data Integration & Ingestion",
      description: "Streamline data movement and transformation across your organization",
      items: [
        "EDW/BI Implementation & Support",
        "ETL as a Service",
        "Data Management as a Service",
        "AWS: Direct Connect, Kinesis, Snowball, Data Sync",
        "GCP: Storage Transfer, BigQuery Data Transfer, Pub/Sub"
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Data Modeling",
      description: "Design efficient and effective data structures for your business",
      items: [
        "Data Modeling as a Service",
        "Diverse Data Source Modeling",
        "Cross-Platform Data Architecture",
        "Performance Optimization",
        "Schema Design & Management"
      ]
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Data Warehousing & Storage",
      description: "Scalable storage solutions for all your data needs",
      items: [
        "Enterprise Data Warehousing",
        "Data Lake Implementation",
        "AWS: S3 Bucket Storage",
        "GCP: Data Store, Cloud Storage",
        "Hadoop: HDFS, HBase, Hive",
        "Open Source: PostgreSQL"
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Data Processing",
      description: "Powerful processing capabilities across all platforms",
      items: [
        "AWS: EMR, Redshift, Glue",
        "GCP: AI Platform, BigQuery",
        "Hadoop: Map Reduce, Spark Streaming",
        "Open Source: dbt Core, Druid",
        "Real-time & Batch Processing"
      ]
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Improved Data Quality",
      description: "Reduce errors, ensure standardization, and maintain a single source of truth"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Enhanced Accessibility",
      description: "Easier access to data for reporting, analysis, and decision-making"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Streamlined Integration",
      description: "Automated data movement with reduced manual effort"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Solutions that grow with your business and data volume"
    }
  ];

  const platforms = [
    { name: "AWS", icon: <Cloud className="w-8 h-8" />, color: "#FF9900" },
    { name: "Google Cloud", icon: <Cloud className="w-8 h-8" />, color: "#4285F4" },
    { name: "Hadoop", icon: <Server className="w-8 h-8" />, color: "#66CCFF" },
    { name: "Open Source", icon: <Code className="w-8 h-8" />, color: "#7D582E" }
  ];

  const caseStudies = [
    {
      title: "Enterprise Data Foundation",
      description: "Example opportunity: create a governed data foundation that supports dependable analytics and reporting"
    },
    {
      title: "Operational Business Intelligence",
      description: "Example opportunity: deliver Power BI reporting that improves visibility across operations"
    },
    {
      title: "Cloud Data Warehouse",
      description: "Example opportunity: modernise enterprise data warehousing using appropriate cloud services"
    },
    {
      title: "Risk Data Management",
      description: "Example opportunity: improve data quality, lineage, controls, and risk reporting"
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
                  Data Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
                From Data Complexity to
                <br />
                <span className="font-bold">Actionable Intelligence</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl font-light mb-6">
                Comprehensive data services designed to empower your business to effectively manage, 
                analyze, and leverage data for sustainable growth and competitive advantage.
              </p>
              <button className="bg-white text-[#7D582E] px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
                <div className="absolute inset-8 bg-white/5 rounded-full border border-white/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Database className="w-32 h-32 text-white/90" strokeWidth={1} />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ECD5AB] rounded-xl flex items-center justify-center shadow-lg">
                  <Network className="w-8 h-8 text-[#7D582E]" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#ECD5AB] rounded-xl flex items-center justify-center shadow-lg">
                  <Layers className="w-8 h-8 text-[#7D582E]" />
                </div>
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-16 h-16 bg-[#ECD5AB] rounded-xl flex items-center justify-center shadow-lg">
                  <Server className="w-8 h-8 text-[#7D582E]" />
                </div>
                <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-16 h-16 bg-[#ECD5AB] rounded-xl flex items-center justify-center shadow-lg">
                  <Cpu className="w-8 h-8 text-[#7D582E]" />
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
              End-to-End <span className="font-bold text-[#7D582E]">Data Solutions</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Comprehensive data services from integration to intelligence
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
              Multi-Platform <span className="font-bold text-[#7D582E]">Expertise</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Our data services span across leading cloud, on-premise, and open-source platforms
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
              Why Choose Our <span className="font-bold text-[#7D582E]">Data Services</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Transform your data into a strategic asset
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Example Opportunities Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              <span className="font-bold text-[#7D582E]">Example Data Opportunities</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Illustrative scenarios showing where our data capabilities may help. These are not presented as completed client engagements.
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
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-white/80 mb-8 font-light">
            Partner with us for your data transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#7D582E] px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white hover:text-[#7D582E] inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
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

export default DataServices;
