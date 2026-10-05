import CurrentArchitectureFlow from "./CurrentArchitectureFlow";
import PlannedArchitectureFlow from "./PlannedArchitectureFlow";
import type { ArchitectureNodeData, ArchitectureView } from "../../../data/driftlineArchitecture";

type ArchitectureDiagramProps = {
  nodes: ArchitectureNodeData[]
  variant: ArchitectureView
};

export default function ArchitectureDiagram({ nodes, variant }: ArchitectureDiagramProps) {
    return (
        <div className={`architecture-diagram architecture-diagram-${variant}`}>

            {variant === "current" ? (
                <CurrentArchitectureFlow nodes={nodes} />
            ) : (
                <PlannedArchitectureFlow nodes={nodes} />
            )}

        </div>
    )
}