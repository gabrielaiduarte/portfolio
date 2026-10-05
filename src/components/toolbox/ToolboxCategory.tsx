import type { ToolboxCategory as ToolboxCategoryType } from "../../data/toolbox";

type ToolboxCategoryProps = {
    category: ToolboxCategoryType
    number: number
}

export default function ToolboxCategory({ category, number}: ToolboxCategoryProps) {

    const formattedNumber = number.toString().padStart(2, "0")

    return (
        <article className="toolbox-category">

            <span className="toolbox-category-number">
                {formattedNumber}
            </span>

            <h3 className="toolbox-category-title">
                {category.title}
            </h3>

            <div className="toolbox-skills">
                {category.skills.map((skill) => (
                    <span
                        className="toolbox-skill"
                        key={skill}
                    >
                        {skill}
                    </span>
                ))}
            </div>
            
        </article>
    )
}