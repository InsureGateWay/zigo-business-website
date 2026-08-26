import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://www.zigoservices.com';
const siteName = 'Zigo Business Solutions Ltd';
const defaultImage = `${siteUrl}/zigo-business-solutions-logo.png`;

const pages = {
  '/': ['Enterprise AI & Microsoft Copilot Services Nigeria | Zigo Business', 'Zigo Business Solutions helps organisations in Nigeria and Africa securely adopt Microsoft Copilot, ChatGPT and enterprise AI through readiness, governance, integration, automation, training and managed support.', 'WebPage'],
  '/about': ['About Zigo Business Solutions | Technology Partner in Nigeria', 'Learn how Zigo Business Solutions delivers practical, secure and scalable data, AI, cloud and digital transformation services for organisations across Africa.', 'AboutPage'],
  '/services': ['Enterprise Technology Services in Nigeria | Zigo Business', 'Explore Zigo Business services for data, artificial intelligence, cloud infrastructure, applications, digital platforms and IT consulting.', 'CollectionPage'],
  '/services/data-services': ['Enterprise Data Services & Analytics | Zigo Business', 'Build reliable data foundations with enterprise data engineering, integration, governance, analytics and business intelligence services from Zigo Business.', 'Service'],
  '/services/ai-services': ['Enterprise AI Implementation Services | Zigo Business', 'Assess, secure, deploy, integrate and operate Microsoft Copilot, ChatGPT and other enterprise AI platforms with Zigo Business Solutions.', 'Service'],
  '/services/microsoft-copilot': ['Microsoft Copilot Consulting & Adoption Nigeria | Zigo Business', 'Get more value from Microsoft Copilot with readiness, security, deployment, Copilot Studio, integration, training and managed support.', 'Service'],
  '/services/ai-readiness': ['Enterprise AI Readiness Assessment | Zigo Business', 'Identify valuable enterprise AI use cases and assess your data, technology, security and organisational readiness with a practical adoption roadmap.', 'Service'],
  '/services/ai-governance': ['AI Governance & Security Services | Zigo Business', 'Establish policies, identity, permissions, information protection, DLP and responsible controls for secure enterprise AI adoption.', 'Service'],
  '/services/managed-ai-services': ['Managed Enterprise AI Services | Zigo Business', 'Operate and improve enterprise AI with adoption monitoring, agent support, governance reviews, optimisation and ongoing technical support.', 'Service'],
  '/partners': ['Enterprise Technology Delivery Partnerships | Zigo Business', 'Extend your delivery capability across enterprise AI, Microsoft technologies, data engineering, analytics, cloud and systems integration with Zigo.', 'WebPage'],
  '/services/infrastructure-services': ['Cloud & IT Infrastructure Services | Zigo Business', 'Modernise and operate secure, resilient cloud, network and data-centre infrastructure with Zigo Business Solutions.', 'Service'],
  '/services/applications-services': ['Business Application Development Services | Zigo Business', 'Design, build, integrate and modernise secure business applications that support efficient operations and sustainable growth.', 'Service'],
  '/services/platforms-services': ['Digital Platform Services & Integration | Zigo Business', 'Connect teams, workflows and systems with scalable digital platforms, integrations and managed platform services.', 'Service'],
  '/services/it-consulting': ['IT Consulting & Digital Strategy Nigeria | Zigo Business', 'Turn business priorities into practical technology roadmaps with IT strategy, architecture, transformation and advisory services.', 'Service'],
  '/products/data-platforms': ['Enterprise Data Platform Solutions | Zigo Business', 'Unify, govern and activate enterprise information with secure, scalable data platform solutions designed for reporting, analytics and AI.', 'Service'],
  '/products/ai-solutions': ['Responsible Enterprise AI Solutions | Zigo Business', 'Deploy responsible AI solutions for knowledge, automation and decision support with appropriate security, governance and human oversight.', 'Service'],
  '/products/cloud-products': ['Secure Cloud Solutions for Enterprises | Zigo Business', 'Build secure, governed and cost-aware cloud environments that support reliable operations and business growth.', 'Service'],
  '/products/security-suite': ['Cybersecurity Solutions for Businesses | Zigo Business', 'Protect identities, systems, networks and data with practical cybersecurity solutions designed for modern enterprise environments.', 'Service'],
  '/products/analytics-tools': ['Business Intelligence & Analytics Solutions | Zigo Business', 'Transform operational data into useful dashboards, reports and decision-ready insights with enterprise analytics solutions.', 'Service'],
  '/contact': ['Contact Zigo Business Solutions | Book a Consultation', 'Contact Zigo Business Solutions to discuss your data, AI, cloud, cybersecurity, applications or digital transformation requirements.', 'ContactPage'],
  '/environmental-policy': ['Corporate Environmental Policy | Zigo Business Solutions', 'Read Zigo Business Solutions Ltd’s commitments to responsible resource use, pollution prevention, lawful waste management and sustainable technology.', 'WebPage'],
  '/sustainability-statement': ['Corporate Sustainability Statement | Zigo Business Solutions', 'Read how Zigo Business Solutions approaches environmental responsibility, human rights, ethical business and responsible technology.', 'WebPage'],
};

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const [title, description, pageType] = pages[pathname] || [
      'Page Not Found | Zigo Business Solutions',
      'The requested page could not be found on the Zigo Business Solutions website.',
      'WebPage',
    ];
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;
    const isKnownPage = Boolean(pages[pathname]);

    document.title = title;
    document.documentElement.lang = 'en-NG';
    setMeta('meta[name="description"]', { name: 'description', content: description });
    setMeta('meta[name="robots"]', { name: 'robots', content: isKnownPage ? 'index, follow, max-image-preview:large' : 'noindex, follow' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: defaultImage });
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'Zigo Business Solutions logo' });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_NG' });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: defaultImage });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const organization = {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: defaultImage,
      email: 'admin@zigoservices.com',
      areaServed: ['Nigeria', 'Africa'],
    };
    const graph = [organization, {
      '@type': pageType,
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      inLanguage: 'en-NG',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      ...(pageType === 'Service' ? { provider: { '@id': `${siteUrl}/#organization` }, areaServed: ['Nigeria', 'Africa'] } : {}),
    }, {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-NG',
    }];
    let script = document.head.querySelector('#zigo-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'zigo-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  }, [pathname]);

  return null;
}
