import { ReactNode } from "react";
import Link from "next/link";

type SecondaryButtonProps = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string; // 👈 optional link
    type?: "button" | "submit" | "reset";
};

export default function SecondaryButton({
    children,
    className = "",
    onClick,
    href,
    type = "button",
    ...props
}: SecondaryButtonProps) {
    const baseClasses =
        "px-6 sm:px-8 py-2 sm:py-[6px] rounded-[10px] flex items-center justify-center";
    if (href) {
        return (
            <Link
                href={href}
                className={`${baseClasses} ${className}`}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
