import React from 'react';
import { ArrowRight, CheckCircle2, ClipboardCheck, Eye, FileCheck2, LockKeyhole, Scale, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  ['AI inventory and ownership', 'Identify approved platforms, models, agents, integrations, data sources, business owners and technical owners.'],
  ['Use-case intake and risk classification', 'Create a consistent process for evaluating intended use, affected users, data sensitivity, potential impact and required controls.'],
  ['Policy and accountability', 'Define acceptable use, prohibited use, approvals, exceptions, escalation, human oversight and decision ownership.'],
  ['Identity, data and information protection', 'Apply role-based access, least privilege, data classification, retention, DLP and approved-source controls.'],
  ['Testing and assurance', 'Evaluate accuracy, security, privacy, harmful outputs, bias, traceability and fitness for the intended purpose.'],
  ['Monitoring and incident response', 'Monitor usage and material changes, manage exceptions, investigate incidents and periodically reassess deployed systems.'],
];
const deliverables = ['Current-state AI governance assessment', 'AI system and use-case inventory', 'Risk-tiering methodology', 'Acceptable-use policy', 'Roles and responsibility matrix', 'Use-case review and approval workflow', 'Vendor and platform assessment checklist', 'Control register', 'Incident and exception process', 'Monitoring and review plan', 'Prioritised implementation roadmap'];
const process = [
  ['Discover', 'Inventory current and planned AI usage.'],
  ['Classify', 'Assess use cases, data and potential impact.'],
  ['Design', 'Define policies, responsibilities and controls.'],
  ['Implement', 'Configure technical controls and operational workflows.'],
  ['Monitor', 'Review usage, incidents, exceptions and platform changes.'],
];
const commitments = [
  ['Proportionate controls', 'Apply governance according to risk and business impact.'],
  ['Controls people can follow', 'Embed requirements into normal approval and delivery workflows.'],
  ['Continuous oversight', 'Reassess systems as data, models, vendors and use cases change.'],
];

export default function GovernanceService() {
  return <main className='overflow-hidden bg-white'>
    <section className='relative bg-[#5f421f] px-6 py-20 text-white md:py-28'><div className='absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5' /><div className='relative mx-auto max-w-7xl'><span className='text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]'>AI Governance & Security</span><h1 className='mt-5 max-w-4xl text-4xl font-light leading-tight md:text-6xl'>Enable AI without losing <span className='font-bold text-[#ECD5AB]'>control of data and risk.</span></h1><p className='mt-6 max-w-3xl text-lg leading-relaxed text-white/75'>Zigo helps organisations establish the policies, controls, ownership and operating practices required to use enterprise AI responsibly and with confidence.</p><Link to='/contact' className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#ECD5AB] px-7 py-3.5 font-semibold text-[#5f421f] hover:bg-white'>Request an AI Governance Assessment <ArrowRight className='h-4 w-4' /></Link></div></section>

    <section className='px-6 py-24'><div className='mx-auto max-w-7xl'><div className='max-w-3xl'><span className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>Governance that operates in practice</span><h2 className='mt-4 text-4xl font-light text-gray-900'>What Zigo helps you <span className='font-bold text-[#7D582E]'>put in place.</span></h2><p className='mt-5 text-lg leading-relaxed text-gray-500'>Governance must support practical delivery—not sit apart from it. We help turn risk, security and accountability requirements into repeatable ways of working.</p></div><div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>{pillars.map(([title, text]) => <article key={title} className='rounded-3xl border border-gray-100 p-7 shadow-sm'><ShieldCheck className='h-7 w-7 text-[#7D582E]' /><h3 className='mt-5 text-xl font-semibold text-gray-900'>{title}</h3><p className='mt-3 text-sm leading-relaxed text-gray-600'>{text}</p></article>)}</div></div></section>

    <section className='bg-[#faf7f2] px-6 py-24'><div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]'><div><span className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>What you receive</span><h2 className='mt-4 text-4xl font-light text-gray-900'>Tangible governance <span className='font-bold text-[#7D582E]'>outputs.</span></h2><p className='mt-5 text-lg leading-relaxed text-gray-500'>The final scope is agreed around your environment, priorities and delivery stage. Typical outputs include the following.</p></div><div className='grid gap-3 sm:grid-cols-2'>{deliverables.map((item) => <div key={item} className='flex gap-3 rounded-2xl bg-white p-4 text-sm leading-relaxed text-gray-700 shadow-sm'><CheckCircle2 className='h-5 w-5 shrink-0 text-[#7D582E]' />{item}</div>)}</div></div></section>

    <section className='px-6 py-24'><div className='mx-auto max-w-7xl'><span className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>How we work</span><h2 className='mt-4 text-4xl font-light text-gray-900'>A practical governance <span className='font-bold text-[#7D582E]'>delivery cycle.</span></h2><div className='mt-10 grid gap-5 md:grid-cols-5'>{process.map(([title, text], index) => <article key={title} className='rounded-2xl border border-[#ECD5AB]/60 p-6'><span className='text-sm font-bold text-[#7D582E]'>0{index + 1}</span><h3 className='mt-5 text-xl font-semibold text-gray-900'>{title}</h3><p className='mt-3 text-sm leading-relaxed text-gray-600'>{text}</p></article>)}</div></div></section>

    <section className='bg-[#5f421f] px-6 py-24 text-white'><div className='mx-auto max-w-7xl'><span className='text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]'>Designed for operational value</span><h2 className='mt-4 text-4xl font-light md:text-5xl'>Governance that remains <span className='font-bold text-[#ECD5AB]'>useful over time.</span></h2><div className='mt-10 grid gap-5 md:grid-cols-3'>{commitments.map(([title, text], index) => { const Icon = [Scale, ClipboardCheck, Eye][index]; return <article key={title} className='rounded-3xl border border-white/15 bg-white/10 p-7'><Icon className='h-7 w-7 text-[#ECD5AB]' /><h3 className='mt-5 text-xl font-semibold'>{title}</h3><p className='mt-3 leading-relaxed text-white/70'>{text}</p></article>; })}</div></div></section>

    <section className='px-6 py-20'><div className='mx-auto max-w-7xl rounded-3xl border border-[#ECD5AB]/60 bg-[#faf7f2] p-8 md:p-10'><div className='flex gap-4'><LockKeyhole className='mt-1 h-6 w-6 shrink-0 text-[#7D582E]' /><div><h2 className='text-2xl font-semibold text-gray-900'>Framework-informed, not a certification claim</h2><p className='mt-3 max-w-4xl leading-relaxed text-gray-600'>Our approach can be mapped to recognised AI risk-management and management-system frameworks where appropriate, including the NIST AI Risk Management Framework and ISO/IEC 42001. Zigo provides technology, control-design and operational-governance support. Legal and regulatory interpretations should be confirmed with qualified legal or compliance advisers.</p></div></div></div></section>

    <section className='bg-[#7D582E] px-6 py-16 text-center text-white'><h2 className='text-3xl font-semibold'>Review your AI controls.</h2><p className='mx-auto mt-4 max-w-2xl text-white/75'>Start with the systems and use cases already in motion, then put proportionate controls around the work that matters most.</p><Link to='/contact' className='mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#7D582E]'>Request an AI Governance Assessment <ArrowRight className='h-4 w-4' /></Link></section>
  </main>;
}
