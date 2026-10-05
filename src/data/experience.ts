export type Experience = {
    id: string
    title: string
    organization: string
    dates: string
    description: string
    tags: string[]
    current: boolean
}

export const experiences: Experience[] = [
  {
    id: "changing-the-present",
    title: "Software Developer Intern",
    organization: "Changing the Present",
    dates: "2026",
    description:
      "Contributing to a new Discourse-based community forum for Student-Orgs.org, starting with the project structure, requirements, and setup needed before implementation.",
    tags: ["Discourse", "Web Development", "Community Platform"],
    current: true,
  },
  {
    id: "women-in-technology",
    title: "Programming Tutor",
    organization: "Women in Technology",
    dates: "2023 — 2026",
    description:
      "Helped students work through programming concepts and assignments in Principles of Programming I & II, supporting 30+ students and leading 10+ review sessions.",
    tags: ["Programming", "Mentoring", "Communication"],
    current: false,
  },
  {
    id: "shpe",
    title: "Secretary",
    organization: "Society of Hispanic Professional Engineers",
    dates: "2025 — 2026",
    description:
      "Helped keep the chapter organized through member communication, meeting coordination, and support for events and activities.",
    tags: ["Coordination", "Organization", "Event Support"],
    current: false,
  },
  {
    id: "resident-advisor",
    title: "Resident Advisor",
    organization: "Georgia Southern University",
    dates: "2023 — 2025",
    description:
      "Supported a community of around 60 residents, helping with everyday concerns, building community, and handling conflicts and situations that required quick judgment.",
    tags: ["Leadership", "Conflict Resolution", "Community"],
    current: false,
  },
]