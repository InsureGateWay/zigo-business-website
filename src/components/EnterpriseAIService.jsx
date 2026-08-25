import React from 'react';
import ServiceLanding from './ServiceLanding';

const variants = {
  readiness: {
    eyebrow: 'AI Readiness & Strategy',
    title: <>Adopt enterprise AI with a <span className='font-bold text-[#ECD5AB]'>clear business case.</span></>,
    intro: 'We identify where AI can make a practical difference, assess your current environment, and create a prioritised roadmap for secure implementation.',
    services: [
      { title: 'Use-case discovery', text: 'Find high-value, feasible opportunities across teams and workflows.' },
      { title: 'Technology assessment', text: 'Review your existing platforms, licences, data, integrations, and constraints.' },
      { title: 'Risk & readiness review', text: 'Understand security, governance, data quality, and organisational gaps.' },
      { title: 'Adoption roadmap', text: 'Prioritise pilots, owners, measures, controls, and implementation stages.' },
    ],
  },
  governance: {
    eyebrow: 'AI Governance & Security',
    title: <>Enable AI without losing <span className='font-bold text-[#ECD5AB]'>control of data and risk.</span></>,
    intro: 'Zigo helps organisations establish the policies, access controls, information protection, and operating practices required for responsible enterprise AI.',
    services: [
      { title: 'Policies & accountability', text: 'Define acceptable use, ownership, review, and escalation responsibilities.' },
      { title: 'Identity & permissions', text: 'Align AI access with roles, approved sources, and least-privilege principles.' },
      { title: 'Information protection', text: 'Apply classification, sensitivity, retention, and DLP practices.' },
      { title: 'Ongoing governance', text: 'Review usage, agents, exceptions, risk, and changing platform capabilities.' },
    ],
  },
  managed: {
    eyebrow: 'Managed AI Services',
    title: <>Keep enterprise AI useful, governed, and <span className='font-bold text-[#ECD5AB]'>improving.</span></>,
    intro: 'We provide ongoing technical, operational, and adoption support after launch so AI becomes a dependable business capability.',
    services: [
      { title: 'AI operations support', text: 'Support users, configurations, integrations, and controlled change.' },
      { title: 'Agent support', text: 'Maintain agents, knowledge sources, workflows, and API connections.' },
      { title: 'Adoption monitoring', text: 'Track usage, friction, value, and opportunities for targeted enablement.' },
      { title: 'Governance & optimisation', text: 'Review controls, licences, platform changes, and the next wave of use cases.' },
    ],
  },
};

export default function EnterpriseAIService({ variant }) {
  const page = variants[variant];
  return <ServiceLanding {...page} outcomes={['Practical priorities', 'Controlled implementation', 'Measurable improvement']} />;
}
