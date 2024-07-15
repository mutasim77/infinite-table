import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchTableData } from '../services/api';
import { PaginatedResponse } from '../types';
import { useEffect, useRef } from 'react';

export function useTableData() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<PaginatedResponse, Error>({
        queryKey: ['tableData'],
        queryFn: ({ pageParam = 1 }) => fetchTableData(Number(pageParam)),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.next ?? undefined,
        retry: 3,
        retryDelay: 1000,
    });

    const loadMoreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        }, {
            threshold: 1.0
        });

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            observer.disconnect();
        }

    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    const tableData = data?.pages.flatMap((page) => page.data) || [];

    return {
        tableData,
        loadMoreRef,
        status,
        hasNextPage,
    }
}

