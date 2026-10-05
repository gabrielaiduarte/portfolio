import ProgressItem from "./ProgressItem";
import type { DriftlineProgressItem } from "../../../data/driftlineProgress";

type ProgressListProps = {
    items: DriftlineProgressItem[]
}

export default function ProgressList({ items }: ProgressListProps ) {
    return (
        <div className="progress-list">
            {items.map((item) => (
                <ProgressItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
}