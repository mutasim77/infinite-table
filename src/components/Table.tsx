import { TableData } from '../types';
import { useTableData } from '../hooks/useTableData';

export default function Table() {
    const { tableData, loadMoreRef, status, hasNextPage } = useTableData();

    if (status === 'pending') return <div>Loading...</div>;
    if (status === 'error') return <div>An error occurred</div>;
    if (tableData.length === 0) return <div>No data available</div>;

    const headers = Object.keys(tableData[0]) as (keyof TableData)[];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead className="bg-surface text-primary uppercase text-sm">
                    <tr>
                        {headers.map((header) => (
                            <th key={header} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-neutral divide-opacity-20">
                    {tableData.map((row, index) => (
                        <tr key={row.id} className="transition-colors duration-150 ease-in-out hover:bg-primary hover:bg-opacity-10 cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                            {headers.filter((header) => header !== 'id').map((header) => (
                                <td key={header} className="px-6 py-4 whitespace-nowrap">
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div ref={loadMoreRef} className="mt-4 text-center">
                {hasNextPage ? 'Loading more...' : 'No more data'}
            </div>
        </div>
    )
}