import React from 'react';
import { ArrowRight, BarChart3, BrainCircuit, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';

const challenges = [
  {
    title: 'Reduce repetitive work with practical AI',
    description: 'Identify focused opportunities to automate routine tasks, support customer service, and help teams make faster decisions.',
    icon: BrainCircuit,
    label: 'AI & Automation',
  },
  {
    title: 'Modernize without compromising security',
    description: 'Plan cloud and infrastructure improvements that balance flexibility, reliability, cost, and protection.',
    icon: CloudCog,
    label: 'Cloud & Security',
  },
  {
    title: 'Turn scattered data into clearer decisions',
    description: 'Connect reporting and analytics so leaders can see performance, identify risk, and act with confidence.',
    icon: BarChart3,
    label: 'Data & Analytics',
  },
];

function News() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Representative Engagement Scenarios</span>
          <h2 className="mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
            See what a focused engagement <span className="font-bold text-[#7D582E]">could look like</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            These are examples of how we can structure work around common business needs. They are not presented as completed client case studies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {challenges.map(({ icon: Icon, title, description, label }, index) => (
            <article key={title} className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 p-8 transition-all hover:-translate-y-1 hover:border-[#ECD5AB] hover:shadow-xl">
              <span className="absolute right-6 top-5 text-6xl font-bold text-[#ECD5AB]/35">0{index + 1}</span>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#7D582E]">
                <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-[#7D582E]">{label}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug text-gray-900">{title}</h3>
              <p className="mt-4 leading-relaxed text-gray-500">{description}</p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#7D582E] hover:text-[#5f421f]">
                Discuss this challenge
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-[#faf7f2] px-6 py-10 text-center md:px-12">
          <h3 className="text-2xl font-semibold text-gray-900">Have a different technology challenge?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">Tell us what you are trying to improve, and we will help you identify a practical next step.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7D582E] px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6a4a26] hover:shadow-xl">
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default News;
