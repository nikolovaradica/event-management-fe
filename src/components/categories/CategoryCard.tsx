import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type CategoryCardProps = {
    name: string;
    icon: IconDefinition;
};

const CategoryCard = ({name, icon}: CategoryCardProps) => {
    return (
        <button className="category-card">
            <div className="category-icon-wrapper">
                <FontAwesomeIcon
                    icon={icon}
                    className="category-icon"
                />
            </div>
            <span>{name}</span>
        </button>
    );
}

export default CategoryCard;