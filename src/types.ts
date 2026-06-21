export interface Project {
  id: string;
  title: string;
  category: 'Web Dev' | 'Mobile Dev' | 'Data Science' | 'UI/UX & SysDev';
  semester: number;
  description: string;
  longDescription: string;
  techStack: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  metrics?: string; // e.g. "98% Accuracy", "Kecepatan loading naik 40%"
}

export interface Organization {
  id: string;
  organizationName: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  isActive: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile & DevOps' | 'Data Science';
  percentage: number;
  iconName: string;
}

export interface Course {
  code: string;
  name: string;
  grade: string;
  semester: number;
}
