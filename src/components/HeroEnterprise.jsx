import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, BarChart3, CloudCog, Code2, Database, Link2, Pause, Play, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 'enterprise-ai',
    eyebrow: 'AI, data, cloud and software solutions',
    icon: Sparkles,
    title: 'From business challenge',
    emphasis: 'to working technology.',
    description: 'We design, build and support AI, data, cloud and software solutions around the way your organisation works.',
    supportingDescription: 'From discovery and architecture to implementation, integration and ongoing support, we bring together the people and technology needed to turn ideas and business problems into solutions that work.',
    primary: { label: 'Book a Consultation', to: '/contact' },
    secondary: { label: 'Explore Enterprise AI Services', to: '/services/ai-services' },
    capabilityLine: 'AI & Intelligent Solutions · Data & Analytics · Cloud & Modernisation · Digital Solutions',
    cards: [
      { icon: Sparkles, title: 'Assess', text: 'Experienced discovery and high-value use-case definition' },
      { icon: ShieldCheck, title: 'Control', text: 'Security, governance, scope, and success criteria' },
      { icon: Link2, title: 'Integrate', text: 'AI connected to approved systems, data, and workflows' },
      { icon: BarChart3, title: 'Prove value', text: 'Focused pilots before larger transformation programmes' },
    ],
  },
  {
    id: 'data-technology',
    eyebrow: 'Data and technology services',
    icon: Database,
    title: 'Build the data foundations',
    emphasis: 'your AI and teams can rely on.',
    description: 'We strengthen the data, integration and reporting capabilities that make enterprise AI useful, governed and ready for everyday business decisions.',
    primary: { label: 'Book a Consultation', to: '/contact' },
    secondary: { label: 'Explore Technology Services', to: '/services' },
    capabilityLine: 'Data engineering / Analytics / Secure integration / Automation / Clear accountability',
    cards: [
      { icon: Database, title: 'Data & Analytics', text: 'Reliable pipelines, platforms, reporting, and governance' },
      { icon: CloudCog, title: 'Cloud & Infrastructure', text: 'Secure, resilient, and scalable environments' },
      { icon: Code2, title: 'Applications', text: 'Custom software and connected business workflows' },
      { icon: ShieldCheck, title: 'Cybersecurity', text: 'Protection designed into systems and operations' },
    ],
  },
];

function Action({ action, primary }) {
  if (!action) return null;
  const classes = primary
    ? 'inline-flex items-center justify-center gap-2 rounded-full bg-[#7D582E] px-7 py-3.5 font-semibold text-white hover:bg-[#5f421f]'
    : 'inline-flex items-center justify-center gap-2 rounded-full border border-[#7D582E]/25 px-7 py-3.5 font-semibold text-[#7D582E] hover:border-[#7D582E]';
  return <Link to={action.to} className={classes}>{action.label}{primary && <ArrowRight className='h-4 w-4' />}</Link>;
}

export default function HeroEnterprise() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[active];
  const EyebrowIcon = slide.icon;

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 8000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction) => setActive((current) => (current + direction + slides.length) % slides.length);

  return (
    <section className='relative overflow-hidden bg-white px-6 py-14 md:py-20' aria-roledescription='carousel' aria-label='Zigo Business Solutions capabilities'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(236,213,171,0.45),transparent_32%)]' />
      <div key={slide.id} className='relative mx-auto grid min-h-[570px] max-w-7xl animate-[fadeIn_450ms_ease-out] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]' aria-live='polite'>
        <div>
          <span className='inline-flex items-center gap-2 rounded-full bg-[#faf7f2] px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#7D582E]'><EyebrowIcon className='h-4 w-4' />{slide.eyebrow}</span>
          <h1 className='mt-7 max-w-4xl text-5xl font-light leading-[1.05] text-[#7D582E] md:text-7xl'>{slide.title} <span className='font-bold'>{slide.emphasis}</span></h1>
          <p className='mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl'>{slide.description}</p>
          {slide.supportingDescription && <p className='mt-4 max-w-2xl leading-relaxed text-gray-500 md:text-lg'>{slide.supportingDescription}</p>}
          <div className='mt-8 flex flex-col gap-3 sm:flex-row'><Action action={slide.primary} primary /><Action action={slide.secondary} /></div>
          <p className='mt-7 text-sm font-medium leading-relaxed text-gray-500'>{slide.capabilityLine}</p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2'>
          {slide.cards.map(({ icon: Icon, title, text }, index) => {
            const content = <><div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#7D582E]'><Icon className='h-6 w-6' /></div><h2 className='mt-6 flex items-center gap-2 text-xl font-semibold text-gray-900'>{title}</h2><p className='mt-2 text-sm leading-relaxed text-gray-500'>{text}</p></>;
            const classes = `rounded-3xl border border-[#ECD5AB]/60 bg-[#faf7f2] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${index % 2 ? 'sm:translate-y-7' : ''}`;
            return <article key={title} className={classes}>{content}</article>;
          })}
        </div>
      </div>
      <div className='relative mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-[#ECD5AB]/60 pt-5'>
        <div className='flex items-center gap-2' role='tablist' aria-label='Choose hero slide'>
          {slides.map((item, index) => <button key={item.id} type='button' onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${active === index ? 'w-10 bg-[#7D582E]' : 'w-2.5 bg-[#ECD5AB] hover:bg-[#a87a4a]'}`} aria-label={`Show ${item.eyebrow}`} aria-selected={active === index} role='tab' />)}
        </div>
        <div className='flex items-center gap-2'>
          <button type='button' onClick={() => move(-1)} className='rounded-full border border-[#7D582E]/20 p-2.5 text-[#7D582E] hover:bg-[#faf7f2]' aria-label='Previous slide'><ArrowLeft className='h-5 w-5' /></button>
          <button type='button' onClick={() => setPaused(!paused)} className='rounded-full border border-[#7D582E]/20 p-2.5 text-[#7D582E] hover:bg-[#faf7f2]' aria-label={paused ? 'Resume automatic slides' : 'Pause automatic slides'}>{paused ? <Play className='h-5 w-5' /> : <Pause className='h-5 w-5' />}</button>
          <button type='button' onClick={() => move(1)} className='rounded-full border border-[#7D582E]/20 p-2.5 text-[#7D582E] hover:bg-[#faf7f2]' aria-label='Next slide'><ArrowRight className='h-5 w-5' /></button>
        </div>
      </div>
    </section>
  );
}
