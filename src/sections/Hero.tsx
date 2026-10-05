import { ArrowRight } from "lucide-react"
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import HeroVisual from "../components/hero/HeroVisual"
import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-container container">

                <div className="hero-availability">

                    <span className="hero-availability-status">
                        <span className="hero-status-dot" />
                        Open to opportunities
                    </span>

                    <span className="hero-availability-divider" />

                    <span className="hero-availability-location">
                        United States · Open to relocation
                    </span>

                </div>

                <div className="hero-main">

                    <div className="hero-content">
                        <p className="hero-intro">Hello, I'm Gabby!</p>

                        <h1 className="hero-title">
                            <span className="hero-title-desktop">
                                I enjoy solving
                                <br />
                                problems with{" "}
                                <span className="hero-title-accent">code.</span>
                            </span>

                            <span className="hero-title-mobile">
                                I enjoy 
                                <br />
                                solving problems
                                <br />
                                with <span className="hero-title-accent">code.</span>
                            </span>
                        </h1>

                        <p className="hero-description">
                            I like turning an idea into a real project, from figuring out the
                            frontend to making everything work behind the scenes.
                        </p>

                        <div className="hero-actions">

                            <a
                                className="hero-button hero-button-primary"
                                href="#projects"
                            >
                                View my work
                                <ArrowRight size={18} strokeWidth={2} />
                            </a>

                            <a 
                                className="hero-contact-link"
                                href="#contact"
                            >
                                Contact me
                                <ArrowRight size={18} strokeWidth={2} />
                            </a>
                        </div>

                        <div className="hero-socials">
                            <span className="hero-socials-label">Find me</span>

                            <div className="hero-social-links">
                                <a
                                    className="hero-social-link"
                                    href="https://github.com/gabrielaiduarte"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Github"
                                >
                                    <IconBrandGithub size={21} stroke={1.7} />
                                </a>

                                <a
                                    className="hero-social-link"
                                    href="https://www.linkedin.com/in/gabrielaiduarte/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <IconBrandLinkedin size={21} stroke={1.7} />
                                </a>

                                <a
                                    className="hero-social-link"
                                    href="mailto:gabrielaiduarte03@gmail.com"
                                    aria-label="Email Gabriela"
                                >
                                    <IconMail size={21} strokeWidth={1.7} />
                                </a>

                            </div>
                        </div>
                    </div>

                    <HeroVisual />
                </div>

                <div className="hero-meta">
                    <span>Full-time roles</span>
                    <span>On-site / Hybrid / Remote</span>
                    <span>Frontend · Backend · Full-Stack</span>
                </div>

            </div>
        </section>
    )
}