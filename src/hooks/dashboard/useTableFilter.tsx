import { FilterConfig } from "@/types/table";
import { updateUrlParams } from "@/utils/helpers";
import { format } from "date-fns";
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';


export default function useTableFilter({ filters }: { filters: FilterConfig[]; }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('search') ?? '');

    const [allFilters, setAllFilters] = useState(() => {
        const initial: Record<string, string> = {};

        initial.search = searchParams.get('search') ?? '';
        filters.forEach((filter) => {
            if (filter.type === 'select') {
                initial[filter.key] =
                    searchParams.get(filter.key) ??
                    (typeof filter.default === 'string' ? filter.default : '');

            }

            if (filter.type === 'dateRange') {
                const fromParam = searchParams.get(`${filter.key}_from`);
                const toParam = searchParams.get(`${filter.key}_to`);
                const defaultRange = typeof filter.default === 'object' ? filter.default : {};

                initial[`${filter.key}_from`] =
                    fromParam ??
                    (defaultRange.startDate ? format(defaultRange.startDate, 'yyyy-MM-dd') : '');

                initial[`${filter.key}_to`] =
                    toParam ??
                    (defaultRange.endDate ? format(defaultRange.endDate, 'yyyy-MM-dd') : '');
            }
        });

        return initial;
    });

    // ✅ Update query and state
    const updateFilter = (key: string, value: string | undefined) => {
        const updated = { ...allFilters };
        if (value) {
            updated[key] = value;
        } else {
            delete updated[key];
        }
        setAllFilters(updated);

        const params = new URLSearchParams(updated);
        updateUrlParams(pathname, params)
    };

    // ✅ Reset filters 
    const handleReset = () => {
        const reset: Record<string, string> = {};

        reset.search = '';
        setSearch('');
        filters.forEach((filter) => {
            if (filter.type === 'select') {
                reset[filter.key] =
                    typeof filter.default === 'string'
                        ? filter.default : ''
            }

            if (filter.type === 'dateRange') {
                const defaultRange = typeof filter.default === 'object' ? filter.default : {};
                if (defaultRange.startDate) {
                    reset[`${filter.key}_from`] = format(defaultRange.startDate, 'yyyy-MM-dd');
                }
                if (defaultRange.endDate) {
                    reset[`${filter.key}_to`] = format(defaultRange.endDate, 'yyyy-MM-dd');
                }
            }
        });

        setAllFilters(reset);
        const params = new URLSearchParams(reset);
        updateUrlParams(pathname, params)
    };

    // ✅ Update date filter type
    const handleDateChange = ({
        filter,
        dates,
    }: {
        filter: FilterConfig;
        dates: { startDate?: Date; endDate?: Date };
    }) => {
        const params = new URLSearchParams(allFilters);

        if (dates.startDate) {
            params.set(`${filter.key}_from`, format(dates.startDate, 'yyyy-MM-dd'));
        } else {
            params.delete(`${filter.key}_from`);
        }

        if (dates.endDate) {
            params.set(`${filter.key}_to`, format(dates.endDate, 'yyyy-MM-dd'));
        } else {
            params.delete(`${filter.key}_to`);
        }

        const updated = Object.fromEntries(params.entries());
        setAllFilters(updated);
        updateUrlParams(pathname, params)
    };

    return {
        search,
        setSearch,
        allFilters,
        updateFilter,
        handleReset,
        handleDateChange
    }
}