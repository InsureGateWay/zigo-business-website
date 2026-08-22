import React from 'react';
import { AlertTriangle, Eye, Key, Lock, ShieldCheck, Target, Users } from 'lucide-react';
import SolutionPageTemplate from './SolutionPageTemplate';

const offerings = [
  {
    icon: ShieldCheck,
    title: 'Security Posture and Risk',
    description: 'Understand the assets, exposures, and operating gaps that matter most before choosing where to invest.',
    features: ['Asset and exposure review', 'Risk prioritization', 'Control gap assessment', 'Improvement roadmap'],
  },
  {
    icon: Key,
    title: 'Identity and Access',
    description: 'Strengthen how people and systems gain access to applications, infrastructure, and sensitive information.',
    features: ['Identity architecture', 'Role and access review', 'Privileged access controls', 'Authentication improvements'],
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Apply proportionate safeguards based on where important data lives, how it moves, and who needs it.',
    features: ['Data discovery and classification', 'Encryption planning', 'Access boundaries', 'Retention and handling controls'],
  },
  {
    icon: Eye,
    title: 'Detection and Response',
    description: 'Improve visibility into suspicious activity and establish a practical process for investigation and recovery.',
    features: ['Monitoring priorities', 'Alert triage workflows', 'Incident playbooks', 'Recovery readiness'],
  },
];

const useCases = [
  {
    title: 'Reduce the exposed attack surface',
    description: 'Identify avoidable exposure, outdated controls, and high-impact weaknesses, then sequence remediation by risk.',
  },
  {
    title: 'Improve access control',
    description: 'Clarify who can access critical systems, remove unnecessary privileges, and strengthen authentication paths.',
  },
  {
    title: 'Prepare for security incidents',
    description: 'Define responsibilities, escalation paths, evidence needs, and recovery actions before a disruptive event occurs.',
  },
];

const principles = [
  {
    icon: Target,
    title: 'Risk-based scope',
    description: 'Controls are prioritized around credible threats, important assets, and business consequences—not a generic checklist.',
  },
  {
    icon: Users,
    title: 'Least privilege',
    description: 'People and systems receive the access needed for their role, with clearer ownership and review of elevated permissions.',
  },
  {
    icon: AlertTriangle,
    title: 'Operational readiness',
    description: 'Security design includes the monitoring, response, communication, and recovery practices needed when controls are tested.',
  },
];

function SecuritySuite() {
  return (
    <SolutionPageTemplate
      eyebrow="Security Solutions"
      title="Protect the systems and information"
      highlightedTitle="your operations depend on."
      description="Build a proportionate security program around real business risk, clearer access, stronger data safeguards, and practical incident readiness."
      heroIcon={ShieldCheck}
      offerings={offerings}
      useCases={useCases}
      principles={principles}
      ctaTitle="Need a clearer security starting point?"
      ctaDescription="We can help you identify the most important exposures and turn them into a focused, achievable improvement plan."
    />
  );
}

export default SecuritySuite;
