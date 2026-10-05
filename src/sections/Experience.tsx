import ExperienceItem from "../components/experience/ExperienceItem";
import { experiences } from "../data/experience";
import "./Experience.css"

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="experience-container container">

                <header className="experience-heading">
                    <p className="experience-eyebrow">
                        03 / EXPERIENCE
                    </p>

                    <h2 className="experience-title">
                        What I've worked on.
                    </h2>

                    <p className="experience-subtitle">
                        I've gotten to do a little bit of everything:
                        build, teach, lead, and learn a lot along the way.
                    </p>
                </header>

                <div className="experience-list">
                    {experiences.map((experience, index) => (
                        <ExperienceItem
                            key={experience.id}
                            experience={experience}
                            number={index + 1}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}