import { Code2, Smartphone, BrainCircuit, PenTool, LayoutDashboard, Wrench, ArrowUpRight } from 'lucide-react';

export const services = [
  {
    num: '01',
    title: 'Web Development',
    icon: Code2,
    description: 'Modern, responsive and high-performance websites and web applications.',
  },
  {
    num: '02',
    title: 'Mobile App Development',
    icon: Smartphone,
    description: 'Android and cross-platform applications with polished user experiences.',
  },
  {
    num: '03',
    title: 'AI Applications',
    icon: BrainCircuit,
    description: 'AI-powered tools, automation, intelligent assistants and machine-learning products.',
  },
  {
    num: '04',
    title: 'UI/UX Design',
    icon: PenTool,
    description: 'Clean, modern and conversion-focused digital experiences.',
  },
  {
    num: '05',
    title: 'Custom Software',
    icon: LayoutDashboard,
    description: 'Business software, dashboards, management systems and custom platforms.',
  },
  {
    num: '06',
    title: 'Website Maintenance',
    icon: Wrench,
    description: 'Performance optimization, bug fixing, security updates and continuous improvements.',
  },
];

export const projects = [
  {
    num: '01',
    title: 'JobPortal',
    category: 'Web Platform / PWA',
    description: 'A production-ready job portal with real-time auth, Firestore database, rich-text job postings, push notifications and full PWA support for installable mobile experience.',
    technologies: ['React', 'Vite', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    image: 'jobportal',
    accent: 'from-blue-500/20 to-emerald-500/10',
    github: 'https://github.com/swapnilkoli27/JobPortal',
  },
  {
    num: '02',
    title: 'Python Code Explainer',
    category: 'AI / Generative AI',
    description: 'A generative AI-powered tool that explains Python code in plain language. Paste any snippet and get an instant, human-readable breakdown of what the code does.',
    technologies: ['Python', 'Flask', 'Groq API', 'GenAI', 'LLM'],
    image: 'codeexplainer',
    accent: 'from-purple-500/20 to-blue-500/10',
    github: 'https://github.com/swapnilkoli27/Python-Code-Explainer-Gen-Ai',
  },
  {
    num: '03',
    title: 'Legal Document Assistant',
    category: 'AI / Legal Technology',
    description: 'An AI-powered legal assistant that helps users understand legal documents and information through conversational AI and natural language processing.',
    technologies: ['Python', 'Flask', 'AI', 'NLP', 'LLM'],
    image: 'legal',
    accent: 'from-cyan-500/20 to-purple-500/10',
    github: 'https://github.com/swapnilkoli27/Legal-Document-Assistant',
  },
  {
    num: '04',
    title: 'AI Data Analyst',
    category: 'AI / Data Analytics',
    description: 'An intelligent data analyst application that automatically explores datasets, generates insights and produces visual reports — turning raw data into actionable understanding.',
    technologies: ['Python', 'Flask', 'Pandas', 'AI', 'Data Visualization'],
    image: 'dataanalyst',
    accent: 'from-blue-500/20 to-cyan-500/10',
    github: 'https://github.com/swapnilkoli27/Ai-Data-Analyst',
  },
  {
    num: '05',
    title: 'CRM Dashboard',
    category: 'Full-Stack / Business Software',
    description: 'A custom CRM dashboard for managing customer relationships, tracking sales pipelines and visualizing business performance through interactive charts and metrics.',
    technologies: ['Python', 'Flask', 'MySQL', 'Charts', 'REST API'],
    image: 'crm',
    accent: 'from-violet-500/20 to-cyan-500/10',
    github: 'https://github.com/swapnilkoli27/CRM-Dashboard',
  },
  {
    num: '06',
    title: 'AI Resume Screening System',
    category: 'AI / HR Technology',
    description: 'A machine-learning-powered system that automatically screens and ranks resumes against job descriptions, helping recruiters identify the best candidates faster.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Flask', 'AI'],
    image: 'resumescreening',
    accent: 'from-emerald-500/20 to-blue-500/10',
    github: 'https://github.com/swapnilkoli27/Ai-resume-screening-system',
  },
];

export const stats = [
  { value: '30+', label: 'Projects & Experiments' },
  { value: '15+', label: 'Core Technologies' },
  { value: 'Web • AI • Data', label: 'Software' },
  { value: 'Worldwide', label: 'Available' },
];

export const techStack = [
  { name: 'React', color: '#61dafb' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Python', color: '#3776ab' },
  { name: 'Flask', color: '#ffffff' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Node.js', color: '#83cd29' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'MySQL', color: '#4479a1' },
  { name: 'Firebase', color: '#ffca28' },
  { name: 'TensorFlow', color: '#ff6f00' },
  { name: 'Pandas', color: '#150458' },
  { name: 'Groq', color: '#f55036' },
  { name: 'GenAI', color: '#22d3ee' },
  { name: 'Tailwind CSS', color: '#06b6d4' },
  { name: 'Vite', color: '#bd34fe' },
  { name: 'Git', color: '#f05032' },
  { name: 'GitHub', color: '#ffffff' },
  { name: 'Vercel', color: '#ffffff' },
];

export const process = [
  { num: '01', title: 'DISCOVER', description: 'Understand the business, goals and requirements.' },
  { num: '02', title: 'DESIGN', description: 'Create the user experience, structure and visual direction.' },
  { num: '03', title: 'BUILD', description: 'Develop the product using modern technologies and clean architecture.' },
  { num: '04', title: 'LAUNCH', description: 'Deploy, optimize and provide ongoing support.' },
];

export const whyWorkWithMe = [
  { title: 'Modern Technology', description: 'Using the latest tools and frameworks to build future-ready products.' },
  { title: 'Clean & Scalable Code', description: 'Maintainable architecture that grows with your business.' },
  { title: 'Responsive Design', description: 'Pixel-perfect experiences on every device and screen size.' },
  { title: 'Performance Focused', description: 'Fast load times and optimized experiences that retain users.' },
  { title: 'AI-Ready Solutions', description: 'Integrating AI capabilities to give your product a competitive edge.' },
  { title: 'Long-Term Maintenance', description: 'Ongoing support, updates and improvements after launch.' },
  { title: 'Direct Communication', description: 'No middlemen. You talk directly with the person building your product.' },
  { title: 'Custom Solutions', description: 'Tailored to your specific needs, never a one-size-fits-all template.' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const projectTypes = [
  'Web Development',
  'Mobile App',
  'AI Application',
  'UI/UX Design',
  'Custom Software',
  'Maintenance',
];

export const budgetRanges = [
  '< $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
  'Let\'s discuss',
];

export { ArrowUpRight };
