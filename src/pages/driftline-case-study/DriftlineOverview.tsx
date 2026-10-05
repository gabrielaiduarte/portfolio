import CaseStudyMeta from "../../components/case-study/CaseStudyMeta";
import CaseStudyPill from "../../components/case-study/CaseStudyPill";
import CaseStudySection from "../../components/case-study/CaseStudySection";
import { driftlineCaseStudy } from "../../data/driftlineCaseStudy";
import "./DriftlineOverview.css"

export default function DriftlineOverview() {

    const project = driftlineCaseStudy;

    return (
        <CaseStudySection
            id="overview"
            number="01"
            label="Overview"
        >

            <div className="case-study-overview">
                <div className="case-study-overview-main">

                    <div className="case-study-overview-heading">
                        <span className="case-study-overview-category">
                            {project.category}
                        </span>

                        <CaseStudyPill variant="status" showDot>
                            As of {project.lastUpdated}
                        </CaseStudyPill>
                    </div>
                    
                    <h1 className="case-study-overview-title">
                        {project.name}
                    </h1>

                    <p className="case-study-overview-summary">
                        {project.summary}
                    </p>

                    <div className="case-study-overview-technologies">
                        {project.technologies.map((technology) => (
                            <CaseStudyPill key={technology}>
                                {technology}
                            </CaseStudyPill>
                        ))}
                    </div>

                </div>

                <div className="case-study-overview-meta">

                    <CaseStudyMeta
                        label="Role"
                        value={project.role}
                    />

                    <CaseStudyMeta
                        label="Project type"
                        value={project.projectType}
                    />

                    <CaseStudyMeta
                        label="Status"
                        value={project.status}
                    />
                    
                </div>
                
            </div>

        </CaseStudySection>
    )
}