type ResultsHeaderProps = {
    title: string;
    subtitle?: string;
};

const ResultsHeader = ({title, subtitle}: ResultsHeaderProps) => {
    return (
        <section className="results-header">
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </section>
    );
};

export default ResultsHeader;