export type ToolboxCategory = {
    id: string
    title: string
    skills: string[]
}

export const toolboxCategories: ToolboxCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "React Router", "Vite", "HTML", "CSS"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    id: "data",
    title: "Data & Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Supabase"],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    skills: [
      "scikit-learn",
      "Pandas",
      "NumPy",
      "LangChain",
      "LlamaIndex",
      "TF-IDF",
    ],
  },
  {
    id: "developer-tools",
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
]