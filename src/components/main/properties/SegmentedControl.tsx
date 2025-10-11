'use client';
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { useIndicatorPosition } from "@/hooks/useIndicatorPosition";
import { ReactNode } from "react";

type SegmentedControlProps<T extends string> = {
    options: { value: T; content: ReactNode }[];
    activeValue: T;
    onChange: (value: T) => void;
    dataAttrKey?: string; //optional custom attribute name
    children?: ReactNode; //optional custom attribute name
};

export default function SegmentedControl<T extends string>({
    options,
    activeValue,
    onChange,
    dataAttrKey = "data-segment", //default fallback
    children
}: SegmentedControlProps<T>) {
    const activeSelector = `[${dataAttrKey}="${activeValue}"]`;
    const indicatorRef = useIndicatorPosition(activeSelector);

    return (
        <div className="bg-lighter relative rounded-full flex gap-2">
            <div
                ref={indicatorRef}
                className="absolute bg-primary transition-all duration-300 ease-in-out rounded-full z-0 will-change-transform"
            />
            {options.map(({ value, content }) => (
                <SecondaryButton
                    key={value}
                    {...{ [dataAttrKey]: value }} // dynamic attribute assignment
                    className={`w-full transition-colors text-nowrap z-[1] ${activeValue === value ? 'text-white' : 'text-black'
                        }`}
                    onClick={() => onChange(value)}
                >
                    {content}
                </SecondaryButton>
            ))}
            {children}
        </div>
    );
}
