import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getSafeNumberInRange, getSafeString } from "@/utils/helpers";
import {
    PeriodType, FurnishedType, PropertyType, FilterState,
    MAX_PRICE, MIN_PRICE, MAX_SCQUAREFEET, MIN_SCQUAREFEET, MAX_YEARBUILD, MIN_YEARBUILD,
    locationValues, subtypeValues, bedroomValues, bathroomValues, featurevalues, periodValues, propertyTypeValues, furnishedValues
} from "@/constants/properties/constant";
import { useLocalizedOptionsGroups } from "../useLocalizedOptionsGroups";


function useFilterProperties() {
    const searchParams = useSearchParams();
    const pathname = usePathname();



    // options
    const {
        locations,
        residentialSubtypes,
        commercialSubtypes,
        bedrooms,
        bathrooms,
        features,
        periods,
        propertyTypes,
        furnishedTypes
    } = useLocalizedOptionsGroups(
        [
            { key: 'locations', translationPath: 'location', options: [...locationValues], },
            { key: 'residentialSubtypes', translationPath: 'subtype.residential', options: [...subtypeValues.residential], },
            { key: 'commercialSubtypes', translationPath: 'subtype.commercial', options: [...subtypeValues.commercial], },
            { key: 'bedrooms', translationPath: 'bedrooms', options: [...bedroomValues], },
            { key: 'bathrooms', translationPath: 'bathrooms', options: [...bathroomValues], },
            { key: 'features', translationPath: 'features', options: [...featurevalues], },
            { key: 'periods', translationPath: 'rentalPeriod', options: [...periodValues], },
            { key: 'propertyTypes', translationPath: 'propertyType', options: [...propertyTypeValues], },
            { key: 'furnishedTypes', translationPath: 'furnishedType', options: [...furnishedValues], }
        ],
        'property.filter'
    );

    const subtypeValueMap = useMemo(
        () =>
            new Map<string, Set<string>>([
                ['residential', new Set(residentialSubtypes.map(opt => opt.value))],
                ['commercial', new Set(commercialSubtypes.map(opt => opt.value))]
            ]),
        [residentialSubtypes, commercialSubtypes]
    );


    const featureValueSet = useMemo(() => new Set(features.map(f => f.value)), [features]);

    const [filters, setFilters] = useState<FilterState>(() => {
        const allowedPeriods = new Set<PeriodType>(["monthly", "yearly"]);
        const allowedFurnished = new Set<FurnishedType>(["furnished", "unfurnished"]);
        const allowedTypes = new Set<PropertyType>(["residential", "commercial"]);
        const allowedBathrooms = new Set<string>(bathrooms.map(b => b.value));
        const allowedBedrooms = new Set<string>(bedrooms.map(b => b.value));


        const rawPriceMin = getSafeNumberInRange(searchParams.get("priceMin"), MIN_PRICE, MIN_PRICE, MAX_PRICE);
        const rawPriceMax = getSafeNumberInRange(searchParams.get("priceMax"), MAX_PRICE, MIN_PRICE, MAX_PRICE);
        const priceMin = Math.min(rawPriceMin, rawPriceMax);
        const priceMax = Math.max(rawPriceMin, rawPriceMax);

        const rawSqftMin = getSafeNumberInRange(searchParams.get("scquarefeetMin"), MIN_SCQUAREFEET, MIN_SCQUAREFEET, MAX_SCQUAREFEET);
        const rawSqftMax = getSafeNumberInRange(searchParams.get("scquarefeetMax"), MAX_SCQUAREFEET, MIN_SCQUAREFEET, MAX_SCQUAREFEET);
        const scquarefeetMin = Math.min(rawSqftMin, rawSqftMax);
        const scquarefeetMax = Math.max(rawSqftMin, rawSqftMax);

        const rawYearMin = getSafeNumberInRange(searchParams.get("yearBuiltMin"), MIN_YEARBUILD, MIN_YEARBUILD, MAX_YEARBUILD);
        const rawYearMax = getSafeNumberInRange(searchParams.get("yearBuiltMax"), MAX_YEARBUILD, MIN_YEARBUILD, MAX_YEARBUILD);
        const yearBuiltMin = Math.min(rawYearMin, rawYearMax);
        const yearBuiltMax = Math.max(rawYearMin, rawYearMax);

        const type = getSafeString(searchParams.get("type"), allowedTypes, "residential");
        const period = getSafeString(searchParams.get("period"), allowedPeriods, "yearly");
        const furnished = getSafeString(searchParams.get("furnished"), allowedFurnished, "furnished");
        const bathroom = getSafeString(searchParams.get("bathrooms"), allowedBathrooms, bathrooms[0].value);
        const bedroom = getSafeString(searchParams.get("bedrooms"), allowedBedrooms, bedrooms[0].value);

        const subtype = (searchParams.get("subtype")?.split(",") || []).filter(v =>
            subtypeValueMap.get(type)?.has(v)
        );

        const features = (searchParams.get("features")?.split(",") || []).filter(v =>
            featureValueSet.has(v)
        );

        return {
            location: searchParams.get("location") || locations[0].value,
            period,
            type,
            subtype,
            furnished,
            bathroom,
            bedroom,
            features,
            priceMin,
            priceMax,
            scquarefeetMin,
            scquarefeetMax,
            yearBuiltMin,
            yearBuiltMax,
        };
    });


    const activeLocation = useMemo(() => locations.find(o => o.value === filters.location), [filters.location, locations])

    const subtypes = filters.type === 'residential' ? residentialSubtypes : commercialSubtypes;

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


    function updateType(value: string) {
        if (value !== 'residential' && value !== 'commercial') {
            return;
        }
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

    function resetFilters() {
        const defaultFilters: FilterState = {
            location: locations[0].value,
            period: "yearly",
            type: "residential",
            subtype: [],
            furnished: "furnished",
            bathroom: bathrooms[0].value,
            bedroom: bedrooms[0].value,
            features: [],
            priceMin: MIN_PRICE,
            priceMax: MAX_PRICE,
            scquarefeetMin: MIN_SCQUAREFEET,
            scquarefeetMax: MAX_SCQUAREFEET,
            yearBuiltMin: MIN_YEARBUILD,
            yearBuiltMax: MAX_YEARBUILD,
        };
        setFilters(defaultFilters);
    }


    return {
        filters,
        activeLocation,
        locations,
        subtypes,
        bedrooms,
        bathrooms,
        features,
        periods,
        propertyTypes,
        furnishedTypes,
        setFilters,
        updateFilter,
        toggleSubtype,
        toggleFeature,
        updateType,
        resetFilters
    }
}

export default useFilterProperties;