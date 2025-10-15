import { useCallback } from 'react';
import { TenantContractRow } from '@/types/dashboard/tenant';
import { TableRowType } from '@/types/table';

const rows: TenantContractRow[] = [
    {
        name: 'Ahmed El-Sayed',
        status: 'Reserved',
        startDate: new Date('2025-10-01'),
        endDate: new Date('2026-10-01'),
        publishedAt: new Date('2025-09-15'),
        price: 12000,
        location: 'Nasr City, Cairo',
        contractId: 'contract-001',
    },
    {
        name: 'Mona Khalil',
        status: 'Free',
        startDate: new Date('2025-11-01'),
        endDate: new Date('2026-11-01'),
        publishedAt: new Date('2025-10-10'),
        price: 9500,
        location: 'Zamalek, Cairo',
        contractId: 'contract-002',
    },
    {
        name: 'Youssef Gamal',
        status: 'Reserved',
        startDate: new Date('2025-09-15'),
        endDate: new Date('2026-09-15'),
        publishedAt: new Date('2025-08-20'),
        price: 10500,
        location: 'Maadi, Cairo',
        contractId: 'contract-003',
    },
    {
        name: 'Sara Nabil',
        status: 'Free',
        startDate: new Date('2025-12-01'),
        endDate: new Date('2026-12-01'),
        publishedAt: new Date('2025-10-05'),
        price: 8800,
        location: 'Heliopolis, Cairo',
        contractId: 'contract-004',
    },
];

export function useTenantContracts() {
    const getRows = useCallback(
        async (_signal?: AbortSignal): Promise<{
            rows: TableRowType<TenantContractRow>[];
            error?: Error | null;
            totalCount?: number;
        }> => {

            return {
                rows,
                totalCount: rows.length,
                error: null,
            };
        },
        []
    );

    return { getRows };
}