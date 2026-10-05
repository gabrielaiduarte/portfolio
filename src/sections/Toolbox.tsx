import ToolboxCategory from "../components/toolbox/ToolboxCategory";
import { toolboxCategories } from "../data/toolbox";
import "./Toolbox.css"

export default function Toolbox() {
    return (
        <section className="toolbox" id="toolbox">

            <div className="toolbox-decoration" />

            <div className="toolbox-container container">

                <header className="toolbox-heading">
                    <p className="toolbox-eyebrow">
                        04 / MY TOOLBOX
                    </p>

                    <h2 className="toolbox-title">
                        What I build with.
                    </h2>

                    <p className="toolbox-subtitle">
                        The languages, frameworks, and tools, I've used
                        across my projects and coursework.
                    </p>
                </header>

                <div className="toolbox-grid">
                    {toolboxCategories.map((category, index) => (
                        <ToolboxCategory
                            key={category.id}
                            category={category}
                            number={index + 1}
                        />
                    ))}
                </div>

            </div>
        
        </section>
    )
}