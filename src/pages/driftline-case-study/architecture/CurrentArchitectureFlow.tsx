import { ArrowRight } from "lucide-react";
import ArchitectureNode from "./ArchitectureNode";
import type { ArchitectureNodeData } from "../../../data/driftlineArchitecture";

type CurrentArchitectureFlowProps = {
  nodes: ArchitectureNodeData[]
}

export default function CurrentArchitectureFlow({ nodes }: CurrentArchitectureFlowProps) {
    return (
        <div className="architecture-current-flow">
            {nodes.map((node, index) => (
                <div
                    className="architecture-current-flow-item"
                    key={node.title}
                >

                    <ArchitectureNode node={node} />

                    {index < nodes.length - 1 && (
                        <ArrowRight
                            className="architecture-arrow"
                            size={22}
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />
                    )}
                </div>
            ))}
        </div>
    )
}