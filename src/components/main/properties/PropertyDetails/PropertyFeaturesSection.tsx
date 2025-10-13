import { IoIosArrowForward } from 'react-icons/io';
import PropertySectionHeader from './PropertySectionHeader';

const features = [
    'Air Conditioning',
    'Home Theatre',
    'Swimming Pool',
    'Gym',
    'Game Room',
    'Central Heating',
    'Alarm',
    'Private Garden',
    'Spa & Massage',
    'Window Covering',
    'Rooftop Lounge',
    'Pets Allow',
    'Free Wi-Fi',
    'Car Parking',
];

const PropertyFeaturesSection: React.FC = () => {
    return (
        <div className="px-4">
            <PropertySectionHeader title="Property Features" align="end" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-end">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-row justify-end items-center gap-2">
                        <span className="text-[18px] md:text-[20px] font-normal text-dark">{feature}</span>
                        <span className="text-secondary text-[22px] ">
                            <IoIosArrowForward />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyFeaturesSection;
