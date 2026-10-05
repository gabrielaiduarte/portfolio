import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectCard from "../components/projects/ProjectCard";
import { featuredProject } from "../data/featuredProjects";
import { projects } from "../data/projects";
import "./Projects.css"

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-container container">

                <header className="projects-intro">
                    <p className="projects-intro-eyebrow">
                        01 / SELECTED WORK
                    </p>

                    <h2 className="projects-intro-title">
                        Building from problem to product.
                    </h2>

                    <p className="projects-intro-description">
                        Full-stack applications, intelligent systems, and practical tools
                        built around real problems.
                    </p>
                </header>

                <div className="projects-featured-heading">
                    <span>Featured · Currently Building</span>
                    <div className="projects-featured-line" />
                </div>

                <FeaturedProject project={featuredProject}/>

                <div className="projects-more">

                    <div className="projects-more-heading">
                        <h2>More things I've built</h2>
                        <span>
                            Completed Projects ·{" "}
                            {projects.length.toString().padStart(2, "0")}
                        </span>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.number}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}