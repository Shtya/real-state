import SocialIcons from "@/components/shared/footer/SocialIcons";
import PageHeader from "@/components/shared/PageHeader";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import ContactForm from "./ContactForm";
import { getTranslations } from "next-intl/server";

export default async function ContactSection() {
    const t = await getTranslations("Contact.information");

    return (
        <div className="bg-lighter pb-32 px-2">
            <div className="container">
                <PageHeader title={t("title")} className="bg-lighter" />

                <div className="mt-20 bg-white rounded-[10px] p-2 grid grid-cols-1 lg:grid-cols-12">
                    {/* Info side */}
                    <div className="relative bg-accent lg:col-span-4 xl:col-span-4 p-8 lg:p-10 rounded-[10px] overflow-hidden">
                        <div className="space-y-2">
                            <h1 className="text-2xl text-dark font-semibold">{t("header")}</h1>
                            <p className="text-lg text-dark">{t("subtitle")}</p>
                        </div>

                        <div className="mt-[60px] flex flex-col gap-8">
                            <div className="flex gap-4 items-center">
                                <MdPhoneInTalk size={24} className="text-primary" />
                                <a
                                    href="tel:+972029182132"
                                    className="text-base md:text-lg font-light hover:underline"
                                    dir="ltr"
                                >
                                    +97&nbsp;202-918-2132
                                </a>
                            </div>
                            <div className="flex gap-4 items-center">
                                <IoMdMail size={24} className="text-primary" />
                                <a href="mailto:realState@gmail.com" className="hover:underline">
                                    realState@gmail.com
                                </a>
                            </div>
                            <div className="flex gap-4 items-center">
                                <IoLocationSharp size={24} className="text-primary" />
                                <p className="text-base">{t("location")}</p>
                            </div>
                        </div>

                        <div className="mt-[100px]">
                            <SocialIcons primary={false} size={20} />
                        </div>

                        {/* Decorative circles */}
                        <div className="w-[200px] h-[200px] rounded-full bg-secondary absolute end-[-80px] bottom-0 opacity-55 " />
                        <div className="w-[120px] h-[120px] rounded-full bg-primary absolute end-10 bottom-10 opacity-40" />
                    </div>

                    {/* Form side */}
                    <div className="lg:col-span-8 xl:col-span-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
