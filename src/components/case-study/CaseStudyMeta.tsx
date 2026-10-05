import "./CaseStudyMeta.css"

type caseStudyMetaProps = {
    label: string
    value: string
}

export default function CaseStudyMeta({ label, value }: caseStudyMetaProps ) {
    return (
        <div className="case-study-meta">

            <span className="case-study-meta-label">
                {label}
            </span>

            <span className="case-study-meta-value">
                {value}
            </span>
        </div>
    )
}