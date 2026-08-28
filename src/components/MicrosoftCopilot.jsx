import React from 'react';
import ServiceLanding from './ServiceLanding';

const services = [
  { title: 'Copilot Readiness Assessment', text: 'Assess licensing, use cases, data exposure, identity, permissions, and adoption readiness before rollout.' },
  { title: 'Microsoft 365 & SharePoint Readiness', text: 'Prepare content, ownership, information architecture, and access so Copilot can work with dependable context.' },
  { title: 'Permissions & Information Protection', text: 'Review identity, oversharing, sensitivity labels, DLP, and access controls before wider adoption.' },
  { title: 'Copilot Deployment', text: 'Plan a controlled pilot, configure the service, establish success measures, and expand with evidence.' },
  { title: 'Copilot Studio Agents', text: 'Create focused agents for approved knowledge, departmental workflows, and repeatable business tasks.' },
  { title: 'Power Platform & API Integration', text: 'Connect Copilot experiences to Power Automate, business applications, APIs, and governed data sources.' },
  { title: 'Employee Training & Adoption', text: 'Give teams practical scenarios, safe-use guidance, and role-specific support that drives meaningful adoption.' },
  { title: 'Managed Copilot Support', text: 'Monitor adoption, support agents, review governance, and help teams benefit from new Microsoft capabilities.' },
];

export default function MicrosoftCopilot() {
  return <ServiceLanding eyebrow='Microsoft Copilot Services' title={<>Get more value from <span className='font-bold text-[#ECD5AB]'>Microsoft Copilot.</span></>} intro='Buying Copilot licences is the beginning. Successful adoption depends on data readiness, security, governance, integration, high-value business use cases, and employee adoption.' services={services} outcomes={['Safer access to business information', 'High-value department-specific use cases', 'A measurable path from pilot to scale']} cta='Assess your Copilot adoption' />;
}
