import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps) => {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    startPage = Math.max(1, endPage - maxVisiblePages + 1);

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
    );

    return (
        <nav className="pagination">
            <button
                className="pagination-button"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    className={
                        page === currentPage
                            ? "pagination-button active"
                            : "pagination-button"
                    }
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="pagination-button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </nav>
    );
};

export default Pagination;