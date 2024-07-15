export interface TableData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    university: string;
}

export type FormFields = Omit<TableData, 'id'>;

export interface PaginatedResponse {
    data: TableData[];
    first: number;
    items: number;
    last: number;
    next: number | null;
    pages: number;
    prev: number | null;
}