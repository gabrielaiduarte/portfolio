import type { ReactNode } from "react";
import "./CaseStudyPill.css"

type CaseStudyPillProps = {
    children: ReactNode
    variant?: "default" | "status"
    showDot?: boolean
}

export default function CaseStudyPill({ 
    children, 
    variant = "default",
    showDot = false
 }: CaseStudyPillProps ) {
    return (
        <span className={`case-study-pill case-study-pill-${variant}`}>
            {showDot && <span className="case-study-pill-dot" />}
            {children}
        </span>
    )
}