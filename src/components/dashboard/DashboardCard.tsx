import { ReactNode } from "react";

interface DashboardCardProps {
    title?: string;
    linkLabel?: string;
    linkHref?: string;
    children?: ReactNode;
}

export default function DashboardCard({
    title,
    linkLabel,
    linkHref,
    children,
}: DashboardCardProps) {
    return (
        <div className="bg-card-bg rounded-[20px] p-4 md:p-5 space-y-4">
            {(title || linkLabel) && (
                <div className="flex items-center justify-between">
                    {title && (
                        <p className="font-medium text-lg md:text-xl">{title}</p>
                    )}
                    {linkLabel && linkHref && (
                        <a href={linkHref} className="text-input">
                            {linkLabel}
                        </a>
                    )}
                </div>
            )}

            {children}
        </div>
    );
}
