import type {
  HeroContent,
  AboutDuniContent,
  GovernanceIntroContent,
  ResourcesContent,
  DuniHeroContent,
  FeaturesContent,
  MembershipContent,
  OperationsContent,
  GovernanceIntro,
  FullPhase,
  ProcessChanges,
  GovernanceTool,
  DelegateIntro,
  DelegationExplainer,
  AgoraSteps,
  TallySteps,
  VotingSection,
  FaqIntro,
  FaqSection,
  GlossaryTerm,
  Contract,
  MiscAddress,
} from "./content";

declare module "@/content/home.mdx" {
  export const hero: HeroContent;
  export const aboutDuni: AboutDuniContent;
  export const governanceIntro: GovernanceIntroContent;
  export const resources: ResourcesContent;
}

declare module "@/content/duni.mdx" {
  export const hero: DuniHeroContent;
  export const features: FeaturesContent;
  export const membership: MembershipContent;
  export const operations: OperationsContent;
}

declare module "@/content/governance.mdx" {
  export const intro: GovernanceIntro;
  export const phases: FullPhase[];
  export const processChanges: ProcessChanges;
  export const tools: GovernanceTool[];
}

declare module "@/content/delegate.mdx" {
  export const intro: DelegateIntro;
  export const delegationExplainer: DelegationExplainer;
  export const agoraSteps: AgoraSteps;
  export const tallySteps: TallySteps;
  export const voting: VotingSection;
  export const importantNotes: string[];
}

declare module "@/content/faq.mdx" {
  export const intro: FaqIntro;
  export const faqSections: FaqSection[];
}

declare module "@/content/glossary.mdx" {
  export const terms: GlossaryTerm[];
}

declare module "@/content/contracts.mdx" {
  export const note: string;
  export const activeContracts: Contract[];
  export const deprecatedContracts: Contract[];
  export const miscAddresses: MiscAddress[];
}
