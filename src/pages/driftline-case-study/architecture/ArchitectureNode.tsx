import type { ArchitectureNodeData } from "../../../data/driftlineArchitecture";

type ArchitectureNodeProps = {
    node: ArchitectureNodeData
}

export default function ArchitectureNode({ node }: ArchitectureNodeProps ) {
    return (
        <div className="architecture-node">

            <span className="architecture-node-label">
                {node.label}
            </span>

            <strong className="architecture-node-title">
                {node.title}
            </strong>

            <span className="architecture-node-description">
                {node.description}
            </span>
            
        </div>
    )
}