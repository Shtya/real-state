'use client'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import PropertySelectInput from "./PropertySelectInput";
import { useSearchParams, usePathname } from "next/navigation";
import PropertyFilterInputWrapper from "./PropertyFilterInputWrapper";
import SegmentedControl from "./SegmentedControl";
import { useEffect, useMemo, useState } from "react";
import SelectablePillGroup from "./SelectablePillGroup";
import SelectableCheckboxList from "./SelectableCheckboxList";
import NumberRangeInput from "./NumberRangeInput";
import NumberSelectRangeInput from "./NumberSelectRangeInput";


const locationOptions = [
    { label: 'Any area', value: "all" },
    { label: 'Cairo', value: "cairo" },
    { label: 'Alexandria', value: "alexandria" },
    { label: 'Giza', value: "giza" }
]
const subtypeMap = {
    residential: [
        { label: "Condo", value: "condo" },
        { label: "Multi-family", value: "multi-family" },
        { label: "Townhomes", value: "townhomes" },
        { label: "Single-Family", value: "single-family" },
    ],
    commercial: [
        { label: "Office", value: "office" },
        { label: "Retail", value: "retail" },
        { label: "Warehouse", value: "warehouse" },
        { label: "Industrial", value: "industrial" },
    ],
};

const bedrooms = [
    { label: "Any", value: "any" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5+", value: "5AndMore" },
]

const bathrooms = [
    { label: "Any", value: "any" },
    { label: "1.0", value: "1.0" },
    { label: "1.5", value: "1.5" },
    { label: "2.0", value: "2.0" },
    { label: "2.5", value: "2.5" },
    { label: "3+", value: "3AndMore" },
]

const features = [
    { label: "Air conditioning", value: "air-conditioning" },
    { label: "Assisted living", value: "assisted-living" },
    { label: "Disability Access", value: "disability-Access" },
    { label: "Controlled access", value: "controlled-access" },
    { label: "Cable Ready", value: "cable-ready" },
    { label: "Available now", value: "available-now" },
    { label: "College", value: "college" },
    { label: "Corporate", value: "corporate" },
    { label: "Elevator", value: "elevator" },
    { label: "Extra Storage", value: "extra-storage" },
    { label: "High speed internet", value: "high-speed-internet" },
    { label: "Garage", value: "garage" },
    { label: "Pet allowed", value: "pet-allowed" },
]

type FilterState = {
    location: string;
    period: "monthly" | "yearly";
    type: "residential" | "commercial";
    subtype: string[];
    furnished: "furnished" | "unfurnished";
    bathroom: string;
    bedroom: string;
    features: string[];
    priceMin: number | null;
    priceMax: number | null;
    scquarefeetMin: number | null;
    scquarefeetMax: number | null;
    yearBuiltMin: number | null;
    yearBuiltMax: number | null;
};




export default function FilterProperties() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const initialType = (searchParams.get("type") as "residential" | "commercial") || "residential";

    const subtypeValueMap = useMemo(() => new Map<string, Set<string>>(
        Object.entries(subtypeMap).map(([type, options]) => [
            type,
            new Set(options.map(opt => opt.value)),
        ])
    ), [])

    const featureValueSet = useMemo(() => new Set(features.map(f => f.value)), []);


    const [filters, setFilters] = useState<FilterState>({
        location: searchParams.get("location") || locationOptions[0].value,
        period: (searchParams.get("period") as "monthly" | "yearly") || "yearly",
        type: initialType,
        subtype: (searchParams.get("subtype")?.split(",") || []).filter(v =>
            subtypeValueMap.get(initialType)?.has(v)
        ),
        furnished: searchParams.get("furnished") as "furnished" | "unfurnished" || "furnished",
        bathroom: searchParams.get("bathrooms") || bathrooms[0].value,
        bedroom: searchParams.get("bedrooms") || bedrooms[0].value,
        features: (searchParams.get("features")?.split(",") || []).filter(v =>
            featureValueSet.has(v)
        ),
        priceMin: searchParams.get("priceMin") ? parseInt(searchParams.get("priceMin")!) : null,
        priceMax: searchParams.get("priceMax") ? parseInt(searchParams.get("priceMax")!) : null,
        scquarefeetMin: searchParams.get("scquarefeetMin") ? parseInt(searchParams.get("scquarefeetMin")!) : null,
        scquarefeetMax: searchParams.get("scquarefeetMax") ? parseInt(searchParams.get("scquarefeetMax")!) : null,
        yearBuiltMin: searchParams.get("yearBuiltMin") ? parseInt(searchParams.get("yearBuiltMin")!) : null,
        yearBuiltMax: searchParams.get("yearBuiltMax") ? parseInt(searchParams.get("yearBuiltMax")!) : null,

    });

    const activeOption = useMemo(() => locationOptions.find(o => o.value === filters.location), [filters.location])

    const subtypeOptions = subtypeMap[filters.type];


    function updateFilter(key: keyof typeof filters, value: string) {
        setFilters(prev => ({ ...prev, [key]: value }));
    }

    function toggleSubtype(value: string) {
        setFilters(prev => {
            const exists = prev.subtype.includes(value);
            const updated = exists
                ? prev.subtype.filter(v => v !== value)
                : [...prev.subtype, value];
            return { ...prev, subtype: updated };
        });
    }


    function toggleFeature(value: string) {
        setFilters(prev => {
            const exists = prev.features.includes(value);
            const updated = exists
                ? prev.features.filter(v => v !== value)
                : [...prev.features, value];
            return { ...prev, features: updated };
        });
    }


    function updateType(value: "residential" | "commercial") {
        setFilters(prev => {
            if (prev.type !== value) {
                return { ...prev, type: value, subtype: [] }; // reset subtype
            }
            return prev; // no change needed
        });
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        Object.entries(filters).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                params.set(key, value.join(","));
            } else {
                params.set(key, String(value));
            }
        });
        const newUrl = `${pathname}?${params.toString()}`;
        window.history.replaceState(null, '', newUrl);
    }, [filters]);


    return (
        <div className="sticky top-24 py-4 lg:py-6bg-white rounded-[12px] shadow-lg ">
            <div className="flex items-center gap-2 lg:gap-4 pb-2 border-b border-[#ECECEC] px-4  lg:px-6">
                <HiOutlineAdjustmentsHorizontal size={44} className="text-secondary w-7 h-7 md:w-8 md:h-8 lg:w-11 lg:h-11" />
                <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-dark">Filters</h1>
            </div>
            <div className="flex flex-col gap-8 p-4 lg:p-6">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-dark text-xl font-semibold">Property Filter</h2>
                    <button className="text-secondary text-sm">Reset all</button>
                </div>
                {/* Location */}
                <PropertyFilterInputWrapper label="Location">
                    <PropertySelectInput
                        options={locationOptions}
                        value={activeOption}
                        onChange={(option) => updateFilter("location", option.value)}
                    />
                </PropertyFilterInputWrapper>

                {/* Rental Period */}
                <PropertyFilterInputWrapper label="Rental Period">
                    <SegmentedControl
                        dataAttrKey="data-period"
                        options={[
                            { value: 'yearly', content: 'Yearly' },
                            { value: 'monthly', content: 'Monthly' },
                        ]}
                        activeValue={filters.period}
                        onChange={(value) => updateFilter("period", value)}
                    />
                </PropertyFilterInputWrapper>

                {/* Property Type */}
                <PropertyFilterInputWrapper label="Property Type">
                    <SegmentedControl
                        dataAttrKey="data-property-type"
                        options={[
                            { value: 'residential', content: 'Residential' },
                            { value: 'commercial', content: 'Commercial' },
                        ]}
                        activeValue={filters.type}
                        onChange={updateType}
                    />

                    <SelectableCheckboxList
                        options={subtypeOptions}
                        selectedValues={filters.subtype}
                        onToggle={toggleSubtype}
                    />
                </PropertyFilterInputWrapper>

                {/* Furnished Type */}
                <PropertyFilterInputWrapper label="Furnished Type">
                    <SegmentedControl
                        dataAttrKey="data-furnished-type"
                        options={[
                            { value: 'furnished', content: 'Furnished' },
                            { value: 'unfurnished', content: 'Unfurnished' },
                        ]}
                        activeValue={filters.furnished}
                        onChange={(value) => updateFilter("furnished", value)}
                    />
                </PropertyFilterInputWrapper>
                <PropertyFilterInputWrapper label="Bathrooms">
                    <SelectablePillGroup
                        options={bathrooms}
                        activeValue={filters.bathroom}
                        onSelect={(value) => updateFilter("bathroom", value)}
                    />
                </PropertyFilterInputWrapper>

                <PropertyFilterInputWrapper label="Bedrooms">
                    <SelectablePillGroup
                        options={bedrooms}
                        activeValue={filters.bedroom}
                        onSelect={(value) => updateFilter("bedroom", value)}
                    />
                </PropertyFilterInputWrapper>

                <NumberRangeInput
                    label="Price range"
                    min={filters.priceMin ?? 1000}
                    max={filters.priceMax ?? 10_000}
                    range={{ min: 1000, max: 10_000 }}
                    onChange={({ min, max }) =>
                        setFilters(prev => ({ ...prev, priceMin: min, priceMax: max }))
                    }
                />

                <NumberRangeInput
                    label="Square feet"
                    min={filters.scquarefeetMin ?? 10}
                    max={filters.scquarefeetMax ?? 1500}
                    range={{ min: 10, max: 1500 }}
                    onChange={({ min, max }) =>
                        setFilters(prev => ({ ...prev, scquarefeetMin: min, scquarefeetMax: max }))
                    }
                />

                <NumberSelectRangeInput
                    label="Year Built"
                    min={filters.yearBuiltMin?.toString() ?? ""}
                    max={filters.yearBuiltMax?.toString() ?? ""}
                    range={{ min: 1950, max: 2025 }}
                    options={Array.from({ length: 76 }, (_, i) => {
                        const year = (2025 - i).toString();
                        return { label: year, value: year };
                    })}
                    onChange={({ min, max }) => {
                        console.log(min, max)
                        setFilters(prev => ({
                            ...prev,
                            yearBuiltMin: min,
                            yearBuiltMax: max,
                        }))
                    }
                    }

                />


                <PropertyFilterInputWrapper label="Features">
                    <SelectablePillGroup
                        options={features}
                        activeValue={filters.features}
                        onSelect={(value) => toggleFeature(value)}
                    />
                </PropertyFilterInputWrapper>

            </div>

        </div >
    );
}