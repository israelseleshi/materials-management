export interface SubConcept {
  term: string;
  scope?: string;
  academic_definition?: string;
  key_characteristics?: string[];
  detailed_explanation?: string;
  practical_scenario?: {
    context: string;
    action: string;
    analysis: string;
  };
  explanation?: string;
  tactics?: string[];
}

export interface Principle {
  name: string;
  definition: string;
  detailed_explanation: string;
  consequences_of_failure: string;
  practical_example: string;
}

export interface SpecMethod {
  method_type: string;
  summary: string;
  usage_context: string[];
  pros: string[];
  cons: string[];
  example: string;
}

export interface Chapter31Data {
  chapter_metadata: {
    chapter_number: number;
    chapter_title: string;
    section_focus: string;
  };
  content_modules: [
    {
      id: string;
      topic: string;
      introduction: string;
      sub_concepts: SubConcept[];
      comparison_matrix: {
        focus: { purchasing: string; procurement: string };
        timeline: { purchasing: string; procurement: string };
        relationship: { purchasing: string; procurement: string };
      };
    },
    {
      id: string;
      topic: string;
      introduction: string;
      principles: Principle[];
    },
    {
      id: string;
      topic: string;
      introduction: string;
      objectives_of_specifications: string[];
      methods_of_description: SpecMethod[];
    },
    {
      id: string;
      tips_for_students: string[];
    }
  ];
}

export interface IntegrationPoint {
  department: string;
  interaction: string;
  goal: string;
}

export interface CaseStudy {
  scenario_title: string;
  situation: string;
  conflict?: string;
  action?: string;
  outcome: string;
  lesson?: string;
}

export interface CoreConcept {
  id: string;
  title: string;
  category: string;
  priority_level: string;
  definition: string;
  comprehensive_analysis?: string[];
  key_performance_indicators?: string[];
  risk_factors?: string[];
  case_study?: CaseStudy;
  sub_concepts?: SubConcept[];
  economic_implication?: string;
  cost_drivers_of_inventory?: string[];
  strategies?: string[];
  strategic_rationale?: string[];
  implementation_steps?: string[];
  integration_points?: IntegrationPoint[];
  knowledge_repository_role?: string;
  benefits?: string[];
  quote?: string;
  components?: string[];
  explanation?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
}

export interface Chapter32Data {
  module_metadata: {
    course_code: string;
    chapter_number: number;
    section_number: string;
    section_title: string;
    last_updated: string;
    learning_outcome: string;
    source_reference: string;
  };
  core_concepts: CoreConcept[];
  interactive_quiz_data: QuizQuestion[];
}

export enum Section {
  Intro = "intro",
  Role = "role",
  Objectives = "objectives",
  Cycle = "cycle",
  Selection = "selection",
  MakeOrBuy = "makeorbuy"
}