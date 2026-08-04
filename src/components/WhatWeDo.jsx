import React from 'react';
import { DollarSign, Cpu, Briefcase, TrendingUp } from 'lucide-react';

function WhatWeDo() {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8" strokeWidth={1.5} />,
      title: "Cost-effectiveness",
      description: "Affordable IT solutions that reduce costs and improve your bottom line.",
      delay: "0s"
    },
    {
      icon: <Cpu className="w-8 h-8" strokeWidth={1.5} />,
      title: "Innovative Technology",
      description: "Latest tech trends and innovative solutions to stay ahead of competition.",
      delay: "0.1s"
    },
    {
      icon: <Briefcase className="w-8 h-8" strokeWidth={1.5} />,
      title: "Industry Expertise",
      description: "Specialized solutions for banking, oil & gas, telecom, healthcare, and more.",
      delay: "0.2s"
    },
    {
      icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
      title: "Scalability",
      description: "Solutions that grow with your business, ensuring maximum value.",
      delay: "0.3s"
    }
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#7D582E' }}>
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
            Delivering Solutions That
            <br />
            <span className="font-bold" style={{ color: '#7D582E' }}>Create Business Advantage</span>
          </h2>
          <p className="text-gray-500 text-lg font-light">
            We provide tailored solutions that address your unique business challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 hover:border-[#ECD5AB] transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all group-hover:scale-110" style={{ backgroundColor: '#ECD5AB' }}>
                <div style={{ color: '#7D582E' }}>{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;