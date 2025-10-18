import { ReactNode } from "react";

interface DashboardCardProps {
    title?: string;
    linkLabel?: string;
    linkHref?: string;
    children?: ReactNode;
    className?: string;
}

export default function DashboardCard({
    title,
    linkLabel,
    linkHref,
    children,
    className
}: DashboardCardProps) {
    return (
        <div className={`bg-card-bg rounded-[20px] p-4 md:p-5 ${className}`}>
            {(title || linkLabel) && (
                <div className="flex items-center justify-between mb-4">
                    {title && (
                        <p className="font-medium text-lg md:text-xl">{title}</p>
                    )}
                    {linkLabel && linkHref && (
                        <a href={linkHref} className="text-dark">
                            {linkLabel}
                        </a>
                    )}
                </div>
            )}

            {children}
        </div>
    );
}
