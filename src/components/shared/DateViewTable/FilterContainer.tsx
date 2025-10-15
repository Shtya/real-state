'use client';

/**
 * 📌 FilterContainer Component
 *
 * This component initializes filter and sort state from URL search parameters.
 * 
 * 🔍 For filters of type `'dateRange'`, the `key` is split into two query parameters:
 * - `${key}_from` → represents the start date
 * - `${key}_to` → represents the end date
 *
 * These are used to prefill the date range inputs and apply filtering logic accordingly.
 */


import { parse } from 'date-fns';
import { FilterConfig } from '@/types/table';
import { TbFilterCancel } from 'react-icons/tb';
import DateRangePicker from '../forms/SelectDateRange';
import SearchField from '../forms/SearchField';
import useTableFilter from '@/hooks/dashboard/useTableFilter';

type Props = {
    filters: FilterConfig[];
    showSearch?: boolean;
    searchPlaceholder?: string;
};

export default function FilterContainer({
    filters,
    searchPlaceholder,
    showSearch = true,
}: Props) {

    const {
        search,
        setSearch,
        allFilters,
        updateFilter,
        handleReset,
        handleDateChange
    } = useTableFilter({ filters })

    return (
        <div className="flex flex-row flex-wrap items-center justify-between gap-3 mb-5">
            <div className=" order-first w-full md:w-auto flex items-center gap-3 "
            >
                {/* {(showSearch || filters.length > 0) && <button
                    onClick={handleReset}
                    className=" inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--btn-bg)] text-[var(--dark)] transition-colors duration-200 hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                >
                    <TbFilterCancel size={24} />
                </button>} */}

                <div className="flex-1 md:flex-none">
                    {showSearch && <SearchField
                        value={search}
                        onChange={setSearch}
                        searchPlaceholder={searchPlaceholder}
                    />}
                </div>
            </div>

            {/* 3) Other filters, each direct child */}
            {filters.map((filter) => {

                const current = allFilters[filter.key];
                const handleChange = (value: string | undefined) => {
                    updateFilter(filter.key, value);
                };
                if (filter.type === 'custom' && filter.Component) {
                    const CustomComponent = filter.Component;
                    return (
                        <div key={filter.key} className="w-full md:w-fit">
                            <CustomComponent value={current} onChange={handleChange} />
                        </div>
                    );
                }

                // if (filter.type === "select" && filter.options) {
                //     return (
                //         <div key={filter.key} className="w-full md:w-fit">
                //             <SelectDropdown
                //                 label={filter.label}
                //                 options={filter.options}
                //                 value={current}
                //                 onChange={handleChange}
                //             />
                //         </div>
                //     )
                // }

                if (filter.type === "dateRange") {
                    const fromDate = allFilters[`${filter.key}_from`]
                        ? parse(allFilters[`${filter.key}_from`], 'yyyy-MM-dd', new Date())
                        : undefined;
                    const toDate = allFilters[`${filter.key}_to`]
                        ? parse(allFilters[`${filter.key}_to`], 'yyyy-MM-dd', new Date())
                        : undefined;

                    return (
                        <div key={filter.key} className="w-full md:w-fit">
                            <DateRangePicker
                                // DateInputComponent={filter.label}
                                value={{ startDate: fromDate, endDate: toDate }}
                                onChange={(dates) => handleDateChange({ filter, dates })}
                            />
                        </div>
                    )
                }

                return null
            })}
        </div>
    )
}
