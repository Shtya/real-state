import Image from "next/image";
import Link from "next/link";
import { FaBed } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { useTranslations } from "next-intl";
import RatingStars from "../RatingStars";

export type PropertyGrid = {
    id: string;
    title: string;
    address: string;
    price: number;
    imageUrl: string;
    location: string;
    bathrooms: number;
    rate: number;
    guests: number;
    bedrooms: number;
    isMonthly: boolean; // 👈 true = monthly, false = yearly
};

export default function PropertyCardGrid({
    property,
}: {
    property: PropertyGrid;
    locale: "ar" | "en";
}) {
    const t = useTranslations("HomePage.BasedOnLocationSection"); // 👈 namespace for translations

    const period = property.isMonthly ? t("monthly") : t("yearly");

    return (
        <div className="relative max-w-[411px] border border-[#ECF1F8] rounded-[5px] w-fit mx-auto flex flex-col">
            <div className="absolute top-[22px] end-[7px] z-[1] flex flex-row-reverse">
                <RatingStars rating={property.rate} reverse />
            </div>
            <Image
                src={property.imageUrl}
                alt={property.title}
                width={411}
                height={269}
                className="max-w-[411px] h-[269px] w-full rounded-[5px]"
            />
            <div className="flex-1 flex flex-col gap-5 z-[1] ms-2 me-4 mt-7 mb-4 p-2">
                <div className="text-black">
                    <span className="font-bold text-2xl">${property.price}</span>{" "}
                    <span className="text-dark opacity-50">/ {period}</span>
                </div>

                <Link
                    href={`/properties/${property.id}`}
                    className="block font-medium text-lg text-black "
                >
                    {property.title}
                </Link>

                {/* Location from prop */}
                <p className="text-sm font-medium text-dark opacity-50">
                    {property.location}
                </p>

                <div className="flex-1 grid grid-cols-3 gap-4 pt-4 items-end">
                    {/* Bathrooms */}
                    <div className="flex items-center justify-between gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_283_1115)">
                                <path d="M4 12H20C20.35 12 20.68 12.14 20.93 12.39C21.18 12.64 21.33 12.98 21.33 13.33V16C21.33 17.1 20.9 18.15 20.12 18.93C19.34 19.71 18.29 20.13 17.19 20.13H6.81C5.71 20.13 4.66 19.71 3.88 18.93C3.1 18.15 2.67 17.1 2.67 16V13.33C2.67 12.98 2.82 12.64 3.07 12.39C3.32 12.14 3.65 12 4 12Z" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.67 12V5.33C6.67 4.6 6.96 3.9 7.49 3.37C8.02 2.84 8.72 2.55 9.45 2.55H12V5" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 21.33L5.33 20" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.33L18.67 20" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_283_1115">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span className="text-input text-sm truncate"
                            title={`${property.bathrooms} ${t("bathrooms")}`}>
                            {property.bathrooms} {t("bathrooms")}
                        </span>
                    </div>

                    {/* Guests */}
                    <div className="flex items-center justify-between gap-2">
                        <FiUsers className="text-secondary shrink-0" size={20} />
                        <span className="text-input text-sm truncate"
                            title={`${property.guests} ${t("guests")}`}>
                            {property.guests} {t("guests")}
                        </span>
                    </div>

                    {/* Bedrooms */}
                    <div className="flex items-center justify-between gap-2">
                        <FaBed className="text-secondary shrink-0" size={20} />
                        <span className="text-input text-sm truncate"
                            title={`${property.bedrooms} ${t("bedrooms")}`}>
                            {property.bedrooms} {t("bedrooms")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
