import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceLanding({ eyebrow, title, intro, services, outcomes, cta }) {
  return (
    <main className='overflow-hidden bg-white'>
      <section className='relative bg-[#5f421f] px-6 py-20 text-white md:py-28'>
        <div className='absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5' />
        <div className='relative mx-auto max-w-7xl'>
          <span className='text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]'>{eyebrow}</span>
          <h1 className='mt-5 max-w-4xl text-4xl font-light leading-tight md:text-6xl'>{title}</h1>
          <p className='mt-6 max-w-3xl text-lg leading-relaxed text-white/75'>{intro}</p>
          <Link to='/contact' className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#ECD5AB] px-7 py-3.5 font-semibold text-[#5f421f] hover:bg-white'>
            {cta || 'Book an AI Readiness Call'} <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </section>
      <section className='px-6 py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 max-w-3xl'>
            <h2 className='text-4xl font-light text-gray-900'>What Zigo helps you <span className='font-bold text-[#7D582E]'>put in place</span></h2>
          </div>
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {services.map(({ title: itemTitle, text, items }) => (
              <article key={itemTitle} className='rounded-2xl border border-gray-100 p-7 shadow-sm'>
                <ShieldCheck className='h-7 w-7 text-[#7D582E]' />
                <h3 className='mt-5 text-xl font-semibold text-gray-900'>{itemTitle}</h3>
                {text && <p className='mt-3 text-sm leading-relaxed text-gray-500'>{text}</p>}
                {items && <ul className='mt-4 space-y-2'>{items.map((item) => <li key={item} className='flex gap-2 text-sm text-gray-600'><CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-[#7D582E]' />{item}</li>)}</ul>}
              </article>
            ))}
          </div>
        </div>
      </section>
      {outcomes && <section className='bg-[#faf7f2] px-6 py-20'><div className='mx-auto max-w-7xl'><h2 className='text-3xl font-light text-gray-900'>Designed for <span className='font-bold text-[#7D582E]'>operational value</span></h2><div className='mt-8 grid gap-4 md:grid-cols-3'>{outcomes.map((item) => <div key={item} className='rounded-2xl bg-white p-6 text-gray-700 shadow-sm'>{item}</div>)}</div></div></section>}
      <section className='bg-[#7D582E] px-6 py-16 text-center text-white'>
        <h2 className='text-3xl font-semibold'>Move from AI interest to a controlled business capability.</h2>
        <p className='mx-auto mt-4 max-w-2xl text-white/75'>Start with one valuable workflow, establish the right foundations, and scale with evidence.</p>
        <Link to='/contact' className='mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#7D582E]'>Discuss Your Requirements <ArrowRight className='h-4 w-4' /></Link>
      </section>
    </main>
  );
}
