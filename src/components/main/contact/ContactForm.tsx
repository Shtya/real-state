"use client";

import { useState } from "react";
import ContactInput from "./ContactInput";
import ContactCheckbox from "./ContactCheckbox";
import SecondaryButton from "@/components/shared/SecondaryButton";
import { useTranslations } from "next-intl";

export default function ContactForm() {
    const t = useTranslations("Contact.form");

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        subject: "general",
    });

    const handleChange = (field: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm({ ...form, [field]: e.target.value });
        };

    return (
        <form className="col-span-4 p-10">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ContactInput
                    id="firstName"
                    label={t("firstName")}
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                />
                <ContactInput
                    id="lastName"
                    label={t("lastName")}
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                />
                <ContactInput
                    id="email"
                    label={t("email")}
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                />
                <ContactInput
                    id="phone"
                    label={t("phone")}
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                />
            </div>

            {/* Subjects */}
            <div className="mt-10">
                <p className="text-dark font-semibold mb-5">{t("subjectTitle")}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ContactCheckbox
                        id="general"
                        label={t("subjects.general")}
                        checked={form.subject === "general"}
                        onChange={() => setForm({ ...form, subject: "general" })}
                    />
                    <ContactCheckbox
                        id="support"
                        label={t("subjects.support")}
                        checked={form.subject === "support"}
                        onChange={() => setForm({ ...form, subject: "support" })}
                    />
                    <ContactCheckbox
                        id="sales"
                        label={t("subjects.sales")}
                        checked={form.subject === "sales"}
                        onChange={() => setForm({ ...form, subject: "sales" })}
                    />
                    <ContactCheckbox
                        id="partnership"
                        label={t("subjects.partnership")}
                        checked={form.subject === "partnership"}
                        onChange={() => setForm({ ...form, subject: "partnership" })}
                    />
                </div>
            </div>

            {/* Message */}
            <div className="mt-10">
                <ContactInput
                    id="message"
                    label={t("message")}
                    placeholder={t("messagePlaceholder")}
                    value={form.message}
                    onChange={handleChange("message")}
                />
            </div>

            {/* Submit */}
            <SecondaryButton className="ms-auto relative mt-20 bg-secondary text-white w-[180px] sm:w-[200px] 2xl:w-[242px] h-[45px] sm:h-[50px] 2xl:h-[53px] overflow-hidden">
                <span>{t("send")}</span>
                <div className="bg-white w-[60px] sm:w-[70px] 2xl:w-[75px] h-[60px] sm:h-[70px] 2xl:h-[75px] absolute end-[-20px] bottom-[-40px] rounded-full"></div>
                <div className="bg-lighter w-[60px] sm:w-[70px] 2xl:w-[75px] h-[60px] sm:h-[70px] 2xl:h-[75px] absolute end-[-25px] bottom-[-45px] rounded-full"></div>
            </SecondaryButton>
        </form>
    );
}
