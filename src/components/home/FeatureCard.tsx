import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type FeatureCardProps = {
    icon: IconDefinition;
    title: string;
    description: string;
};

const FeatureCard = ({icon, title, description}: FeatureCardProps) => {
    return (
        <article className="feature-card">
            <div className="feature-icon-wrapper">
                <FontAwesomeIcon
                    icon={icon}
                    className="feature-icon"
                />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
};

export default FeatureCard;