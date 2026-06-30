import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type QuickActionCardProps = {
    icon: IconDefinition;
    title: string;
    description: string;
    to: string;
};

const QuickActionCard = ({icon, title, description, to}: QuickActionCardProps) => {
    return (
        <Link
            to={to}
            className="quick-action-card"
        >
            <FontAwesomeIcon
                icon={icon}
                className="quick-action-icon"
            />
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    );
};

export default QuickActionCard;