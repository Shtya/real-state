'use client'

import PropertyCardGrid, { PropertyGrid } from "@/components/shared/properties/PropertyCardGrid";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const properties = [
    {
        id: "property-1",
        rate: 3,
        title: {
            ar: "شقة كبيرة مكونة من 4 غرف مع تراس جميل",
            en: "Spacious 4-Bedroom Apartment with Beautiful Terrace",
        },
        address: {
            ar: "2972 طريق ويستهايمر. سانتا آنا، إلينوي 85486",
            en: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
        },
        price: 943.65,
        imageUrl: "/properties/location/property-1.jpg",
        location: "Santa Ana, Illinois",
        bathrooms: 2,
        guests: 6,
        bedrooms: 4,
        isMonthly: true,
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
        guests: 10,
        bedrooms: 5,
        isMonthly: true,
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
        guests: 5,
        bedrooms: 3,
        isMonthly: true,
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
        guests: 4,
        bedrooms: 2,
        isMonthly: true,
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
        guests: 3,
        bedrooms: 2,
        isMonthly: true,
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
        guests: 8,
        bedrooms: 4,
        isMonthly: true,
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
        guests: 3,
        bedrooms: 2,
        isMonthly: true,
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
        guests: 8,
        bedrooms: 4,
        isMonthly: true,
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
        guests: 8,
        bedrooms: 4,
        isMonthly: false,
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
        guests: 8,
        bedrooms: 4,
        isMonthly: false,
    },
];

;

type RentType = 'yearly' | 'monthly';

export default function BasedOnLocationSection() {
    const locale = useLocale();
    const t = useTranslations('HomePage.BasedOnLocationSection');
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [activeRentalType, setActiveRentalType] = useState<RentType>(
        (searchParams.get("rentalType") as RentType) || "monthly"
    );

    const handleFilterClick = (value: RentType) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("rentalType", value);
        setActiveRentalType(value);
        const newUrl = `${pathname}?${params.toString()}`;
        window.history.replaceState(null, '', newUrl);
    };


    // Filter properties based on rental type
    const filteredProperties = properties.filter((p) => {
        return activeRentalType === "monthly" ? p.isMonthly : !p.isMonthly
    });

    return (
        <section className="mt-[40px] mx-2">
            <div className="container ">
                {/* Header */}
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-dark font-bold">
                        {t('title')}
                    </h1>
                    <p className="text-sm sm:text-base text-dark leading-[26px] max-w-[700px]">
                        {t('description')}
                    </p>
                </div>

                {/* Rental type toggle */}
                <div className="flex gap-4 items-center mt-4">
                    <div className="bg-light p-1 flex rounded-[2px]">
                        <button
                            onClick={() => handleFilterClick("yearly")}
                            className={`flex-center py-1 px-6 rounded-[2px] ${activeRentalType === "yearly" ? "bg-primary text-accent" : ""
                                }`}
                        >
                            {t('yearly')}
                        </button>
                        <button
                            onClick={() => handleFilterClick("monthly")}
                            className={`flex-center py-1 px-6 rounded-[2px] ${activeRentalType === "monthly" ? "bg-primary text-accent" : ""
                                }`}
                        >
                            {t('monthly')}
                        </button>
                    </div>
                    {t('rent')}
                </div>

                {/* Properties grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 my-6 justify-center">
                    {filteredProperties.map((property) => (
                        <PropertyCardGrid
                            key={property.id}
                            property={{
                                ...property,
                                title: property.title[locale as 'ar' | 'en'],
                                address: property.address[locale as 'ar' | 'en'],
                            }}
                            locale={locale as 'ar' | 'en'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}