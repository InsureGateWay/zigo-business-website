import React from 'react';
import { ArrowUpRight, BadgeCheck, Building2, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const trustPoints = [
  { icon: Building2, title: 'A clear company identity', description: 'Zigo Business Solutions Ltd is a Nigerian technology company focused on enterprise AI, data, cloud, security, applications, and integration.' },
  { icon: UsersRound, title: 'Specialists matched to the work', description: 'We shape the delivery team around the requirement, bringing the relevant business, data, AI, software, infrastructure, and security capabilities into the engagement.' },
  { icon: BadgeCheck, title: 'Evidence before claims', description: 'We share the proposed scope, delivery responsibilities, controls, and measurable outcomes before work begins—and only publish credentials or client results we can support.' },
];

export default function TrustAndCredentials() {
  return (
    <section className='bg-white px-6 py-24' aria-labelledby='trust-heading'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
          <div>
            <span className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>People, Credentials & Accountability</span>
            <h2 id='trust-heading' className='mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl'>Know who you are <span className='font-bold text-[#7D582E]'>working with.</span></h2>
            <p className='mt-5 max-w-xl text-lg leading-relaxed text-gray-500'>Enterprise work depends on trust. We make the company behind the engagement visible and keep our public claims grounded in information that can be verified.</p>
            <div className='mt-7 flex flex-wrap gap-3'>
              <a href='https://www.linkedin.com/company/zigo-business-solutions-ltd/' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-3 font-semibold text-white hover:opacity-90'><span aria-hidden='true' className='font-bold'>in</span> Follow on LinkedIn <ArrowUpRight className='h-4 w-4' aria-hidden='true' /></a>
              <a href='https://x.com/ZigoBusiness' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-800 hover:border-gray-900'><span aria-hidden='true' className='text-lg leading-none'>𝕏</span> @ZigoBusiness <ArrowUpRight className='h-4 w-4' aria-hidden='true' /></a>
            </div>
          </div>
          <div className='grid gap-4 md:grid-cols-3'>
            {trustPoints.map(({ icon: Icon, title, description }) => (
              <article key={title} className='rounded-3xl border border-[#ECD5AB]/60 bg-[#faf7f2] p-7'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#7D582E]'><Icon className='h-6 w-6' aria-hidden='true' /></div>
                <h3 className='mt-6 text-xl font-semibold text-gray-900'>{title}</h3>
                <p className='mt-3 text-sm leading-relaxed text-gray-600'>{description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className='mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#5f421f] px-7 py-8 text-white md:flex-row md:items-center md:px-10'>
          <div><p className='text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]'>Meet the delivery team</p><p className='mt-2 max-w-2xl text-white/75'>For a qualified requirement, we introduce the people responsible for discovery and delivery before the engagement is agreed.</p></div>
          <Link to='/contact' className='inline-flex shrink-0 items-center gap-2 rounded-full bg-[#ECD5AB] px-6 py-3 font-semibold text-[#5f421f] hover:bg-white'>Start a conversation <ArrowUpRight className='h-4 w-4' /></Link>
        </div>
      </div>
    </section>
  );
}
