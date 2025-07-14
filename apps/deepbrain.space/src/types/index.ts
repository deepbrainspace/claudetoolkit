export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface AgentType {
  id: number;
  name: string;
  type: string;
  description: string;
}

export interface BenefitType {
  id: number;
  title: string;
  description: string;
  icon: string;
}
