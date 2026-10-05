import type { ReactNode } from "react";
import "./CaseStudySection.css"

type CaseStudySectionProps = {
    number: string
    label: string
    children: ReactNode
    id?: string
}

export default function CaseStudySection({
    number,
    label,
    children,
    id
}: CaseStudySectionProps ) {
    return (
        <section className="case-study-section" id={id}>

            <div className="case-study-section-heading">
                <span>{number}</span>
                <span>/</span>
                <span>{label}</span>
            </div>

            {children}

        </section>
    )
}