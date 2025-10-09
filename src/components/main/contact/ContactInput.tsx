import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    wrapperClassName?: string;
}

export default function ContactInput({
    id,
    label,
    value,
    placeholder,
    onChange,
    type = "text",
    wrapperClassName = "",
    ...props
}: TextInputProps) {
    return (
        <div
            className={`flex gap-2 flex-col border-b border-secondary pb-3 ${wrapperClassName}`}
        >
            <label
                htmlFor={id}
                className="text-input text-[13px] font-medium"
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="focus:outline-0 text-sm font-medium text-secondary caret-secondary"
                {...props}
            />
        </div>
    );
}
