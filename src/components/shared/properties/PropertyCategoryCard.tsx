import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type Property = {
    id: string;
    title: string;
    address: string;
    price: number;
    imageUrl: string;
};
export default function PropertyCategoryCard({
    property,
    locale,
    className,
}: {
    property: Property;
    locale: 'ar' | 'en';
    className?: string
}) {
    const period = locale === 'ar' ? '/ سنوى' : '/ Yearly';

    return (
        <div className="relative w-full max-w-full h-[484px] rounded-[24px]  bg-white overflow-hidden flex flex-col gap-6">
            {/* Accent corner blocks */}
            <div className="z-[1] absolute top-0 rtl:start-0 ltr:end-0 bg-white rounded-tr-[24px] w-[94px] h-[47px]" />
            <div className="z-[1] absolute top-0 rtl:start-0 ltr:end-0 bg-white rounded-tr-[24px] w-[47px] h-[94px]" />
            {/* Concave SVG decorations */}
            <div className="absolute top-[74px] rtl:-start-[20px] ltr:-end-[20px] z-10">
                <svg width="40" height="40" viewBox="0 0 40 40" className="block">
                    <defs>
                        <mask id="notch-bl">
                            <rect x="0" y="0" width="40" height="40" fill="white" />
                            <circle cx="0" cy="40" r="20" fill="black" />
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="40" height="40" fill="white" mask="url(#notch-bl)" />
                </svg>
            </div>

            <div className="absolute rtl:start-[74px] ltr:end-[74px] -top-[20px] z-10">
                <svg width="40" height="40" viewBox="0 0 40 40" className="block">
                    <defs>
                        <mask id="notch-bl">
                            <rect x="0" y="0" width="40" height="40" fill="white" />
                            <circle cx="0" cy="40" r="20" fill="black" />
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="40" height="40" fill="white" mask="url(#notch-bl)" />
                </svg>
            </div>
            {/* Floating action button */}
            <div className="absolute top-[2px] rtl:start-[2px] ltr:end-[2px] bg-white p-4 rounded-full z-[2]">
                <Link
                    href={`/properties/${property.id}`}
                    className="bg-secondary flex-center text-white w-[60px] h-[60px] rounded-full">
                    <GoArrowUpRight size={28} />
                </Link>
            </div>


            {/* Property details */}
            <div className="relative w-full h-full">
                <Image src={property.imageUrl} fill alt={property.title} className="rounded-[24px] object-cover filter brightness-[0.9]" />
            </div>
            <div className="space-y-4 z-[1] ms-2 me-6 mb-4">
                <Link href={`/properties/${property.id}`} className="block font-medium text-lg text-black ">{property.title}</Link>
                <p className="text-black text-xs">{property.address}</p>
                <div className="text-black">
                    <span className="font-medium text-2xl">${property.price}</span> <span>{period}</span>
                </div>
            </div>
        </div>
    );
}