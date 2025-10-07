
"use client";

import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { useMemo } from "react";

export function useNormalizedPath() {
    const pathname = usePathname();

    // Remove leading locale segment if it matches one of our supported locales
    const normalize = (path: string) => {
        const parts = path.split("/");
        if (routing.locales.includes(parts[1] as "en" | "ar")) {
            return "/" + parts.slice(2).join("/");
        }
        return path;
    };

    const normalizedPath = useMemo(() => normalize(pathname), [pathname]);

    return {
        pathname,
        normalizedPath,
    };
}
