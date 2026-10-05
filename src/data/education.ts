export type Education = {
    id: string
    school: string
    degree: string
    minor?: string
    graduation: string
    gpa?: string
    distinction?: string
    recognition: string[]
}

export const education: Education[] = [
    {
        id: "georgia-southern",
        school: "Georgia Southern University",
        degree: "Bachelor of Science in Computer Science",
        minor: "Minor in Finance",
        graduation: "Graduated May 2026",
        gpa: "3.51",
        distinction: "Cum Laude",
        recognition: [
            "International Merit Scholarship",
            "President's List",
            "Dean's List",
        ]
    }
]