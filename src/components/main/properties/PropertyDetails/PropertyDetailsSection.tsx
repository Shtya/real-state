import PropertySectionHeader from './PropertySectionHeader';

const details = [
  { key: 'Price', value: '$484,400' },
  { key: 'Parking', value: '1' },
  { key: 'Property Size', value: '1466 Sq Ft' },
  { key: 'Kitchen', value: '2' },
  { key: 'Bedrooms', value: '4' },
  { key: 'Year Built', value: '2019-01-09' },
  { key: 'Bathrooms', value: '2' },
  { key: 'Property Type', value: 'Full Family Home' },
  { key: 'Property Status', value: 'For rent' },
];

const PropertyDetailsSection: React.FC = () => {
  return (
    <div className="px-4">
      <PropertySectionHeader title="Property Details" align="end" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-end">
        {details.map(({ key, value }, idx) => (
          <div key={idx} className="flex flex-row justify-end items-center gap-1">
            <span className="text-[16px] md:text-[18px] font-normal text-primary">{value}</span>
            <span className="text-[18px] md:text-[20px] font-semibold text-dark">:{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailsSection;
