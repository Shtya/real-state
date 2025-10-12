import { getLocale, getTranslations } from "next-intl/server";
import FilterProperties from "./FilterProperties";
import PropertiesList from "./PropertiesList";
import { Locale } from "@/types/global";


export default async function PropertyExplorer() {
    const locale = await getLocale();
    const t = await getTranslations('property.filter')

    return (
        <div className="mt-28 mx-2">
            <div className="container ">
                <h1 className="text-3xl md:text-4xl lg:text-[55px] text-dark font-bold mb-8 text-center">{t('header')}</h1>
                <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-10">
                    <div className="flex-1 block">
                        <FilterProperties />
                    </div>
                    <div className="flex-2">
                        <PropertiesList locale={locale as Locale} />
                    </div>
                </div>
            </div>
        </div>
    );
}