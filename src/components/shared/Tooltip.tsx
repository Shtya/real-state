import { ReactNode } from "react";


export default function Tooltip({ children, content }: { children: ReactNode, content: string }) {
    return (
        <div className="relative group">
            {children}
            <div className="absolute bottom-full mb-2 start-0 w-max max-w-xs px-2 py-1 rounded text-sm z-10
                    bg-[var(--primary)] text-[var(--highlight)] shadow-lg opacity-0 group-hover:opacity-100
                    transition-opacity duration-200 pointer-events-none">{content}</div>
        </div>
    );
}