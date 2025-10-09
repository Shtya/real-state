import SecondaryButton from "@/components/shared/SecondaryButton";
import Image from "next/image";

interface AboutSectionProps {
    reversed?: boolean;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
}

export default function AboutSection({
    reversed = false,
    title,
    description,
    buttonText,
    imageSrc,
}: AboutSectionProps) {
    return (
        <div className="bg-lighter mx-2">
            <div className={`container flex flex-col 2xl:flex-row items-center ${reversed ? "2xl:justify-start" : "2xl:justify-end"} gap-8 min-h-[400px] pb-[50px] 2xl:py-[130px]`}>

                {/* Image block */}
                <div
                    className={`${reversed ? "float-image-reversed" : "float-image"} relative max-2xl:mt-[50px] w-full max-w-[400px] sm:max-w-[500px] h-[350px] sm:h-[450px] 2xl:absolute 2xl:min-w-[567px] 2xl:h-[594px] overflow-hidden ${reversed ? "2xl:-rotate-[-20deg]" : "2xl:-rotate-[20deg]"}`}

                    style={{
                        clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",

                    }}
                >
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text block */}
                <div className={`relative flex flex-col gap-6 sm:gap-8 items-center ${reversed ? "2xl:items-start 2xl:text-start" : "2xl:items-end 2xl:text-end"} text-center  w-full 2xl:w-1/2 2xl:ml-32 2xl:translate-y-[60px]  mt-8 2xl:mt-0`}>
                    <h1 className="relative font-semibold text-2xl sm:text-3xl 2xl:text-[36px] text-dark pb-4 w-fit after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-0 after:h-[3px] after:w-[90%] after:bg-secondary">
                        {title}
                    </h1>
                    <p className="text-base sm:text-lg 2xl:text-xl text-dark">
                        {description}
                    </p>

                    <SecondaryButton className="relative bg-primary text-white w-[180px] sm:w-[200px] 2xl:w-[242px] h-[45px] sm:h-[50px] 2xl:h-[53px] overflow-hidden">
                        <span>{buttonText}</span>
                        <div className="bg-white w-[60px] sm:w-[70px] 2xl:w-[75px] h-[60px] sm:h-[70px] 2xl:h-[75px] absolute start-[-20px] bottom-[-40px] rounded-full"></div>
                    </SecondaryButton>
                </div>
            </div>
        </div>
    );
}
