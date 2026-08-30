import React from 'react';

const technologies = [
  ['Microsoft Azure', 'Cloud, data & AI'],
  ['AWS', 'Cloud, data & AI'],
  ['Databricks', 'Data & AI platform'],
  ['OpenAI', 'Models & AI applications'],
  ['Microsoft Copilot', 'Enterprise AI enablement'],
  ['Google Gemini', 'Models & AI applications'],
  ['Microsoft Fabric', 'Unified data platform'],
  ['Power BI', 'Analytics & reporting'],
];

export default function TechnologyCompetencies() {
  return (
    <section className='border-y border-gray-100 bg-[#faf7f2] px-6 py-20' aria-labelledby='technology-heading'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
          <div className='max-w-2xl'>
            <p className='text-sm font-semibold uppercase tracking-widest text-[#7D582E]'>Technology chosen around your needs</p>
            <h2 id='technology-heading' className='mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl'>Start with the problem. <span className='font-bold text-[#7D582E]'>Choose the technology that fits.</span></h2>
            <p className='mt-5 text-lg leading-relaxed text-gray-600'>We don&apos;t begin with a particular platform and try to make your business fit it. We first understand what you need to achieve, what you already have and how your teams work.</p>
            <p className='mt-4 text-lg leading-relaxed text-gray-600'>Then we bring together the right mix of AI, data, cloud and software technologies to build the solution.</p>
          </div>
          <ul className='grid gap-3 sm:grid-cols-2'>
            {technologies.map(([name, detail]) => (
              <li key={name} className='rounded-2xl border border-[#ECD5AB]/55 bg-white px-5 py-4 shadow-sm'>
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
