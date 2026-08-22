import React from 'react';
import { BarChart3, Bot, BrainCircuit, FileCheck, FileSearch, ShieldCheck, Users, Workflow } from 'lucide-react';
import SolutionPageTemplate from './SolutionPageTemplate';

const offerings = [
  {
    icon: FileSearch,
    title: 'Document Intelligence',
    description: 'Extract, classify, search, and analyze business documents while keeping answers connected to source evidence.',
    features: ['Document classification', 'Structured extraction', 'Evidence-linked retrieval', 'Permission-aware search'],
  },
  {
    icon: Workflow,
    title: 'Intelligent Automation',
    description: 'Combine workflow rules and AI assistance to reduce repetitive work while preserving human review where it matters.',
    features: ['Workflow assessment', 'Task automation', 'Review and approval steps', 'Exception handling'],
  },
  {
    icon: BarChart3,
    title: 'Predictive Analysis',
    description: 'Use historical data to support forecasting, prioritization, anomaly detection, and scenario exploration.',
    features: ['Forecasting models', 'Pattern detection', 'Risk indicators', 'Model monitoring'],
  },
  {
    icon: Bot,
    title: 'Knowledge Assistants',
    description: 'Give teams a natural-language interface to approved business knowledge, policies, and operational information.',
    features: ['Grounded responses', 'Source references', 'Access-aware retrieval', 'Workflow integration'],
  },
];

const useCases = [
  {
    title: 'Find answers across documents',
    description: 'Help teams locate policies, obligations, records, and supporting evidence without manually searching across folders.',
  },
  {
    title: 'Reduce repetitive review',
    description: 'Pre-screen documents, organize information, and surface exceptions so people can focus on judgment-intensive work.',
  },
  {
    title: 'Prioritize operational action',
    description: 'Use data signals to highlight likely risks, emerging patterns, and cases that require earlier attention.',
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: 'Controlled access',
    description: 'AI experiences respect approved data boundaries, user permissions, and the sensitivity of business information.',
  },
  {
    icon: FileCheck,
    title: 'Evidence before confidence',
    description: 'Important outputs should be reviewable, attributable, and connected to the information that supports them.',
  },
  {
    icon: Users,
    title: 'Human judgment retained',
    description: 'Automation is designed to support people, with review points for decisions carrying material risk or consequence.',
  },
];

function AISolutions() {
  return (
    <SolutionPageTemplate
      eyebrow="AI Solutions"
      title="Apply AI to work that"
      highlightedTitle="benefits from better context."
      description="Move beyond generic demonstrations with focused AI solutions grounded in approved business information, clear workflows, and measurable operating needs."
      heroIcon={BrainCircuit}
      offerings={offerings}
      useCases={useCases}
      principles={principles}
      ctaTitle="Have an AI use case worth testing?"
      ctaDescription="Bring one high-friction workflow or knowledge problem, and we will help you assess a responsible starting point."
    />
  );
}

export default AISolutions;
