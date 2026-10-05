export type ArchitectureView = "current" | "planned"

export type ArchitectureNodeData = {
    label: string
    title: string
    description: string
}

export type ArchitectureDetailData = {
    label: string
    technology: string
    description: string
}

export type ArchitectureData = {
    nodes: ArchitectureNodeData[]
    details: ArchitectureDetailData[]
}

export const currentArchitecture: ArchitectureData = {
    nodes: [
        {
            label: "Client",
            title: "React + TypeScript",
            description: "Product interface built with Vite"
        },
        {
            label: "Server",
            title: "Node.js + TypeScript",
            description: "Application services and validation"
        },
        {
            label: "Data + identity",
            title: "Supabase + PostgreSQL",
            description: "Authentication, profiles, records, and RLS"
        },
    ],

    details: [
        {
            label: "Product interface",
            technology: "React, TypeScript, Vite",
            description: "A typed, component driven frontend for the Driftline interface."
        },
        {
            label: "Application Services",
            technology: "Node.js, TypeScript",
            description: "A separate server layer for application logic, validation, and API behavior."
        },
        {
            label: "Data & authentication",
            technology: "Supabase, PostgreSQL",
            description: "Authentication and relational data with row-level security controlling access."
        },
    ]
}

export const plannedArchitecture: ArchitectureData = {
    nodes: [
        {
            label: "Platform",
            title: "Driftline",
            description: "Receive, review, and investigate engineering issues"
        },
        {
            label: "Incident knowledge",
            title: "Supabase + PostgreSQL",
            description: "Incidents, solutions, context, and feedback"
        },
        {
            label: "Retrieval",
            title: "Similarity search",
            description: "Find relevant incidents from team history"
        },
        {
            label: "Intelligence",
            title: "AI Assitance",
            description: "Surface possible fixes using retrieved context"
        },
        {
            label: "Learning",
            title: "Feedback Loop",
            description: "Capture whether recommendations were useful"
        },
    ],

    details: [
        {
            label: "Issue intake",
            technology: "Manual reporting + optional environment agent",
            description: "Issues can be reported directly through Driftline, while the planned environment agent provides an additional way to detect and raise environment-related failures automatically."
        },
        {
            label: "Incident knowledge",
            technology: "Structured incident data",
            description: "Store incidents, previous solutions, environment context, and outcomes so the team's past engineering work can be reused."
        },
        {
            label: "Retrieval",
            technology: "Similarity search",
            description: "Search team history for incidents that are relevant to the issue currently being investigated."
        },
        {
           label: "Intelligence",
            technology: "AI-assisted recommendations",
            description: "Use relevant past incidents as context to surface possible fixes and help engineers investigate faster."
        },{
            label: "Feedback loop",
            technology: "Did this help?",
            description: "Capture whether a recommendation was useful so its outcome becomes part of Driftline's incident knowledge."
        },
    ]
}