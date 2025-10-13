import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import ImageGallery from "@/components/shared/ImageGallery";
import PropertyDescription from "./PropertyDescription";
import PropertyDetailsSection from "./PropertyDetailsSection";
import PropertyFeaturesSection from "./PropertyFeaturesSection";
import PropertyLocationSection from "./PropertyLocationSection";
import PropertyNearbySection from "./PropertyNearbySection";
import { LiaBuilding } from "react-icons/lia";
import { GiMilitaryAmbulance } from "react-icons/gi";
import { getLocale, getTranslations } from "next-intl/server";


type Property = {
    title: string;
    price: {
        amount: number,
        isMonthly: boolean
    };
    address: string;
    userImage: string;
    images: { imagePath: string; isPrimary?: boolean }[];
    description: string[];
    additionalDetails: string[];
    details: { label: string; value: string }[];
    features: string[];
    location: { lat: number; lng: number };
    nearby: {
        education: { name: string; distance?: string }[];
        health: { name: string; distance?: string }[];
    };
};

export default async function PropertyDetails({ property }: { property: Property }) {
    const t = await getTranslations('property.details');
    const locale = await getLocale();

    const periodLabel = property.price.isMonthly
        ? locale === 'ar' ? 'شهرياً' : 'mo'
        : locale === 'ar' ? 'سنويًا' : 'yr';

    return (
        <div className="my-20 px-2">
            <div className="container">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-semibold text-dark">
                        {property.title}
                    </h1>
                    <p className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-semibold">
                        <span>${property.price.amount}</span>
                        <span className="mx-1">/</span>
                        <span>{periodLabel}</span>
                    </p>
                </div>

                {/* Booking + Address */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6 text-center sm:text-left">
                    <p className="text-lg sm:text-xl text-dark">{property.address}</p>
                    <PrimaryButton className="bg-secondary hover:bg-secondary-hover text-white !rounded-[12px] shadow-[0px_4px_12px_0px_#0000001F] lg:!py-3 w-full sm:w-auto">
                        {t('bookingNow')}
                    </PrimaryButton>
                </div>

                {/* Gallery */}
                <ImageGallery
                    images={property.images}
                    userImage={property.userImage}
                    price={property.price}
                    title={property.title}
                />

                {/* Sections */}
                <div className="space-y-4">
                    <PropertyDescription title={t('description')}>
                        {property.description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </PropertyDescription>

                    <PropertyDetailsSection details={property.details} title={t('propertyDetails')} />
                    <PropertyFeaturesSection features={property.features} title={t('propertyFeatures')} />

                    <PropertyDescription title={t('additionalDetails')}>
                        {property.additionalDetails.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </PropertyDescription>

                    <PropertyLocationSection lat={property.location.lat} lng={property.location.lng} title={t('location')} />

                    <PropertyNearbySection
                        title={t('education')}
                        icon={<LiaBuilding />}
                        items={property.nearby.education}
                    />

                    <PropertyNearbySection
                        title={t('healthAndMedical')}
                        icon={<GiMilitaryAmbulance />}
                        items={property.nearby.health}
                    />
                </div>
            </div>
        </div>
    );
}
