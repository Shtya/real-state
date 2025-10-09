import RecentBlogs from "@/components/main/blogs/RecentBlogs";
import PageHeroSection from "@/components/shared/PageHeroSection";
import { getTranslations } from "next-intl/server";


export default async function BlogsPage() {
    const t = await getTranslations('Blogs.Hero');


    return (
        <section
            id="blogs-us"
            className="relative overflow-hidden">
            <PageHeroSection
                title={t('title')}
                description={t('description')}
                buttonText={t('seeMore')}
            />
            <RecentBlogs />
        </section>
    );
}