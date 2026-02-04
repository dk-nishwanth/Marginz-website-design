
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface Job {
  id: string;
  title: string;
  experience: string;
  location: string;
  description: string;
  skills: string;
  qualification: string;
  salary: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  expertise: string;
  bio: string;
  certifications: string;
}

export interface ClientReview {
  id: string;
  name: string;
  company: string;
  position: string;
  rating: number;
  review: string;
}


