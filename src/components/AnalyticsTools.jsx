import React from 'react';
import { Activity, BarChart3, Database, Gauge, LineChart, SearchCheck, Users } from 'lucide-react';
import SolutionPageTemplate from './SolutionPageTemplate';

const offerings = [
  {
    icon: Gauge,
    title: 'Executive Dashboards',
    description: 'Bring priority measures into a concise view designed around the decisions leaders need to make.',
    features: ['KPI definition', 'Executive scorecards', 'Role-based views', 'Drill-down paths'],
  },
  {
    icon: BarChart3,
    title: 'Operational Reporting',
    description: 'Replace fragmented recurring reports with consistent, refreshable views of day-to-day performance.',
    features: ['Reporting workflow review', 'Automated refresh', 'Exception summaries', 'Scheduled distribution'],
  },
  {
    icon: LineChart,
    title: 'Self-Service Analysis',
    description: 'Give approved users practical ways to explore information without creating competing versions of key measures.',
    features: ['Curated data models', 'Reusable measures', 'Guided exploration', 'Access controls'],
  },
  {
    icon: Activity,
    title: 'Performance Monitoring',
    description: 'Track meaningful changes, thresholds, and trends so teams can respond before issues become harder to manage.',
    features: ['Trend monitoring', 'Threshold alerts', 'Variance analysis', 'Action-oriented views'],
  },
];

const useCases = [
  {
    title: 'Create one view of performance',
    description: 'Align teams around defined measures and a shared view of results across functions, locations, or business units.',
  },
  {
    title: 'Speed up recurring reporting',
    description: 'Reduce manual collection and formatting so analysts can spend more time explaining changes and supporting action.',
  },
  {
    title: 'See exceptions and trends earlier',
    description: 'Highlight material variance and emerging patterns instead of requiring users to search through every figure.',
  },
];

const principles = [
  {
    icon: Database,
    title: 'Consistent definitions',
    description: 'Important measures have agreed meaning, calculation logic, ownership, and context across the organization.',
  },
  {
    icon: SearchCheck,
    title: 'Traceable information',
    description: 'Reports are connected to identifiable sources and quality checks so users can understand and challenge the result.',
  },
  {
    icon: Users,
    title: 'Designed for adoption',
    description: 'The experience reflects user roles, reporting habits, and the actions each audience needs to take next.',
  },
];

function AnalyticsTools() {
  return (
    <SolutionPageTemplate
      eyebrow="Analytics Solutions"
      title="Turn business information into"
      highlightedTitle="clearer, faster decisions."
      description="Create trusted reporting and analytics experiences that connect consistent measures to the questions teams need to answer and the actions they need to take."
      heroIcon={BarChart3}
      offerings={offerings}
      useCases={useCases}
      principles={principles}
      ctaTitle="Ready to improve a reporting process?"
      ctaDescription="Show us the decisions, measures, and manual effort involved, and we will help you define a practical analytics starting point."
    />
  );
}

export default AnalyticsTools;
