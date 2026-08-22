import React from 'react';
import { BarChart3, Cloud, Database, Network, ShieldCheck, Users, Workflow } from 'lucide-react';
import SolutionPageTemplate from './SolutionPageTemplate';

const offerings = [
  {
    icon: Database,
    title: 'Data Warehouse Foundations',
    description: 'Bring trusted operational and analytical data into a structured environment for reporting and analysis.',
    features: ['Source integration', 'Data modelling', 'Scheduled or near-real-time loading', 'Performance planning'],
  },
  {
    icon: Cloud,
    title: 'Data Lake Architecture',
    description: 'Create a governed foundation for structured and unstructured information without forcing every use case into one format.',
    features: ['Flexible storage layers', 'Metadata and cataloguing', 'Lifecycle management', 'Cloud-aligned architecture'],
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Turn reliable data into dashboards, operational reporting, and analysis suited to different decision-makers.',
    features: ['Executive dashboards', 'Operational reporting', 'Metric definitions', 'Self-service analysis'],
  },
  {
    icon: Network,
    title: 'Data Integration',
    description: 'Connect applications and data sources through maintainable pipelines, interfaces, and quality controls.',
    features: ['Batch and streaming pipelines', 'API integration', 'Data-quality checks', 'Monitoring and recovery'],
  },
];

const useCases = [
  {
    title: 'Create one performance view',
    description: 'Bring fragmented operational data together so teams use consistent metrics and can trace where information came from.',
  },
  {
    title: 'Reduce manual reporting',
    description: 'Replace recurring spreadsheet assembly with governed pipelines and repeatable reporting workflows.',
  },
  {
    title: 'Prepare data for AI',
    description: 'Improve accessibility, quality, metadata, and governance before introducing advanced analytics or AI workloads.',
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: 'Governed access',
    description: 'Permissions, lineage, and appropriate handling are designed into the platform rather than added later.',
  },
  {
    icon: Workflow,
    title: 'Reliable operations',
    description: 'Pipelines include monitoring, recovery paths, and ownership so teams can depend on the data they receive.',
  },
  {
    icon: Users,
    title: 'Usable by teams',
    description: 'The platform is shaped around the questions, skills, and workflows of the people who will use it.',
  },
];

function DataPlatforms() {
  return (
    <SolutionPageTemplate
      eyebrow="Data Platform Solutions"
      title="Turn scattered data into a"
      highlightedTitle="trusted business foundation."
      description="Design a practical data platform that connects sources, improves information quality, and supports reporting, analytics, and future AI use cases."
      heroIcon={Database}
      offerings={offerings}
      useCases={useCases}
      principles={principles}
      ctaTitle="Ready to create a clearer data foundation?"
      ctaDescription="Start with the reporting, integration, or governance problem creating the most friction today."
    />
  );
}

export default DataPlatforms;
