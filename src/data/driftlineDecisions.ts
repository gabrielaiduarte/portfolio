export type DriftlinDecision = {
    id: string
    date: string
    title: string
    summary: string
    reasoning: string
    tradeoff: string
    category: string
    pinned: boolean
}

export const driftlineDecisions: DriftlinDecision[] = [
    {
        id: "optional-environment-agent",
        date: "Oct. 2026",
        title: "Keep automated detection optional",
        summary: "The environment agent should be another way to raise issues, not a requirement for using Driftline.",
        reasoning: "Issues can enter Driftline in different ways. An engineer should always be able to report an issue directly, while the planned environment agent can provide an additional path by detecting and raising silent environment related issues automatically. I did not want the usefulness of the core product to depend on the agent being present.",
        tradeoff: "Supporting more than one intake path adds complexity, but it keeps Driftline useful with or without automated detection and allows the agent to remain an optional capability.",
        category: "Issue intake",
        pinned: false
    },
    
    {
        id: "broaden-issue-scope",
        date: "Sep. 2026",
        title: "Expand Driftline beyond silent environment failures",
        summary: "Design Driftline to help with engineering issues generally instead of limiting the product to silent failures.",
        reasoning: "The idea originally focused heavily on silent environment failures, but I realized the larger problem was helping engineers investigate and resolve issues using knowledge their team had already built. Driftline should be able to help with silent issues, recurring or previously seen issues, and genuinely new issues rather than being tied to one type of failure.",
        tradeoff: "A broader scope requires clearer boundaries around what Driftline is responsible for, but it makes the incident knowledge and recommendation system useful across a much wider range of engineering problems.",
        category: "Product scope",
        pinned: false
    },
    
    {
        id: "history-without-dependence",
        date: "Sep. 2026",
        title: "Use incident history when it exists without depending on it",
        summary: "Use relevant past incidents when they can help, while still supporting issues the team has never encountered before.",
        reasoning: "When Driftline receives an issue, it should look for relevant incidents and solutions from the team's history. If something similar has happened before, that context can help engineers understand what worked previously. But the system should not stop being useful when there is no strong historical match. New issues still need a path forward through AI assisted suggestions based on the available issue context.",
        tradeoff: "Supporting both historical retrieval and new issue assistance creates a more complex recommendation flow, but it prevents Driftline from being limited to problems the team has already solved.",
        category: "Recommendations",
        pinned: false
    },
    
    {
        id: "recommendation-feedback-loop",
        date: "Sep. 2026",
        title: "Capture whether suggested solutions actually helped",
        summary: "Collect feedback on recommendations so their real outcomes can become useful knowledge for future issues.",
        reasoning: "Whether Driftline surfaces something that worked during a previous incident or provides an AI assisted suggestion for a new issue, showing the recommendation is only part of the process. I want engineers to be able to indicate whether it actually helped so Driftline can preserve the outcome instead of losing that information once the issue is resolved.",
        tradeoff: "Capturing feedback introduces additional state and data to model, but it creates a path for the system's knowledge to improve from real engineering outcomes.",
        category: "Feedback",
        pinned: false
    },
    
    {
        id: "separate-system-packages",
        date: "Sep. 2026",
        title: "Separate Driftline into web, server, and agent packages",
        summary: "Give the product interface, application services, and environment tooling their own responsibilities.",
        reasoning: "I wanted Driftline's major parts to evolve independently instead of placing the entire system inside one application. The web package owns the interface, the server handles application services, and the agent package gives future environment detection a separate place to live.",
        tradeoff: "A multi package structure requires more setup and configuration early in development, but it creates clearer boundaries and makes each part of the system easier to evolve independently.",
        category: "Architecture",
        pinned: false
    },
    
    {
        id: "supabase-backend",
        date: "Sep. 2026",
        title: "Use Supabase for data and authentication",
        summary: "Use Supabase to provide PostgreSQL, authentication, user profiles, and database access control.",
        reasoning: "Driftline needs relational data for incidents as well as authentication and authorization for its users. Supabase gives me PostgreSQL while also providing authentication and row level security, so I can establish those foundations without building every backend service from scratch.",
        tradeoff: "The application relies on some Supabase specific authentication and security features, but it lets me move faster while keeping PostgreSQL as the underlying relational database.",
        category: "Data & auth",
        pinned: false
    }
]