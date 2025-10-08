import PrimaryButton from "@/components/shared/PrimaryButton";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactUsSection() {
    const t = useTranslations("HomePage.ContactUs");

    return (
        <section
            className="my-8 "
            style={{
                background: "linear-gradient(90deg, var(--light) 0%, var(--accent) 100%)",
            }}
        >
            <div className="container flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 ">
                {/* Text Section */}
                <div className="space-y-6 md:space-y-10 flex-1 mx-2 py-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-dark font-bold">
                        {t("title")}
                    </h1>
                    <p className="text-sm sm:text-base text-dark leading-[26px] max-w-[700px]">
                        {t("description")}
                    </p>

                    {/* Input + Button */}
                    <div className="bg-white rounded-full flex w-full md:w-[500px] overflow-hidden">
                        <input
                            type="email"
                            className="bg-white w-full rounded-full px-4 py-2 sm:py-3 placeholder:text-input placeholder:opacity-50 text-sm sm:text-base"
                            placeholder={t("placeholder")}
                        />
                        <PrimaryButton className="bg-secondary text-white text-nowrap px-4 sm:px-6">
                            {t("button")}
                        </PrimaryButton>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative flex-1 w-full h-[620px]">
                    <Image
                        src="/contact-image.png"
                        alt="contact"
                        fill
                        className="object-contain md:object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
