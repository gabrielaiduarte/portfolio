import { IconBrandGithub } from "@tabler/icons-react"
import type { Project } from "../../data/projects"
import "./ProjectCard.css"

type ProjectCardProps = Project

export default function ProjectCard ({
    number,
    title,
    category,
    description,
    technologies,
    githubUrl,
    variant,
}: ProjectCardProps) {
    return (
        <article className={`project-card project-card-${variant}`}>

            <div className="project-card-visual">
                <span className="project-card-category">
                    {category}
                </span>
            </div>

            <div className="project-card-content">

                <div className="project-card-meta">
                    <span className="project-card-number">
                        {number}
                    </span>

                    <a
                        className="project-card-github"
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${title} repository on Github`}
                        title="View Github repository"
                    >
                        <IconBrandGithub size={21} stroke={1.7} />
                    </a>
                </div>

                <h3 className="project-card-title">
                    {title}
                </h3>

                <p className="project-card-description">
                    {description}
                </p>

                <div className="project-card-technologies">
                    {technologies.map((technology) => (
                        <span
                            className="project-card-technology"
                            key={technology}
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}