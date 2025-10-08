import { ReactNode } from "react";


export default function PrimaryButton({ className, children, onClick, ...prop }: { children: ReactNode, className: string, onClick: () => void }) {
    return (
        <button className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-[70px] flex-center text-dark ${className}`} {...prop}
            onClick={onClick}>
            {children}
        </button>

    );
}