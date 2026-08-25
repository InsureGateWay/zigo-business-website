import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { name: 'Data Services', to: '/services/data-services' },
  { name: 'AI Services', to: '/services/ai-services' },
  { name: 'Infrastructure Services', to: '/services/infrastructure-services' },
  { name: 'Applications Services', to: '/services/applications-services' },
  { name: 'Platform Services', to: '/services/platforms-services' },
  { name: 'IT Consulting', to: '/services/it-consulting' },
];

const policyLinks = [
  { name: 'Environmental Policy', href: 'https://zigoai.app/environmental-policy' },
  { name: 'Sustainability Statement', href: 'https://zigoai.app/sustainability-statement' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="mb-6 flex w-fit items-center gap-3">
              <img
                src="/logo512.png"
                alt="Zigo Business Solutions Logo"
                className="h-12 w-12 object-contain"
              />
              <div className="leading-tight">
                <span className="block text-xl font-semibold tracking-wide text-white">
                  Zigo Business Solutions
                </span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-[0.2em] text-[#ECD5AB]">Limited</span>
              </div>
            </Link>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-400">
              Practical data, AI, cloud, security, and digital-platform solutions designed around real business needs.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:admin@zigoservices.com"
                className="flex w-fit items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[#ECD5AB]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#ECD5AB]" strokeWidth={1.5} />
                admin@zigoservices.com
              </a>
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
              {policyLinks.map(({ name, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="transition-colors hover:text-[#ECD5AB]"
                  >
                    {name}
                  </a>
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
