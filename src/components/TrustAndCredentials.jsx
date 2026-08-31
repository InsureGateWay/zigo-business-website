import React from 'react';
import { ArrowUpRight, BadgeCheck, Building2, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const trustPoints = [
  { icon: Building2, title: 'A clear company identity', description: 'Zigo Business Solutions Ltd is a Nigerian technology company. Company registration number: 9394101.' },
  { icon: UsersRound, title: 'Experienced people from day one', description: 'Work directly with the architects, engineers and delivery professionals responsible for discovery, decisions and implementation.' },
  { icon: BadgeCheck, title: 'Controlled scope, measurable progress', description: 'We define scope, responsibilities, controls, and success criteria before work begins, often starting with a focused pilot before a larger programme.' },
];

const team = [
  { name: 'Ekene Amah', role: 'Founder & Principal Solutions Architect', focus: 'Leads enterprise solution strategy, architecture and multidisciplinary delivery teams.', initials: 'EA', photo: '/team/ekene-amah.png', linkedin: 'https://www.linkedin.com/in/ekeneamah' },
  { name: 'Patrick Mua', role: 'Lead Data Engineer', focus: 'Designs data pipelines and dependable foundations for analytics and AI.', initials: 'PM', photo: '/team/patrick-mua.jpeg', linkedin: 'https://www.linkedin.com/in/patrick-mua-9b3a4527/' },
  { name: 'Samuel Taiwo', role: 'AI Engineer', focus: 'Builds production AI systems, MLOps pipelines and optimised LLM solutions.', initials: 'ST', linkedin: 'https://www.linkedin.com/in/samuel-taiwo-oladipupo/' },
  { name: 'Segun Akinjola', role: 'Project Manager & Business Analyst', focus: 'Connects business requirements, stakeholder alignment, and structured delivery.', initials: 'SA', linkedin: 'https://www.linkedin.com/in/segunakinjola/' },
];

export default function TrustAndCredentials() {
  return (
    <section className='bg-white px-6 py-24' aria-labelledby='trust-heading'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
          <div>
            <span className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>People, Credentials & Accountability</span>
            <h2 id='trust-heading' className='mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl'>Know who you are <span className='font-bold text-[#7D582E]'>working with.</span></h2>
          <p className='mt-5 max-w-xl text-lg leading-relaxed text-gray-500'>Enterprise work depends on trust. We offer direct senior involvement, transparent delivery ownership, and public claims grounded in information that can be verified.</p>
            <div className='mt-7 flex flex-wrap gap-3'>
              <a href='https://www.linkedin.com/company/zigo-business-solutions-ltd/' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-3 font-semibold text-white hover:opacity-90'><span aria-hidden='true' className='font-bold'>in</span> Follow on LinkedIn <ArrowUpRight className='h-4 w-4' aria-hidden='true' /></a>
              <a href='https://x.com/ZigoBusiness' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-800 hover:border-gray-900'><span aria-hidden='true' className='text-sm font-bold'>X</span> @ZigoBusiness <ArrowUpRight className='h-4 w-4' aria-hidden='true' /></a>
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
        <div className='mt-14'>
          <p className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>Core Delivery Team</p>
          <h3 className='mt-3 text-3xl font-light text-gray-900 md:text-4xl'>Experienced people, <span className='font-bold text-[#7D582E]'>visible and accountable.</span></h3>
          <p className='mt-3 max-w-3xl text-gray-500'>Meet the experienced professionals involved in shaping and delivering our work.</p>
          <div className='mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
            {team.map(({ name, role, focus, initials, photo, linkedin }) => (
              <a key={name} href={linkedin} target='_blank' rel='noopener noreferrer' className='group flex items-center gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#ECD5AB] hover:shadow-lg' aria-label={`${name}, ${role} on LinkedIn`}>
                {photo ? <img src={photo} alt='' className='h-16 w-16 shrink-0 rounded-2xl object-cover object-center' /> : <span className='flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#ECD5AB] text-lg font-bold text-[#5f421f]' aria-hidden='true'>{initials}</span>}
                <span className='min-w-0'><span className='flex items-center gap-2 text-xl font-semibold text-gray-900'>{name}<ArrowUpRight className='h-4 w-4 shrink-0 text-[#7D582E] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5' /></span><span className='mt-1 block text-sm font-medium text-[#7D582E]'>{role}</span><span className='mt-2 block text-sm leading-relaxed text-gray-500'>{focus}</span></span>
              </a>
            ))}
          </div>
        </div>
        <div className='mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#5f421f] px-7 py-8 text-white md:flex-row md:items-center md:px-10'>
          <div><p className='text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]'>Meet the delivery team</p><p className='mt-2 max-w-2xl text-white/75'>For a qualified requirement, we introduce the experienced people responsible for discovery and delivery before the engagement is agreed. Where programme scale requires it, we can collaborate with larger integrators.</p></div>
          <Link to='/contact' className='inline-flex shrink-0 items-center gap-2 rounded-full bg-[#ECD5AB] px-6 py-3 font-semibold text-[#5f421f] hover:bg-white'>Start a conversation <ArrowUpRight className='h-4 w-4' /></Link>
        </div>
      </div>
    </section>
  );
}
