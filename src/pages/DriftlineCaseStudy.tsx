import CaseStudyHeader from "../components/case-study/CaseStudyHeader"
import CaseStudySidebar from "../components/case-study/CaseStudySidebar"
import DriftlineOverview from "./driftline-case-study/DriftlineOverview"
import DriftlineProblem from "./driftline-case-study/DriftlineProblem"
import DriftlineArchitecture from "./driftline-case-study/DriftlineArchitecture"
import DriftlineDecisions from "./driftline-case-study/DriftlineDecisions"
import DriftlineProgress from "./driftline-case-study/DriftlineProgress"
import { driftlineCaseStudy } from "../data/driftlineCaseStudy"
import "./DriftlineCaseStudy.css"

export default function DriftlineCaseStudy() {

    const project = driftlineCaseStudy

    const sidebarItems = [
        {id: "overview", label:"Overview"},
        {id: "problem", label:"Problem"},
        {id: "architecture", label:"Architecture"},
        {id: "engineering-decisions", label:"Engineering decisions"},
        {id: "progress", label:"Progress & learnings"},
    ]

    return (
        <div className="driftline-case-study">

            <CaseStudyHeader
                projectName={project.name}
                githubUrl={project.githubUrl}
            />

            <div className="case-study-layout">

                <CaseStudySidebar items={sidebarItems} />

                <main className="case-study-content">

                    <DriftlineOverview />
                    <DriftlineProblem />
                    <DriftlineArchitecture />
                    <DriftlineDecisions />
                    <DriftlineProgress />

                </main>

            </div>

        </div>
    )
}