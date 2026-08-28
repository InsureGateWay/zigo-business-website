import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Insights', to: '/insights' },
  { name: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { name: 'Data Services', to: '/services/data-services' },
  { name: 'Enterprise AI Services', to: '/services/ai-services' },
  { name: 'AI Governance', to: '/services/ai-governance' },
  { name: 'Managed AI Services', to: '/services/managed-ai-services' },
  { name: 'Infrastructure Services', to: '/services/infrastructure-services' },
  { name: 'Applications Services', to: '/services/applications-services' },
  { name: 'Platform Services', to: '/services/platforms-services' },
  { name: 'IT Consulting', to: '/services/it-consulting' },
];

const policyLinks = [
  { name: 'Environmental Policy', to: '/environmental-policy' },
  { name: 'Sustainability Statement', to: '/sustainability-statement' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="mb-6 flex w-fit items-center rounded-2xl bg-white px-4 py-3">
              <img
                src="/zigo-business-solutions-logo.png"
                alt="Zigo Business Solutions Logo"
                className="h-16 w-auto max-w-[280px] object-contain"
              />
            </Link>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-400">
              Enterprise AI, data, cloud, security, and digital-transformation services designed around practical business outcomes.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:enterprise@zigoservices.com"
                className="flex w-fit items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[#ECD5AB]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#ECD5AB]" strokeWidth={1.5} />
                enterprise@zigoservices.com
              </a>
              <a href='tel:+2347033033047' className='flex w-fit items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[#ECD5AB]'>
                <Phone className='h-5 w-5 shrink-0 text-[#ECD5AB]' strokeWidth={1.5} />
                +234 703 303 3047
              </a>
              <address className='max-w-md text-sm not-italic leading-relaxed text-gray-400'>10 Gooddy Street, Good Luck Estate, off Iwofe Road, Port Harcourt, Rivers State, Nigeria</address>
              <p className='text-sm text-gray-400'>Company registration no. 9394101</p>
            </div>
            <div className='mt-6 flex items-center gap-3' aria-label='Zigo Business Solutions social profiles'>
              <a href='https://www.linkedin.com/company/zigo-business-solutions-ltd/' target='_blank' rel='noopener noreferrer' aria-label='Zigo Business Solutions on LinkedIn' className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-bold text-gray-300 transition hover:border-[#ECD5AB] hover:text-[#ECD5AB]'>in</a>
              <a href='https://x.com/ZigoBusiness' target='_blank' rel='noopener noreferrer' aria-label='Zigo Business Solutions on X' className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-[#ECD5AB] hover:text-[#ECD5AB]'><span className='text-sm font-bold'>X</span></a>
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Footer navigation">
            <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2.5">
              {quickLinks.map(({ name, to }) => (
                <li key={to}>
                  <Link to={to} className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#ECD5AB]">
                    <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={2} />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Service navigation">
            <h2 className="mb-4 text-lg font-semibold text-white">Our Services</h2>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ name, to }) => (
                <li key={to}>
                  <Link to={to} className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#ECD5AB]">
                    <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={2} />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="mb-4 text-lg font-semibold text-white">Start a Conversation</h2>
            <p className="mb-5 text-sm leading-relaxed text-gray-400">
              Tell us about the business challenge you want technology to solve.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#7D582E] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6a4a26] hover:shadow-lg"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-gray-400 sm:flex-row sm:text-left">
          <p>&copy; {currentYear} Zigo Business Solutions LTD. All rights reserved.</p>
          <nav aria-label="Corporate policies">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
              {policyLinks.map(({ name, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="transition-colors hover:text-[#ECD5AB]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
