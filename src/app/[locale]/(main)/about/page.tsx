import AboutSection from "@/components/main/about/AboutSection";
import MainAboutSection from "@/components/main/about/MainAboutSection";
import TeamSection from "@/components/main/about/TeamSection";
import PageHeader from "@/components/shared/PageHeader";
import { getTranslations } from "next-intl/server";


export async function generateMetadata() {
    const t = await getTranslations("About");

    return {
        title: t("header"), // 👈 localized title
    };
}

export default async function AboutPage() {
    const t = await getTranslations("About");

    return (
        <div>
            <MainAboutSection />
            <div className="bg-lighter 2xl:pb-[150px]">
                <PageHeader title={t("header")} className="bg-lighter" />

                <AboutSection
                    title={t("mission.title")}
                    description={t("mission.description")}
                    buttonText={t("mission.button")}
                    imageSrc="/about/mission.jpg"
                />

                <AboutSection
                    reversed
                    title={t("vision.title")}
                    description={t("vision.description")}
                    buttonText={t("vision.button")}
                    imageSrc="/about/vision.jpg"
                />

                <AboutSection
                    title={t("goals.title")}
                    description={t("goals.description")}
                    buttonText={t("goals.button")}
                    imageSrc="/about/goals.jpg"
                />
            </div>

            <TeamSection />
        </div>
    );
}