import { Star, Award, ShieldCheck, Cpu, Code2, Globe, Database, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
  badge?: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  image: string;
  href: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'all' | 'ai' | 'hardware' | 'nlp';
  tags: string[];
  metrics: { label: string; value: string }[];
}

export interface ServiceItem {
  number: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  imageSrc: string;
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  file: string;
  tags: string[];
  verified: boolean;
}

export interface AdditionalCertItem {
  title: string;
  file: string;
  category: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  badge?: string;
}

export const personalInfo = {
  name: "Grahith Rao",
  fullName: "Grahith G Rao",
  role: "Artificial Intelligence & Machine Learning Engineer",
  tagline: "Building intelligent solutions, crafting meaningful digital experiences, and transforming innovative ideas into real-world applications.",
  email: "grahithraoaj@gmail.com",
  phone: "+91 82174 50409",
  location: "Mangaluru, Karnataka, India",
  github: "https://github.com/grahithrao",
  linkedin: "https://linkedin.com/in/grahithrao",
  resumePath: "/resume.pdf",
  profileImg: "/profile.png",
};

export const heroStats = [
  { value: "92%+", label: "Gesture Recognition Accuracy" },
  { value: "3", label: "Shipped Systems End-to-End" },
  { value: "91%", label: "F1-Score NLP Pipeline" },
  { value: "15", label: "Verified Certifications" },
];

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Web Development",
    desc: "Responsive, production-grade web applications and dashboards built with modern, maintainable architectures, clean UI/UX, and fast load times.",
    icon: Globe,
    imageSrc: "/Rectangle 7.svg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "App Development",
    desc: "End-to-end mobile and cross-platform applications with reactive state, robust backend API integrations, and intuitive native touch interactions.",
    icon: Code2,
    imageSrc: "/Rectangle 7.svg",
    tags: ["Android", "Flutter", "REST APIs", "Bluetooth BLE"],
  },
  {
    number: "03",
    title: "AI & Computer Vision",
    desc: "Deep learning models, real-time computer vision, and transformer pipelines engineered for seamless production deployment via high-performance APIs.",
    icon: Cpu,
    imageSrc: "/Rectangle 7.svg",
    tags: ["OpenCV", "MediaPipe", "TensorFlow", "FastAPI"],
  },
  {
    number: "04",
    title: "Embedded & Hardware",
    desc: "Sensor-to-software pipelines for physical hardware — integrating flex sensors, IMUs, and edge inference on microcontrollers with real-time telemetry.",
    icon: Database,
    imageSrc: "/Rectangle 7.svg",
    tags: ["Arduino", "Sensors", "TFLite Edge", "HC-05"],
  },
];

export const experiences: Experience[] = [
  {
    company: "AJ Institute of Engineering & Technology",
    duration: "Aug 2023 – May 2027",
    role: "B.E. CSE (Artificial Intelligence & Machine Learning)",
    desc: "Comprehensive coursework in Data Structures, Machine Learning, Deep Learning, Computer Vision, Database Systems, and NLP. Active developer across collegiate technical initiatives.",
    dotColor: "bg-[#3B82F6]",
    badge: "Education",
  },
  {
    company: "Deloitte · via Forage",
    duration: "Jul 2026",
    role: "Data Analytics Job Simulation",
    desc: "Executed practical simulation tasks in corporate data analysis, forensic technology review, risk analysis, and presenting analytical client insights.",
    dotColor: "bg-[#60A5FA]",
    badge: "Simulation",
  },
  {
    company: "SmartBridge · NASSCOM FutureSkills",
    duration: "Jan 2026 – Mar 2026",
    role: "AWS Cloud Computing Intern",
    desc: "Hands-on virtual internship focusing on AWS cloud architecture, serverless compute, IAM permissions, cloud databases, and scalable cloud deployments.",
    dotColor: "bg-[#3B82F6]",
    badge: "Internship",
  },
  {
    company: "GenAI Bootcamp Cohort",
    duration: "2025 – 2026",
    role: "Multimodal AI Participant",
    desc: "Engineered multimodal computer vision solutions including CLIP-based visual product similarity search, vector embeddings, and zero-shot categorization.",
    dotColor: "bg-[#93C5FD]",
    badge: "Cohort",
  },
  {
    company: "Canara PU College",
    duration: "2021 – 2022",
    role: "PUC Science (PCMB)",
    desc: "Strong academic foundation in Physics, Chemistry, Mathematics, and Biology with high problem-solving aptitude.",
    dotColor: "bg-[#2563EB]",
    badge: "Education",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "signspeak-gloves",
    title: "SignSpeak Gloves",
    subtitle: "Real-Time Sign-to-Speech Translation System",
    badge: "Flagship AI Hardware",
    desc: "An assistive smart glove enabling seamless communication for the 70M+ deaf and mute individuals worldwide. Combines 5 flex sensors and an MPU6050 IMU processed by Arduino, feeding a CNN-RNN deep learning model with real-time Bluetooth transmission to a custom Android app with natural speech synthesis.",
    image: "/project-illustration.png",
    href: "https://github.com/grahithrao",
    githubUrl: "https://github.com/grahithrao",
    category: "hardware",
    tags: ["Python", "Arduino", "TensorFlow Lite", "Android", "HC-05 Bluetooth"],
    metrics: [
      { label: "Accuracy", value: "92%+" },
      { label: "ASL Characters", value: "26" },
      { label: "Latency", value: "<150ms" },
    ],
  },
  {
    id: "career-guidance",
    title: "AI Career Guidance System",
    subtitle: "Data-Driven Academic & Skill Matcher",
    badge: "Shipped AI Product",
    desc: "Helping students discover optimal career paths with algorithmic precision instead of guesswork. Built a Random Forest classifier trained on multidimensional aptitude, skill scores, and psychological preferences, deployed with an interactive Streamlit UI and validated on 50+ college peers.",
    image: "/project-illustration.png",
    href: "https://github.com/grahithrao",
    githubUrl: "https://github.com/grahithrao",
    category: "ai",
    tags: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
    metrics: [
      { label: "Accuracy", value: "88%" },
      { label: "Peers Tested", value: "50+" },
      { label: "Parameters", value: "14+" },
    ],
  },
  {
    id: "fake-review-detection",
    title: "AI Fake Review Detection",
    subtitle: "Dual-Model NLP Sentiment & Fraud Engine",
    badge: "Shipped NLP API",
    desc: "Combatting fraudulent product ratings that manipulate buyers on e-commerce platforms. Implemented a dual-model NLP architecture fusing TF-IDF feature extraction with Support Vector Machines, combining behavioral anomalies with linguistic patterns packaged as a real-time FastAPI endpoint.",
    image: "/project-illustration.png",
    href: "https://github.com/grahithrao",
    githubUrl: "https://github.com/grahithrao",
    category: "nlp",
    tags: ["Python", "NLP", "FastAPI", "Scikit-learn", "TF-IDF / SVM"],
    metrics: [
      { label: "F1-Score", value: "91%" },
      { label: "False Positives", value: "<6%" },
      { label: "Throughput", value: "250 req/s" },
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte · via Forage",
    date: "Jul 2026",
    file: "/certs/deloitte-data-analytics.pdf",
    tags: ["Data Analysis", "Forensic Tech", "Client Insights"],
    verified: true,
  },
  {
    title: "AWS Cloud Computing — Virtual Internship",
    issuer: "NASSCOM FutureSkills · SmartBridge",
    date: "Mar 2026",
    file: "/certs/aws-cloud-internship.pdf",
    tags: ["AWS Cloud", "Infrastructure", "Cloud Security"],
    verified: true,
  },
  {
    title: "Machine Learning with Python (V2)",
    issuer: "IBM · via Coursera",
    date: "Aug 2025",
    file: "/certs/ml-with-python-v2.pdf",
    tags: ["Scikit-Learn", "Model Evaluation", "Supervised Learning"],
    verified: true,
  },
  {
    title: "Generative AI: Introduction & Applications",
    issuer: "IBM · via Coursera",
    date: "Aug 2025",
    file: "/certs/generative-ai.pdf",
    tags: ["LLMs", "Prompt Engineering", "Multimodal AI"],
    verified: true,
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM · via Coursera",
    date: "Nov 2025",
    file: "/certs/python-for-data-science.jpg",
    tags: ["Pandas", "NumPy", "Data Pipelines"],
    verified: true,
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL · IIT Kharagpur",
    date: "Sep 2025",
    file: "/certs/nptel-intro-to-ml.pdf",
    tags: ["IIT Kharagpur", "Mathematical Foundations", "Algorithms"],
    verified: true,
  },
];

export const additionalCertifications: AdditionalCertItem[] = [
  { title: "Artificial Intelligence for All", file: "/certs/ai-for-all.pdf", category: "AI & ML" },
  { title: "Software Engineering", file: "/certs/software-engineering.pdf", category: "Core CS" },
  { title: "Network Fundamentals", file: "/certs/network-fundamentals.pdf", category: "Infrastructure" },
  { title: "Next Gen Technologies", file: "/certs/next-gen-technologies.pdf", category: "Emerging Tech" },
  { title: "Core Java Programming Revisited", file: "/certs/core-java-revisited.pdf", category: "Programming" },
  { title: "Programming in C", file: "/certs/programming-in-c.pdf", category: "Systems" },
  { title: "C++ Programming — Beginners", file: "/certs/cpp-programming-beginners.pdf", category: "Systems" },
  { title: "PostgreSQL Developer", file: "/certs/postgresql-developer.pdf", category: "Database" },
  { title: "Basics of Python", file: "/certs/basics-of-python.pdf", category: "Programming" },
];

export const skillsMarquee: string[] = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "MediaPipe",
  "Scikit-learn",
  "FastAPI",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Arduino & Embedded",
  "PostgreSQL",
  "Docker",
  "Git & GitHub",
];

export const trustHighlights: IconAndText[] = [
  { icon: ShieldCheck, name: "15 Verified Credentials" },
  { icon: Award, name: "92%+ Peak Model Accuracy" },
  { icon: Star, name: "3+ Years Building AI" },
];

export const reviewsData: Review[] = [
  {
    name: "Dr. K. Srinivas",
    role: "Department Faculty & Project Reviewer",
    rating: 5,
    text: "Grahith demonstrates exceptional engineering maturity. The SignSpeak Gloves project was executed with rigorous hardware-software harmony and measurable ML precision.",
    badge: "Faculty Review",
  },
  {
    name: "Pooja Hegde",
    role: "Hackathon Lead Collaborator",
    rating: 5,
    text: "Collaborating with Grahith on AI deployments is a seamless experience. He delivers clean code, dependable backend APIs, and genuinely smart solutions under pressure.",
    badge: "Collaborator",
  },
  {
    name: "Rohan D'Souza",
    role: "Career Guidance Peer Tester",
    rating: 5,
    text: "The AI Career Guidance System accurately predicted optimal specialization paths for our student cohort with 88% accuracy. Intuitive, fast, and remarkably helpful.",
    badge: "Product Validation",
  },
  {
    name: "Ananya Kamath",
    role: "AI/ML Club Member",
    rating: 5,
    text: "Grahith brings unmatched enthusiasm for computer vision and hardware edge AI. His workshops and code contributions are always high quality.",
    badge: "Peer Review",
  },
];
