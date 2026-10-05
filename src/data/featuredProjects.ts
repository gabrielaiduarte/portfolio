export type FeaturedProject = {
    number: string
    title: string
    status: string
    label: string
    tagline: string
    description: string
    features: {
        number: string
        title: string
        description: string
    }[]
    technologies: string[]
    githubUrl: string
    caseStudyPath: string
}

export const featuredProject: FeaturedProject = {
    number: "01",
    title: "Driftline",
    status: "In active development",
    label: "Flagship Project",
    tagline:"Incident intelligence for engineering teams.",
    description: "Driftline is an incident intelligence platform I'm building to help engineering teams investigate failures by connecting current issues with relevant past incidents, surfacing solutions that worked before, and using AI to suggest potential fixes.",
    
    features: [
        {
        number: "01",
        title: "Similar incident matching",
        description: "Connects current issues with relevant past incidents and the solutions that worked before."
        },
        {
        number: "02",
        title: "AI-assisted recommendations",
        description: "Uses incident context and existing team knowledge to suggest potential fixes."
        },
        {
        number: "03",
        title: "Feedback-driven knowledge",
        description:"Captures whether recommendations helped so future suggestions can improve.",
        },
    ],

    technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Supabase",
        "PostgreSQL",
    ],

    githubUrl: "https://github.com/gabrielaiduarte/driftline",

    caseStudyPath: "/projects/driftline",   
}