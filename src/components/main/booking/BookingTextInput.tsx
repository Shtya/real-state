interface TextInputProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BookingTextInput({
    label,
    placeholder,
    value,
    onChange,
}: TextInputProps) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label
                className="text-input font-medium text-[14px] leading-[20px]"
                style={{ fontWeight: 500 }}
            >
                {label}
            </label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="bg-lighter border border-[var(--light)] rounded-[8px] px-[14px] py-[10px] h-[44px] text-[16px] leading-[24px] text-dark placeholder-[var(--placeholder)]"
            />
        </div>
    );
}
