import React from 'react';
import { BriefcaseBusiness, ShieldCheck, TrendingUp } from 'lucide-react';

function WhyZigo() {
  const commitments = [
    {
      icon: <BriefcaseBusiness className="w-7 h-7" strokeWidth={1.5} />,
      title: "Business-First Approach",
      description: "Technology decisions aligned with your goals, priorities, and measurable business needs."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />,
      title: "Secure by Design",
      description: "Security and resilience considered from the beginning of every solution."
    },
    {
      icon: <TrendingUp className="w-7 h-7" strokeWidth={1.5} />,
      title: "Built to Scale",
      description: "Flexible technology foundations designed to grow with your organization."
    }
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#7D582E' }}>
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
            Built for <span className="font-bold" style={{ color: '#7D582E' }}>Ambitious Businesses</span>
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Practical technology solutions designed to help growing organizations operate securely, efficiently, and at scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <div 
              key={index} 
              className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-[#ECD5AB] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{ backgroundColor: '#ECD5AB' }}>
                  <div style={{ color: '#7D582E' }}>{commitment.icon}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{commitment.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{commitment.description}</p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl mx-auto mt-12 text-center text-gray-500 leading-relaxed">
          We&apos;re building our track record through thoughtful delivery, transparent partnerships, and results that speak for themselves.
        </p>
      </div>
    </section>
  );
}

export default WhyZigo;
