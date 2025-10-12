import PropertyCardGrid from "@/components/shared/properties/PropertyCardGrid";
import { Locale } from "@/types/global";


const properties = [
    {
        id: "property-1",
        rate: 3,
        title: {
            ar: "شقة كبيرة مكونة من 4 غرف مع تراس جميل",
            en: "Spacious 4-Bedroom Apartment ",
        },
        address: {
            ar: "2972 طريق ويستهايمر. سانتا آنا، إلينوي 85486",
            en: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
        },
        price: 943.65,
        imageUrl: "/properties/location/property-1.jpg",
        location: "Santa Ana, Illinois",
        bathrooms: 2,
        bedrooms: 4,
        garages: 4,
        totalArea: 1200
    },
    {
        id: "property-2",
        rate: 3,
        title: {
            ar: "فيلا فاخرة مع مسبح خاص",
            en: "Luxury Villa with Private Pool",
        },
        address: {
            ar: "1234 شارع النيل، القاهرة، مصر",
            en: "1234 Nile St, Cairo, Egypt",
        },
        price: 2500,
        imageUrl: "/properties/location/property-2.jpg",
        location: "Cairo, Egypt",
        bathrooms: 3,
        bedrooms: 5,
        garages: 4,
        totalArea: 1200
    },
    {
        id: "property-3",
        rate: 3,
        title: {
            ar: "منزل عائلي مريح بالقرب من وسط المدينة",
            en: "Cozy Family House near Downtown",
        },
        address: {
            ar: "56 شارع التحرير، الجيزة، مصر",
            en: "56 Tahrir St, Giza, Egypt",
        },
        price: 1200,
        imageUrl: "/properties/location/property-3.jpg",
        location: "Giza, Egypt",
        bathrooms: 2,
        bedrooms: 3,
        garages: 4,
        totalArea: 1200
    },
    {
        id: "property-4",
        rate: 3,
        title: {
            ar: "شقة حديثة في برج فاخر",
            en: "Modern Apartment in Luxury Tower",
        },
        address: {
            ar: "89 شارع الشيخ زايد، دبي، الإمارات",
            en: "89 Sheikh Zayed Rd, Dubai, UAE",
        },
        price: 3200,
        imageUrl: "/properties/location/property-4.jpg",
        location: "Dubai, UAE",
        bathrooms: 2,
        bedrooms: 2,
        garages: 4,
        totalArea: 1200
    },
    {
        id: "property-5",
        rate: 3,
        title: {
            ar: "كوخ ريفي هادئ مع حديقة واسعة",
            en: "Quiet Countryside Cottage with Large Garden",
        },
        address: {
            ar: "12 طريق الريف، توسكانا، إيطاليا",
            en: "12 Countryside Rd, Tuscany, Italy",
        },
        price: 1800,
        imageUrl: "/properties/location/property-5.jpg",
        location: "Tuscany, Italy",
        bathrooms: 1,
        bedrooms: 2,
        garages: 4,
        totalArea: 1200
    },
    {
        id: "property-6",
        rate: 3,
        title: {
            ar: "بنتهاوس فاخر مع إطلالة بانورامية",
            en: "Luxury Penthouse with Panoramic View",
        },
        address: {
            ar: "77 شارع الملك فهد، الرياض، السعودية",
            en: "77 King Fahd Rd, Riyadh, Saudi Arabia",
        },
        price: 5000,
        imageUrl: "/properties/location/property-6.jpg",
        location: "Riyadh, Saudi Arabia",
        bathrooms: 4,
        bedrooms: 4,
        garages: 4,
        totalArea: 1200
    },
    {
        id: "property-7",
        rate: 3,
        title: {
            ar: "كوخ ريفي هادئ مع حديقة واسعة",
            en: "Quiet Countryside Cottage with Large Garden",
        },
        address: {
            ar: "12 طريق الريف، توسكانا، إيطاليا",
            en: "12 Countryside Rd, Tuscany, Italy",
        },
        price: 1800,
        imageUrl: "/properties/location/property-2.jpg",
        location: "Tuscany, Italy",
        bathrooms: 1,
        bedrooms: 2,
        garages: 4,
        totalArea: 1200
    },
    {
        id: "property-8",
        rate: 3,
        title: {
            ar: "بنتهاوس فاخر مع إطلالة بانورامية",
            en: "Luxury Penthouse with Panoramic View",
        },
        address: {
            ar: "77 شارع الملك فهد، الرياض، السعودية",
            en: "77 King Fahd Rd, Riyadh, Saudi Arabia",
        },
        price: 5000,
        imageUrl: "/properties/location/property-5.jpg",
        location: "Riyadh, Saudi Arabia",
        bathrooms: 4,
        bedrooms: 4,
        garages: 4,
        totalArea: 1200
    },
    {
        id: "property-9",
        rate: 3,
        title: {
            ar: "بنتهاوس فاخر مع إطلالة بانورامية",
            en: "Luxury Penthouse with Panoramic View",
        },
        address: {
            ar: "77 شارع الملك فهد، الرياض، السعودية",
            en: "77 King Fahd Rd, Riyadh, Saudi Arabia",
        },
        price: 5000,
        imageUrl: "/properties/location/property-1.jpg",
        location: "Riyadh, Saudi Arabia",
        bathrooms: 4,
        bedrooms: 4,
        garages: 4,
        totalArea: 1200
    },
    {
        id: "property-10",
        rate: 3,
        title: {
            ar: "بنتهاوس فاخر مع إطلالة بانورامية",
            en: "Luxury Penthouse with Panoramic View",
        },
        address: {
            ar: "77 شارع الملك فهد، الرياض، السعودية",
            en: "77 King Fahd Rd, Riyadh, Saudi Arabia",
        },
        price: 5000,
        imageUrl: "/properties/location/property-2.jpg",
        location: "Riyadh, Saudi Arabia",
        bathrooms: 4,
        bedrooms: 4,
        garages: 4,
        totalArea: 1200
    },
];


type PropertiesListProps = {
    locale: Locale;
};

export default function PropertiesList({ locale }: PropertiesListProps) {
    return (
        <div className="grid grid-cols-12 gap-4 xl:gap-5">
            {properties.map((property) => (
                <div key={property.id} className="h-full col-span-12 sm:col-span-6 xl:col-span-4">
                    <PropertyCardGrid
                        property={{
                            ...property,
                            title: property.title[locale],
                            address: property.address[locale],
                        }}
                        locale={locale}
                    />
                </div>
            ))}
        </div>
    );
}
