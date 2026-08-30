import React from 'react';

const technologies = [
  ['Microsoft Azure', 'Cloud, data & AI', 'https://api.iconify.design/logos:microsoft-azure.svg'],
  ['AWS', 'Cloud, data & AI', 'https://api.iconify.design/logos:aws.svg'],
  ['Databricks', 'Data & AI platform', 'https://api.iconify.design/logos:databricks.svg'],
  ['OpenAI', 'Models & AI applications', 'https://api.iconify.design/logos:openai-icon.svg'],
  ['Microsoft Copilot', 'Enterprise AI enablement', 'https://api.iconify.design/thesvg-color:microsoft-copilot.svg'],
  ['Google Gemini', 'Models & AI applications', 'https://api.iconify.design/logos:google-gemini.svg'],
  ['Microsoft Fabric', 'Unified data platform', 'https://api.iconify.design/thesvg-color:microsoft-fabric.svg'],
  ['Power BI', 'Analytics & reporting', 'https://api.iconify.design/logos:microsoft-power-bi.svg'],
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
            {technologies.map(([name, detail, logo]) => (
              <li key={name} className='flex items-center gap-4 rounded-2xl border border-[#ECD5AB]/55 bg-white px-5 py-4 shadow-sm'>
                <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#faf7f2] p-2.5' aria-hidden='true'>
                  <img src={logo} alt='' loading='lazy' className='h-full w-full object-contain' />
                </span>
                <span>
                  <span className='block font-semibold text-gray-900'>{name}</span>
                  <span className='mt-1 block text-xs text-gray-500'>{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
