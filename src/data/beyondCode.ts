export type BeyondCodeItem = {
    id: string
    label: string
    title: string
    description: string
    variant: "tennis" | "matcha" | "diving"
}

export const beyondCodeItems: BeyondCodeItem[] = [
    {
        id: "tennis",
        label: "Game, Set, Match",
        title: "Raised on the court.",
        description:
        "Most of my childhood involved practices, tournaments, and a lot of time on the court. I competed nationally and internationally and worked my way to #1 in Honduras.",
        variant: "tennis",
    },
    {
        id: "matcha",
        label: "Current Obsession",
        title: "Powered by matcha.",
        description:
        "I’ll almost never say no to a matcha, especially if it’s strawberry. I’m always down to try a new spot.",
        variant: "matcha",
    },
    {
        id: "diving",
        label: "Dive In",
        title: "Certified to explore.",
        description:
        "I got my scuba certification in Roatán, Honduras in 2023 and discovered a whole new way to explore one of my favorite places.",
        variant: "diving",
    }
]