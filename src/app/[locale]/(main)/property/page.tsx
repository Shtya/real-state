import PageHeroSection from "@/components/shared/PageHeroSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("Property.Hero");

    return {
        title: t("title"), // 👈 localized title
    };
}

export default async function PropertyPage() {
    const t = await getTranslations('Property.Hero');

    return (
        <section
            id="property"
            className="relative overflow-hidden">
            <PageHeroSection
                title={t('title')}
                description={t('description')}
                buttonText={t('seeMore')}
            />

        </section>
    );
}