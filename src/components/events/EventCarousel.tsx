import type {ReactNode} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

type EventCarouselProps = {
    children: ReactNode;
};

const EventCarousel = ({ children }: EventCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start"
    });

    return (
        <div className="event-carousel">
            <button
                className="carousel-button"
                onClick={() => emblaApi?.scrollPrev()}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div
                className="embla"
                ref={emblaRef}
            >
                <div className="embla__container">
                    {children}
                </div>
            </div>
            <button
                className="carousel-button"
                onClick={() => emblaApi?.scrollNext()}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default EventCarousel;