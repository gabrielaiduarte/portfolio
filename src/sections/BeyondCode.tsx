import BeyondCodeCard from "../components/beyond-code/BeyondCodeCard";
import { beyondCodeItems } from "../data/beyondCode";
import "./BeyondCode.css"

export default function BeyondCode() {
    return (
        <section className="beyond" id="beyond-code">
            <div className="beyond-container container">

                <header className="beyond-heading">
                    <p className="beyond-eyebrow">
                        06 / BEYOND THE CODE
                    </p>

                    <h2 className="beyond-title">
                        When I'm not coding.
                    </h2>

                    <p className="beyond-subtitle">
                        What I'm usually up to when my laptop is closed.
                    </p>
                </header>

                <div className="beyond-grid">
                    {beyondCodeItems.map((item) => (
                        <BeyondCodeCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}