export interface AboutSection {
  bio: string;
  interests: string[];
  technicalSkills: {
    languages: string[];
    frameworks: string[];
    mlLibraries: string[];
    tools: string[];
    databases: string[];
  };
  softSkills: string[];
}

export const aboutData: AboutSection = {
  bio: `I'm a passionate 2nd-year Computer Science student with a deep fascination for Machine Learning and Artificial Intelligence. 
  My journey in tech began with simple programming projects and has evolved into building sophisticated ML models and AI applications. 
  I believe in the power of technology to solve real-world problems and am constantly learning new skills to stay at the forefront of innovation. 
  When I'm not coding or planning out a project, you'll find me workout out at the gym, playing chess, or eating some good food.`,
  
  interests: [
    "Machine Learning & AI Applications",
    "Natural Language Processing & RAG Systems",
    "Data Science & Predictive Analytics",
    "3D Graphics & WebGL Development",
    "Full-Stack Web Development",
    "Mobile App Development with React Native",
    "Health Tech & Medical AI",
    "Sports Analytics & Prediction Models",
    "Procedural Generation & Game Development"
  ],
  
  technicalSkills: {
    languages: [
      "Python", "Java","JavaScript", "TypeScript", "HTML/CSS"
    ],
    frameworks: [
      "React", "FastAPI", "Flask", "Django", "Expo", "Three.js", "Cannon.js", "Vite"
    ],
    mlLibraries: [
      "NumPy", "Pandas", "Scikit-learn", "XGBoost", "Torch", "Transformers", "spaCy", "Faiss", "BM25"
    ],
    tools: [
      "Git", "Docker", "Jupyter Notebook", "VS Code", "Postman", "BeautifulSoup", "Selenium", "Hugging Face", "OCR"
    ],
    databases: [
      "PostgreSQL", "MongoDB", "SQLite", "Supabase"
    ]
  },
  
  softSkills: [
    "Problem Solving",
    "Critical Thinking",
    "Teamwork",
    "Communication",
    "Time Management",
    "Adaptability",
    "Curiosity",
    "Attention to Detail",
    "Resilience"
  ]
};
