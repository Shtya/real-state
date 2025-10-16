import { DropMenuPosition, getDropMenuPosition } from "@/utils/helpers";
import { ReactNode, useEffect, useState } from "react";

interface SmartTooltipProps {
    value: ReactNode;
    position?: DropMenuPosition;
    maxLength?: number | Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", number>>;
    className?: string;
}

export default function SmartTooltip({
    value,
    position = "top-left",
    maxLength = 15,
    className,
}: SmartTooltipProps) {
    const resolveMaxLength = () => {
        if (typeof maxLength === "number") return maxLength;

        const width = window.innerWidth;

        if (width < 640 && maxLength.xs) return maxLength.xs;
        if (width < 768 && maxLength.sm) return maxLength.sm;
        if (width < 1024 && maxLength.md) return maxLength.md;
        if (width < 1280 && maxLength.lg) return maxLength.lg;
        if (maxLength.xl) return maxLength.xl;

        return 15; // fallback
    };

    const [limit, setLimit] = useState(
        () => resolveMaxLength()
    );

    // 🔹 Function to resolve maxLength based on screen width


    // 🔹 Update limit on mount + resize
    useEffect(() => {
        const handleResize = () => {
            const newLimit = resolveMaxLength();
            if (newLimit !== limit)
                setLimit(newLimit);
        };

        handleResize(); // run once on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [maxLength]);

    // If not a string, just render it
    if (typeof value !== "string") {
        return <>{value}</>;
    }

    // If string is short enough, no tooltip needed
    if (value.length <= limit) {
        return <span className={className}>{value}</span>;
    }

    // Collapse text for display
    const collapsed = value.slice(0, limit) + "…";
    const positionClassName = getDropMenuPosition(position);

    return (
        <div className="relative group inline-block">
            <span className={`cursor-default ${className}`}>{collapsed}</span>
            <div
                className={`absolute ${positionClassName} w-max max-w-xs px-2 py-1 rounded text-sm z-10
          bg-[var(--primary)] text-[var(--highlight)] shadow-lg opacity-0 group-hover:opacity-100
          transition-opacity duration-200 pointer-events-none`}
            >
                {value}
            </div>
        </div>
    );
}
