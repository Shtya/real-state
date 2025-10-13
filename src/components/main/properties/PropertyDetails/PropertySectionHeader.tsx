import { ReactNode } from 'react';

type PropertySectionHeaderProps = {
    title: string;
    align?: 'start' | 'center' | 'end';
    icon?: ReactNode;
};

const PropertySectionHeader: React.FC<PropertySectionHeaderProps> = ({ title, icon }) => {

    return (
        <div className={`flex items-center gap-2  py-1 border-b border-dark mb-4`}>
            {icon && <span className="text-[42px] text-secondary">{icon}</span>}
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-bold">
                {title}
            </h2>
        </div>
    );
};

export default PropertySectionHeader;
