import type { DriftlineProgressItem, DriftlineProgressStatus } from "../../../data/driftlineProgress";
import "./ProgressItem.css"

type ProgressItemProps = {
    item: DriftlineProgressItem
}

const statusLabels: Record<DriftlineProgressStatus, string> = {
    complete: "Complete",
    building: "Building now",
    next: "Next",
    planned: "Planned"
}

export default function ProgressItem({ item }: ProgressItemProps) {
    return (
        <div className={`progress-item progress-item-${item.status}`}>

            <div 
                className="progress-item-indicator"
                aria-hidden="true"
            />

            <span className="progress-item-title">
                {item.title}
            </span>

            <span className="progress-item-status">
                {statusLabels[item.status]}
            </span>

        </div>
    )
}