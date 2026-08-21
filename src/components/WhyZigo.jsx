import React from 'react';
import { Compass, PencilRuler, RefreshCw, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Compass,
    title: 'Discover',
    description: 'Understand your goals, workflows, constraints, and the outcomes that matter most.',
  },
  {
    number: '02',
    icon: PencilRuler,
    title: 'Design',
    description: 'Shape a practical solution and roadmap aligned with your priorities and resources.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deliver',
    description: 'Implement in clear stages with collaboration, visibility, and security throughout.',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Improve',
    description: 'Measure results, learn from real use, and refine the solution as your needs evolve.',
  },
];

function WhyZigo() {
  return (
    <section className="relative overflow-hidden bg-[#5f421f] px-6 py-24 text-white">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-[#ECD5AB]/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid items-end gap-6 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]">How We Work</span>
            <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
              A clear path from idea to <span className="font-bold text-[#ECD5AB]">business value</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/70 lg:justify-self-end">
            Our delivery process keeps decisions grounded in your needs and makes progress visible at every stage.
          </p>
        </div>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <li key={title} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ECD5AB] text-[#5f421f]">
                  <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold tracking-widest text-white/40">{number}</span>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default WhyZigo;
