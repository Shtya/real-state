import { useEffect, useState } from "react";
import PropertyFilterInputWrapper from "./PropertyFilterInputWrapper";
import PriceRangeSlider from "@/components/shared/forms/PriceRangeSlider";

type NumberRangeInputProps = {
    min?: number;
    max?: number;
    range?: { min: number, max: number }
    showProgress?: boolean
    label: string

    onChange: (range: { min: number | null; max: number | null }) => void;
};

export default function NumberRangeInput({ min, max, range, onChange, showProgress = true, label }: NumberRangeInputProps) {
    const [localMin, setLocalMin] = useState<string | undefined>(min?.toString() ?? "");
    const [localMax, setLocalMax] = useState<string | undefined>(max?.toString() ?? "");

    useEffect(() => {
        setLocalMin(min?.toString() ?? "");
        setLocalMax(max?.toString() ?? "");
    }, [min, max]);


    const rangeMin = range?.min ?? Number.MIN_SAFE_INTEGER;
    const rangeMax = range?.max ?? Number.MAX_SAFE_INTEGER;

    const handleBlur = () => {

        const parsedMin = localMin ? parseInt(localMin) : null;
        const parsedMax = localMax ? parseInt(localMax) : null;

        const validMin =
            parsedMin !== null ? Math.max(rangeMin, Math.min(parsedMin, parsedMax ?? rangeMax)) : null;
        const validMax =
            parsedMax !== null ? Math.min(rangeMax, Math.max(parsedMax, parsedMin ?? rangeMin)) : null;

        setLocalMin(validMin?.toString())
        setLocalMax(validMax?.toString())

        onChange({ min: validMin, max: validMax });
    };

    const handleSliderChange = (val: { min: number | null; max: number | null }) => {
        setLocalMin(val?.min?.toString());
        setLocalMax(val?.max?.toString());
        onChange({ min: val.min, max: val.max });
    };

    return (
        <PropertyFilterInputWrapper label={label}>
            <div className="flex gap-5 w-full">
                <input
                    type="number"
                    placeholder="Min"
                    value={localMin}
                    min={range?.min}
                    max={max ?? range?.max}
                    onChange={(e) => setLocalMin(e.target.value)}
                    onBlur={handleBlur}
                    className="flex-1 rounded-md p-[10px] bg-white border border-lightGold text-[16px] text-placeholder"
                />
                <input
                    type="number"
                    placeholder="Max"
                    value={localMax}
                    min={min ?? range?.min}
                    max={range?.max}
                    onChange={(e) => setLocalMax(e.target.value)}
                    onBlur={handleBlur}
                    className="flex-1 rounded-md p-[10px] bg-white border border-lightGold text-[16px] text-placeholder"
                />
            </div>
            {showProgress && <PriceRangeSlider onChange={handleSliderChange} range={range} value={{ min, max }} />}
        </PropertyFilterInputWrapper>
    );
}
