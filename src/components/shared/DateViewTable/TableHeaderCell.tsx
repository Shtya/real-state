'use client';

import React from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import { TableColumnType } from '@/types/table';

interface TableHeaderCellProps {
    col: TableColumnType<any>;
    isSorted: boolean;
    isAsc: boolean;
    onSort?: (key: string) => void;
}

export default function TableHeaderCell({
    col,
    isSorted,
    isAsc,
    onSort,
}: TableHeaderCellProps) {

    return (
        <th
            key={String(col.key)}
            className={`group text-start py-4 px-4 font-semibold text-sm uppercase tracking-wide border-b  border-gray-400 transition duration-200  ${!isSorted && "hover:opacity-70"}
                ${col.className || ''} ${col.sortable ? 'cursor-pointer select-none' : ''}`}
            onClick={() => col.sortable && onSort?.(String(col.key))}
        >
            <div className="flex items-center gap-1">
                {col.label}
                {col.sortable && (
                    <IoMdArrowUp
                        className={`transition duration-200 ${!isAsc ? 'rotate-180' : ''} ${isSorted ? "opacity-100" : 'opacity-0 group-hover:opacity-100'}`}
                    />
                )}
            </div>
        </th>
    );
}
