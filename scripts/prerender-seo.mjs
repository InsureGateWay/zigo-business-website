import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/(.:\/)/, '$1');
const dist = join(root, 'dist');
const template = await readFile(join(dist, 'index.html'), 'utf8');
const baseUrl = 'https://www.zigoservices.com';

const pages = {
  '/': ['AI, Data, Cloud & Software Solutions | Zigo Business', 'From business challenge to working technology. We design, build and support practical AI, data, cloud and software solutions around your organisation.'],
  '/about': ['About Zigo Business Solutions | Technology Partner in Nigeria', 'Learn how Zigo Business Solutions delivers practical, secure and scalable data, AI, cloud and digital transformation services for organisations across Africa.'],
  '/services': ['Enterprise Technology Services in Nigeria | Zigo Business', 'Explore Zigo Business services for data, artificial intelligence, cloud infrastructure, applications, digital platforms and IT consulting.'],
  '/services/data-services': ['Enterprise Data Services & Analytics | Zigo Business', 'Build reliable data foundations with enterprise data engineering, integration, governance, analytics and business intelligence services from Zigo Business.'],
  '/services/ai-services': ['Enterprise AI Implementation Services | Zigo Business', 'Assess, secure, deploy, integrate and operate enterprise AI platforms selected around your organisation’s data, systems, governance and business requirements.'],
  '/services/ai-readiness': ['Enterprise AI Readiness Assessment | Zigo Business', 'Identify valuable enterprise AI use cases and assess your data, technology, security and organisational readiness with a practical adoption roadmap.'],
  '/services/ai-governance': ['AI Governance & Security Services | Zigo Business', 'Establish policies, identity, permissions, information protection, DLP and responsible controls for secure enterprise AI adoption.'],
  '/services/managed-ai-services': ['Managed Enterprise AI Services | Zigo Business', 'Operate and improve enterprise AI with adoption monitoring, agent support, governance reviews, optimisation and ongoing technical support.'],
  '/partners': ['Partner With Zigo | Enterprise Technology Delivery', 'Add focused enterprise AI, data engineering, integration and application expertise to client engagements through accountable delivery work packages.'],
  '/services/infrastructure-services': ['Cloud & IT Infrastructure Services | Zigo Business', 'Modernise and operate secure, resilient cloud, network and data-centre infrastructure with Zigo Business Solutions.'],
  '/services/applications-services': ['Business Application Development Services | Zigo Business', 'Design, build, integrate and modernise secure business applications that support efficient operations and sustainable growth.'],
  '/services/platforms-services': ['Digital Platform Services & Integration | Zigo Business', 'Connect teams, workflows and systems with scalable digital platforms, integrations and managed platform services.'],
  '/services/it-consulting': ['IT Consulting & Digital Strategy Nigeria | Zigo Business', 'Turn business priorities into practical technology roadmaps with IT strategy, architecture, transformation and advisory services.'],
  '/products/data-platforms': ['Enterprise Data Platform Solutions | Zigo Business', 'Unify, govern and activate enterprise information with secure, scalable data platform solutions designed for reporting, analytics and AI.'],
  '/products/ai-solutions': ['Responsible Enterprise AI Solutions | Zigo Business', 'Deploy responsible AI solutions for knowledge, automation and decision support with appropriate security, governance and human oversight.'],
  '/products/cloud-products': ['Secure Cloud Solutions for Enterprises | Zigo Business', 'Build secure, governed and cost-aware cloud environments that support reliable operations and business growth.'],
  '/products/security-suite': ['Cybersecurity Solutions for Businesses | Zigo Business', 'Protect identities, systems, networks and data with practical cybersecurity solutions designed for modern enterprise environments.'],
  '/products/analytics-tools': ['Business Intelligence & Analytics Solutions | Zigo Business', 'Transform operational data into useful dashboards, reports and decision-ready insights with enterprise analytics solutions.'],
  '/contact': ['Contact Zigo Business Solutions | Book a Consultation', 'Contact Zigo Business Solutions to discuss your data, AI, cloud, cybersecurity, applications or digital transformation requirements.'],
  '/insights': ['Enterprise AI & Technology Insights | Zigo Business', 'Read practical perspectives from Zigo Business Solutions on enterprise AI, document intelligence, data, governance and technology delivery.'],
  '/environmental-policy': ['Corporate Environmental Policy | Zigo Business Solutions', 'Read Zigo Business Solutions Ltd’s commitments to responsible resource use, pollution prevention, lawful waste management and sustainable technology.'],
  '/sustainability-statement': ['Corporate Sustainability Statement | Zigo Business Solutions', 'Read how Zigo Business Solutions approaches environmental responsibility, human rights, ethical business and responsible technology.'],
};

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

for (const [route, [title, description]] of Object.entries(pages)) {
  if (route === '/') continue;
  const url = `${baseUrl}${route}`;
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/, `$1${safeDescription}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/?>)/, `$1${safeTitle}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/?>)/, `$1${safeDescription}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*("\s*\/?>)/, `$1${safeTitle}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*("\s*\/?>)/, `$1${safeDescription}$2`);
  const output = join(dist, route.slice(1), 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}

console.log(`Generated SEO HTML for ${Object.keys(pages).length} routes.`);
