import { Lightbulb } from "lucide-react";

type ProgressLearningProps = {
    label: string
    title: string
    description: string
}

export default function ProgressLearning({ label, title, description }: ProgressLearningProps ) {
    return (
        <div className="progress-learning">

            <div className="progress-learning-heading">
                <Lightbulb
                    className="progress-learning-icon"
                    size={18}
                    strokeWidth={1.7}
                    aria-hidden="true"
                />

                <span className="progress-learning-label">
                    {label}
                </span>
            </div>

            <h3 className="progress-learning-title">
                {title}
            </h3>

            <p className="progress-learning-description">
                {description}
            </p>
        </div>
    )
}