import React from 'react';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const stories = [
  {
    title: 'Building with Big AI: What We Learned Solving Nigeria’s Document Intelligence Problem',
    excerpt: 'A practical account of applying modern AI to a real document-intelligence challenge—where useful outcomes depend on the quality of the data, the workflow around it, and responsible implementation.',
    href: 'https://medium.com/@gatewayinsurepro/building-with-big-ai-what-we-learned-solving-nigerias-document-intelligence-problem-e44364483d75?sharedUserId=gatewayinsurepro',
    topic: 'Document intelligence',
  },
  {
    title: 'Don’t Compete with Big AI. Build with It.',
    excerpt: 'Why the strongest opportunity for organisations is not to recreate foundation models, but to connect proven AI capabilities to their own data, systems, governance and business priorities.',
    href: 'https://medium.com/@gatewayinsurepro/dont-compete-with-big-ai-build-with-it-7d82f47d284f?sharedUserId=gatewayinsurepro',
    topic: 'Enterprise AI strategy',
  },
];

export default function Insights() {
  return (
    <section className="bg-[#faf7f2] px-6 py-24" aria-labelledby="insights-heading">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#7D582E]"><BookOpen className="h-4 w-4" aria-hidden="true" /> Insights</span>
            <h2 id="insights-heading" className="mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl">Ideas from the work behind <span className="font-bold text-[#7D582E]">practical AI.</span></h2>
          </div>
          <p className="max-w-xl leading-relaxed text-gray-500">Perspectives from Zigo on implementing AI in ways that serve the realities of local data, enterprise systems and accountable decision-making.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {stories.map((story) => (
            <article key={story.href} className="flex flex-col rounded-3xl border border-[#ECD5AB]/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7D582E]">{story.topic}</p>
              <h3 className="mt-5 text-2xl font-semibold leading-snug text-gray-900 md:text-3xl">{story.title}</h3>
              <p className="mt-5 flex-1 leading-relaxed text-gray-600">{story.excerpt}</p>
              <a href={story.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#7D582E] transition-colors hover:text-[#5f421f]">
                Read the full story on Medium <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/insights" className="inline-flex items-center gap-2 rounded-full border border-[#7D582E]/30 px-6 py-3 font-semibold text-[#7D582E] transition-colors hover:border-[#7D582E] hover:bg-white">
            More insights <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
