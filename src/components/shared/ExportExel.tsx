import { useState } from "react";
import SecondaryButton from "./buttons/SecondaryButton";
import Dropdown, { MenuProps, TriggerProps } from "./Dropdown";
import { CiExport } from "react-icons/ci";
import Popup from "./Popup";
import Tooltip from "./Tooltip";


export default function ExportExel() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="">
            {/* Desktop dropdown */}
            <Dropdown
                className="hidden md:block"
                Trigger={ExportExelTrigger}
                Menu={ExportExelMenu}
                position="bottom-right"
            />

            {/* Mobile trigger */}
            <div className="block md:hidden w-fit">
                <Tooltip content=" Export  Excel">
                    <button className="px-4 py-2 rounded-[8px]  border border-gray " onClick={() => setShowPopup(true)}>
                        <CiExport size={24} className='shrink-0 text-dark' />
                    </button>
                </Tooltip>
            </div>

            {/* Mobile popup */}
            <Popup show={showPopup} onClose={() => setShowPopup(false)}>
                <ExportExelMenu onClose={() => setShowPopup(false)} />
            </Popup>
        </div>
    );
}



function ExportExelTrigger({ isOpen, onToggle }: TriggerProps) {
    return (
        <SecondaryButton className="text-nowrap flex gap-2 items-center border border-gray hover:bg-gray text-dark" onClick={onToggle} >
            Export  Excel
        </SecondaryButton>
    )
}

function ExportExelMenu({ onClose }: { onClose?: () => void }) {
    const [isLoading, setLoading] = useState(false);
    const [scope, setScope] = useState<'current' | 'more'>('current');
    const [maxRows, setMaxRows] = useState(1000);

    function handleExport() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onClose?.();
        }, 1000);
    }

    return (
        <div className="space-y-4 bg-white md:p-4 rounded-md w-full max-w-md">
            <div className="space-y-2">
                <div className="text-sm font-medium">Export Scope</div>
                <div className="flex items-center gap-4">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="export-scope"
                            className="radio"
                            checked={scope === 'current'}
                            onChange={() => setScope('current')}
                        />
                        <span>Current Table</span>
                    </label>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
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
                <label className="block text-sm font-medium" htmlFor="max-rows">Max Rows</label>
                <input
                    id="max-rows"
                    type="number"
                    min={1}
                    className={`input input-bordered w-full  border border-gray py-1 px-2 rounded-[8px] focus:outline-0 ${scope !== 'more' && 'select-none'}`}
                    value={maxRows}
                    disabled={scope !== 'more'}
                    onChange={(e) => setMaxRows(Math.max(1, Number(e.target.value) || 0))}
                />
            </div>

            <div className="flex items-center gap-3 pt-2">
                <button
                    className="bg-primary rounded-full py-2 px-4 text-sm text-white"
                    onClick={handleExport}
                >
                    {isLoading ? 'Exporting...' : 'Export'}
                </button>
                <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}
