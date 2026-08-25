import React from 'react';
import ServiceLanding from './ServiceLanding';

const services = [
  { title: 'Enterprise AI', items: ['Microsoft Copilot', 'Copilot Studio', 'AI agents', 'Governance and adoption'] },
  { title: 'Data & Analytics', items: ['Microsoft Fabric', 'Data engineering', 'SQL', 'Power BI'] },
  { title: 'Integration & Applications', items: ['APIs', 'Systems integration', 'Business applications', 'Custom software'] },
  { title: 'Cloud & Architecture', items: ['Azure', 'Cloud engineering', 'Solution architecture', 'Delivery support'] },
];

export default function Partners() {
  return <ServiceLanding eyebrow='Technology Delivery Partnerships' title={<>Extend your delivery capability with <span className='font-bold text-[#ECD5AB]'>Zigo.</span></>} intro='Zigo works with technology providers, systems integrators, and consulting organisations that need additional delivery capacity across enterprise AI, Microsoft technologies, data engineering, analytics, and application integration.' services={services} outcomes={['Specialist capacity around your client engagement', 'Flexible support across defined work packages', 'A practical, collaborative delivery approach']} cta='Discuss a Delivery Partnership' />;
}
