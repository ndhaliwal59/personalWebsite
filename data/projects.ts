export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // Featured Projects - Your best work
  {
    id: 1,
    name: "Physio AI",
    description: "Developing a mobile app with a RAG-powered diagnostic chatbot and personalized recovery/prevention tracking plans that supports 200+ injuries.",
    techStack: ["React-Native", "Python", "Django", "Torch", "Faiss", "BM25", "Transformers", "spaCy", "Qwen2.5-7B-Instruct", "Expo"],
    category: "Featured",
    featured: true
  },
  {
    id: 2,
    name: "UFC Fight Predictor",
    description: "Scraped and processed data from 8,000+ UFC matches, engineered features, and trained an XGBoost model achieving 67.56% accuracy. Developed a full-stack platform with an admin dashboard for fight management.",
    techStack: ["React", "Python", "FastAPI", "PostgreSQL", "BeautifulSoup", "NumPy", "Pandas", "scikit-learn" , "Docker"],
    demoUrl: "https://ufcpredictorwebsite.onrender.com",
    category: "Featured",
    featured: true
  },
  {
    id: 3,
    name: "BloodIQ",
    description: "Built a full-stack AI app that analyzes blood test reports and delivers personalized health insights using lifestyle data, OCR parsing, and Llama 3.1 Instruct.",
    techStack: ["React", "Python", "FastAPI", "Supabase", "Hugging Face", "OCR"],
    githubUrl: "https://github.com/ndhaliwal59/bloodIQ",
    category: "Featured",
    featured: true
  },
  {
    id: 4,
    name: "BloodIQ",
    description: "Developed a Linear Regression model to forecast next-day ATM cash demand with 88.4% accuracy. As well as using a formula to optimizing cash refill amounts and dates.",
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib'],
    githubUrl: "https://github.com/ndhaliwal59/atmForcasting",
    category: "Featured",
    featured: true
  },
  
  // Learning Projects - Exploring new technologies and concepts
  {
    id: 5,
    name: "Procedural Terrain Gen",
    description: "Created a real-time 3D terrain generation system with infinite world loading, physics simulation, and multi-octave noise-based height maps using Three.js and Cannon.js.",
    techStack: ["Three.js", "Cannon.js", "Cannon-ES", "Simplex Noise", "Vite"],
    githubUrl: "https://github.com/ndhaliwal59/3.js-proceduralGenerationTerrain",
    category: "Learning Projects",
  },
  {
    id: 6,
    name: "Password Manager",
    description: "Built a secure and responsive password manager with encrypted storage, JWT authentication, and real-time password strength analysis.",
    techStack: ["React", "TypeScript", "MongoDB", "Vite", "React Router DOM", "Axios", "JWT", "bcrypt"],
    githubUrl: "https://github.com/ndhaliwal59/PassowrdManager",
    category: "Learning Projects",
  },
  {
    id: 7,
    name: "Fake News Detector",
    description: "Developed a web app that detects fake news by analyzing pasted text or automatically scraping articles from provided URLs",
    techStack: ["React", "TypeScript", "Vite", "CSS", "Flask", "flask-cors", "scikit-learn", "joblib", "BeautifulSoup", "Selenium"],
    category: "Learning Projects",
    githubUrl: "https://github.com/ndhaliwal59/newsCheck",
  },
  {
    id: 8,
    name: "Neural Network Scratch ",
    description: "Built and trained a custom neural network from scratch in NumPy using weather data, with full preprocessing and backpropagation.",
    techStack: ["Python", "NumPy", "Pandas", "scikit-learn"],
    githubUrl: "https://github.com/ndhaliwal59/nn_scratch",
    category: "Learning Projects",
    featured: false
  },
  {
    id: 9,
    name: "Decision Tree Scratch",
    description: "Implemented a decision tree classifier entirely from scratch in NumPy to classify the breast cancer dataset, featuring entropy-based information gain, custom tree building, and recursive traversal.",
    techStack: ["Python", "NumPy", "scikit-learn"],
    githubUrl: "https://github.com/ndhaliwal59/decision_tree_scratch",
    category: "Learning Projects",
  },
  {
    id: 10,
    name: "3D Car Physics Simulation",
    description: "Built an interactive 3D car simulation using Three.js and Cannon-es, featuring realistic chassis and wheel physics, suspension, steering, acceleration, and braking with keyboard controls.",
    techStack: ["JavaScript", "Three.js", "Cannon-es"],
    githubUrl: "https://github.com/ndhaliwal59/3.js-Car",
    category: "Learning Projects",
  },
  {
    id: 11,
    name: "3D Galaxy Generator",
    description: "Developed an interactive 3D galaxy generator with Three.js, allowing real-time customization of particle count, galaxy branches, spin, randomness, and colors using a GUI interface.",
    techStack: ["JavaScript", "Three.js", "lil-gui"],
    githubUrl: "https://github.com/ndhaliwal59/3.js-galaxy-generator",
    category: "Learning Projects",
    featured: false
  },
  
  // Early Works - Foundation projects that show your learning journey

  {
    id: 12,
    name: "Zen Clicker",
    description: "A relaxing incremental clicker game with customizable ripple effects, gradient backgrounds, and sound effects. Users earn points by clicking, unlock new visual and audio themes, and receive motivational quotes periodically for a zen experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ndhaliwal59/ZenClicker",
    category: "Early Works",
  },
  {
    id: 13,
    name: "JavaScript Projects",
    description: "A collection of small beginner projects including a calculator, expense tracker, rock-paper-scissors game, school outfit planner, and to-do list, built to practice HTML, CSS, and JavaScript fundamentals.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ndhaliwal59/jsPractice",
    category: "Early Works",
  },
  {
    id: 14,
    name: "HTML & CSS Sites",
    description: "A collection of static websites built using only HTML and CSS, showcasing template design, dashboards, and social media-inspired layouts. Projects focus on structure, styling, and responsive layouts without JavaScript.",
    techStack: ["HTML", "CSS"],
    githubUrl: "https://github.com/ndhaliwal59/htmlSites",
    category: "Early Works"
  }
];

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};
