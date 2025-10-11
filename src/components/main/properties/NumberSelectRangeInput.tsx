import { useEffect, useState } from "react";
import PropertySelectInput, { Option } from "./PropertySelectInput";
import PropertyFilterInputWrapper from "./PropertyFilterInputWrapper";

type NumberSelectRangeInputProps = {
    min?: string;
    max?: string;
    range?: { min: number; max: number };
    label: string;
    options: Option[];
    onChange: (range: { min: number | null; max: number | null }) => void;
};
export default function NumberSelectRangeInput({
    min,
    max,
    range,
    label,
    options,
    onChange,
}: NumberSelectRangeInputProps) {
    const [localMin, setLocalMin] = useState<Option | null>(null);
    const [localMax, setLocalMax] = useState<Option | null>(null);

    useEffect(() => {
        const minOpt = options.find((opt) => opt.value === min) ?? null;
        const maxOpt = options.find((opt) => opt.value === max) ?? null;
        setLocalMin(minOpt);
        setLocalMax(maxOpt);
    }, [min, max, options]);

    const rangeMin = range?.min ?? Number.MIN_SAFE_INTEGER;
    const rangeMax = range?.max ?? Number.MAX_SAFE_INTEGER;

    const validateAndUpdate = (minOpt: Option | null, maxOpt: Option | null) => {
        const parsedMin = minOpt ? parseInt(minOpt.value) : null;
        const parsedMax = maxOpt ? parseInt(maxOpt.value) : null;

        const validMin =
            parsedMin !== null ? Math.max(rangeMin, Math.min(parsedMin, parsedMax ?? rangeMax)) : null;
        const validMax =
            parsedMax !== null ? Math.min(rangeMax, Math.max(parsedMax, parsedMin ?? rangeMin)) : null;

        const finalMinOpt = options.find((opt) => parseInt(opt.value) === validMin) ?? null;
        const finalMaxOpt = options.find((opt) => parseInt(opt.value) === validMax) ?? null;

        setLocalMin(finalMinOpt);
        setLocalMax(finalMaxOpt);

        onChange({ min: validMin, max: validMax });
    };

    return (
        <PropertyFilterInputWrapper label={label}>
            <div className="flex gap-5 w-full">
                <PropertySelectInput
                    options={options}
                    value={localMin}
                    onChange={(opt) => {
                        const updatedMin = opt;
                        validateAndUpdate(updatedMin, localMax);
                    }}
                    placeholder="Min"
                    className="flex-1"
                />
                <PropertySelectInput
                    options={options}
                    value={localMax}
                    onChange={(opt) => {
                        const updatedMax = opt;
                        validateAndUpdate(localMin, updatedMax);
                    }}
                    placeholder="Max"
                    className="flex-1"
                />
            </div>
        </PropertyFilterInputWrapper>
    );
}
