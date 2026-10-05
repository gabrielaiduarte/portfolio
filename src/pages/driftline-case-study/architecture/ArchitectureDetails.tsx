import type { ArchitectureDetailData } from "../../../data/driftlineArchitecture";

type ArchitectureDetailsProps = {
    details: ArchitectureDetailData[]
}

export default function ArchitectureDetails({ details }: ArchitectureDetailsProps ) {
    return (
        <div className="architecture-details">

            {details.map((detail) => (
                <div
                    className="architecture-detail-row"
                    key={detail.label}
                >
                    <span className="architecture-detail-label">
                        {detail.label}
                    </span>

                    <strong className="architecture-detail-technology">
                        {detail.technology}
                    </strong>

                    <p className="architecture-detail-description">
                        {detail.description}
                    </p>
                </div>
            ))}

        </div>
    )
}