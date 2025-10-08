import { useTranslations } from "next-intl";
import Link from "next/link";


export default function Logo() {
    const t = useTranslations("Header");

    return (
        <div>
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 lg:ms-[50px]">
                <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-secondary">
                    {t("logo")}
                </h1>
            </Link>
        </div>
    );
}