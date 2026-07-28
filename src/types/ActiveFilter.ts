export type ActiveFilterType =
    | "category"
    | "city"
    | "date";

export type ActiveFilter = {
    type: ActiveFilterType;
    label: string;
};