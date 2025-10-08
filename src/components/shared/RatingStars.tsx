import React from "react";

type StarsProps = {
    rating: number; // e.g., 4.5
    size?: number;  // defaults to 21
    reverse?: boolean;
};

const StarSVG: React.FC<{ fill: string; size: number; style?: React.CSSProperties }> = ({ fill, size, style }) => (
    <svg
        width={size}
        height={size}
        viewBox="2 2 20 19"
        style={{ opacity: 1, display: "block", ...style }}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 
       9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z"
            fill={fill}
        />
    </svg>

);

const RatingStars: React.FC<StarsProps> = ({ rating, size = 21, reverse = false }) => {
    const clamped = Math.max(0, Math.min(5, rating));
    const full = Math.floor(clamped);
    const frac = clamped - full;

    const starGap = 6; // px spacing between stars

    return (
        <div style={{ display: "flex", alignItems: "center", gap: starGap }} className={reverse ? "flex-row-reverse" : ""}>
            {Array.from({ length: 5 }).map((_, i) => {
                const isFull = i < full;
                const isPartial = i === full && frac > 0;

                // Base (empty) star
                const emptyColor = "#E5E7EB"; // muted gray
                const fullColor = "#D9FF01";

                return (
                    <div key={i} style={{ position: "relative", width: size, height: size }}>
                        {/* Empty base */}
                        <StarSVG fill={emptyColor} size={size} />

                        {/* Full overlay */}
                        {isFull && (
                            <div style={{ position: "absolute", inset: 0 }}>
                                <StarSVG fill={fullColor} size={size} />
                            </div>
                        )}

                        {/* Fractional overlay: clip from left by width */}
                        {isPartial && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    insetInlineStart: 0,
                                    height: size,
                                    width: Math.round(size * frac),
                                    overflow: "hidden",
                                }}
                            >
                                <StarSVG fill={fullColor} size={size} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};


export default RatingStars;