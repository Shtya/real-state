import { ReactNode } from 'react';

interface RoleOptionProps {
    selected: boolean;
    onClick: () => void;
    title: string;
    description: string;
    icon: ReactNode;
}
export default function RoleOption({
    selected,
    onClick,
    title,
    description,
    icon,
}: RoleOptionProps) {
    return (
        <div
            onClick={onClick}
            className={`
        relative w-full rounded-[10px] border cursor-pointer transition-colors 
        ${selected ? 'border-[#45A9EA]' : 'border-gray'}
      `}
        >
            {/* Top-right ball */}
            <div
                className={`
          absolute w-[16px] h-[16px] rounded-full top-[18px] end-[18px]
          ${selected ? 'bg-secondary' : 'bg-gray'}
        `}
            />

            {/* Content */}
            <div className="flex items-start gap-4 p-4 sm:p-5 lg:p-6">
                <div className="text-primary mt-1 shrink-0">{icon}</div>
                <div>
                    <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium capitalize leading-[100%]">
                        {title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[100%] text-[var(--neutral-600)] mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
