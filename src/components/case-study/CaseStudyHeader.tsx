import { ArrowLeft } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./CaseStudyHeader.css"

type CaseStudyHeaderProps = {
    projectName: string
    githubUrl: string
}

export default function CaseStudyHeader({ projectName, githubUrl }: CaseStudyHeaderProps ) {
    return (
        <header className="case-study-header">
            <div className="case-study-header-inner">

                <Link
                    className="case-study-brand"
                    to="/"
                    aria-label="Back to portfolio"
                >
                    <span className="case-study-logo">
                        {projectName.charAt(0)}
                    </span>

                    <span className="case-study-brand-copy">
                        <strong>{projectName}</strong>
                        <span>Project case study</span>
                    </span>
                </Link>

                <div className="case-study-header-actions">

                    {githubUrl && (
                        <a
                            className="case-study-github"
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandGithub size={20} stroke={1.7} />
                            GitHub
                        </a>
                    )}

                    <Link
                        className="case-study-back"
                        to="/"
                    >
                        <ArrowLeft size={17} />
                        Back to portfolio
                    </Link>
                </div>

            </div>
        </header>
    )
}