'use client';

import React, { useMemo } from 'react';
import { TableColumnType, TableRowType } from '@/types/table';
import { MenuActionItem } from './MenuActionList';
import NoRowsFound from './NoRowsFound';
import TableRow from './TableRow';
import TableHeader from './TableHeader';



interface TableProps<T = Record<string, any>> {
    columns: TableColumnType<T>[];
    rows: TableRowType<T>[];
    showActions?: boolean;
    actionsMenuItems?: (row: T, onClose?: () => void) => MenuActionItem[];
}

export default function Table<T = Record<string, any>>({
    columns,
    rows,
    actionsMenuItems,
    showActions = false,
}: TableProps<T>) {

    const allColumns = useMemo(() => {
        const normalized = columns.map((col) => ({
            ...col,
            sortable: col.sortable ?? true, // default to true if undefined
        }));

        return showActions
            ? [...normalized, { key: 'actions' as keyof T, label: '', className: 'w-12', sortable: false }]
            : normalized;
    }, [columns, showActions]);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white table-fixed whitespace-nowrap  overflow-hidden">
                <TableHeader columns={allColumns} showActions={showActions} />
                <tbody>
                    {rows.length === 0 ? (
                        <tr>
                            <td colSpan={allColumns.length}>
                                <NoRowsFound />
                            </td>
                        </tr>
                    ) : (
                        rows.map((row, idx) => (
                            <TableRow
                                key={idx}
                                row={row}
                                idx={idx}
                                allColumns={allColumns}
                                showActions={true}
                                actionsMenuItems={actionsMenuItems}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}



