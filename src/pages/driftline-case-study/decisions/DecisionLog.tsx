import DecisionRow from "./DecisionRow";
import type { DriftlinDecision } from "../../../data/driftlineDecisions";

type DecisionLogProps = {
    decisions: DriftlinDecision[]
}

export default function DecisionLog({ decisions }: DecisionLogProps ) {
    return (
        <div className="decision-log">
            {decisions.map((decision, index) => (
                <DecisionRow
                    key={decision.id}
                    decision={decision}
                    number={index + 1}
                />
            ))}
        </div>
    )
}