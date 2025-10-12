import PropertyExplorer from "@/components/main/properties/PropertyExplorer";
import PageHeroSection from "@/components/shared/PageHeroSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("property.hero");

    return {
        title: t("title"), // 👈 localized title
    };
}

export default async function PropertyPage() {
    const t = await getTranslations('property.hero');

    return (
        <section
            id="property"
            className="relative">
            <PageHeroSection
                title={t('title')}
                description={t('description')}
                buttonText={t('seeMore')}
            />
            <PropertyExplorer />
        </section>
    );
}