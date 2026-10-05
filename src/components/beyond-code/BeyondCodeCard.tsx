import { IconBallTennis, IconScubaMask } from "@tabler/icons-react";
import type { BeyondCodeItem } from "../../data/beyondCode";

type BeyondCodeCardProps = {
    item: BeyondCodeItem
}

export default function BeyondCodeCard({ item }: BeyondCodeCardProps ) {
    return (
        <article className={`beyond-card beyond-card-${item.variant}`}>
            <div className="beyond-card-visual">
                
                {item.variant === "tennis" && (
                    <IconBallTennis className="beyond-tennis-ball" stroke={1.4} />
                )}

                {item.variant === "matcha" && (
                    <div 
                        className="beyond-matcha-cup"
                        aria-hidden="true"
                    >
                        <div className="beyond-matcha-liquid" />
                        <div className="beyond-matcha-handle" />
                    </div>
                )}

                {item.variant === "diving" && (
                    <IconScubaMask className="beyond-diving-mask" stroke={1.3} />
                )}

            </div>

            <div className="beyond-card-content">

                <p className="beyond-card-label">
                    {item.label}
                </p>

                <h3 className="beyond-card-title">
                    {item.title}
                </h3>

                <p className="beyond-card-description">
                    {item.description}
                </p>

            </div>
        </article>
    )
}