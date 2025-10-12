'use client'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import PropertySelectInput from "./PropertySelectInput";
import PropertyFilterInputWrapper from "./PropertyFilterInputWrapper";
import SegmentedControl from "./SegmentedControl";
import SelectablePillGroup from "./SelectablePillGroup";
import SelectableCheckboxList from "./SelectableCheckboxList";
import NumberRangeInput from "./NumberRangeInput";
import NumberSelectRangeInput from "./NumberSelectRangeInput";
import useFilterProperties from "@/hooks/properties/useFilterProperties";
import {
    MAX_PRICE, MIN_PRICE, MAX_SCQUAREFEET, MIN_SCQUAREFEET, MAX_YEARBUILD, MIN_YEARBUILD,
} from "@/constants/properties/constant";
import { useTranslations } from "next-intl";
import Sidebar from "@/components/shared/Sidebar";


export default function FilterProperties() {

    const {
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
    } = useFilterProperties();

    const t = useTranslations('property.filter');


    return (
        <div className="sticky top-24 bg-white rounded-[12px] lg:border lg:border-gray lg:shadow max-w-[335px]">

            <Sidebar
                title={t("title")}
                trigger={
                    <button className="flex text-base items-center gap-2 py-1 px-2 md:py-[6px] border rounded-md">
                        <HiOutlineAdjustmentsHorizontal className="w-5 md:w-6  h-5 md:h-6" />
                        <span>{t("title")}</span>
                    </button>
                }>

                <div className="flex flex-col gap-8 p-4 lg:p-6 ">
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-gray-dark text-xl font-semibold">{t('subtitle')}</h2>
                        <button onClick={resetFilters} className="text-secondary text-sm" >{t('reset')}</button>
                    </div>
                    {/* Location */}
                    <PropertyFilterInputWrapper label={t('location.title')}>
                        <PropertySelectInput
                            options={locations}
                            value={activeLocation}
                            fallbackValue={locations?.[0]}
                            onChange={(option) => updateFilter("location", option.value.toString())}
                        />
                    </PropertyFilterInputWrapper>

                    {/* Rental Period */}
                    <PropertyFilterInputWrapper label={t('rentalPeriod.title')}>
                        <SegmentedControl
                            dataAttrKey="data-period"
                            options={periods}
                            fallbackValue='yearly'
                            activeValue={filters.period}
                            onChange={(value) => updateFilter("period", value)}
                        />
                    </PropertyFilterInputWrapper>

                    {/* Property Type */}
                    <PropertyFilterInputWrapper label={t('propertyType.title')}>
                        <SegmentedControl
                            dataAttrKey="data-property-type"
                            options={propertyTypes}
                            fallbackValue='residential'
                            activeValue={filters.type}
                            onChange={updateType}
                        />

                        <SelectableCheckboxList
                            options={subtypes}
                            selectedValues={filters.subtype}
                            onToggle={toggleSubtype}
                        />
                    </PropertyFilterInputWrapper>

                    {/* Furnished Type */}
                    <PropertyFilterInputWrapper label={t('furnishedType.title')}>
                        <SegmentedControl
                            dataAttrKey="data-furnished-type"
                            options={furnishedTypes}
                            fallbackValue='furnished'
                            activeValue={filters.furnished}
                            onChange={(value) => updateFilter("furnished", value)}
                        />
                    </PropertyFilterInputWrapper>
                    <PropertyFilterInputWrapper label={t('bathrooms.title')}>
                        <SelectablePillGroup
                            options={bathrooms}
                            activeValue={filters.bathroom}
                            onSelect={(value) => updateFilter("bathroom", value)}
                        />
                    </PropertyFilterInputWrapper>

                    <PropertyFilterInputWrapper label={t('bedrooms.title')}>
                        <SelectablePillGroup
                            options={bedrooms}
                            activeValue={filters.bedroom}
                            onSelect={(value) => updateFilter("bedroom", value)}
                        />
                    </PropertyFilterInputWrapper>

                    <NumberRangeInput
                        label={t('priceRange')}
                        min={filters.priceMin}
                        max={filters.priceMax}
                        range={{ min: MIN_PRICE, max: MAX_PRICE }}
                        onChange={({ min, max }) =>
                            setFilters(prev => ({ ...prev, priceMin: min, priceMax: max }))
                        }
                    />

                    <NumberRangeInput
                        label={t('squareFeet')}
                        min={filters.scquarefeetMin}
                        max={filters.scquarefeetMax}
                        range={{ min: MIN_SCQUAREFEET, max: MAX_SCQUAREFEET }}
                        onChange={({ min, max }) =>
                            setFilters(prev => ({ ...prev, scquarefeetMin: min, scquarefeetMax: max }))
                        }
                    />

                    <NumberSelectRangeInput
                        label={t('yearBuilt')}
                        min={filters.yearBuiltMin}
                        max={filters.yearBuiltMax}
                        range={{ min: MIN_YEARBUILD, max: MAX_YEARBUILD }}
                        options={Array.from({ length: 76 }, (_, i) => {
                            const year = (MAX_YEARBUILD - i);
                            return { label: year.toString(), value: year };
                        })}
                        onChange={({ min, max }) => {
                            setFilters(prev => ({
                                ...prev,
                                yearBuiltMin: min ?? MIN_YEARBUILD,
                                yearBuiltMax: max ?? MAX_YEARBUILD,
                            }))
                        }
                        } />

                    <PropertyFilterInputWrapper label={t('features.title')}>
                        <SelectablePillGroup
                            options={features}
                            activeValue={filters.features}
                            onSelect={(value) => toggleFeature(value)}
                        />
                    </PropertyFilterInputWrapper>

                </div>
            </Sidebar>
        </div >
    );
}