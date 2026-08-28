import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CloudCog,
  Code,
  Database,
  Layers,
  Lightbulb,
  PanelsTopLeft,
  RefreshCw,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Database,
    title: 'Data Services',
    description: 'Organize, integrate, and use business data through reliable pipelines, reporting, governance, and analytics.',
    outcome: 'Clearer information for better decisions',
    to: '/services/data-services',
  },
  {
    icon: BrainCircuit,
    title: 'AI Services',
    description: 'Apply artificial intelligence and automation to focused workflows, knowledge, and operational challenges.',
    outcome: 'Useful automation grounded in real work',
    to: '/services/ai-services',
  },
  {
    icon: CloudCog,
    title: 'Infrastructure Services',
    description: 'Design, modernise, and support secure cloud and infrastructure foundations for dependable operations.',
    outcome: 'Resilient systems ready to scale',
    to: '/services/infrastructure-services',
  },
  {
    icon: PanelsTopLeft,
    title: 'Application Services',
    description: 'Create and integrate applications that simplify workflows and connect important business processes.',
    outcome: 'Digital tools shaped around users',
    to: '/services/applications-services',
  },
  {
    icon: Layers,
    title: 'Platform Services',
    description: 'Build shared digital platforms that bring together data, applications, access, and reusable capabilities.',
    outcome: 'Connected foundations for growth',
    to: '/services/platforms-services',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting & Advisory',
    description: 'Turn business priorities into a practical technology strategy, roadmap, and delivery plan.',
    outcome: 'Confident decisions and clear next steps',
    to: '/services/it-consulting',
  },
];

const engagementOptions = [
  {
    number: '01',
    icon: Search,
    title: 'Assess & Advise',
    description: 'Clarify the problem, review the current environment, and identify practical priorities before committing to a larger programme.',
  },
  {
    number: '02',
    icon: Code,
    title: 'Design & Deliver',
    description: 'Shape and implement a focused solution with visible stages, clear decisions, and collaboration throughout.',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Operate & Improve',
    description: 'Support, monitor, and refine digital capabilities as users, workloads, and business requirements evolve.',
  },
];

const priorities = [
  {
    icon: ShieldCheck,
    title: 'Security from the start',
    description: 'Access, privacy, resilience, and responsible handling are considered throughout delivery.',
  },
  {
    icon: TrendingUp,
    title: 'Designed to evolve',
    description: 'Solutions are structured for maintainability and growth rather than short-term complexity.',
  },
  {
    icon: Users,
    title: 'Built with your people',
    description: 'Stakeholders and users stay involved so the result fits real processes and can be adopted confidently.',
  },
];

function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-[#5f421f] px-6 py-20 text-white md:py-28">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-48 -left-28 h-[28rem] w-[28rem] rounded-full bg-[#ECD5AB]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]">Our Services</span>
            <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight md:text-6xl">
              Technology services designed around
              <span className="font-bold text-[#ECD5AB]"> business outcomes.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              We help organisations move from a business challenge to a practical digital capability across data, AI, cloud, applications, platforms, and technology strategy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ECD5AB] px-7 py-3.5 font-semibold text-[#5f421f] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#service-catalogue"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Database, label: 'Data' },
              { icon: BrainCircuit, label: 'AI' },
              { icon: CloudCog, label: 'Cloud' },
              { icon: ShieldCheck, label: 'Security' },
            ].map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className={`rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm ${index % 2 === 1 ? 'translate-y-5' : ''}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#5f421f]">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-semibold">{label}</p>
                <p className="mt-1 text-sm text-white/60">Connected to one business goal</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-catalogue" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Service Catalogue</span>
              <h2 className="mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
                Start with the capability your
                <span className="font-bold text-[#7D582E]"> business needs next</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-gray-500 lg:justify-self-end">
              Each service can stand alone or combine with others around a broader transformation objective.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description, outcome, to }) => (
              <article key={title} className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#ECD5AB] hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECD5AB]/60 text-[#7D582E] transition-transform group-hover:scale-105">
                  <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-gray-500">{description}</p>
                <p className="mt-6 border-t border-gray-100 pt-5 text-sm font-medium text-gray-700">{outcome}</p>
                <Link to={to} className="mt-5 inline-flex items-center gap-2 font-semibold text-[#7D582E] hover:text-[#5f421f]">
                  Explore this service
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Ways to Work With Us</span>
            <h2 className="mt-4 text-4xl font-light text-gray-900 md:text-5xl">
              Choose the level of support that
              <span className="font-bold text-[#7D582E]"> fits the challenge</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {engagementOptions.map(({ number, icon: Icon, title, description }) => (
              <article key={title} className="rounded-3xl border border-[#ECD5AB]/55 bg-white p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#7D582E]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-[#7D582E]/40">{number}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-4 leading-relaxed text-gray-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Built Into Delivery</span>
              <h2 className="mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
                Quality is more than the
                <span className="font-bold text-[#7D582E]"> final output</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-500">
                We consider how a solution will be protected, adopted, maintained, and improved—not only how it looks at launch.
              </p>
            </div>

            <div className="space-y-4">
              {priorities.map(({ icon: Icon, title, description }) => (
                <article key={title} className="flex gap-5 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#7D582E] shadow-sm">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#5f421f] px-6 py-12 text-center text-white md:px-12 md:py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">Not sure which service is the right starting point?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            Bring us the business challenge. We will help you clarify the capability, scope, and next step that make sense.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ECD5AB] px-7 py-3.5 font-semibold text-[#5f421f] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
