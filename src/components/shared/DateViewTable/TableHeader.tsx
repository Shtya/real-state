'use client';

import React from 'react';
import { TableColumnType } from '@/types/table';
import { usePathname, useSearchParams } from 'next/navigation';
import { updateUrlParams } from '@/utils/helpers';
import { IoMdArrowUp } from 'react-icons/io';
import TableHeaderCell from './TableHeaderCell';

interface TableHeaderProps<T> {
    columns: TableColumnType<T>[];
    showActions?: boolean;
}

export default function TableHeader<T>({ columns, showActions }: TableHeaderProps<T>) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const sort = searchParams.get('sort');
    const dir = searchParams.get('dir') ?? 'asc';

    const allColumns: TableColumnType<T>[] = showActions
        ? [...columns, { key: 'actions' as keyof T, label: '', className: 'w-12' }]
        : columns;

    const handleSort = (key: string) => {
        const isSameKey = sort === key;
        const newDir = isSameKey && dir === 'asc' ? 'desc' : 'asc';

        const updated = {
            ...Object.fromEntries(searchParams.entries()),
            sort: key,
            dir: newDir,
        };

        const params = new URLSearchParams(updated);
        updateUrlParams(pathname, params);
    };

    return (
        <thead>
            <tr className="bg- text-">
                {allColumns.map((col) => {
                    const isSorted = sort === col.key;
                    const isAsc = dir === 'asc';

                    return (
                        <TableHeaderCell
                            key={String(col.key)}
                            col={col}
                            isSorted={isSorted}
                            isAsc={isAsc}
                            onSort={handleSort}
                        />
                    );
                })}
            </tr>
        </thead>
    );
}
