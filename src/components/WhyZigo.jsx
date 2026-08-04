import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';

function WhyZigo() {
  const reasons = [
    {
      icon: <Shield className="w-7 h-7" strokeWidth={1.5} />,
      title: "Trusted Partner",
      description: "Proven track record of excellence trusted by global enterprises."
    },
    {
      icon: <Award className="w-7 h-7" strokeWidth={1.5} />,
      title: "Innovative Solutions",
      description: "Cutting-edge solutions that drive efficiency and accelerate growth."
    },
    {
      icon: <Users className="w-7 h-7" strokeWidth={1.5} />,
      title: "Expert Team",
      description: "Deep expertise across multiple industries with 400+ professionals."
    },
    {
      icon: <Zap className="w-7 h-7" strokeWidth={1.5} />,
      title: "Data-Driven",
      description: "Leveraging data and AI to solve complex business challenges."
    }
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#7D582E' }}>
            Why Zigo
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
            Trusted by Global Enterprises
            <br />
            <span className="font-bold" style={{ color: '#7D582E' }}>For Years</span>
          </h2>
          <p className="text-gray-500 text-lg font-light">
            We combine deep industry expertise with cutting-edge technology to deliver results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-[#ECD5AB] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{ backgroundColor: '#ECD5AB' }}>
                  <div style={{ color: '#7D582E' }}>{reason.icon}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyZigo;