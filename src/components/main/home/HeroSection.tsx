import Image from "next/image";
import UsersCard from "./UsersCard";
import HeroFilter from "./HeroFilter";
import { useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations("homePage.hero");

    return (
        <section
            id="hero"
            className="relative overflow-hidden"
        >
            <div className="relative pt-[100px] px-4 sm:px-6 lg:px-12 container hero-height">
                <Image
                    src="/financial-center.png"
                    alt="financial center"
                    width={950}
                    height={740}
                    priority
                    className="absolute max-h-[calc(100%-200px)] sm:max-h-[calc(100%-300px)]  xl:max-h-[calc(100%-200px)] 2xl:max-h-[calc(100%-100px)] object-contain bottom-0"
                />


                {/* Content */}
                <div className="flex justify-center relative z-10 items-center max-2xl:text-center">
                    <h1
                        className="hero-title font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-[75px]
               leading-tight text-white mt-[40px] md:mt-[70px] lg:mt-[100px] ms-0 mx:ms-[30%]"
                    >
                        {t("heading")
                            .split("\n")
                            .map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i === 0 && <br />}
                                </span>
                            ))}
                    </h1>
                </div>

                <HeroFilter />
                <UsersCard />
            </div>
        </section>
    );
}
