import Image from "next/image";
import { FaStar } from "react-icons/fa";
import SecondaryButton from "../shared/buttons/SecondaryButton";

export interface RenewRequestData {
    image: string;
    type: string;
    title: string;
    rating: number;
    reviews: number;
    price: number;
    discount: number;
    total: number;
}

interface RenewRequestCardProps {
    data: RenewRequestData;
    onCancel?: () => void;
    onRenew?: () => void;
}

export default function RenewRequestCard({ data, onCancel, onRenew }: RenewRequestCardProps) {

    return (
        <div className="max-sm:mx-auto max-sm:w-full bg-card-bg rounded-[12px] custom-shadow overflow-hidden max-w-[440px]">
            {/* Property Info */}
            <div className="flex gap-4 p-4 border-b border-gray-200">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={100}
                    height={100}
                    className="rounded-md w-[100px] h-[100px] object-cover flex-shrink-0"
                />
                <div className="flex flex-col justify-between">
                    <div>
                        <p className="text-xs text-gray-500">{data.type}</p>
                        <h2 className="text-base font-semibold text-dark">{data.title}</h2>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                        <FaStar className="text-yellow-500" size={14} />
                        <span className="font-medium">{data.rating.toFixed(2)}</span>
                        <span className="text-gray-400">({data.reviews} reviews)</span>
                    </div>
                </div>
            </div>

            {/* Price Details */}
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-dark mb-2">Price details</h3>
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                    <span className="underline">For one Month</span>
                    <span>${data.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                    <span className="underline">Long stay discount</span>
                    <span>-${data.discount.toLocaleString()}</span>
                </div>
            </div>

            {/* Total */}
            <div className="p-4 flex justify-between items-center">
                <span className="font-semibold text-dark">Total (USD)</span>
                <span className="font-bold text-lg text-dark">${data.total.toLocaleString()}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-center mt-6 p-4">
                <SecondaryButton
                    className="border border-gray-500 text-gray-700 w-full sm:w-auto sm:flex-1 max-w-[320px]"
                    onClick={onCancel}
                >
                    Cancel
                </SecondaryButton>

                <SecondaryButton
                    className="bg-secondary hover:bg-secondary-hover text-white w-full sm:w-auto sm:flex-1 max-w-[320px]"
                    onClick={onRenew}
                >
                    Renew
                </SecondaryButton>
            </div>
        </div>
    );
}
