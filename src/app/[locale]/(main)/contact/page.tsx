import ContactSection from "@/components/main/contact/ContactSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
import { getTranslations } from "next-intl/server";


export default async function ContactUsPage() {
    const t = await getTranslations('Contact.Hero');

    return (
        <section
            id="about-us"
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