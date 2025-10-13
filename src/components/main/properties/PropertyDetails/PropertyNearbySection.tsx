import { ReactNode } from 'react';
import { IoIosPin } from 'react-icons/io';
import PropertySectionHeader from './PropertySectionHeader';

type NearbyItem = {
    name: string;
    distance?: string;
};

type Props = {
    title: string;
    icon?: ReactNode;
    items: NearbyItem[];
    align?: 'start' | 'center' | 'end';
};

export default function PropertyNearbySection({ title, icon, items, align = 'end' }: Props) {
    return (
        <div className="px-4">
            <PropertySectionHeader title={title} align={align} icon={icon} />
            <div className="space-y-3">
                {items.map(({ name, distance }, idx) => (
                    <div key={idx} className="flex justify-between items-center text-end gap-2">
                        <span className="text-[18px] md:text-[20px] font-medium text-dark text-start">{name}</span>
                        {distance ? (
                            <span className="flex items-center gap-1 text-[18px] md:text-[20px] ">
                                <IoIosPin className="text-[28px] sm:text-[32px] text-secondary shrink-0" />
                                <span>{distance}</span>
                            </span>
                        ) : (
                            <div />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
