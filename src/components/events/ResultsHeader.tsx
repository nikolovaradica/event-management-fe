type ResultsHeaderProps = {
    totalEvents: number;
};

const ResultsHeader = ({totalEvents}: ResultsHeaderProps) => {
    return (
        <section className="results-header">
            <div>
                <h2>{totalEvents} Events Found</h2>
                <p>Showing upcoming events.</p>
            </div>
        </section>
    );
};

export default ResultsHeader;