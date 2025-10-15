'use client';

import Link from 'next/link';
import React, { ComponentType, ReactElement, useState } from 'react';
import Popup from '../Popup';

export type ActionType =
    | 'primary'
    | 'secondary'
    | 'edit'
    | 'delete'
    | 'normal';

const getColorClass = (type?: ActionType) => {
    switch (type) {
        case 'primary':
            return 'text-[var(--primary)] hover:text-[var(--primary-hover)]';
        case 'secondary':
            return 'text-[var(--secondary)] hover:text-[var(--secondary-hover)]';
        case 'edit':
            return 'text-[var(--light)] hover:text-[var(--primary)]';
        case 'delete':
            return 'text-red-600 hover:text-red-800';
        case 'normal':
        default:
            return 'text-[var(--dark)] hover:text-[var(--primary)]';
    }
};

export type MenuActionItem = {
    label: string;
    icon?: ReactElement;
    type?: ActionType;
    link?: string;
    Child?: ComponentType<{ onClose: () => void }>;
};

type Props = {
    items?: MenuActionItem[];
    onClose?: () => void;
};

export default function MenuActionList({ items, onClose }: Props) {
    const [activeChild, setActiveChild] = useState<{ Child: ComponentType<{ onClose: () => void }> | undefined }>({ Child: undefined });
    const [menuOpen, setMenuOpen] = useState(false);


    function handleOnClose() {
        setMenuOpen(false);
    }

    if (items?.length == 0) return null;

    return (
        <div className="flex flex-col gap-2">
            {items?.map((item, index) => {
                const content = (
                    <>
                        {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                        <span>{item.label}</span>
                    </>
                );

                if (item.link) {
                    return (
                        <Link
                            key={index}
                            href={item.link}
                            onClick={onClose}
                            className={`flex items-center gap-2 text-sm ${getColorClass(item.type)} disabled:opacity-50`}
                        >
                            {content}
                        </Link>
                    );
                }

                return (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveChild({ Child: item.Child });
                            setMenuOpen(true);
                        }}
                        className={`flex items-center gap-2 text-sm ${getColorClass(item.type)}`}
                    >
                        {content}
                    </button>
                );
            })}

            {/* Render child if active */}
            {activeChild?.Child && (
                <Popup onClose={handleOnClose} show={menuOpen}>
                    <activeChild.Child onClose={handleOnClose} />
                </Popup>
            )}

        </div>
    );
}
