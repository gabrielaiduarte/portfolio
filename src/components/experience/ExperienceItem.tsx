import type { Experience } from "../../data/experience";

type ExperienceItemProps = {
    experience: Experience
    number: number
}

export default function ExperienceItem({ experience, number }: ExperienceItemProps ) {

    const formattedNumber = number.toString().padStart(2, "0")

    return (
        <article className="experience-item">

            <div className="experience-info">

                <div className="experience-role-row">
                    <div className="experience-number">
                        <span>{formattedNumber}</span>
                        <span className="experience-number-line" />
                    </div>

                    <h3 className="experience-role">
                        {experience.title}
                    </h3>
                </div>

                <p className="experience-organization">
                    {experience.organization}
                </p>

                <div className="experience-date-row">
                    <span className="experience-dates">
                        {experience.dates}
                    </span>

                    {experience.current && (
                        <span className="experience-current">
                            <span className="experience-current-dot" />
                            Current
                        </span>
                    )}
                </div>

            </div>

            <div className="experience-details">

                <p className="experience-description">
                    {experience.description}
                </p>

                <div className="experience-tags">
                    {experience.tags.map((tag) => (
                        <span
                            className="experience-tag"
                            key={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

        </article>
    )
}