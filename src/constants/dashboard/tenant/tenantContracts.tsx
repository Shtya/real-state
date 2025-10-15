import { TenantContractRow } from '@/types/dashboard/tenant';
import { TableColumnType } from '@/types/table';
import { format } from 'date-fns';

export const TenantContractColumns: TableColumnType<TenantContractRow>[] = [
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status' },
    {
        key: 'startDate',
        label: 'Start Booking',
        cell: (value) => format(new Date(value), 'dd MMM yyyy'),
    },
    {
        key: 'endDate',
        label: 'End Booking',
        cell: (value) => format(new Date(value), 'dd MMM yyyy'),
    },
    {
        key: 'publishedAt',
        label: 'Published',
        cell: (value) => format(new Date(value), 'dd MMM yyyy'),
    },
    {
        key: 'price',
        label: 'Price',
        cell: (value) => `${value.toLocaleString()} EGP`,
    },
    {
        key: 'contractId',
        label: 'Contract',
        cell: (value) => (
            <a href={`/contracts/${value}`} className="text-primary underline">
                View
            </a>
        ),
    },
    { key: 'location', label: 'Location' },
];
