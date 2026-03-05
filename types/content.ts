// Shared link type
export interface ContentLink {
  label: string;
  href: string;
}

// ─── home.mdx ────────────────────────────────────────────────────────────────

export interface HeroContent {
  headline: string;
  subCopy: string;
  ctaPrimary: ContentLink;
  ctaSecondary: ContentLink;
}

export interface AboutDuniContent {
  sectionLabel: string;
  headline: string;
  body: string;
  link: ContentLink;
}

export interface GovernancePhase {
  number: string;
  label: string;
  duration: string;
  description: string;
}

export interface GovernanceIntroContent {
  sectionLabel: string;
  headline: string;
  body: string;
  link: ContentLink;
  phases: GovernancePhase[];
}

export interface ResourceCard {
  title: string;
  description: string;
  href: string;
}

export interface ResourcesContent {
  sectionLabel: string;
  cards: ResourceCard[];
}

// ─── duni.mdx ────────────────────────────────────────────────────────────────

export interface DuniHeroContent {
  headline: string;
  subCopy: string;
}

export interface FeatureItem {
  number: string;
  title: string;
  body: string;
}

export interface FeaturesContent {
  sectionLabel: string;
  headline: string;
  items: FeatureItem[];
}

export interface MembershipContent {
  headline: string;
  body: string;
  callout: string;
  link: ContentLink;
}

export interface OperationsContent {
  headline: string;
  body: string;
  link: ContentLink;
}

export interface ResourceLinkItem {
  label: string;
  href: string;
  external: boolean;
  pdf?: boolean;
}

export interface ResourceGroup {
  label: string;
  items: ResourceLinkItem[];
}

export interface DuniResourcesContent {
  sectionLabel: string;
  headline: string;
  groups: ResourceGroup[];
}

// ─── governance.mdx ──────────────────────────────────────────────────────────

export interface GovernanceIntro {
  headline: string;
  body: string;
}

export interface GovernanceOverview {
  intro: string;
  controlsIntro: string;
  controls: string[];
  delegateNote: string;
  delegateLink: ContentLink;
  delegateNoteSuffix: string;
}

export interface GovernanceDuniInfo {
  headline: string;
  body: string;
  link: ContentLink;
}

export interface FullPhase {
  number: string;
  label: string;
  duration: string;
  location: string;
  requirement: string | null;
  purpose: string;
  steps: string[];
  note: string;
}

export interface ProcessChanges {
  headline: string;
  duration: string;
  location: string;
  requirement: string;
  body: string;
}

export interface GovernanceTool {
  name: string;
  description: string;
  href: string;
}

// ─── delegate.mdx ────────────────────────────────────────────────────────────

export interface DelegateIntro {
  headline: string;
  body: string;
  ctaAgora: ContentLink;
  ctaTally: ContentLink;
}

export interface DelegationExplainer {
  headline: string;
  body: string;
  callout: string;
  requirements: string[];
}

export interface DelegateOption {
  label: string;
  steps: string[];
  confirmation: string;
}

export interface AgoraSteps {
  platform: string;
  href: string;
  options: DelegateOption[];
}

export interface TallySteps {
  platform: string;
  href: string;
  steps: string[];
}

export interface VotingSection {
  headline: string;
  body: string;
  steps: string[];
}

// ─── faq.mdx ─────────────────────────────────────────────────────────────────

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqSection {
  id: string;
  label: string;
  items: FaqItem[];
}

export interface FaqIntro {
  headline: string;
  body: string;
}

// ─── glossary.mdx ────────────────────────────────────────────────────────────

export interface GlossaryTerm {
  term: string;
  definition: string;
}

// ─── contracts.mdx ───────────────────────────────────────────────────────────

export interface Contract {
  name: string;
  address: string;
  abiLabel: string;
  abiHref: string;
  note?: string;
}

export interface MiscAddress {
  name: string;
  description: string;
  address?: string;
  addresses?: string[];
}
