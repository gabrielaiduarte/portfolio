export type Project = {
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  githubUrl: string
  variant: "large" | "standard"
}

export const projects: Project[] = [
  {
    number: "02",
    title: "Job Tracker",
    category: "Full-Stack Workflow",
    description:
      "A full-stack application for organizing job applications and tracking progress throughout the job search.",
    technologies: ["React", "Node.js", "Express.js", "SQLite", "React Router"],
    githubUrl: "https://github.com/gabrielaiduarte/job-tracker",
    variant: "large",
  },
  {
    number: "03",
    title: "Stock Watchlist",
    category: "Real-Time Data",
    description:
      "A responsive stock watchlist for monitoring market data and quickly reviewing key price metrics.",
    technologies: ["React", "JavaScript", "Alpha Vantage API", "localStorage"],
    githubUrl: "https://github.com/gabrielaiduarte/stock-watchlist-react",
    variant: "standard",
  },
  {
    number: "04",
    title: "Topic Classifier",
    category: "Machine Learning",
    description:
      "A machine learning system that classifies tweets into predefined topics using natural language processing.",
    technologies: ["Python", "scikit-learn", "TF-IDF", "NLP"],
    githubUrl: "https://github.com/gabrielaiduarte/TopicClassifier",
    variant: "standard",
  },
  {
    number: "05",
    title: "EasyPlan",
    category: "Productivity",
    description:
      "An interactive calendar and task management application designed around accessible, intuitive planning.",
    technologies: ["React", "JavaScript", "localStorage"],
    githubUrl: "https://github.com/gabrielaiduarte/HCI_Calendar_App",
    variant: "standard",
  },
]