import { DashboardPathKey, dashboardPaths, getDashboardHref } from "@/utils/dashboardPaths";
import { useRoleFromPath } from "./useRoleFromPath";

export function useDashboardHref() {
    const role = useRoleFromPath();

    const getHref = (
        key: DashboardPathKey,
        query?: Record<string, string | number | boolean>
    ): string => {
        return getDashboardHref(role, key, query);
    };

    return { getHref, role };
}
