import PropertySectionHeader from './PropertySectionHeader';

const PropertyDetailsSection: React.FC<{ details: { label: string; value: string }[], title: string }> = ({ details, title }) => (
  <div className="px-4">
    <PropertySectionHeader title={title} />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
      {details.map(({ label, value }, idx) => (
        <div key={idx} className="flex flex-row items-center gap-1">
          <span className="text-[18px] md:text-[20px] font-semibold text-dark">{label}:</span>
          <span className="text-[16px] md:text-[18px] font-normal text-primary">{value}</span>
        </div>
      ))}
    </div>
  </div>
);
export default PropertyDetailsSection;
