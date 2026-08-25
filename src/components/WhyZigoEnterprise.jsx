import React from 'react';
import { Link2, LockKeyhole, Search, Settings, Sparkles, Users } from 'lucide-react';

const steps = [
  ['01', Search, 'Assess', 'Identify valuable use cases and understand technology, data, and organisational readiness.'],
  ['02', LockKeyhole, 'Secure', 'Prepare permissions, governance, security, and information protection.'],
  ['03', Sparkles, 'Deploy', 'Configure enterprise AI platforms and run controlled pilots.'],
  ['04', Link2, 'Integrate', 'Connect approved enterprise systems, APIs, and information sources.'],
  ['05', Users, 'Adopt', 'Train employees, redesign workflows, and encourage meaningful use.'],
  ['06', Settings, 'Operate', 'Support, measure, govern, and continuously improve enterprise AI.'],
];
export default function WhyZigoEnterprise() {
  return <section className='bg-[#5f421f] px-6 py-24 text-white'><div className='mx-auto max-w-7xl'><span className='text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]'>How We Work</span><h2 className='mt-4 text-4xl font-light md:text-5xl'>From AI licence to <span className='font-bold text-[#ECD5AB]'>business capability</span></h2><p className='mt-5 max-w-3xl text-lg text-white/70'>A practical lifecycle that brings technology, data, controls, integration, and people together.</p><ol className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>{steps.map(([number, Icon, title, text]) => <li key={title} className='rounded-2xl border border-white/15 bg-white/10 p-6'><div className='flex items-center justify-between'><Icon className='h-6 w-6 text-[#ECD5AB]' /><span className='text-xs text-white/40'>{number}</span></div><h3 className='mt-8 text-lg font-semibold'>{title}</h3><p className='mt-3 text-sm leading-relaxed text-white/65'>{text}</p></li>)}</ol></div></section>;
}
