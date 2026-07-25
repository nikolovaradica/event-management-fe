export const formatEventDate = (date: string, includeTime = false) => {
    const eventDate = new Date(date);

    const formattedDate = eventDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    if (!includeTime) {
        return formattedDate;
    }

    const formattedTime = eventDate.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    return `${formattedDate} ${formattedTime}`;
};