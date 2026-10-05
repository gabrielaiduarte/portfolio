import { Sparkles } from "lucide-react";
import CaseStudySection from "../../components/case-study/CaseStudySection";
import "./DriftlineProblem.css"

export default function DriftlineProblem() {
    return (
        <CaseStudySection
            id="problem"
            number="02"
            label="Problem & motivation"
        >

        <div className="case-study-problem">

            <h2 className="case-study-problem-title">
                Teams solve problems all the time.{" "}
                Finding those solutions again is the hard part.
            </h2>

            <div className="case-study-problem-grid">

                <div className="case-study-problem-copy">

                    <h3>The problem</h3>

                    <p>
                        When an issue happens, the solution may already exist
                        somewhere in the team's history. But finding it can mean
                        digging through old incidents, documentation, tickets, or
                        conversations while trying to solve the current problem
                        at the same time.
                    </p>

                    <p>
                        Driftline started from a simple question: what if those
                        past solutions were easier to find when they were
                        actually needed?
                    </p>

                </div>

                <div className="case-study-motivation-card">
                    
                    <h3>Why I'm building it</h3>

                    <p>
                        I wanted to build something that goes beyond storing
                        incident history. The goal of Driftline is to connect
                        new issues with relevant past incidents, surface what
                        worked before, and use AI to help engineers
                        make sense of that context faster.
                    </p>

                    <p>
                        Building it also gives me the chance to work through the
                        full product: from the interface and APIs to the data 
                        model, retrieval system, and AI layer.
                    </p>

                    <div className="case-study-motivation-note">
                        <Sparkles
                            className="case-study-motivation-icon"
                            size={20}
                            strokeWidth={1.7}
                        />

                        <span>
                            Built around a problem I wanted to solve end to end
                        </span>
                    </div>

                </div>

            </div>

        </div>

        </CaseStudySection>
    )
}