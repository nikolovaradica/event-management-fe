import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Input from "../common/Input.tsx";

type AdminSearchBarProps = {
    placeholder: string;
    buttonLabel: string;
    buttonTo: string;
    search: string;
    onSearchChange: (value: string) => void;
};

const AdminSearchBar = ({ placeholder, buttonLabel, buttonTo, search, onSearchChange }: AdminSearchBarProps) => {
    return (
        <section className="admin-search-bar">
            <div className="admin-search-input">
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
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