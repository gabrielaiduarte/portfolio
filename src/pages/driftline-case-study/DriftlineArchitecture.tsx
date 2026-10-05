import { useState } from "react";
import CaseStudySection from "../../components/case-study/CaseStudySection";
import ArchitectureSwitcher from "./architecture/ArchitectureSwitcher";
import ArchitectureDiagram from "./architecture/ArchitectureDiagram";
import { currentArchitecture, plannedArchitecture, type ArchitectureView } from "../../data/driftlineArchitecture";
import "./DriftlineArchitecture.css"
import ArchitectureDetails from "./architecture/ArchitectureDetails";

export default function DriftlineArchitecture() {

    const [ view, setView ] = useState<ArchitectureView>("current")

    const architecture = view === "current" ? currentArchitecture : plannedArchitecture

    return (
        <CaseStudySection
            id="architecture"
            number="03"
            label="Architecture"
        >

            <div className="driftline-architecture">

                <div className="driftline-architecture-intro">
                    <h2 className="driftline-architecture-title">
                        Built for today, designed for where Driftline is going.
                    </h2>

                    <p className="driftline-architecture-description">
                        I'm building the core product first, then layering in incident
                        retrieval, optional environment detection, and AI-assisted
                        recommendations as the system grows.
                    </p>
                </div>

                <ArchitectureSwitcher
                    view={view}
                    onChange={setView}
                />

                <ArchitectureDiagram
                    nodes={architecture.nodes}
                    variant={view}
                />

                <ArchitectureDetails
                    details={architecture.details}
                />

            </div>
        
        </CaseStudySection>
    )
}