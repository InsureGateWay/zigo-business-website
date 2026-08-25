import React from 'react';
import { ArrowRight, BriefcaseBusiness, Database, Link2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  { icon: Sparkles, title: 'Enterprise AI', text: 'Copilot, ChatGPT, Gemini, Claude' },
  { icon: Database, title: 'Data Ready', text: 'Fabric, SQL, Power BI, governance' },
  { icon: ShieldCheck, title: 'Secure by Design', text: 'Identity, access, policy, protection' },
  { icon: Link2, title: 'Connected', text: 'Applications, APIs, agents, workflows' },
];

export default function HeroEnterprise() {
  return (
    <section className='relative overflow-hidden bg-white px-6 py-16 md:py-24'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(236,213,171,0.45),transparent_32%)]' />
      <div className='relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]'>
        <div>
          <span className='inline-flex items-center gap-2 rounded-full bg-[#faf7f2] px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#7D582E]'><BriefcaseBusiness className='h-4 w-4' />Enterprise technology partner</span>
          <h1 className='mt-7 max-w-4xl text-5xl font-light leading-[1.05] text-[#7D582E] md:text-7xl'>Enterprise AI, <span className='font-bold'>implemented properly.</span></h1>
          <p className='mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl'>Zigo Business Solutions helps organisations securely adopt, integrate, and get measurable value from Microsoft Copilot, ChatGPT, and enterprise AI - while connecting AI to the data, systems, and workflows your business already uses.</p>
          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Link to='/contact' className='inline-flex items-center justify-center gap-2 rounded-full bg-[#7D582E] px-7 py-3.5 font-semibold text-white hover:bg-[#5f421f]'>Book an AI Readiness Call <ArrowRight className='h-4 w-4' /></Link>
            <Link to='/services/ai-services' className='inline-flex items-center justify-center gap-2 rounded-full border border-[#7D582E]/25 px-7 py-3.5 font-semibold text-[#7D582E] hover:border-[#7D582E]'>Explore Enterprise AI Services</Link>
          </div>
          <p className='mt-7 text-sm font-medium leading-relaxed text-gray-500'>Microsoft Copilot / Enterprise AI / Data & Integration / Governance / Automation / Managed Support</p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2'>
          {capabilities.map(({ icon: Icon, title, text }, index) => <article key={title} className={`rounded-3xl border border-[#ECD5AB]/60 bg-[#faf7f2] p-7 shadow-sm ${index % 2 ? 'sm:translate-y-7' : ''}`}><div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#7D582E]'><Icon className='h-6 w-6' /></div><h2 className='mt-6 text-xl font-semibold text-gray-900'>{title}</h2><p className='mt-2 text-sm leading-relaxed text-gray-500'>{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
