import React from 'react';
import { ArrowRight, CheckCircle, Database, Network, ShieldCheck, Sparkles, Users, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Sparkles, title: 'AI Readiness & Strategy', text: 'Identify valuable use cases, assess technology and organisational readiness, and build a practical adoption roadmap.', to: '/services/ai-readiness', items: ['Readiness assessments', 'Use-case prioritisation', 'Implementation planning'] },
  { icon: Users, title: 'Microsoft Copilot Enablement', text: 'Prepare Microsoft 365, deploy controlled pilots, create Copilot Studio agents, and support employee adoption.', to: '/services/microsoft-copilot', items: ['Microsoft 365 readiness', 'Copilot rollout', 'Training and adoption'] },
  { icon: ShieldCheck, title: 'AI Governance & Security', text: 'Protect identities, permissions, sensitive information, and AI usage with proportionate enterprise controls.', to: '/services/ai-governance', items: ['AI usage policies', 'Information protection and DLP', 'Responsible AI controls'] },
  { icon: Workflow, title: 'AI Agents & Workflow Automation', text: 'Build focused agents and automated workflows connected to approved business systems and information.', items: ['Copilot Studio agents', 'Internal assistants', 'API-connected workflows'] },
  { icon: Network, title: 'Data & Systems Integration', text: 'Connect enterprise AI to SharePoint, SQL, APIs, ERP, CRM, internal applications, and governed data platforms.', items: ['Enterprise data sources', 'APIs and applications', 'Secure integration'] },
  { icon: Database, title: 'Managed AI Services', text: 'Support, measure, govern, and improve enterprise AI as platforms, users, and business priorities evolve.', to: '/services/managed-ai-services', items: ['Agent and user support', 'Adoption monitoring', 'Governance reviews'] },
];
const lifecycle = [
  ['Assess', 'Identify valuable use cases and understand readiness.'],
  ['Secure', 'Prepare permissions, governance, and information protection.'],
  ['Deploy', 'Configure platforms and run controlled pilots.'],
  ['Integrate', 'Connect approved systems, APIs, and information sources.'],
  ['Adopt', 'Train teams and redesign work around useful scenarios.'],
  ['Operate', 'Support, measure, govern, and continuously improve.'],
];
const examples = [
  'Employees find trusted answers across approved policies and knowledge.',
  'Procurement teams review supplier records, obligations, and exceptions.',
  'Customer teams use governed assistants for consistent service and lead handling.',
  'Operations teams automate document-heavy approvals and reporting workflows.',
];

export default function AIServices() {
  return (
    <main className='overflow-hidden bg-white'>
      <section className='relative bg-gradient-to-br from-[#5f421f] to-[#8b6338] px-6 py-20 text-white md:py-28'>
        <div className='mx-auto max-w-7xl'>
          <span className='text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]'>Enterprise AI Services</span>
          <h1 className='mt-5 max-w-4xl text-4xl font-light leading-tight md:text-6xl'>Enterprise AI that works <span className='font-bold text-[#ECD5AB]'>inside your business.</span></h1>
          <p className='mt-6 max-w-3xl text-lg leading-relaxed text-white/75'>Zigo helps organisations assess, secure, deploy, integrate, and operate enterprise AI using the platforms and technology investments they already trustincluding Microsoft Copilot, ChatGPT Enterprise, Google Gemini, and Claude.</p>
          <div className='mt-8 flex flex-col gap-3 sm:flex-row'><Link to='/contact' className='inline-flex items-center justify-center gap-2 rounded-full bg-[#ECD5AB] px-7 py-3.5 font-semibold text-[#5f421f]'>Book an AI Readiness Call <ArrowRight className='h-4 w-4' /></Link><a href='#services' className='rounded-full border border-white/30 px-7 py-3.5 text-center font-semibold'>Explore Enterprise AI Services</a></div>
        </div>
      </section>
      <section id='services' className='scroll-mt-24 px-6 py-24'><div className='mx-auto max-w-7xl'><div className='mb-12 max-w-3xl'><h2 className='text-4xl font-light text-gray-900'>From licence to <span className='font-bold text-[#7D582E]'>operational capability</span></h2><p className='mt-4 text-lg text-gray-500'>We complement the platforms you choose with the data, integration, security, engineering, and adoption work needed to create measurable value.</p></div><div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>{services.map(({ icon: Icon, title, text, items, to }) => { const card = <><Icon className='h-7 w-7 text-[#7D582E]' /><h3 className='mt-5 text-xl font-semibold'>{title}</h3><p className='mt-3 text-sm leading-relaxed text-gray-500'>{text}</p><ul className='mt-5 space-y-2'>{items.map((item) => <li key={item} className='flex gap-2 text-sm text-gray-600'><CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-[#7D582E]' />{item}</li>)}</ul>{to && <span className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7D582E]'>Explore service <ArrowRight className='h-4 w-4' /></span>}</>; return to ? <Link key={title} to={to} className='rounded-2xl border border-gray-100 p-7 transition hover:-translate-y-1 hover:shadow-xl'>{card}</Link> : <article key={title} className='rounded-2xl border border-gray-100 p-7'>{card}</article>; })}</div></div></section>
      <section className='bg-[#5f421f] px-6 py-24 text-white'><div className='mx-auto max-w-7xl'><h2 className='text-4xl font-light'>Assess � Secure � Deploy � Integrate � Adopt!� <span className='font-bold text-[#ECD5AB]'>Operate</span></h2><div className='mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6'>{lifecycle.map(([title, text], index) => <article key={title} className='rounded-2xl border border-white/15 bg-white/10 p-5'><span className='text-xs font-bold text-[#ECD5AB]'>0{index + 1}</span><h3 className='mt-5 font-semibold'>{title}</h3><p className='mt-2 text-sm leading-relaxed text-white/65'>{text}</p></article>)}</div></div></section>
      <section className='bg-[#faf7f2] px-6 py-24'><div className='mx-auto max-w-7xl'><span className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>Example AI Opportunities</span><h2 className='mt-4 text-4xl font-light text-gray-900'>Where enterprise AI can <span className='font-bold text-[#7D582E]'>help</span></h2><p className='mt-4 max-w-3xl text-gray-500'>These are illustrative use cases, not claims of completed client engagements. We validate fit, risk, and expected value before implementation.</p><div className='mt-10 grid gap-5 md:grid-cols-2'>{examples.map((item) => <div key={item} className='rounded-2xl bg-white p-7 text-gray-700 shadow-sm'>{item}</div>)}</div></div></section>
    </main>
  );
}
