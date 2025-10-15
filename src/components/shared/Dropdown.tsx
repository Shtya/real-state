import { useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { ComponentType } from 'react';

export interface TriggerProps {
    isOpen: boolean;
    onToggle: () => void;
}

export interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}


interface DropdownProps {
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'bottom-center';
    style?: string;
    Trigger: ComponentType<TriggerProps>;
    Menu: ComponentType<MenuProps>;
}

export default function Dropdown({
    position = 'bottom-left',
    style,
    Trigger,
    Menu,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOutsideClick(
        dropdownRef,
        () => setIsOpen(false),
    );

    const baseClass =
        'absolute  w-max overflow-y-auto rounded shadow-md z-10';

    let positionClass = '';
    if (position === 'bottom-right') {
        positionClass = 'top-full end-0 mt-2';
    } else if (position === 'bottom-left') {
        positionClass = 'top-full start-0 mt-2';
    } else if (position === 'top-right') {
        positionClass = 'bottom-full right-0 mb-2';
    } else if (position === 'top-left') {
        positionClass = 'bottom-full left-0 mb-2';
    } else if (position === 'bottom-center') {
        positionClass = 'top-full left-1/2 -translate-x-1/2 mt-2';
    }

    const dropdownClass = `${baseClass} ${positionClass}`;

    return (
        <div ref={dropdownRef} className={`relative ${style}`}>
            <Trigger onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            {isOpen && (
                <div className={dropdownClass}>
                    <Menu onClose={() => setIsOpen(false)} isOpen={isOpen} />
                </div>
            )}
        </div>
    );
}