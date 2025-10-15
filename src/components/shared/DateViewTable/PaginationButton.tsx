'use client';

import React from 'react';

interface PaginationButtonProps {
    label: string;
    icon?: React.ReactNode;
    currentPage: number;
    isDisabled: boolean,
    onPageChange: () => void;
}

export default function PaginationButton({
    label,
    icon,
    isDisabled,
    onPageChange,
}: PaginationButtonProps) {

    return (
        <button
            onClick={() => onPageChange()}
            disabled={isDisabled}
            className={`border border-gray-500 flex items-center justify-center gap-1 text-gray-500 px-3 py-2 rounded-[8px] duration-300 hover:scale-[1.05] ${isDisabled ? 'opacity-30 cursor-not-allowed' : 'hover:bg-lighter'
                }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}
