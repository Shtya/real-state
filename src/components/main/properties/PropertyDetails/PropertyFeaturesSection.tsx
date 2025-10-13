import { IoIosArrowForward } from 'react-icons/io';
import PropertySectionHeader from './PropertySectionHeader';

const PropertyFeaturesSection: React.FC<{ features: string[], title: string }> = ({ features, title }) => (
    <div className="px-4">
        <PropertySectionHeader title={title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {features.map((feature, idx) => (
                <div key={idx} className="flex flex-row items-center gap-2">
                    <span className="text-secondary text-[22px]">
                        <IoIosArrowForward />
                    </span>
                    <span className="text-[18px] md:text-[20px] font-normal text-dark">{feature}</span>
                </div>
            ))}
        </div>
    </div>
);

export default PropertyFeaturesSection;
