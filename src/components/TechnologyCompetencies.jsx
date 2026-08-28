import React from 'react';

const technologies = [
  ['Microsoft Copilot', 'Adoption & extension'],
  ['Microsoft Fabric', 'Unified data platform'],
  ['Power BI', 'Analytics & reporting'],
  ['Microsoft 365', 'Modern work'],
  ['Microsoft Azure', 'Cloud & AI services'],
  ['ChatGPT', 'Enterprise AI enablement'],
  ['APIs & Enterprise Systems', 'Secure integration'],
];

export default function TechnologyCompetencies() {
  return (
    <section className='border-y border-gray-100 bg-[#faf7f2] px-6 py-10' aria-labelledby='technology-heading'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div className='max-w-sm'>
            <p className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>Technology Competencies</p>
            <h2 id='technology-heading' className='mt-2 text-xl font-semibold text-gray-900'>Platforms connected around your business outcome</h2>
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
    </section>
  );
}
