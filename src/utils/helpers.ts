export function formatLargeNumber(num: number): string {
    if (num >= 1_000_000_000) {
        return `${(num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 1)}B`;
    }
    if (num >= 1_000_000) {
        return `${(num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1)}M`;
    }
    if (num >= 1_000) {
        return `${(num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1)}K`;
    }
    return num.toString();
}


export const getSafeNumber = (input: unknown, fallback: number): number => {
    const parsed = typeof input === 'number' ? input : parseInt(String(input));
    return isNaN(parsed) ? fallback : parsed;
};

export const getSafeNumberInRange = (
    input: unknown,
    fallback: number,
    min: number,
    max: number
): number => {
    const parsed = typeof input === 'number' ? input : parseInt(String(input));
    if (isNaN(parsed)) return fallback;

    return Math.min(Math.max(parsed, min), max);
};


export const getSafeString = <T extends string>(
    input: unknown,
    allowed: Set<T>,
    fallback: T
): T => {
    return allowed.has(input as T) ? (input as T) : fallback;
};
