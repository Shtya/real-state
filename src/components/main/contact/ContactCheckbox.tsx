"use client";

import { IoMdCheckmark } from "react-icons/io";
import React from "react";

interface ContactCheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function ContactCheckbox({
    id,
    label,
    checked,
    onChange,
}: ContactCheckboxProps) {
    return (
        <div
            className="flex items-center gap-3 w-fit cursor-pointer select-none"
            onClick={() => onChange(!checked)}
        >
            <div
                className={`flex-center rounded-full w-[18px] h-[18px]  transition-colors ${checked ? "border border-primary bg-primary" : "bg-lighter"}`}
            >
                {checked && <IoMdCheckmark size={12} className="text-white" />}
            </div>
            <label htmlFor={id} className="text-input text-[13px] font-medium">
                {label}
            </label>
        </div>
    );
}
