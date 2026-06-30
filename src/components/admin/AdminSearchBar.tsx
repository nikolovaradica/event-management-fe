import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Input from "../common/Input.tsx";

type AdminSearchBarProps = {
    placeholder: string;
    buttonLabel: string;
    buttonTo: string;
};

const AdminSearchBar = ({placeholder, buttonLabel, buttonTo}: AdminSearchBarProps) => {
    return (
        <section className="admin-search-bar">
            <div className="admin-search-input">
                <Input
                    type="text"
                    placeholder={placeholder}
                />
            </div>
            <Link
                to={buttonTo}
                className="btn btn-primary"
            >
                <FontAwesomeIcon icon={faPlus} />
                {buttonLabel}
            </Link>
        </section>
    );
};

export default AdminSearchBar;