''

import PageHeroSection from "@/components/shared/PageHeroSection";
import { getTranslations } from "next-intl/server";

export default async function MainAboutSection() {
    const t = await getTranslations('About.Hero');

    return (
        <section
            id="about-us"
            className="relative overflow-hidden">
            <PageHeroSection
                title={t('title')}
                description={t('description')}
                buttonText={t('seeMore')}
                imageSrc="/about/main.jpg"
            />

        </section>
    );
}