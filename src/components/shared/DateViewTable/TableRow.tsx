
import { TableColumnType } from "@/types/table";
// import Dropdown from "../Dropdown";
import /*MenuActionList,*/ { ActionList, MenuActionItem } from "./MenuActionList";
// import TableTrigger from "./TableTrigger";

interface TableRowProps<T> {
    row: T;
    idx: number;
    allColumns: TableColumnType<T>[];
    showActions?: boolean;
    actionsMenuItems?: (row: T, onClose: () => void) => MenuActionItem[];
}

export default function TableRow<T>({
    row,
    idx,
    allColumns,
    showActions,
    actionsMenuItems,
}: TableRowProps<T>) {
    return (
        <tr
            key={idx}
            className="hover:bg-lighter border-b border-gray-200 group/row transition-colors duration-200"
        >
            {allColumns.map((col) => {
                const value = row[col.key];

                return (
                    <td
                        key={String(col.key)}
                        className={`align-middle group-hover/row:bg-lighter py-4 px-4 text-input ${col.className || ''}`}
                    >


                        {col.key === 'actions' && showActions ? (
                            // for dropdown version of actions
                            // <Dropdown
                            //     Trigger={TableTrigger}
                            //     position="bottom-right"
                            //     Menu={({ onClose }) => (
                            //         <MenuActionList
                            //             items={actionsMenuItems?.(row, onClose)}
                            //             onClose={onClose}
                            //         />
                            //     )}
                            // />
                            // for action list version
                            <div>
                                <ActionList items={actionsMenuItems?.(row, () => { })} />
                            </div>

                        ) : col.cell ? (
                            col.cell(value, row)
                        ) : value !== undefined ? (
                            value as React.ReactNode
                        ) : (
                            <span className="text-gray-400">—</span>
                        )}
                    </td>
                );
            })}
        </tr>
    );
}
