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
import { Link } from 'react-router-dom';

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
      title: "Data Strategy & Architecture",
      description: "Create a governed, practical foundation aligned to business priorities and your existing environment",
      items: [
        "Current-state assessment and target architecture",
        "Platform selection and operating model",
        "Governance and migration roadmap",
        "Security, ownership and cost considerations"
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Data Engineering & Integration",
      description: "Connect source systems and turn fragmented information into dependable data products",
      items: [
        "Batch and streaming pipelines",
        "API and application integration",
        "ETL/ELT implementation",
        "Data quality, observability and orchestration"
      ]
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Data Platforms & Storage",
      description: "Design warehouses, lakehouses and storage architectures that remain useful as needs evolve",
      items: [
        "Warehouses, lakehouses and data lakes",
        "Cloud, hybrid and on-premises architectures",
        "Performance and cost optimisation",
        "Platform migration and schema design and evolution"
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Analytics & Business Intelligence",
      description: "Make governed data accessible for operational reporting and better decisions",
      items: [
        "Semantic models and Power BI reporting",
        "Operational dashboards and KPI governance",
        "Self-service analytics",
        "Reporting models designed for consistent decisions"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Governance & Assurance",
      description: "Embed the controls that make data dependable, secure and fit for business use",
      items: [
        "Data ownership, metadata and lineage",
        "Quality controls and observability",
        "Access, security and retention",
        "Compliance-aware operating practices"
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
    { name: "Microsoft", detail: "Fabric, Azure Data Factory, Power BI and Azure data services", icon: <Cloud className="w-8 h-8" />, color: "#0078D4" },
    { name: "AWS", detail: "Amazon S3 object storage, AWS Glue, Amazon Redshift, Amazon EMR and Kinesis", icon: <Cloud className="w-8 h-8" />, color: "#FF9900" },
    { name: "Google Cloud", detail: "BigQuery, Pub/Sub, Cloud Storage and Dataflow", icon: <Cloud className="w-8 h-8" />, color: "#4285F4" },
    { name: "Open source", detail: "PostgreSQL, Spark, dbt Core and relevant orchestration tools", icon: <Code className="w-8 h-8" />, color: "#7D582E" }
  ];

  const caseStudies = [
    {
      title: "Operational Reporting Foundation",
      description: "Consolidate data from finance, sales and operational systems into a governed reporting model, reducing manual reconciliation and improving access to consistent performance indicators."
    },
    {
      title: "Operational Business Intelligence",
      description: "Design semantic models and Power BI dashboards that give operational teams a clearer, governed view of performance, exceptions and priorities."
    },
    {
      title: "Data Platform Modernisation",
      description: "Assess an existing warehouse or data lake, then plan an appropriate migration path that improves reliability, cost control and readiness for analytics and AI."
    },
    {
      title: "Risk Data Management",
      description: "Establish ownership, quality checks, lineage and controlled access for data used in risk reporting and important business decisions."
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
                Build trusted data foundations
                <br />
                <span className="font-bold">for analytics and AI.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl font-light mb-6">
                Zigo designs and integrates governed data platforms, pipelines, warehouses and reporting systems around your existing environment and business requirements.
              </p>
              <Link to="/contact" className="bg-white text-[#7D582E] px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                Discuss Your Data Requirements
                <ArrowRight className="w-4 h-4" />
              </Link>
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
              Data capabilities designed for <span className="font-bold text-[#7D582E]">business confidence</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              From strategy and architecture to governed analytics and assurance
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
              Technology selected around <span className="font-bold text-[#7D582E]">your requirements</span>
            </h2>
            <p className="text-gray-500 text-lg font-light">
              We design for cloud, hybrid and on-premises environments, selecting technologies according to existing investments, security requirements, workload needs, skills and total cost of ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{platform.detail}</p>
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
            Plan a trusted data foundation.
          </h2>
          <p className="text-xl text-white/80 mb-8 font-light">
            Start with the data requirements, decisions and outcomes that matter most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#7D582E] px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2">
              Discuss Your Data Requirements
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white hover:text-[#7D582E] inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
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

export default DataServices;
