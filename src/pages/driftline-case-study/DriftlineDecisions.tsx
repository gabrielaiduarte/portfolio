import CaseStudySection from "../../components/case-study/CaseStudySection";
import DecisionLog from "./decisions/DecisionLog";
import { driftlineDecisions } from "../../data/driftlineDecisions";
import "./DriftlineDecisions.css"

export default function DriftlineDecisions() {
    return (
        <CaseStudySection
            id="engineering-decisions"
            number="04"
            label="Engineering decisions"
        >
            <div className="driftline-decisions">

                <div className="driftline-decisions-intro">
                    <h2 className="driftline-decisions-title">
                        The decisions shaping Driftline as I build it.
                    </h2>

                    <p className="driftline-decisions-description">
                        A running log of the product and engineering choices behind
                        Driftline, including why I made them and the tradeoffs that came
                        with each one.
                    </p>
                </div>

                <div className="driftline-decisions-log">

                    <div className="driftline-decisions-log-header">
                        <span>Engineering decision log</span>

                        <span className="driftline-decisions-order">
                            Newest first
                        </span>
                    </div>

                    <DecisionLog decisions={driftlineDecisions} />

                </div>
            </div>
            
        </CaseStudySection>
    )
}