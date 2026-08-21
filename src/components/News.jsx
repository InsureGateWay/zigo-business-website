import React from 'react';
import { ArrowRight, BarChart3, BrainCircuit, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';

const insights = [
  {
    title: 'How AI Can Improve Everyday Business Operations',
    description:
      'Discover practical ways to automate repetitive work, improve customer service, and help your teams make faster decisions.',
    icon: BrainCircuit,
    label: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop&q=80',
  },
  {
    title: 'Building a Secure and Scalable Cloud Environment',
    description:
      'Learn what to consider when moving business systems and data to the cloud without compromising security or reliability.',
    icon: CloudCog,
    label: 'Cloud & Security',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=600&fit=crop&q=80',
  },
  {
    title: 'Turning Business Data into Better Decisions',
    description:
      'See how clear reporting and analytics can reveal opportunities, reduce risk, and support confident business growth.',
    icon: BarChart3,
    label: 'Data & Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=80',
  },
];

function News() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span
            className="inline-block rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-widest"
            style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}
          >
            Business Technology Insights
          </span>
          <h2 className="mt-6 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
            Insights for <span className="font-bold text-[#7D582E]">Growing Businesses</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Practical guidance to help your business use technology securely, efficiently, and with purpose.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {insights.map((insight) => {
            const Icon = insight.icon;

            return (
              <article
                key={insight.title}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={insight.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-[#7D582E] shadow-sm">
                    <Icon className="h-4 w-4" />
                    {insight.label}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                    {insight.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-500">{insight.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-semibold text-[#7D582E] transition-colors hover:text-[#5f421f]"
                  >
                    Talk to an expert
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default News;
