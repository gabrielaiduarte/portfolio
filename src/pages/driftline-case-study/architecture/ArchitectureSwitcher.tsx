import type { ArchitectureView } from "../../../data/driftlineArchitecture";

type ArchitectureSwitcherProps = {
    view: ArchitectureView
    onChange: (view: ArchitectureView) => void
}

export default function ArchitectureSwitcher({ view, onChange }: ArchitectureSwitcherProps ) {
    return (
        <div className="architecture-switcher" aria-label="Architecture view">

            <button
                type="button"
                className={`architecture-switcher-button ${view === "current" ? "active" : ""}`}
                onClick={() => onChange("current")}
                aria-pressed={view === "current"}
            >
                Current system
            </button>

            <button
                type="button"
                className={`architecture-switcher-button ${view === "planned" ? "active" : ""}`}
                onClick={() => onChange("planned")}
                aria-pressed={view === "planned"}
            >
                Planned system
            </button>
        </div>
    )
}