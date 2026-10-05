import CaseStudySection from "../../components/case-study/CaseStudySection";
import ProgressList from "./progress/ProgressList";
import ProgressLearning from "./progress/ProgressLearning";
import { driftlineProgress, driftlineLearning } from "../../data/driftlineProgress";
import "./DriftlineProgress.css"

export default function DriftlineProgress() {
    return (
        <CaseStudySection
            id="progress"
            number="05"
            label="Progress & learnings"
        >
            <div className="driftline-progress">

                <div className="driftline-progress-intro">
                    <span className="driftline-progress-eyebrow">
                        Current progress
                    </span>

                    <h2 className="driftline-progress-title">
                        Turning the plan into a working product.
                    </h2>

                    <p className="driftline-progress-description">
                        What started as a system design is becoming a working product.
                        Here's what has been built, what I'm working on, and wha will
                        come next.
                    </p>
                </div>

                <div className="driftline-progress-content">

                    <div className="driftline-progress-roadmap">

                        <div className="driftline-progress-header">
                            <span>Development roadmap</span>
                        </div>

                        <ProgressList items={driftlineProgress} />

                    </div>

                    <ProgressLearning
                        label={driftlineLearning.label}
                        title={driftlineLearning.title}
                        description={driftlineLearning.description}
                    />

                </div>

            </div>
        </CaseStudySection>
    )
}