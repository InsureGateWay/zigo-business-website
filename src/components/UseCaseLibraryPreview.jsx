import React from 'react';
import { ArrowUpRight, Banknote, Factory, Landmark, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  [Banknote, 'Financial Services'],
  [Landmark, 'Insurance'],
  [Landmark, 'Public Sector'],
  [Factory, 'Energy & Utilities'],
  [ShoppingBag, 'Retail & Consumer'],
];

export default function UseCaseLibraryPreview() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#ECD5AB]/60 bg-[#faf7f2] p-7 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">AI & Data Use Case Library</span>
            <h2 className="mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl">See what is practical <span className="font-bold text-[#7D582E]">now—and what comes next.</span></h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">Explore 45 industry use cases organised into short-, medium-, and long-term opportunities.</p>
            <Link to="/use-cases" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#7D582E] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5f421f]">Explore the library <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map(([Icon, name], index) => (
              <div key={name} className={`flex items-center gap-4 rounded-2xl border border-[#ECD5AB]/50 bg-white p-4 ${index === industries.length - 1 ? 'sm:col-span-2' : ''}`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECD5AB]/55 text-[#7D582E]"><Icon className="h-5 w-5" strokeWidth={1.7} /></div>
                <span className="font-semibold text-gray-800">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
