import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react"
import type { FeaturedProject as FeaturedProjectType } from "../../data/featuredProjects"
import ProjectVisual from "./ProjectVisual"
import "./FeaturedProject.css"

type FeaturedProjectProps = {
    project: FeaturedProjectType
}

export default function FeaturedProject ({ project }: FeaturedProjectProps) {
    return (
        <article className="featured-project">

            <div className="featured-project-content">

                <div className="featured-project-status">
                    <span className="featured-project-status-dot" />
                    {project.status}
                </div>

                <p className="featured-project-eyebrow">
                    {project.number} / {project.label}
                </p>

                <h2 className="featured-project-title">
                    {project.title}
                </h2>

                <p className="featured-project-tagline">
                    {project.tagline}
                </p>

                <p className="featured-project-description">
                    {project.description}
                </p>
                
                <div className="featured-project-features">
                    {project.features.map((feature) => (
                        <div
                            className="featured-project-feature"
                            key={feature.number}
                        >
                            <span className="featured-project-feature-number">
                                {feature.number}
                            </span>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="featured-project-technologies">
                    {project.technologies.map((technology) => (
                        <span
                            className="featured-project-technology"
                            key={technology}
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="featured-project-actions">
                    <a
                        className="featured-project-case-study"
                        href={project.caseStudyPath}
                    >
                        Read case study
                        <IconArrowRight size={18} stroke={1.7} />
                    </a>

                    <a 
                        className="featured-project-github"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} repository on Github`}
                        title="View Github repository"
                    >
                        <IconBrandGithub size={21} stroke={1.7} />
                    </a>
                </div>
            </div>

            <ProjectVisual />

        </article>
    )
}