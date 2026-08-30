import React from 'react';
import { Headphones, Search, Settings, Wrench } from 'lucide-react';

const steps = [
  ['01', Search, 'We understand before we build.', 'Discovery before technology.', 'We understand the process, users, systems, data and business objective before deciding what needs to be built.'],
  ['02', Settings, 'We use what fits.', 'The right technology for the problem.', 'We choose the platforms and tools that make sense for your requirements, existing environment and long-term goals.'],
  ['03', Wrench, 'We actually deliver.', 'From idea to production.', 'Architecture, UX, engineering, integration, testing, deployment and change—not just recommendations.'],
  ['04', Headphones, 'We remain after go-live.', 'Technology doesn’t end at launch.', 'Support, optimisation, monitoring and improvement continue after the solution reaches production.'],
];
export default function WhyZigoEnterprise() {
  return <section className='bg-[#5f421f] px-6 py-24 text-white'><div className='mx-auto max-w-7xl'><span className='text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]'>How We Work</span><h2 className='mt-4 max-w-4xl text-4xl font-light md:text-5xl'>From discovery to production—<span className='font-bold text-[#ECD5AB]'>and everything after.</span></h2><p className='mt-5 max-w-4xl text-lg leading-relaxed text-white/70'>Our architects, engineers, designers and delivery professionals stay involved throughout the engagement—from the first discovery session through implementation and go-live.</p><ol className='mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>{steps.map(([number, Icon, title, promise, text]) => <li key={title} className='rounded-2xl border border-white/15 bg-white/10 p-7'><div className='flex items-center justify-between'><Icon className='h-6 w-6 text-[#ECD5AB]' /><span className='text-xs text-white/40'>{number}</span></div><h3 className='mt-8 text-xl font-semibold'>{title}</h3><p className='mt-3 font-semibold text-[#ECD5AB]'>{promise}</p><p className='mt-3 text-sm leading-relaxed text-white/65'>{text}</p></li>)}</ol></div></section>;
}
