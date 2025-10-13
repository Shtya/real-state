import PropertySectionHeader from './PropertySectionHeader';

type PropertyDescriptionProps = {
    title: string;
    children: React.ReactNode;
};

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({ title, children }) => {
    return (
        <div className="px-4">
            <PropertySectionHeader title={title} />
            <div className="text-[18px] sm:text-[20px] md:text-[20px] leading-[28px] sm:leading-[30px] md:leading-[32px] space-y-4">
                {children}
            </div>
        </div>
    );
};

export default PropertyDescription;
