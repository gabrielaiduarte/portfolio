import EducationCard from "../components/education/EducationCard";
import { education } from "../data/education";
import "./Education.css"

export default function Education() {
    return (
        <section className="education" id="education">
            <div className="education-container container">

                <header className="education-heading">
                    <p className="education-eyebrow">
                        05 / EDUCATION
                    </p>

                    <h2 className="education-title">
                        What I studied.
                    </h2>
                </header>

                <div className="education-list">
                    {education.map((item) => (
                        <EducationCard
                            key={item.id}
                            education={item}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}