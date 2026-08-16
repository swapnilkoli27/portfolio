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

export interface ProjectItem {
  num: string;
  title: string;
  subtitle: string;
  category: string;
  type: 'showcase' | 'other';
  description: string;
  abstract?: string;
  keyFeatures?: string[];
  technologies: string[];
  image: 'vorqquentra' | 'techryon' | 'eminsphere' | 'virtualdna' | 'mazecryptx' | 'shieldvision' | 'guardianai' | string;
  accent: string;
  liveUrl?: string;
  github?: string;
  statusBadge: string;
}

export const projects: ProjectItem[] = [
  {
    num: '01',
    title: 'Vorqquentra Labs',
    subtitle: 'Premium AI Consultancy & Enterprise Intelligence',
    category: 'AI Consultancy / Next.js Platform',
    type: 'showcase',
    description: 'A high-performance digital consultancy platform crafted with Next.js, Lenis smooth scrolling, GSAP, and real-time canvas particle physics. Designed to deliver bespoke enterprise AI solutions, generative applications, and modern cloud architectures.',
    keyFeatures: [
      'Interactive Soundhole Canvas & Physics Particle Engine',
      'Lenis Momentum Scroll & GSAP Animations',
      'Modern Next.js 15 & React 19 Architecture',
      'Custom Luxury Acoustic Brand Aesthetic & Responsive UI',
    ],
    technologies: ['Next.js', 'React 19', 'GSAP', 'Lenis', 'Tailwind CSS', 'HTML5 Canvas'],
    image: 'vorqquentra',
    accent: 'from-amber-500/25 to-yellow-600/10',
    liveUrl: 'https://www.vorqquentralabs.com',
    statusBadge: 'Live Platform',
  },
  {
    num: '02',
    title: 'Techryon Global',
    subtitle: 'Global Enterprise Technology Solutions & Summit Platform',
    category: 'Enterprise Tech / Global Solutions',
    type: 'showcase',
    description: 'An international enterprise technology and event management platform. Features an extensive multi-route service catalog, interactive executive advisory board showcase, corporate summit portal, and modern client engagement workflows.',
    keyFeatures: [
      'Multi-Route Services & Event Management System',
      'Executive Advisory Board & Speaker Portals',
      'Dynamic Client Consultation & Booking Modules',
      'Fully Responsive High-Speed SPA Architecture',
    ],
    technologies: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'Lucide Icons'],
    image: 'techryon',
    accent: 'from-blue-600/25 to-cyan-500/10',
    liveUrl: 'https://techryonglobal.com',
    statusBadge: 'Live Platform',
  },
  {
    num: '03',
    title: 'Eminsphere',
    subtitle: 'Global Academic Innovation & Conference Hub',
    category: 'Academic Tech / Global Conferences',
    type: 'showcase',
    description: 'A world-scale academic conference network and research publication hub connecting 50,000+ researchers across 120+ countries. Features Scopus/Web of Science fast-track publishing pipelines, live countdown summits, interactive country pills, and hybrid conference management.',
    keyFeatures: [
      'Scopus & Web of Science Indexed Publishing Pipeline',
      'International Flagship Conference Portals & Live Countdowns',
      'Interactive Global Participant Network (120+ Countries)',
      'Dynamic Proceedings & Research Paper Submission System',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Vite'],
    image: 'eminsphere',
    accent: 'from-emerald-500/25 to-teal-400/10',
    liveUrl: 'https://eminsphere.com',
    statusBadge: 'Live Platform',
  },
  {
    num: '04',
    title: 'VirtualDNA',
    subtitle: 'Multi-Modal AI Provenance Platform for Synthetic Media',
    category: 'AI Provenance / Deepfake Forensics',
    type: 'other',
    description: 'A multi-modal AI provenance platform that embeds unique "Digital DNA" into AI-generated media at birth. Combines LSB steganography, 4× SHA-256 hashes, neural feature extraction (ResNet-18, CLIP ViT-B/32, YAMNet), and XAI weighted heatmaps to guarantee court-admissible provenance across images, video, and audio.',
    abstract: 'VirtualDNA is a multi-modal AI provenance and digital forensics platform engineered to combat the synthetic media and deepfake crisis. By shifting focus from reactive detection to proactive provenance — embedding resilient "Digital DNA" into AI assets at birth — it ensures complete traceability even after aggressive editing, cropping, compression, or format transcoding. The platform deploys 17 combined identity signals across media modalities: LSB steganography, perceptual hashes (pHash DCT 64-bit), deep learning feature vectors (ResNet-18 1000-d, CLIP ViT-B/32, MFCC 20-d, YAMNet 521-cls), and cosine similarity matching with XAI weighted heatmaps. Synced through a multi-modal Global DNA Ledger, VirtualDNA provides court-admissible provenance chains and automated misuse takedown capabilities.',
    keyFeatures: [
      'Embed-at-Birth LSB Steganography & 4× SHA-256 Hashes',
      'Multi-Layer Neural Fingerprinting (ResNet-18, CLIP ViT-B/32, YAMNet)',
      '17 Combined Resilient Signals Surviving Compression & Transcoding',
      'Per-Frame Video Tracking (cv2) & Derivative Edit Heatmaps',
      'Explainable AI (XAI) Weighted Decision Engine & Auto Takedowns',
    ],
    technologies: ['Python', 'PyTorch', 'CLIP ViT', 'ResNet-18', 'YAMNet', 'Stable Diffusion', 'OpenCV', 'LSB Steganography', 'MySQL'],
    image: 'virtualdna',
    accent: 'from-teal-400/30 to-cyan-600/15',
    github: 'https://github.com/swapnilkoli27',
    statusBadge: 'AI Provenance & XAI',
  },
  {
    num: '05',
    title: 'MazeCryptX',
    subtitle: 'Multi-Layer Honeypot & Real-Time Cyberattack Forensics',
    category: 'Cybersecurity / Machine Learning',
    type: 'other',
    description: 'A sophisticated multi-layer honeypot system engineered to detect, evaluate, and characterize cyberattacks in real time. It offers web-banking and SSH simulations that capture attacker actions, integrated sandbox for runtime IoC extraction, ML-based persona classification (brute-forcers, scanners, interactive intruders), and a Streamlit dashboard with session replay and automated PDF forensics.',
    abstract: 'An sophisticated multi-layer honeypot system called MazeCryptX is made to detect, evaluate, and characterize cyberattacks in real time. It offers web-banking and SSH simulations that engage with attackers and capture all of their actions, including commands, login attempts, and behavioral patterns. Suspicious scripts are run in an integrated sandbox, which gathers IoCs from their runtime behavior. Brute-forcers, scanners, and interactive intruders are among the attacker categories identified by machine-learning-based persona classification. Live attack feeds, session replay, sandbox output, persona prediction, and automated PDF forensics reporting are all offered via the Streamlit dashboard. MazeCryptX enhances threat-intelligence capabilities while allowing researchers and defenders to safely examine opponents.',
    keyFeatures: [
      'Interactive Web-Banking & SSH Decoy Simulation Engines',
      'Integrated Behavioral Sandbox for Runtime IoC Extraction',
      'Machine Learning Attacker Persona Classification',
      'Live Streamlit Feed, Session Replay & PDF Forensics Reports',
    ],
    technologies: ['Python', 'Streamlit', 'Machine Learning', 'Cybersecurity', 'Sandbox Analysis', 'Threat Intelligence'],
    image: 'mazecryptx',
    accent: 'from-rose-600/25 to-purple-600/10',
    github: 'https://github.com/swapnilkoli27',
    statusBadge: 'AI & Cybersecurity',
  },
  {
    num: '06',
    title: 'ShieldVision',
    subtitle: 'Multimodal AI Digital Forensics & Deepfake Detection Platform',
    category: 'Multimodal AI / Explainable AI',
    type: 'other',
    description: 'A multimodal AI-powered digital forensics platform designed to detect and analyze manipulated images, videos, audio, and news content. Combines deep neural networks, audio spectral feature extraction, NLP transformers, and Explainable AI (SHAP & LIME) to provide interpretable, evidence-oriented detection results.',
    abstract: 'ShieldVision is a multimodal AI-powered digital forensics platform designed to detect and analyze manipulated images, videos, audio, and news content. The system combines Deep Learning, Machine Learning, Natural Language Processing, and Explainable AI (XAI) to identify potentially deceptive digital content and provide interpretable detection results.',
    keyFeatures: [
      'Image & Facial Deepfake Detection via CNN & MobileNetV2',
      'Video Frame & Face-Swap Manipulation Analysis',
      'Audio Deepfake Detection using MFCC, Chroma & Spectral Features',
      'News & Misinformation NLP Text Verification',
      'Interpretable Insights with SHAP & LIME Explainable AI',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Librosa', 'Transformers', 'SHAP', 'LIME', 'Flask', 'MySQL'],
    image: 'shieldvision',
    accent: 'from-purple-600/25 to-pink-500/10',
    github: 'https://github.com/swapnilkoli27',
    statusBadge: 'Multimodal AI & XAI',
  },
  {
    num: '07',
    title: 'GuardianAI',
    subtitle: 'Intelligent AIoT Wearable Safety Assistant & Caregiver Ecosystem',
    category: 'AIoT / Wearable & Assistive Tech',
    type: 'other',
    description: 'An intelligent wearable assistant designed to improve the safety and independence of elderly, visually impaired, and vulnerable individuals. Integrates edge computer vision for obstacle detection with audio feedback, ESP32 + MPU6050 fall detection, GPS/GSM live tracking, voice assistance, and a Firebase-connected caregiver dashboard.',
    abstract: 'GuardianAI is an intelligent wearable assistant designed to improve the safety and independence of elderly, visually impaired, and vulnerable individuals. The system combines AI-based obstacle detection, fall detection, medicine reminders, live GPS tracking, voice assistance, SOS alerts, and a caregiver web dashboard into a unified platform.',
    keyFeatures: [
      'Real-Time Computer Vision Obstacle Detection with Audio Feedback',
      'ESP32 & MPU6050 Motion Sensing Fall Detection with SOS Trigger',
      'NEO-6M GPS & SIM800L GSM Live Location Telemetry to Firebase',
      'Voice Assistant & Scheduled Spoken Medicine Reminders',
      'Caregiver Cloud Web Dashboard for Live Tracking & Remote Management',
    ],
    technologies: ['Raspberry Pi 4B', 'ESP32', 'Python', 'OpenCV', 'MobileNet SSD', 'Firebase', 'GPS / GSM', 'SpeechRecognition'],
    image: 'guardianai',
    accent: 'from-cyan-500/25 to-emerald-500/10',
    github: 'https://github.com/swapnilkoli27',
    statusBadge: 'AIoT & Hardware',
  },
];

export const stats = [
  { value: '30+', label: 'Projects & Systems' },
  { value: '3', label: 'Commercial Platforms' },
  { value: 'AI • Cyber • IoT', label: 'Core Domains' },
  { value: 'Worldwide', label: 'Availability' },
];

export const techStack = [
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Python', color: '#3776ab' },
  { name: 'TensorFlow / Keras', color: '#ff6f00' },
  { name: 'OpenCV', color: '#5c3ee8' },
  { name: 'Explainable AI (SHAP/LIME)', color: '#ec4899' },
  { name: 'Streamlit', color: '#ff4b4b' },
  { name: 'Raspberry Pi / ESP32', color: '#c51a4a' },
  { name: 'Flask / FastAPI', color: '#009688' },
  { name: 'Node.js', color: '#83cd29' },
  { name: 'Firebase', color: '#ffca28' },
  { name: 'MySQL / MongoDB', color: '#4479a1' },
  { name: 'Tailwind CSS', color: '#06b6d4' },
  { name: 'GSAP & Lenis', color: '#88ce02' },
  { name: 'Vite', color: '#bd34fe' },
  { name: 'Git & GitHub', color: '#ffffff' },
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
