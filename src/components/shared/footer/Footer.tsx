import Link from "next/link";
import Logo from "../Logo";
import SocialIcons from "./SocialIcons";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="relative">
            {/* Background Image + Filter */}
            <div className="absolute inset-0 bg-[url('/footer.jpg')] bg-cover bg-[center_30%] z-[1] filter grayscale brightness-50 contrast-100 opacity-60"></div>

            <div className="container relative z-[3] py-18 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-start mx-2">
                    {/* Logo + Description */}
                    <div className="space-y-3 flex flex-col items-center sm:items-start">
                        <div className="sm:ms-4">
                            <Logo />
                        </div>
                        <p className="text-sm sm:text-base text-dark max-w-[370px] leading-relaxed">
                            {t("description")}
                        </p>
                        <SocialIcons />
                    </div>

                    {/* About Us */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="mb-6 text-secondary font-bold text-xl sm:text-2xl">
                            {t("about.title")}
                        </h2>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/#home" className="text-base text-dark">{t("about.menu")}</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">{t("about.features")}</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">{t("about.blogs")}</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">{t("about.support")}</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="mb-6 text-secondary font-bold text-xl sm:text-2xl">
                            {t("company.title")}
                        </h2>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/#home" className="text-base text-dark">{t("company.how")}</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">{t("company.terms")}</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">{t("company.pricing")}</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">{t("company.faq")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="mb-6 text-secondary font-bold text-xl sm:text-2xl">
                            {t("contact.title")}
                        </h2>
                        <ul className="flex flex-col gap-4">
                            <li><p className="text-base md:text-lg">{t("contact.address")}</p></li>
                            <li><a
                                href="tel:+972029182132"
                                className="text-base md:text-lg font-light hover:underline"
                                dir="ltr"
                            >
                                +97&nbsp;202-918-2132
                            </a></li>
                            <li><a
                                href="mailto:realState@gmail.com"
                                className="hover:underline"
                            >
                                realState@gmail.com
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
