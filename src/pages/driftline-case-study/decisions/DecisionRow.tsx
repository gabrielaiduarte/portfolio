import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { DriftlinDecision } from "../../../data/driftlineDecisions";
import "./DecisionRow.css"

type DecisionRowProps = {
    decision: DriftlinDecision
    number: number
}

export default function DecisionRow({ decision, number }: DecisionRowProps ) {

    const [ isOpen, setIsOpen ] = useState(false)

    const formattedNumber = String(number).padStart(2, "0")

    return (
        <article className={`decision-row ${isOpen ? "decision-row-open" : ""}`}>

            <button
                className="decision-row-trigger"
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-expanded={isOpen}
            >
                <span className="decision-row-number">
                    {formattedNumber}
                </span>

                <div className="decision-row-main">

                    <div className="decision-row-heading">

                        <h3 className="decision-row-title">
                            {decision.title}
                        </h3>

                        <span className="decision-row-category">
                            {decision.category}
                        </span>
                    </div>

                    <p className="decision-row-summary">
                        {decision.summary}
                    </p>

                    <span className="decision-row-date">
                        {decision.date}
                    </span>

                </div>

                <ChevronDown
                    className="decision-row-chevron"
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                />
            </button>

            {isOpen && (
                <div className="decision-row-details">

                    <div className="decision-row-detail">
                        <span className="decision-row-detail-label">
                            Why I made this decision
                        </span>
                        <p>{decision.reasoning}</p>
                    </div>

                    <div className="decision-row-detail">
                        <span className="decision-row-detail-label">
                            Tradeoff
                        </span>

                        <p>{decision.tradeoff}</p>
                    </div>

                </div>
            )}

        </article>
    )
}