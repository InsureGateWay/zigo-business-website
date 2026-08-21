import React from 'react';
import { ArrowUpRight, BrainCircuit, CloudCog, Database, Lightbulb, PanelsTopLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Build reliable data foundations, reporting systems, and analytics that support better decisions.',
    link: '/services/data-services',
  },
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    description: 'Apply automation and AI to practical workflows, customer experiences, and operational challenges.',
    link: '/services/ai-services',
  },
  {
    icon: CloudCog,
    title: 'Cloud & Infrastructure',
    description: 'Modernize infrastructure with secure, resilient, and scalable cloud environments.',
    link: '/services/infrastructure-services',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Strengthen systems, data, and operations with security considered from the beginning.',
    link: '/products/security-suite',
  },
  {
    icon: PanelsTopLeft,
    title: 'Business Applications',
    description: 'Design and integrate applications that simplify work and connect critical business processes.',
    link: '/services/applications-services',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description: 'Turn business priorities into a practical technology roadmap with clear next steps.',
    link: '/services/it-consulting',
  },
];

function WhatWeDo() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">What We Do</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-light leading-tight text-gray-900 md:text-5xl">
              Technology services built around <span className="font-bold text-[#7D582E]">real business needs</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-500 lg:justify-self-end">
            From strategy to implementation, we help organizations build useful, secure, and scalable digital capabilities.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, link }) => (
            <Link
              key={title}
              to={link}
              className="group rounded-2xl border border-gray-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#ECD5AB] hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECD5AB]/55 text-[#7D582E] transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#7D582E] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-[#7D582E] hover:text-[#5f421f]">
            Explore Our Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
