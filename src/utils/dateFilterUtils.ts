import type { DateFilter } from "../types/DateFilter.ts";

export const getDateRange = (filter: DateFilter) => {
    const from = new Date();
    const to = new Date(from);

    switch (filter) {
        case "THIS_WEEK": {
            const daysUntilSunday = 7 - from.getDay();
            to.setDate(from.getDate() + daysUntilSunday);
            break;
        }
        case "THIS_MONTH": {
            to.setMonth(from.getMonth() + 1, 0);
            break;
        }
        case "NEXT_3_MONTHS": {
            to.setMonth(from.getMonth() + 3);
            break;
        }
        default:
            return {
                from: undefined,
                to: undefined,
            };
    }

    from.setHours(0, 0, 0, 0);
    to.setHours(23, 59, 59, 999);

    return {
        from: formatLocalDateTime(from),
        to: formatLocalDateTime(to),
    };
};

const formatLocalDateTime = (date: Date) => {
    const pad = (value: number) => value.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};