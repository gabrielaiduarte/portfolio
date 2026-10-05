import { Code2, Globe2, Sparkles } from "lucide-react";
import "./HeroVisual.css"

export default function HeroVisual() {
    return (
        <div className="hero-visual" aria-hidden="true">
            <div className="hero-orbit" hero-orbit-large />
            <div className="hero-orbit" hero-orbit-small />

            <div className="hero-code-window">
                <div className="hero-code-header">

                    <div className="hero-code-dots">
                        <span />
                        <span />
                        <span />
                    </div>

                    <span>incident-intelligence.tsx</span>
                </div>

                <div className="hero-code-content">

                    <div className="hero-code-line">
                        <span className="hero-code-number">01</span>
                        <span>
                            <span className="hero-code-keyword">const</span> engineer = {"{"}
                        </span>
                    </div>

                    <div className="hero-code-line">
                        <span className="hero-code-number">02</span>
                        <span>
                            name:{" "}
                            <span className="hero-code-value">"Gabriela Duarte"</span>,
                        </span>
                    </div>

                    <div className="hero-code-line">
                        <span className="hero-code-number">03</span>
                        <span>
                            focus: [
                            <span className="hero-code-value">"product"</span>,{" "}
                            <span className="hero-code-value">"systems"</span>],
                        </span>
                    </div>

                    <div className="hero-code-line">
                        <span className="hero-code-number">04</span>
                        <span>
                            mindset: {" "}
                            <span className="hero-code-value">"always learning"</span>
                        </span>
                    </div>

                    <div className="hero-code-line">
                        <span className="hero-code-number">05</span>
                        <span>{"};"}</span>
                    </div>
                </div>

                <div className="hero-insight-card">

                    <div className="hero-insight-header">
                        <span className="hero-insight-title">
                            <Sparkles size={16} />
                            Incident insight
                        </span>

                        <strong>92% match</strong>
                    </div>

                    <div className="hero-insight-bars">
                        <span />
                        <span />
                        <span />
                    </div>

                    <p>3 similar incidents found</p>
                </div>
            </div>

            <div className="hero-floating-card hero-floating-stack">
                <Code2 size={21} />

                <div>
                    <strong>Full-stack</strong>
                    <span>Product-minded</span>
                </div>
            </div>

            <div className="hero-floating-card hero-floating-languages">
                <Globe2 size={21} />

                <div>
                    <strong>3 languages</strong>
                    <span>Global perspective</span>
                </div>
            </div>
        </div>
    )
}