import { useState } from "react";
import SecondaryButton from "./buttons/SecondaryButton";
import Dropdown, { MenuProps, TriggerProps } from "./Dropdown";


export default function ExportExel() {
    return (
        <div>
            <Dropdown
                Trigger={ExportExelTrigger}
                Menu={ExportExelMenu}
                position="bottom-right"
            />
        </div>
    );
}


function ExportExelTrigger({ isOpen, onToggle }: TriggerProps) {
    return (
        <SecondaryButton className="border border-gray hover:bg-gray text-dark" onClick={onToggle} >
            Export  Excel
        </SecondaryButton>
    )
}

function ExportExelMenu({ isOpen, onClose }: MenuProps) {
    const [isLoading, setLoading] = useState(false)
    const [scope, setScope] = useState<'current' | 'more'>('current')
    const [maxRows, setMaxRows] = useState(1000)

    function handleExport() {
        onClose?.()
    }

    return (
        <div className="space-y-3 bg-white p-3 custom-shadow" data-popup>
            <div className="space-y-1">
                <div className="text-sm font-medium">Export Scope</div>
                <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-1 cursor-pointer ">
                        <input
                            type="radio"
                            name="export-scope"
                            className="radio"
                            checked={scope === 'current'}
                            onChange={() => setScope('current')}
                        />
                        <span>Current Table</span>
                    </label>
                    <label className="inline-flex items-center gap-1 cursor-pointer">
                        <input
                            type="radio"
                            name="export-scope"
                            className="radio"
                            checked={scope === 'more'}
                            onChange={() => setScope('more')}
                        />
                        <span>More Data</span>
                    </label>
                </div>
            </div>


            <div className={`space-y-1 ${scope !== 'more' && 'opacity-50 select-none'}`}>
                <label className="block text-sm font-medium" htmlFor="max-rows"> Max Rows</label>
                <input
                    id="max-rows"
                    type="number"
                    min={1}
                    className={`nput rounded-sm block input-bordered w-full border ${scope !== 'more' && 'select-none'}`}
                    value={maxRows}
                    disabled={scope !== 'more'}
                    onChange={(e) => setMaxRows(Math.max(1, Number(e.target.value) || 0))}
                />
            </div>


            <div className="flex items-center  gap-2 pt-1">
                <button
                    className={`bg-primary rounded-full py-2 px-4 text-sm text-white`}
                    onClick={handleExport}
                >
                    {isLoading ? 'Exporting...' : 'Export'}
                </button>
                <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}