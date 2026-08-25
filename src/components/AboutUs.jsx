import React from 'react';
import {
  ArrowRight,
  BrainCircuit,
  CloudCog,
  Database,
  Eye,
  Handshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  { icon: Database, label: 'Data' },
  { icon: BrainCircuit, label: 'AI' },
  { icon: CloudCog, label: 'Cloud' },
  { icon: ShieldCheck, label: 'Security' },
];

const values = [
  {
    icon: Scale,
    title: 'Integrity in Practice',
    description: 'We communicate clearly, set realistic expectations, and take responsibility for the work we deliver.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    description: 'We apply modern technology where it creates useful outcomes—not simply because it is new.',
  },
  {
    icon: Handshake,
    title: 'Collaborative Delivery',
    description: 'We work closely with stakeholders so solutions reflect real workflows, constraints, and priorities.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible Technology',
    description: 'We consider security, privacy, access, and long-term maintainability from the beginning.',
  },
];

const commitments = [
  'Start with the business problem before choosing the technology.',
  'Make progress, trade-offs, and next steps visible throughout delivery.',
  'Build foundations that can evolve as the organization grows.',
];

function AboutUs() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-[#faf7f2] px-6 py-20 md:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#ECD5AB]/25" />
        <div className="absolute -bottom-36 -left-28 h-96 w-96 rounded-full bg-[#7D582E]/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-block rounded-full bg-[#ECD5AB] px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#7D582E]">
              About Zigo Business Solutions
            </span>
            <h1 className="mt-7 max-w-4xl text-4xl font-light leading-tight text-gray-900 md:text-6xl">
              Technology should make business
              <span className="font-bold text-[#7D582E]"> clearer, safer, and more capable.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Zigo Business Solutions is a Nigerian technology company helping organizations modernize their data, systems, and business processes and successfully adopt enterprise AI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7D582E] px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6a4a26] hover:shadow-xl"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7D582E]/25 bg-white px-7 py-3.5 font-semibold text-[#7D582E] transition-all hover:border-[#7D582E] hover:shadow-md"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-[#ECD5AB]/70 bg-white p-7 shadow-xl md:p-9">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-3xl bg-[#ECD5AB]/35" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">What we bring together</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-900">Connected digital capabilities</h2>
              <p className="mt-3 leading-relaxed text-gray-500">
                The right solution often crosses disciplines. We connect the capabilities needed around one business outcome.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {capabilities.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl bg-[#faf7f2] p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ECD5AB] text-[#7D582E]">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <span className="font-semibold text-gray-800">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Why We Exist</span>
            <h2 className="mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
              Building useful technology around
              <span className="font-bold text-[#7D582E]"> meaningful outcomes</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#7D582E]">
                <Target className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-[#7D582E]">Our Mission</p>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900">Make advanced technology practical.</h3>
              <p className="mt-4 leading-relaxed text-gray-500">
                Help organizations turn complex technology choices into clear, secure, and workable solutions that improve how people operate and make decisions.
              </p>
            </article>

            <article className="rounded-3xl bg-[#5f421f] p-8 text-white shadow-xl md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#5f421f]">
                <Eye className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]">Our Vision</p>
              <h3 className="mt-3 text-2xl font-semibold">Help ambitious businesses grow with confidence.</h3>
              <p className="mt-4 leading-relaxed text-white/70">
                Contribute to a future where organizations can use data and digital systems responsibly, protect what matters, and adapt as their needs change.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">How We Show Up</span>
            <h2 className="mt-4 text-4xl font-light text-gray-900 md:text-5xl">
              Principles that guide <span className="font-bold text-[#7D582E]">our work</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Trust is built through consistent decisions and delivery—not unsupported claims.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="group rounded-2xl border border-gray-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#ECD5AB] hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECD5AB]/60 text-[#7D582E] transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#5f421f] px-6 py-24 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]">Growing With Purpose</span>
            <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
              Building our track record through
              <span className="font-bold text-[#ECD5AB]"> thoughtful delivery</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              We are focused on earning trust one engagement at a time through transparent collaboration, practical solutions, and results clients can evaluate for themselves.
            </p>
          </div>

          <div className="space-y-4">
            {commitments.map((commitment, index) => (
              <div key={commitment} className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ECD5AB] text-sm font-bold text-[#5f421f]">
                  {index + 1}
                </span>
                <p className="pt-1 leading-relaxed text-white/85">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#faf7f2] px-6 py-12 text-center md:px-12">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Let&apos;s solve something meaningful.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
            Tell us about the business challenge you are working through, and we will help you identify a practical next step.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#7D582E] px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6a4a26] hover:shadow-xl"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
