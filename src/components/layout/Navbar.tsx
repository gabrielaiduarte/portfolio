import { IconArrowRight, IconBrandGithub, IconBrandLinkedin, IconMenu2, IconX } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import "./Navbar.css"

const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Toolbox", href: "#toolbox" },
    { label: "Education", href: "#education" },
    { label: "Beyond Code", href: "#beyond-code" },
    { label: "Contact", href: "#contact" }
]

export default function Navbar() {

    const [ activeSection, setActiveSection ] = useState("")
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
        const sectionIds = navLinks.map((link) =>
        link.href.replace("#", "")
        )

        const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10

        if (isAtBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
        }

        const navbarOffset = 180

        let currentSection = ""

        sectionIds.forEach((id) => {
            const section = document.getElementById(id)

            if (!section) return

            const rect = section.getBoundingClientRect()

            if (rect.top <= navbarOffset) {
            currentSection = id
            }
        })

        setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, {
        passive: true,
    })

    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 850) {
                setIsMenuOpen(false)
            }
        };

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className={`navbar ${isMenuOpen ? "navbar-menu-open" : ""}`}>
            <div className="navbar-container container">

                <a className="navbar-brand" href="#top" aria-label="Go to homepage" onClick={closeMenu}>
                    <span className="navbar-logo">GD</span>
                    <span className="navbar-name">Gabriela Duarte</span>
                </a>

                <nav className="navbar-nav" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            className={`navbar-link ${activeSection === link.href.slice(1) ? "navbar-link-active" : ""}`}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="navbar-actions">
                    <a
                        className="navbar-social"
                        href="https://github.com/gabrielaiduarte"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github"
                    >
                        <IconBrandGithub size={20} stroke={1.7} />
                    </a>

                    <a
                        className="navbar-social"
                        href="https://www.linkedin.com/in/gabrielaiduarte/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <IconBrandLinkedin size={20} stroke={1.7} />
                    </a>

                </div>

                <button
                    className="navbar-menu-button"
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((current) => !current)}
                >
                    {isMenuOpen ? (
                        <IconX
                            size={22}
                            stroke={1.7}
                        />
                    ) : (
                        <IconMenu2
                            size={22}
                            stroke={1.7}
                        />
                    )}
                </button>

                <div id="mobile-navigation" className="navbar-mobile-menu">

                    <nav 
                        className="navbar-mobile-links"
                        aria-label="Mobile navigation"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                className={`navbar-mobile-link ${
                                    activeSection === link.href.slice(1)
                                        ? "navbar-mobile-link-active"
                                        : ""
                                }`}
                                href={link.href}
                                onClick={closeMenu}
                            >
                                <span>{link.label}</span>

                                <IconArrowRight
                                    className="navbar-mobile-link-arrow"
                                    size={18}
                                    stroke={1.7}
                                    aria-hidden="true"
                                />

                            </a>
                        ))}
                    </nav>
                </div>

            </div>
        </header>
    )
}