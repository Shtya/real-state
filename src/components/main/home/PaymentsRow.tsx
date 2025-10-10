import Image from "next/image";

export default function PaymentsRow() {
    return (
        <div className="bg-secondary">
            <div className="p-5 container overflow-x-auto">
                <div className="flex items-center gap-8 min-w-max justify-center">
                    <Image
                        src="/payments/paypal.svg"
                        width={200}
                        height={20}
                        alt="paypal"
                        className="shrink-0"
                    />
                    <Balls />
                    <Image
                        src="/payments/GreenHouse.svg"
                        width={200}
                        height={20}
                        alt="GreenHouse"
                        className="shrink-0"
                    />
                    <Balls />
                    <Image
                        src="/payments/houseHold.svg"
                        width={200}
                        height={20}
                        alt="houseHold"
                        className="shrink-0"
                    />
                    <Balls />
                    <Image
                        src="/payments/Century.svg"
                        width={200}
                        height={20}
                        alt="Century"
                        className="shrink-0"
                    />
                </div>
            </div>
        </div>
    );
}

function Balls() {
    return (
        <div className="flex-center shrink-0">
            <div className="me-[-40px] bg-[#E1E1E1] rounded-full w-[67px] h-[67px] z-[2]"></div>
            <div className="bg-white rounded-full w-[67px] h-[67px]"></div>
        </div>
    );
}
