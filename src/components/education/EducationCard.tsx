import { IconSchool } from "@tabler/icons-react";
import type { Education } from "../../data/education";

type EducationCardProps = {
    education: Education
}

export default function EducationCard({ education }: EducationCardProps ) {
    return (
        <article className="education-card">
            <div className="education-card-main">

                <div className="education-school-group">

                    <div className="education-icon">
                        <IconSchool size={30} stroke={1.7} />
                    </div>

                    <div className="education-school-intro">
                        <p className="education-school">
                            {education.school}
                        </p>

                        <h3 className="education-degree">
                            {education.degree}
                        </h3>

                        <p className="education-meta">
                            {education.minor && (
                                <>
                                    <span>{education.minor}</span>
                                    <span className="education-meta-dot">·</span>                        
                                </>
                            )}

                            <span>{education.graduation}</span>
                        </p>
                    </div>
                </div>

                <div className="education-stats">

                    {education.gpa && (
                        <div className="education-stat">
                            <strong>{education.gpa}</strong>
                            <span>GPA / 4.00</span>
                        </div>
                    )}

                    {education.distinction && (
                        <div className="education-stat">
                            <strong>{education.distinction}</strong>
                            <span>Academic Distinction</span>
                        </div>
                    )}

                </div>

            </div>

            <div className="education-recognition">

                <span className="education-recognition-label">
                    Recognition
                </span>

                <div className="education-recognition-list">
                    {education.recognition.map((item) => (
                        <span
                            className="education-recognition-pill"
                            key={item}
                        >
                            {item}
                        </span>
                    ))}
                </div>

            </div>
        </article>
    )
}