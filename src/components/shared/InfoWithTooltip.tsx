type InfoWithTooltipProps = {
    children: React.ReactNode;
    label: string;
    value: string | number;
    maxWidth?: string; // optional override
};

export const InfoWithTooltip = ({ children, label, value, maxWidth = "120px" }: InfoWithTooltipProps) => (
    <div className="flex items-center justify-between gap-2 relative group max-w-full">
        <div className="shrink-0">{children}</div>
        <span
            className={`text-input text-sm truncate peer`}
            style={{ maxWidth }}
        >
            {value} {label}
        </span>

        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 left-0 w-max max-w-xs px-2 py-1 rounded text-sm z-10
                    bg-[var(--primary)] text-[var(--highlight)] shadow-lg opacity-0 group-hover:opacity-100
                    transition-opacity duration-200 pointer-events-none">
            {value} {label}
        </div>
    </div>
);
