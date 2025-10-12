import ContactSection from "@/components/main/contact/ContactSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("contact.hero");

    return {
        title: t("title"), // 👈 localized title
    };
}

export default async function ContactUsPage() {
    const t = await getTranslations('contact.hero');

    return (
        <section
            id="contact-us"
            className="relative overflow-hidden">
            <PageHeroSection
                title={t('title')}
                description={t('description')}
                buttonText={t('seeMore')}
            />
            <ContactSection />
        </section>
    );
}