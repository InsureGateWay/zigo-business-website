import React from 'react';
import { ArrowRight, Building2, CheckCircle, Droplet, Factory, Landmark, Package, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Improve visibility, reliability, and efficiency across production operations.',
    solutions: ['Predictive maintenance', 'Quality analytics', 'Process automation'],
  },
  {
    icon: Droplet,
    name: 'Energy',
    description: 'Use secure digital systems to support asset-intensive and field operations.',
    solutions: ['Asset monitoring', 'Operational analytics', 'Safety reporting'],
  },
  {
    icon: Package,
    name: 'Consumer Goods',
    description: 'Connect demand, inventory, distribution, and customer information.',
    solutions: ['Demand forecasting', 'Inventory visibility', 'Consumer insights'],
  },
  {
    icon: Building2,
    name: 'Financial Services',
    description: 'Modernise data and customer operations with security at the core.',
    solutions: ['Risk analytics', 'Fraud monitoring', 'Customer experience'],
  },
  {
    icon: Landmark,
    name: 'Public Sector',
    description: 'Create dependable digital services that improve access and accountability.',
    solutions: ['Digital service delivery', 'Data governance', 'Secure platforms'],
  },
  {
    icon: Wifi,
    name: 'Telecommunications',
    description: 'Turn network and customer data into actionable operational insight.',
    solutions: ['Network analytics', 'Service assurance', 'Customer retention'],
  },
];

function Industries() {
  return (
    <section className="bg-[#faf7f2] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#ECD5AB] px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#7D582E]">
            Industries We Support
          </span>
          <h2 className="mt-6 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
            Technology shaped around <span className="font-bold text-[#7D582E]">industry realities</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            We adapt our capabilities to the workflows, risks, and opportunities that matter in your sector.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, name, description, solutions }) => (
            <article key={name} className="rounded-2xl border border-[#ECD5AB]/45 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECD5AB]/50 text-[#7D582E]">
                <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{description}</p>
              <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                {solutions.map((solution) => (
                  <li key={solution} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#7D582E]" strokeWidth={1.8} />
                    {solution}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#7D582E] px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6a4a26] hover:shadow-xl">
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Industries;
