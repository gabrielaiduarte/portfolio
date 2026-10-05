import { IconArrowRight, IconSchool, IconWorld, IconLanguage, IconToolsKitchen2 } from "@tabler/icons-react";
import profileImage from "../assets/Profile.jpeg"
import "./About.css"

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-container container">

                <header className="about-heading">
                    <p className="about-eyebrow">
                        02 / ABOUT
                    </p>

                    <h2 className="about-title">
                        How I got here.
                    </h2>
                </header>

                <div className="about-grid">

                    <div className="about-story">
                        <p className="about-story-lead">
                            Moving from Honduras to the U.S. for college was the start
                            of a lot of firsts, including figuring out what I wanted 
                            to build my career around.
                        </p>

                        <div className="about-story-body">
                            <p>
                                I wasn't one of those people who started coding at 10, and
                                Computer Science definitely didn't click for me overnight.
                                What kept me interested was the problem solving. Every assignment
                                felt a little like a puzzle, and there was something really
                                satisfying about struggling with something and finally figuring
                                it out. Sometimes a problem would stay in my head for so long that 
                                I'd literally dream about it and wake up knowing what I needed to
                                try next.
                            </p>

                            <p>
                                It didn't take long for me to realize that this was what I liked.
                                There's always something new to figure out in tech, and getting
                                to actually create the solution is the fun part. That's what keeps
                                me going.
                            </p>
                        </div>

                        <a
                            href="#experience"
                            className="about-journey-link"
                        >
                            More about my journey
                            <IconArrowRight size={18} stroke={1.7} />
                        </a>
                    </div>

                    <div className="about-portrait-column">

                        <div className="about-portrait">
                            <img
                                src={profileImage}
                                alt="Gabriela Duarte"
                            />

                            <div className="about-portrait-circle" />
                        </div>

                        <div className="about-quote">
                            <span>
                                "There's always something
                                <br />
                                new to figure out."
                            </span>
                        </div>

                    </div>

                    <aside className="about-glance">

                        <p className="about-glance-title">
                            At a glance
                        </p>

                        <div className="about-glance-list">

                            <div className="about-glance-item">
                                <div className="about-glance-icon">
                                    <IconSchool size={21} stroke={1.7} />
                                </div>

                                <div>
                                    <p className="about-glance-primary">
                                        B.S. Computer Science
                                    </p>

                                    <p className="about-glance-secondary">
                                        Finance minor
                                    </p>
                                </div>
                            </div>

                            <div className="about-glance-item">
                                <div className="about-glance-icon">
                                    <IconWorld size={21} stroke={1.7} />
                                </div>

                                <div>
                                    <p className="about-glance-primary about-glance-label">
                                        From → Now
                                    </p>

                                    <p className="about-glance-secondary">
                                        Honduras → United States
                                    </p>
                                </div>
                            </div>

                            <div className="about-glance-item">
                                <div className="about-glance-icon">
                                    <IconLanguage size={21} stroke={1.7} />
                                </div>

                                <div>
                                    <p className="about-glance-primary about-glance-label">
                                        Languages
                                    </p>

                                    <p className="about-glance-secondary">
                                        Spanish · English · French
                                    </p>
                                </div>
                            </div>
                            
                            <div className="about-glance-item">
                                <div className="about-glance-icon">
                                    <IconToolsKitchen2 size={21} stroke={1.7} />
                                </div>

                                <div>
                                    <p className="about-glance-primary about-glance-label">
                                        Fun fact
                                    </p>

                                    <p className="about-glance-secondary">
                                        Food is the way to win me over.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </aside>

                </div>

            </div>
        </section>
    )
}