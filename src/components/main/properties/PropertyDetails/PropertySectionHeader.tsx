import { ReactNode } from 'react';

type PropertySectionHeaderProps = {
    title: string;
    align?: 'start' | 'center' | 'end';
    icon?: ReactNode;
};

const PropertySectionHeader: React.FC<PropertySectionHeaderProps> = ({ title, align = 'start', icon }) => {
    const alignment = {
        start: 'justify-start text-start',
        center: 'justify-center text-center',
        end: 'justify-end text-end',
    }[align];

    return (
        <div className={`flex items-center gap-2 ${alignment} py-1 border-b border-dark mb-4`}>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-bold">
                {title}
            </h2>
            {icon && <span className="text-[42px] text-secondary">{icon}</span>}
        </div>
    );
};

export default PropertySectionHeader;
