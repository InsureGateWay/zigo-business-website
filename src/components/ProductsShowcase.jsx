import React from 'react';
import { ExternalLink, FileSearch, Handshake, MapPinned } from 'lucide-react';

const products = [
  {
    name: 'CheckIt24',
    category: 'On-ground verification',
    description:
      'Request property, business, supplier, address, and location checks from verified field agents, with documented evidence and secure payment handling.',
    href: 'https://checkit24-6e5bf.web.app',
    icon: MapPinned,
    accent: '#B7791F',
    background: 'from-amber-50 to-orange-100/70',
  },
  {
    name: 'Zigo AI',
    category: 'Enterprise document intelligence',
    description:
      'Turn business documents into source-grounded answers and useful insights through secure, permission-aware search and analysis.',
    href: 'https://zigoai.app/',
    icon: FileSearch,
    accent: '#7D582E',
    background: 'from-[#f8f1e7] to-[#ECD5AB]/60',
  },
  {
    name: 'Zigo Trust',
    category: 'Documented digital transactions',
    description:
      'Reduce counterparty, non-delivery, and payment-dispute risk through documented deal terms, evidence-led transaction workflows, and payments processed by licensed payment partners.',
    href: 'https://trust.zigoai.app/',
    icon: Handshake,
    accent: '#176B57',
    background: 'from-emerald-50 to-teal-100/70',
  },
];

function ProductsShowcase() {
  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">
              Zigo Products
            </span>
            <h2 className="mt-4 max-w-3xl text-4xl font-light leading-tight text-gray-900 md:text-5xl">
              Products that extend our
              <span className="font-bold text-[#7D582E]"> enterprise capabilities</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-500 lg:justify-self-end">
            Our primary work is enterprise services. We also develop focused platforms for verification, enterprise knowledge, and trusted transactions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map(({ name, category, description, href, icon: Icon, accent, background }) => (
            <article
              key={name}
              className="group flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`flex h-48 flex-col bg-gradient-to-br p-6 ${background}`}>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-600">
                  {category}
                </div>
                <div className="mt-6 flex h-20 w-20 shrink-0 self-center items-center justify-center rounded-3xl bg-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-10 w-10" style={{ color: accent }} strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-gray-500">{description}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 font-semibold transition-colors hover:opacity-75"
                  style={{ color: accent }}
                  aria-label={`Visit ${name} (opens in a new tab)`}
                >
                  Explore {name}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsShowcase;
