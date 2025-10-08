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

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="relative w-full max-w-[384px] h-[484px] rounded-[24px] flex items-end bg-accent overflow-hidden">
            {/* Accent corner blocks */}
            <div className="z-[1] absolute top-0 start-0 bg-accent rounded-tr-[24px]  w-[94px] h-[47px]">
            </div>
            <div className="z-[1] absolute top-0 start-0 bg-accent rounded-tr-[24px]  w-[47px] h-[94px]">
            </div>
            {/* Concave SVG decorations */}
            <div className="absolute top-[74px] -start-[20px] z-10">
                <svg width="40" height="40" viewBox="0 0 40 40" className="block">
                    <defs>
                        <mask id="notch-bl">
                            <rect x="0" y="0" width="40" height="40" fill="white" />
                            <circle cx="0" cy="40" r="20" fill="black" />
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="40" height="40" fill="var(--accent)" mask="url(#notch-bl)" />
                </svg>
            </div>

            <div className="absolute start-[74px] -top-[20px] z-10">
                <svg width="40" height="40" viewBox="0 0 40 40" className="block">
                    <defs>
                        <mask id="notch-bl">
                            <rect x="0" y="0" width="40" height="40" fill="white" />
                            <circle cx="0" cy="40" r="20" fill="black" />
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="40" height="40" fill="var(--accent)" mask="url(#notch-bl)" />
                </svg>
            </div>
            {/* Floating action button */}
            <div className="absolute top-[2px] start-[2px] bg-accent p-4 rounded-full  z-[2]">
                <Link
                    href={`/properties/${property.id}`}
                    className="bg-primary flex-center  text-accent w-[60px] h-[60px] rounded-full">
                    <GoArrowUpRight size={28} />
                </Link>
            </div>


            {/* Property details */}
            <Image src={property.imageUrl} fill alt={property.title} className="rounded-[24px] object-cover filter brightness-[0.9]" />
            <div className="space-y-4 z-[1] ms-2 me-6 mb-4">
                <Link href={`/properties/${property.id}`} className="font-bold text-2xl text-white">{property.title}</Link>
                <p className="text-[#D4E1FF] text-sm">{property.address}</p>
                <div className="text-white ms-10">
                    <span className="font-bold text-2xl">${property.price}</span>
                    <span>/ شهرى</span>
                </div>
            </div>
        </div>
    );
}