import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function SolutionPageTemplate({
  eyebrow,
  title,
  highlightedTitle,
  description,
  heroIcon: HeroIcon,
  offerings,
  useCases,
  principles,
  ctaTitle,
  ctaDescription,
}) {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-[#5f421f] px-6 py-20 text-white md:py-28">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-48 -left-28 h-[28rem] w-[28rem] rounded-full bg-[#ECD5AB]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]">{eyebrow}</span>
            <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight md:text-6xl">
              {title} <span className="font-bold text-[#ECD5AB]">{highlightedTitle}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ECD5AB] px-7 py-3.5 font-semibold text-[#5f421f] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#solution-capabilities"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-[2rem] bg-[#ECD5AB] text-[#5f421f] shadow-2xl">
              <HeroIcon className="h-16 w-16" strokeWidth={1.25} aria-hidden="true" />
            </div>
            {offerings.slice(0, 4).map(({ icon: Icon, title: offeringTitle }, index) => {
              const positions = [
                'left-0 top-4',
                'right-0 top-4',
                'bottom-4 left-0',
                'bottom-4 right-0',
              ];
              return (
                <div
                  key={offeringTitle}
                  className={`absolute ${positions[index]} flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7D582E] shadow-lg`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solution-capabilities" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Solution Capabilities</span>
              <h2 className="mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
                Configure the capabilities around
                <span className="font-bold text-[#7D582E]"> your operating needs</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-gray-500 lg:justify-self-end">
              Start with the highest-value requirement and combine only the capabilities needed to support it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map(({ icon: Icon, title: offeringTitle, description: offeringDescription, features }) => (
              <article key={offeringTitle} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#ECD5AB] hover:shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ECD5AB]/60 text-[#7D582E]">
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{offeringTitle}</h3>
                    <p className="mt-3 leading-relaxed text-gray-500">{offeringDescription}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 border-t border-gray-100 pt-6 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#7D582E]" strokeWidth={1.8} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Where It Creates Value</span>
            <h2 className="mt-4 text-4xl font-light text-gray-900 md:text-5xl">
              Start with a <span className="font-bold text-[#7D582E]">clear use case</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map(({ title: useCaseTitle, description: useCaseDescription }, index) => (
              <article key={useCaseTitle} className="rounded-3xl border border-[#ECD5AB]/55 bg-white p-8">
                <span className="text-sm font-bold tracking-widest text-[#7D582E]/40">0{index + 1}</span>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">{useCaseTitle}</h3>
                <p className="mt-4 leading-relaxed text-gray-500">{useCaseDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Designed Responsibly</span>
              <h2 className="mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
                The solution must work beyond
                <span className="font-bold text-[#7D582E]"> the demonstration</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-500">
                We account for adoption, governance, maintainability, and the operational realities that determine long-term value.
              </p>
            </div>
            <div className="space-y-4">
              {principles.map(({ icon: Icon, title: principleTitle, description: principleDescription }) => (
                <article key={principleTitle} className="flex gap-5 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#7D582E] shadow-sm">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{principleTitle}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{principleDescription}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#5f421f] px-6 py-12 text-center text-white md:px-12 md:py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">{ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{ctaDescription}</p>
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

export default SolutionPageTemplate;
