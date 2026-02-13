
import React from 'react';
import { Service, Project, Job, TeamMember, ClientReview, HeroSlide } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  { 
    label: "MARGINZ",
    title: "The Architect", 
    subtitle: "Agility & Technology",
    text: "Engineering Enterprise Liberation. Scalable Systems. Zero Friction." 
  },
  { 
    label: "MARGINZ",
    title: "The Quality Anchor", 
    subtitle: "Quality & Reliability",
    text: "Quality-First Development. Where High Performance is the Minimum Standard." 
  },
  { 
    label: "MARGINZ",
    title: "The Strategist", 
    subtitle: "ROI & Business Outcome",
    text: "Beyond Code: Delivering Measurable MARGINS on Digital Investment." 
  },
  { 
    label: "MARGINZ",
    title: "The Specialist", 
    subtitle: "Expertise & Future-Proofing",
    text: "The MERN Stack Masters. Deploying Enterprise-Grade Digital Foundations." 
  }
];

export const SERVICES: Service[] = [
  {
    id: 'cdp',
    number: '01',
    title: 'Core Digital Platforms',
    description: 'We build the essential, proprietary software your business runs on, ensuring stability and a smooth user experience across all devices.',
    features: ['Custom Web Applications', 'Enterprise Software Solutions', 'Progressive Web Apps', 'Cross-Platform Development', 'API Development & Integration', 'Database Architecture']
  },
  {
    id: 'aia',
    number: '02',
    title: 'Advanced Intelligence & Automation',
    description: 'We integrate cutting-edge intelligence and efficient infrastructure to help your business operate smarter and faster.',
    features: ['AI/ML Integration', 'Process Automation', 'Cloud Infrastructure', 'DevOps & CI/CD', 'Performance Optimization', 'Scalable Architecture']
  },
  {
    id: 'sms',
    number: '03',
    title: 'Strategic Modernization & Support',
    description: 'We modernize outdated systems, ensure all platforms connect seamlessly, and provide disciplined, long-term support to maintain optimal performance.',
    features: ['Legacy System Modernization', 'System Integration', 'Technical Consulting', 'Maintenance & Support', 'Security Audits', 'Performance Monitoring']
  }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Brix-ERP', category: 'Enterprise Resource Planning', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', year: '2024', description: 'An enterprise solution designed to manage employees with role-based access' },
  { id: '2', title: 'Assessment Portal', category: 'Web Application', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop', year: '2024', description: 'An online portal for students to attend tests assigned by admins based on batches' },
  { id: '3', title: 'Qdotz Website', category: 'Website', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop', year: '2024', description: 'A responsive corporate website developed for Qdotz' },
  { id: '4', title: 'Cricinfo Clone Prototype', category: 'Web Application', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop', year: '2023', description: 'A prototype replicating Cricinfo features with real-time cricket scores, sports news, blogs, and match updates' },
  { id: '5', title: 'PwC Prototype Website', category: 'Website', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', year: '2023', description: 'A responsive prototype for PwC to showcase global client data' },
  { id: '6', title: 'BookyMet Mobile Application', category: 'Mobile Application', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop', year: '2024', description: 'A hybrid Mobile application for booking the turf by dynamic and live booking systems' }
];

export const JOBS: Job[] = [
  {
    id: 'exec-sales',
    title: 'Executive - Sales, Inside',
    experience: '3-4 years',
    location: 'Chennai & Bangalore',
    description: 'High profile appointment fixing | meeting calendar initiation | meeting follow ups. Clientele data maintenance | willing to travel to complete the CAF Protocols.',
    skills: 'Interested in people handling and networking. Should possess with high telephone mannerism, strong verbal and written communication, along with corporate e-mail etiquettes.',
    qualification: 'Any Degree',
    salary: 'At par with Service sales - Industry'
  },
  {
    id: 'sme-l3',
    title: 'Subject Matter Expert - Level 3, Data Communication',
    experience: '5+ years',
    location: 'Bangalore',
    description: 'Lead technical training sessions and knowledge transfer programs in data communication technologies.',
    skills: 'Expert knowledge in networking, data communication protocols, and training delivery.',
    qualification: 'B.Tech/M.Tech in Computer Science or related field',
    salary: 'Competitive'
  }
];

export const CLIENTS = [
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
  { name: 'Oracle', logo: 'https://logo.clearbit.com/oracle.com' },
  { name: 'Salesforce', logo: 'https://logo.clearbit.com/salesforce.com' },
  { name: 'Adobe', logo: 'https://logo.clearbit.com/adobe.com' },
  { name: 'SAP', logo: 'https://logo.clearbit.com/sap.com' }
];

export const STATS = [
  { label: 'Project Mandates', value: '70+' },
  { label: 'Operational Uptime', value: '99.99%' },
  { label: 'Industry Verticals', value: '8' },
  { label: 'Partner Companies', value: '100+' }
];

export const PARTNERS = [
  {
    id: 'sose',
    name: 'SoSE',
    title: 'Transformational Leadership',
    description: 'A leader in delivering noetic science, bringing the globe into a transformational vector. Time and energy are the primitive by-product of active learning and then it moves towards orderliness which is essential for brewing IQ, enabling this aspect through a profound technique spreads fragrance to our personality, enjoy the transformation by witnessing the delta, enabling this to the millennials to mitigate and overcome frictions in life is what we devote to deliver.'
  },
  {
    id: 'sna',
    name: 'SNA',
    title: 'Savant Networks Academy',
    description: 'Savant Networks Academy a lineage of BRIX Networks (P) Ltd to foster Industry-Academia touch through our unique ECOSYSTEM and DNA CULTURE.'
  }
];

export const TEAM_MEMBERS = [
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    position: 'Chief Executive Officer',
    experience: '15+ years',
    expertise: 'Strategic Leadership, Business Development, Knowledge Transfer',
    bio: 'Visionary leader with extensive experience in knowledge transfer and corporate training. Drives strategic initiatives and business growth.',
    certifications: 'MBA - Strategic Management, PMP Certified, Leadership Excellence'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    position: 'Chief Technology Officer',
    experience: '12+ years',
    expertise: 'Cloud Technologies, Infrastructure, Cybersecurity',
    bio: 'Technology expert specializing in cloud solutions and infrastructure automation. Leads technical training programs and innovation initiatives.',
    certifications: 'AWS Solutions Architect, CISSP, Cloud Security Expert'
  },
  {
    id: 'amit-patel',
    name: 'Amit Patel',
    position: 'Head of Learning & Development',
    experience: '10+ years',
    expertise: 'Training Design, Leadership Development, Noetic Science',
    bio: 'Expert in designing comprehensive learning programs and leadership development initiatives. Specializes in transformational learning methodologies.',
    certifications: 'Certified Training Professional, Leadership Coach, SOSE Practitioner'
  },
  {
    id: 'sneha-reddy',
    name: 'Sneha Reddy',
    position: 'Senior Subject Matter Expert',
    experience: '8+ years',
    expertise: 'Network Technologies, OEM Certifications, Technical Training',
    bio: 'Technical expert with deep knowledge in networking technologies and OEM certification programs. Delivers high-impact technical training sessions.',
    certifications: 'Extreme Networks Certified, CCNP, Network Security Specialist'
  },
  {
    id: 'vikram-singh',
    name: 'Vikram Singh',
    position: 'Director of Professional Services',
    experience: '11+ years',
    expertise: 'IT Auditing, Compliance, Project Management',
    bio: 'Seasoned professional in IT auditing and compliance management. Leads comprehensive auditing services and project implementations.',
    certifications: 'CISA, CISM, ITIL Expert, PMP'
  },
  {
    id: 'kavya-nair',
    name: 'Kavya Nair',
    position: 'Business Development Manager',
    experience: '7+ years',
    expertise: 'Client Relations, Strategic Partnerships, Sales Excellence',
    bio: 'Dynamic business development professional focused on building strategic partnerships and driving client success through innovative solutions.',
    certifications: 'Sales Excellence, Strategic Partnership Management, Client Success'
  }
];

export const CLIENT_REVIEWS = [
  {
    id: 'jayachandran',
    name: 'Mr. Jayachandran',
    company: 'BRiX',
    position: 'Director',
    rating: 5,
    project: 'BRiX-ERP (Enterprise Resource Planning)',
    review: 'Their unified ERP solution delivered an 85% reduction in manual processing time. They truly eliminated our core operational friction.'
  },
  {
    id: 'monishwaran',
    name: 'Mr. Monishwaran',
    company: 'Coreverse',
    position: 'Director',
    rating: 5,
    project: 'Assessment Portal (Web Application)',
    review: 'We achieved a 95% time reduction in result processing, allowing us to scale student intake by 10X. Unparalleled speed and precision.'
  },
  {
    id: 'abutahir',
    name: 'Mr. AbuTahir',
    company: 'Imagevite Technologies',
    position: 'Director',
    rating: 5,
    project: 'BookyMet Mobile Application',
    review: 'The dynamic booking app delivered a 20% increase in turf utilization and zero errors. A resilient platform impacting our bottom line.'
  },
  {
    id: 'thayagaraj',
    name: 'Dr. K. Thayagaraj',
    company: 'Qdotz',
    position: 'CEO',
    rating: 5,
    project: 'Qdotz Website (Corporate Website)',
    review: 'The new corporate website led to a 35% increase in qualified organic traffic within three months. Exceptional mastery in high-performing digital assets.'
  },
  {
    id: 'innovation-lead',
    name: 'Innovation Lead',
    company: 'Financial Technology Sector',
    position: 'Innovation Lead',
    rating: 5,
    project: 'PwC Prototype Website & Cricinfo Clone',
    review: 'MARGINZ accelerated our prototype timelines by 40%, validating their Transcendental Stack Mastery. They deliver high-velocity solutions.'
  }
];
