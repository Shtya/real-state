'use client'
import PrimaryButton from "@/components/shared/PrimaryButton";
import PropertyCategoryCard from "@/components/shared/PropertyCategoryCard";
import { useLocale, useTranslations } from "use-intl";

const properties = [
    {
        id: "property-1",
        title: {
            ar: "منزل سيكاروانجي",
            en: "Sekarwangi Village",
        },
        address: {
            ar: "2972 طريق ويستهايمر. سانتا آنا، إلينوي 85486",
            en: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
        },
        price: 943.65,
        imageUrl: "/properties/property-5.jpg",
    },
    {
        id: "property-2",
        title: {
            ar: "منزل سيكاروانجي",
            en: "Sekarwangi Village",
        },
        address: {
            ar: "2972 طريق ويستهايمر. سانتا آنا، إلينوي 85486",
            en: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
        },
        price: 943.65,
        imageUrl: "/properties/property-6.jpg",
    },

];


export default function PropertyCategorySection() {
    const t = useTranslations('HomePage.PropertyCategory');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <section className=" mt-10 p-[30px] sm:p-[40px] md:p-[50px] lg:p-[60px] bg-white">
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-dark">{t('title')}</h1>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <p className="text-sm sm:text-base text-dark leading-[26px]">
                        {t('description')}
                    </p>
                    <div className="border border-primary p-2 rounded-full flex gap-2">
                        <PrimaryButton className="text-black">
                            منزل
                        </PrimaryButton>

                        <PrimaryButton className="text-black">
                            العقارات
                        </PrimaryButton>

                        <PrimaryButton className="bg-primary text-white">
                            شقة
                        </PrimaryButton>
                    </div>

                </div>
            </div>
            <div className="bg-white flex gap-4 mt-[45px] ">

                {properties.map((property) => (

                    <PropertyCategoryCard
                        key={property.id}
                        property={{
                            id: property.id,
                            title: property.title[locale as 'ar' | 'en'],
                            address: property.address[locale as 'ar' | 'en'],
                            price: property.price,
                            imageUrl: property.imageUrl,
                        }}
                        locale={locale as 'ar' | 'en'}
                    />

                ))}
            </div>
        </section>
    );
}