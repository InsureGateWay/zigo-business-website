import React, { useState } from 'react';
import {
  ArrowRight,
  Banknote,
  Check,
  Factory,
  Landmark,
  RadioTower,
  ShoppingBag,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const horizons = [
  { key: 'short', label: 'Short term', timing: '0–6 months', description: 'Focused initiatives that can use existing data and workflows to demonstrate value quickly.' },
  { key: 'medium', label: 'Medium term', timing: '6–18 months', description: 'Connected capabilities that require stronger data foundations, integration, and operating change.' },
  { key: 'long', label: 'Long term', timing: '18+ months', description: 'Strategic transformation built on governed data, mature AI operations, and organisation-wide adoption.' },
];

const industries = [
  {
    id: 'financial-services',
    name: 'Financial Services',
    icon: Banknote,
    summary: 'Improve risk decisions, customer service, compliance, and operational efficiency across banking and financial services.',
    cases: {
      short: [
        ['Customer service knowledge assistant', 'Give service teams governed answers from policies, product documents, and procedures.'],
        ['Regulatory reporting automation', 'Consolidate recurring data and reduce manual preparation of compliance reports.'],
        ['Transaction and portfolio dashboards', 'Create a trusted view of performance, exceptions, and operational trends.'],
      ],
      medium: [
        ['Fraud and anomaly detection', 'Combine rules and machine learning to prioritise unusual transactions for review.'],
        ['Credit decision support', 'Use richer customer and repayment data to improve risk assessment and case handling.'],
        ['Personalised customer engagement', 'Recommend relevant products, education, and next actions using consented customer data.'],
      ],
      long: [
        ['Real-time financial intelligence', 'Connect events, risk signals, and customer context for faster enterprise decisions.'],
        ['Agent-assisted banking operations', 'Coordinate governed AI agents across onboarding, servicing, controls, and case resolution.'],
        ['Continuous risk and compliance monitoring', 'Move from periodic checks to explainable, near-real-time control assurance.'],
      ],
    },
  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: Landmark,
    summary: 'Use data and AI to improve underwriting, claims, distribution, customer experience, and portfolio insight.',
    cases: {
      short: [
        ['Policy and claims document extraction', 'Capture structured information from forms, schedules, reports, and supporting documents.'],
        ['Claims operations dashboard', 'Track volumes, ageing, leakage indicators, and service levels in one view.'],
        ['Broker and agent knowledge assistant', 'Make product, underwriting, and process guidance easier to find and use.'],
      ],
      medium: [
        ['Claims triage and routing', 'Prioritise claims by complexity, urgency, and risk while keeping people in control.'],
        ['Underwriting decision support', 'Bring risk data, rules, and comparable cases together for faster assessment.'],
        ['Renewal and lapse prediction', 'Identify policies at risk and guide timely, relevant retention activity.'],
      ],
      long: [
        ['Connected risk intelligence', 'Use internal and external signals to understand exposure as conditions change.'],
        ['Straight-through claims journeys', 'Automate suitable claims from notification to settlement with governed exceptions.'],
        ['Usage and behaviour-led products', 'Develop more responsive cover and pricing from trusted, consented data.'],
      ],
    },
  },
  {
    id: 'public-sector',
    name: 'Public Sector',
    icon: Landmark,
    summary: 'Strengthen service delivery, accountability, planning, and secure access to public information.',
    cases: {
      short: [
        ['Citizen enquiry assistant', 'Help people find accurate service, eligibility, and application information.'],
        ['Programme performance dashboards', 'Bring delivery, budget, and outcome indicators into a clear operational view.'],
        ['Document and records classification', 'Organise correspondence, forms, and records for faster retrieval and routing.'],
      ],
      medium: [
        ['Case prioritisation and workflow', 'Route applications and cases using transparent service rules and risk indicators.'],
        ['Revenue and leakage analytics', 'Identify anomalies, gaps, and improvement opportunities across collections.'],
        ['Integrated planning data', 'Connect demographic, geographic, financial, and service data for better allocation.'],
      ],
      long: [
        ['Proactive digital public services', 'Anticipate eligible services and reduce repeated information requests across agencies.'],
        ['Policy simulation and impact analysis', 'Test scenarios using governed models and explainable assumptions.'],
        ['Inter-agency data ecosystem', 'Enable secure, standards-based data sharing with clear accountability and consent.'],
      ],
    },
  },
  {
    id: 'energy-utilities',
    name: 'Energy & Utilities',
    icon: Factory,
    summary: 'Improve asset performance, field operations, revenue protection, forecasting, safety, and reliability.',
    cases: {
      short: [
        ['Asset and maintenance dashboard', 'Combine work orders, failures, and asset condition into a usable operational view.'],
        ['Field document assistant', 'Help teams retrieve procedures, manuals, permits, and safety guidance at the point of work.'],
        ['Consumption and revenue analytics', 'Surface demand, collection, loss, and exception patterns by location and segment.'],
      ],
      medium: [
        ['Predictive maintenance', 'Use condition and service history to prioritise intervention before failure.'],
        ['Demand and load forecasting', 'Improve operational planning with weather, consumption, and network signals.'],
        ['Loss and anomaly detection', 'Identify likely technical losses, theft, meter issues, and billing exceptions.'],
      ],
      long: [
        ['Intelligent network operations', 'Coordinate forecasts, assets, incidents, and field resources in near real time.'],
        ['Digital twins for critical assets', 'Model asset condition and scenarios to support investment and operational decisions.'],
        ['Autonomous field-service coordination', 'Optimise scheduling, parts, routing, and guided resolution with human oversight.'],
      ],
    },
  },
  {
    id: 'retail-consumer',
    name: 'Retail & Consumer',
    icon: ShoppingBag,
    summary: 'Connect customer, product, inventory, and channel data to improve demand, availability, and profitable growth.',
    cases: {
      short: [
        ['Sales and margin dashboard', 'Give commercial teams a consistent view by product, location, channel, and customer.'],
        ['Customer feedback intelligence', 'Summarise themes and emerging issues across reviews, service messages, and surveys.'],
        ['Product content automation', 'Create and govern product descriptions, attributes, and channel-ready content.'],
      ],
      medium: [
        ['Demand and inventory forecasting', 'Improve replenishment and availability while reducing excess stock.'],
        ['Customer segmentation and next action', 'Use behaviour and value signals to make engagement more relevant.'],
        ['Promotion effectiveness analytics', 'Understand incremental impact and improve campaign and pricing decisions.'],
      ],
      long: [
        ['Connected commerce intelligence', 'Unify customer, supply, product, and financial decisions across channels.'],
        ['Dynamic assortment and fulfilment', 'Adapt product availability and fulfilment choices to local demand and constraints.'],
        ['AI-assisted commercial planning', 'Support category, pricing, media, and supply decisions with governed scenarios.'],
      ],
    },
  },
];

export default function UseCaseLibrary() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  const selected = industries.find((industry) => industry.id === activeIndustry) || industries[0];
  const SelectedIcon = selected.icon;

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-[#5f421f] px-6 py-20 text-white md:py-28">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]">AI & Data Use Case Library</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight md:text-6xl">
            Find the right opportunity for <span className="font-bold text-[#ECD5AB]">where you are now.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            Explore practical AI and data opportunities across five industries, organised by the likely delivery horizon—not by hype or technology alone.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 text-sm text-white/75">
            {horizons.map((horizon) => <span key={horizon.key} className="rounded-full border border-white/20 bg-white/10 px-4 py-2">{horizon.label} · {horizon.timing}</span>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Choose an industry</span>
            <h2 className="mt-3 text-3xl font-light text-gray-900 md:text-4xl">Explore a practical path from <span className="font-bold text-[#7D582E]">early value to transformation</span></h2>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-3" role="tablist" aria-label="Industry categories">
            {industries.map(({ id, name, icon: Icon }) => (
              <button key={id} type="button" role="tab" aria-selected={activeIndustry === id} onClick={() => setActiveIndustry(id)} className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${activeIndustry === id ? 'border-[#7D582E] bg-[#7D582E] text-white' : 'border-gray-200 bg-white text-gray-600 hover:border-[#ECD5AB] hover:text-[#7D582E]'}`}>
                <Icon className="h-4 w-4" strokeWidth={1.7} />
                {name}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-[#faf7f2] p-6 md:p-9">
            <div className="flex max-w-4xl items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#7D582E]"><SelectedIcon className="h-6 w-6" /></div>
              <div><h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{selected.name}</h2><p className="mt-2 leading-relaxed text-gray-600">{selected.summary}</p></div>
            </div>

            <div className="mt-9 grid gap-6 lg:grid-cols-3">
              {horizons.map((horizon, index) => (
                <article key={horizon.key} className="rounded-2xl border border-[#ECD5AB]/55 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4"><span className="text-xs font-bold uppercase tracking-widest text-[#7D582E]">{horizon.label}</span><span className="rounded-full bg-[#faf7f2] px-3 py-1 text-xs font-semibold text-gray-500">{horizon.timing}</span></div>
                  <p className="mt-4 min-h-16 text-sm leading-relaxed text-gray-500">{horizon.description}</p>
                  <div className="mt-6 space-y-5 border-t border-gray-100 pt-6">
                    {selected.cases[horizon.key].map(([title, description]) => (
                      <div key={title} className="flex gap-3">
                        <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${index === 0 ? 'bg-emerald-50 text-emerald-700' : index === 1 ? 'bg-amber-50 text-amber-700' : 'bg-[#ECD5AB]/50 text-[#7D582E]'}`}><Check className="h-3.5 w-3.5" strokeWidth={2.2} /></div>
                        <div><h3 className="font-semibold text-gray-900">{title}</h3><p className="mt-1 text-sm leading-relaxed text-gray-500">{description}</p></div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#5f421f] px-6 py-12 text-center text-white md:px-12 md:py-16">
          <RadioTower className="mx-auto h-9 w-9 text-[#ECD5AB]" strokeWidth={1.5} />
          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">Which use cases are right for your organisation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">The best starting point depends on value, data readiness, risk, and adoption—not the most ambitious idea on the list.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ECD5AB] px-7 py-3.5 font-semibold text-[#5f421f] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl">Discuss your priorities <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
