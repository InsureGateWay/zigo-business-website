import React from 'react';
import { ArrowLeft, ArrowUpRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stories } from './Insights';

export default function InsightsPage() {
  return (
    <section className="bg-[#faf7f2] px-6 py-20 md:py-28" aria-labelledby="insights-page-heading">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7D582E] transition-colors hover:text-[#5f421f]"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home</Link>
        <div className="mt-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#7D582E]"><BookOpen className="h-4 w-4" aria-hidden="true" /> Zigo Insights</span>
          <h1 id="insights-page-heading" className="mt-5 text-5xl font-light leading-tight text-gray-900 md:text-6xl">Thinking behind <span className="font-bold text-[#7D582E]">practical technology.</span></h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">Articles from Zigo Business Solutions on enterprise AI, data, delivery and the choices that turn technology into measurable business value.</p>
        </div>

        <div className="mt-14 space-y-6">
          {stories.map((story) => (
            <article key={story.href} className="rounded-3xl border border-[#ECD5AB]/70 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7D582E]">{story.topic}</p>
              <h2 className="mt-4 text-2xl font-semibold leading-snug text-gray-900 md:text-3xl">{story.title}</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">{story.excerpt}</p>
              <a href={story.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#7D582E] transition-colors hover:text-[#5f421f]">Read the full story on Medium <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
