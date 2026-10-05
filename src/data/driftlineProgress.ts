export type DriftlineProgressStatus =
    | "complete"
    | "building"
    | "next"
    | "planned"

export type DriftlineProgressItem = {
    id: string
    title: string
    status: DriftlineProgressStatus
}

export const driftlineProgress: DriftlineProgressItem[] = [
    {
        id: "architecture",
        title: "Product scope & system architecture",
        status: "complete"
    },

    {
        id: "database-auth",
        title: "Supabase database & authentication foundation",
        status: "complete"
    },

    {
        id: "auth-flows",
        title: "Authentication flows & account recovery",
        status: "complete"
    },

    {
        id: "application-workflow",
        title: "Core authenticated application workflow",
        status: "building"
    },

    {
        id: "incident-management",
        title: "Incident reporting & management",
        status: "next"
    },

    {
        id: "retrieval",
        title: "Similarity search & incident retrieval",
        status: "planned"
    },

    {
        id: "ai-recommendations",
        title: "AI-assisted recommendations",
        status: "planned"
    },

    {
        id: "environment-agent",
        title: "Environment agent & automated detection",
        status: "planned"
    },

    {
        id: "feedback-loop",
        title: "Recommendation feedback loop",
        status: "planned"
    }
]

export const driftlineLearning = {
    label: "What I've learned",
    title: "Design the system before adding the intelligence.",
    description: "Defining how issues enter Driftline, how incident knowledge is stored, and how the core application works has made the later retrieval and AI layers much clearer. Building the foundation first also keeps those features optional instead of making the product depend on them."
}