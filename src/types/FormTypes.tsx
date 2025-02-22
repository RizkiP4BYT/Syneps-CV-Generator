export interface FormData {
  information: InformationData;
  education: EducationData[];
  work: WorkData[];
  project: projectData[];
  skills: skillsData[];
}
export interface InformationData {
  name: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  objective: string;
  description: string;
}

export interface EducationData {
  school: string;
  date: string;
  degree: string;
  description: string;
}

export interface WorkData {
  company: string;
  date: string;
  jobTitle: string;
  description: string;
}

export interface projectData {
  name: string;
  description: string;
  link: string;
}

export interface skillsData {
  skill: string;
  rating: number;
}