import { ArrowRight, CornerUpLeft } from "lucide-react";
import ArchitectureNode from "./ArchitectureNode";
import type { ArchitectureNodeData } from "../../../data/driftlineArchitecture";

type PlannedArchitectureFlowProps = {
  nodes: ArchitectureNodeData[];
}

export default function PlannedArchitectureFlow({ nodes }: PlannedArchitectureFlowProps) {
    
    const [platform, knowledge, retrieval, intelligence, feedback] = nodes;
    
    return (
        <div className="architecture-planned-scroll">
            <div className="architecture-planned-flow">

                <div className="architecture-planned-pipeline">

                <div className="architecture-planned-input-column">
                    <span className="architecture-planned-column-label">
                    Issue intake
                    </span>

                    <div className="architecture-planned-inputs">
                    <div className="architecture-planned-input">
                        <span className="architecture-planned-input-type">
                        Primary input
                        </span>

                        <strong>Manual issue reporting</strong>

                        <span className="architecture-planned-input-description">
                        Issues raised directly through Driftline
                        </span>
                    </div>

                    <div className="architecture-planned-input architecture-planned-input-optional">
                        <span className="architecture-planned-input-type">
                        Optional input
                        </span>

                        <strong>Environment Agent</strong>

                        <span className="architecture-planned-input-description">
                        Detects and raises environment-related issues automatically
                        </span>
                    </div>
                    </div>
                </div>

                <ArrowRight
                    className="architecture-arrow"
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                />

                {platform && (
                    <div className="architecture-planned-node">
                    <ArchitectureNode node={platform} />
                    </div>
                )}

                <ArrowRight
                    className="architecture-arrow"
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                />

                {knowledge && (
                    <div className="architecture-planned-node">
                    <ArchitectureNode node={knowledge} />
                    </div>
                )}

                <ArrowRight
                    className="architecture-arrow"
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                />

                {retrieval && (
                    <div className="architecture-planned-node">
                    <ArchitectureNode node={retrieval} />
                    </div>
                )}

                <ArrowRight
                    className="architecture-arrow"
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                />

                {intelligence && (
                    <div className="architecture-planned-node">
                    <ArchitectureNode node={intelligence} />
                    </div>
                )}

                <ArrowRight
                    className="architecture-arrow"
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                />

                {feedback && (
                    <div className="architecture-planned-node">
                    <ArchitectureNode node={feedback} />
                    </div>
                )}

                </div>

                <div className="architecture-feedback-loop">
                <CornerUpLeft
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                />

                <span>
                    Resolved outcomes strengthen incident knowledge
                </span>
                </div>

            </div>
        </div>
    );
}