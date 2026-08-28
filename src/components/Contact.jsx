import React, { useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  MessageSquareText,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const contactEmail = 'enterprise@zigoservices.com';

const nextSteps = [
  {
    icon: MessageSquareText,
    title: 'We review your request',
    description: 'We look at the challenge, intended outcome, and any context you provide.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'We identify the right specialist',
    description: 'Your enquiry is directed to someone familiar with the relevant service or solution area.',
  },
  {
    icon: CheckCircle,
    title: 'We agree a practical next step',
    description: 'That may be a short discovery call, a request for more detail, or clear guidance on fit.',
  },
];

function Contact() {
  const [searchParams] = useSearchParams();
  const isPartnership = searchParams.get('enquiry') === 'partnership';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: '',
    partnershipType: '',
    capabilities: '',
    engagementStage: '',
    startDate: '',
    deliveryLocation: '',
    confidentiality: '',
  });

  const handleChange = ({ target }) => {
    setFormData((current) => ({ ...current, [target.name]: target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = isPartnership
      ? `Delivery partnership enquiry from ${formData.name}`
      : formData.interest
      ? `${formData.interest} enquiry from ${formData.name}`
      : `Website enquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Organisation: ${formData.organization || 'Not provided'}`,
      `Area of interest: ${formData.interest || 'Not selected'}`,
      ...(isPartnership ? [
        `Partnership type: ${formData.partnershipType || 'Not selected'}`,
        `Required capabilities: ${formData.capabilities || 'Not provided'}`,
        `Engagement stage: ${formData.engagementStage || 'Not selected'}`,
        `Expected start date: ${formData.startDate || 'Not provided'}`,
        `Delivery location: ${formData.deliveryLocation || 'Not provided'}`,
        `Confidentiality requirements: ${formData.confidentiality || 'Not provided'}`,
      ] : []),
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-[#5f421f] px-6 py-20 text-white md:py-28">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-48 -left-28 h-[28rem] w-[28rem] rounded-full bg-[#ECD5AB]/10" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]">Contact Zigo Business Solutions</span>
            <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight md:text-6xl">
              Tell us what you need to <span className="font-bold text-[#ECD5AB]">solve or improve.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Share the business challenge, the outcome you are working toward, and where you need support. We will help you identify a sensible next step.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ECD5AB] px-7 py-3.5 font-semibold text-[#5f421f] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
            >
              Email our team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <aside className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm md:p-9" aria-label="Contact information">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECD5AB] text-[#5f421f]">
              <Mail className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold">Start by email</h2>
            <a href={`mailto:${contactEmail}`} className="mt-3 block text-lg text-[#ECD5AB] underline-offset-4 hover:underline">
              {contactEmail}
            </a>
            <a href='tel:+2347033033047' className='mt-3 flex items-center gap-2 text-lg text-[#ECD5AB] underline-offset-4 hover:underline'>
              <Phone className='h-5 w-5' /> +234 703 303 3047
            </a>
            <div className='mt-5 border-t border-white/15 pt-5'>
              <p className='text-sm font-semibold uppercase tracking-widest text-[#ECD5AB]'>Registered office</p>
              <address className='mt-2 not-italic leading-relaxed text-white/75'>10 Gooddy Street, Good Luck Estate, off Iwofe Road, Port Harcourt, Rivers State, Nigeria</address>
              <p className='mt-3 text-sm text-white/60'>Company registration no. 9394101</p>
            </div>
            <p className="mt-5 border-t border-white/15 pt-5 leading-relaxed text-white/70">
              We have intentionally listed only verified contact information. Meeting details can be agreed directly once we understand your request.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">{isPartnership ? 'Delivery Partnership Enquiry' : 'Project Enquiry'}</span>
            <h2 className="mt-4 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
              {isPartnership ? <>Give us enough context to make the <span className="font-bold text-[#7D582E]">partnership conversation useful.</span></> : <>Give us enough context to make the <span className="font-bold text-[#7D582E]">first conversation useful.</span></>}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              {isPartnership ? 'Tell us the engagement stage, delivery model, capability required and any confidentiality considerations.' : 'You do not need a finished brief. A clear description of the current problem, affected teams, and desired outcome is a strong starting point.'}
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#7D582E]" aria-hidden="true" />
                <p>Do not include passwords, access keys, or confidential production data.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#7D582E]" aria-hidden="true" />
                <p>If there is a target date, include it so we can discuss realistic timing.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-[#faf7f2] p-6 shadow-sm md:p-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Full name <span className="text-[#7D582E]">*</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50"
                  />
                </label>
                <label className="block text-sm font-semibold text-gray-800">
                  Work email <span className="text-[#7D582E]">*</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50"
                  />
                </label>
              </div>

              {isPartnership && <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-gray-800">Partnership type<select name="partnershipType" value={formData.partnershipType} onChange={handleChange} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50"><option value="">Select an option</option><option>Specialist work package</option><option>Co-delivery</option><option>Technical augmentation</option><option>Discovery or pilot</option><option>Integration support</option></select></label>
                  <label className="block text-sm font-semibold text-gray-800">Engagement stage<select name="engagementStage" value={formData.engagementStage} onChange={handleChange} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50"><option value="">Select an option</option><option>Early discovery</option><option>Proposal or bid stage</option><option>Delivery in progress</option><option>Planned programme</option></select></label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-gray-800">Required capabilities<input type="text" name="capabilities" value={formData.capabilities} onChange={handleChange} placeholder="e.g. data engineering, AI integration" className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-gray-400 focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50" /></label>
                  <label className="block text-sm font-semibold text-gray-800">Expected start date<input type="text" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="e.g. October 2026" className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-gray-400 focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50" /></label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-gray-800">Delivery location<input type="text" name="deliveryLocation" value={formData.deliveryLocation} onChange={handleChange} placeholder="Remote, onsite or hybrid" className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-gray-400 focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50" /></label>
                  <label className="block text-sm font-semibold text-gray-800">Confidentiality requirements<input type="text" name="confidentiality" value={formData.confidentiality} onChange={handleChange} placeholder="e.g. NDA required" className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-gray-400 focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50" /></label>
                </div>
              </>}

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Organisation
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    autoComplete="organization"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50"
                  />
                </label>
                <label className="block text-sm font-semibold text-gray-800">
                  Area of interest
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50"
                  >
                    <option value="">Select an option</option>
                    <option>AI Readiness Assessment</option>
                    <option>Enterprise AI Platforms</option>
                    <option>AI Governance & Security</option>
                    <option>AI Agents & Automation</option>
                    <option>Data & Integration</option>
                    <option>Managed AI Support</option>
                    <option>Data Engineering</option>
                    <option>Power BI / Analytics</option>
                    <option>Technology Partnership</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <label className="block text-sm font-semibold text-gray-800">
                {isPartnership ? 'Partnership context' : 'What would you like to solve?'} <span className="text-[#7D582E]">*</span>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={isPartnership ? 'Describe the client context, intended outcome, scope and any important constraints.' : 'Describe the current challenge, desired outcome, and any important timing.'}
                  className="mt-2 w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-gray-400 focus:border-[#7D582E] focus:ring-2 focus:ring-[#ECD5AB]/50"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7D582E] px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6a4a26] hover:shadow-xl sm:w-auto"
              >
                Prepare email
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="text-sm leading-relaxed text-gray-500">
                This button opens your email application with the enquiry filled in. Your message is sent only after you review and send it there.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7D582E]">What Happens Next</span>
            <h2 className="mt-4 text-4xl font-light text-gray-900 md:text-5xl">
              A clear and useful <span className="font-bold text-[#7D582E]">first response</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {nextSteps.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="rounded-3xl border border-[#ECD5AB]/55 bg-white p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECD5AB]/60 text-[#7D582E]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-[#7D582E]/35">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
