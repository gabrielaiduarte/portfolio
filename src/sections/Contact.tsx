import { IconArrowRight, IconArrowUpRight, IconMapPin, IconWorld } from "@tabler/icons-react";
import "./Contact.css"

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container container">

                <div className="contact-card">
                    <div className="contact-decoration contact-decoration-one" aria-hidden="true" />
                    <div className="contact-decoration contact-decoration-two" aria-hidden="true" />

                    <div className="contact-card-content">

                        <div className="contact-copy">

                            <div className="contact-status">
                                <span className="contact-status-dot" />
                                Open to what's next
                            </div>

                            <h2 className="contact-title">
                                Let's see what
                                <br />
                                we can build.
                            </h2>

                            <p className="contact-description">
                                I'm always happy to talk about new opportunities,
                                interesting projects, or just connect with people in tech.
                            </p>

                        </div>

                        <div className="contact-actions">

                            <a 
                                className="contact-button contact-button-primary"
                                href="mailto:gabrielaiduarte03@gmail.com"
                            >
                                Email me
                                <IconArrowRight size={18} stroke={1.7} />
                            </a>

                            <a 
                                className="contact-button contact-button-secondary"
                                href="https://www.linkedin.com/in/gabrielaiduarte/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                                <IconArrowUpRight size={18} stroke={1.7} />
                            </a>
                                
                        </div>
                    </div>

                    <div className="contact-card-footer">

                        <div className="contact-location">
                            <IconMapPin size={17} stroke={1.7} />
                            <span>Open to relocation</span>
                        </div>

                        <div className="contact-location">
                            <IconWorld size={17} stroke={1.7} />
                            <span>United States</span>
                        </div>

                    </div>
                </div>

                <footer className="site-footer">
                    <div className="site-footer-identity">

                        <a 
                            className="site-footer-logo"
                            href="#top"
                            aria-label="Back to top"
                        >
                            GD
                        </a>

                        <div>
                            <p className="site-footer-name">
                                Gabriela Duarte
                            </p>

                            <p className="site-footer-role">
                                Software Engineer
                            </p>
                        </div>

                    </div>

                    <p className="site-footer-built">
                        Built by Gabriela Duarte
                    </p>
                </footer>

            </div>
        </section>
    )
}