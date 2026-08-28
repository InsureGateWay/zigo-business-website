import React from 'react';

const technologies = [
  ['Microsoft Fabric', 'Unified data platform'],
  ['Power BI', 'Analytics & reporting'],
  ['Microsoft 365', 'Modern work'],
  ['Microsoft Azure', 'Cloud & AI services'],
  ['AWS', 'Cloud & AI services'],
  ['Google Cloud', 'Cloud & AI services'],
  ['ChatGPT', 'Enterprise AI enablement'],
  ['Anthropic', 'Enterprise AI models'],
  ['APIs & Enterprise Systems', 'Secure integration'],
];

export default function TechnologyCompetencies() {
  return (
    <section className='border-y border-gray-100 bg-[#faf7f2] px-6 py-16' aria-labelledby='technology-heading'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
          <div className='max-w-md'>
            <p className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>Platforms and technologies we work with</p>
            <h2 id='technology-heading' className='mt-3 text-2xl font-semibold text-gray-900'>Specific expertise, applied independently</h2>
            <p className='mt-3 text-sm leading-relaxed text-gray-600'>We work across enterprise AI ecosystems and integrate the technologies that best fit each engagement.</p>
          </div>
          <ul className='grid flex-1 gap-3 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-4'>
            {technologies.map(([name, detail]) => (
              <li key={name} className='rounded-2xl border border-[#ECD5AB]/55 bg-white px-4 py-3 shadow-sm'>
                <p className='font-semibold text-gray-900'>{name}</p>
                <p className='mt-1 text-xs text-gray-500'>{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='mx-auto mt-8 max-w-7xl border-t border-[#ECD5AB]/70 pt-6 text-center text-lg font-semibold text-[#7D582E]'>Independent guidance. Appropriate technology. Measurable outcomes.</p>
    </section>
  );
}
