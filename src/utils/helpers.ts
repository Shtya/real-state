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



export const generatePagination = (currentPage: number, totalPages: number) => {
    const pages = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        if (currentPage <= 3) {
            pages.push(1, 2, 3, 4, "...", totalPages);
        } else if (currentPage >= totalPages - 3) {
            pages.push(1, "...");
            for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(
                1,
                "...",
                currentPage - 1,
                currentPage,
                currentPage + 1,
                "...",
                totalPages,
            );
        }
    }
    return pages;
};


export function updateUrlParams(pathname: string, params: URLSearchParams) {
    const newUrl = `${pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);
}
