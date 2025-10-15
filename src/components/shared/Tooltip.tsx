import React, { ReactNode } from 'react';

type TooltipPosition =
    | 'bottom-right'
    | 'bottom-left'
    | 'top-right'
    | 'top-left'
    | 'bottom-center'
    | 'top-center';

interface TooltipProps {
    children: ReactNode;
    content: string;
    position?: TooltipPosition;
}

export default function Tooltip({
    children,
    content,
    position = 'top-right',
}: TooltipProps) {
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
    } else if (position === 'top-center') {
        positionClass = 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    }

    return (
        <div className="relative group inline-block">
            {children}
            <div
                className={`absolute ${positionClass} w-max max-w-xs px-2 py-1 rounded text-sm z-10
          bg-[var(--primary)] text-[var(--highlight)] shadow-lg opacity-0 group-hover:opacity-100
          transition-opacity duration-200 pointer-events-none`}
            >
                {content}
            </div>
        </div>
    );
}
