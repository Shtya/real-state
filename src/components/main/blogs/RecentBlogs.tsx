'use client'

import PageHeader from "@/components/shared/PageHeader";
import Blog from "./Blog";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";

const listBlog = {
    id: "1",
    title: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        ar: "لوريم إيبسوم هو ببساطة نص شكلي للطباعة والتنضيد",
    },
    description: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        ar: "لوريم إيبسوم هو ببساطة نص شكلي (أي شكل غير واضح) يُستخدم في صناعة الطباعة والتنضيد. ظل لوريم إيبسوم النص الشكلي القياسي لهذه الصناعة منذ القرن السادس عشر.",
    },
    imageUrl: "/blogs/blog-list.jpg",
    createdAt: "13 March 2023",
}
const blogs = [{
    id: "1",
    title: {
        en: "Lorem Ipsum is simply dummy text",
        ar: "لوريم إيبسوم هو ببساطة نص شكلي",
    },
    description: {
        en: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        ar: "لوريم إيبسوم هو النص الشكلي القياسي لهذه الصناعة منذ القرن السادس عشر.",
    },
    imageUrl: "/blogs/blog-1.jpg",
    createdAt: "13 March 2023",
},
{
    id: "2",
    title: {
        en: "Lorem Ipsum is simply dummy text",
        ar: "لوريم إيبسوم هو ببساطة نص شكلي",
    },
    description: {
        en: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        ar: "لوريم إيبسوم هو النص الشكلي القياسي لهذه الصناعة منذ القرن السادس عشر.",
    },
    imageUrl: "/blogs/blog-2.jpg",
    createdAt: "13 March 2023",
},
{
    id: "3",
    title: {
        en: "Lorem Ipsum is simply dummy text",
        ar: "لوريم إيبسوم هو ببساطة نص شكلي",
    },
    description: {
        en: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        ar: "لوريم إيبسوم هو النص الشكلي القياسي لهذه الصناعة منذ القرن السادس عشر.",
    },
    imageUrl: "/blogs/blog-3.jpg",
    createdAt: "13 March 2023",
},
{
    id: "4",
    title: {
        en: "Lorem Ipsum is simply dummy text",
        ar: "لوريم إيبسوم هو ببساطة نص شكلي",
    },
    description: {
        en: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        ar: "لوريم إيبسوم هو النص الشكلي القياسي لهذه الصناعة منذ القرن السادس عشر.",
    },
    imageUrl: "/blogs/blog-4.jpg",
    createdAt: "13 March 2023",
}];

export default function RecentBlogs() {
    const locale = useLocale();
    const t = useTranslations("Blogs.Recent");

    return (
        <div className="bg-highlight pb-20 sm:pb-26 lg:pb-32 px-2">
            <div className="container">
                <PageHeader title="Blogs" className="bg-highlight" />
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-dark font-bold  mt-6 sm:mt-8 md:mt-10 mb-10 sm:mb-14 md:mb-16">{t('title')}</p>
                <Blog
                    blog={{
                        ...listBlog,
                        title: listBlog.title[locale as "ar" | "en"],          // 👈 resolved here
                        description: listBlog.description[locale as "ar" | "en"], // 👈 resolved here
                    }}
                    list
                />
                {/* Properties grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 mt-12 justify-center">
                    {blogs.map((blog) =>
                        <Blog
                            key={blog.id}
                            blog={{
                                ...blog,
                                title: blog.title[locale as "ar" | "en"],          // 👈 resolved here
                                description: blog.description[locale as "ar" | "en"], // 👈 resolved here
                            }}
                        />)}

                </div>
            </div>
        </div>
    );
}