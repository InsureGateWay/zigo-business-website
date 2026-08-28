import React from 'react';
import { Activity, Cloud, Database, Network, Server, ShieldCheck, Workflow } from 'lucide-react';
import SolutionPageTemplate from './SolutionPageTemplate';

const offerings = [
  {
    icon: Cloud,
    title: 'Cloud Foundations',
    description: 'Establish an organized cloud environment with the policies, connectivity, and visibility needed for controlled growth.',
    features: ['Account and subscription structure', 'Network and connectivity design', 'Policy baseline', 'Cost visibility'],
  },
  {
    icon: Server,
    title: 'Application Hosting',
    description: 'Choose and configure hosting patterns that suit each application, team, and operational requirement.',
    features: ['Compute, containers, and serverless', 'Environment separation', 'Release support', 'Service observability'],
  },
  {
    icon: Database,
    title: 'Data and Backup Resilience',
    description: 'Protect important workloads with recovery objectives, backup controls, and restoration processes that can be tested.',
    features: ['Backup strategy', 'Recovery objectives', 'Data replication', 'Restore testing'],
  },
  {
    icon: Network,
    title: 'Hybrid Connectivity',
    description: 'Connect cloud and existing environments while supporting identity, migration, and day-to-day operations.',
    features: ['Secure connectivity', 'Identity integration', 'Migration coexistence', 'Network monitoring'],
  },
];

const useCases = [
  {
    title: 'Move priority workloads',
    description: 'Assess dependencies, sequence migration, and select a practical hosting model for applications that need to change.',
  },
  {
    title: 'Improve resilience and recovery',
    description: 'Define what must be restored, how quickly it is needed, and how recovery procedures will be verified.',
  },
  {
    title: 'Control cloud cost and usage',
    description: 'Give owners clearer visibility into resources, spending, and operational responsibility across environments.',
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: 'Security from the foundation',
    description: 'Identity, network boundaries, data protection, and policy controls are considered as part of the initial design.',
  },
  {
    icon: Activity,
    title: 'Operational visibility',
    description: 'Monitoring, ownership, and recovery processes are designed alongside the infrastructure they support.',
  },
  {
    icon: Workflow,
    title: 'Fit before complexity',
    description: 'Architecture choices reflect the workload and team, avoiding services that add complexity without a clear benefit.',
  },
];

function CloudProducts() {
  return (
    <SolutionPageTemplate
      eyebrow="Cloud Solutions"
      title="Build cloud foundations that"
      highlightedTitle="support change without losing control."
      description="Modernise infrastructure with a clear path from assessment to operation, balancing flexibility, resilience, security, and cost visibility."
      heroIcon={Cloud}
      offerings={offerings}
      useCases={useCases}
      principles={principles}
      ctaTitle="Planning a cloud move or modernization?"
      ctaDescription="We can help you assess the workload, dependencies, risks, and operating model before committing to a migration path."
    />
  );
}

export default CloudProducts;
