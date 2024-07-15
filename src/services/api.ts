import axios from 'axios';
import { PaginatedResponse, TableData } from '../types';

const api = axios.create({
    baseURL: 'http://localhost:3001',
});

export async function fetchTableData(page: number): Promise<PaginatedResponse> {
    const response = await api.get<PaginatedResponse>(`/data?_page=${page}`);
    return response.data;
}

export async function addTableData(data: Omit<TableData, 'id'>): Promise<TableData> {
    return api.post<TableData>('/data', data).then(response => response.data);
}