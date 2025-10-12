"use client";

import { useState } from "react";
import ContactInput from "./ContactInput";
import ContactCheckbox from "./ContactCheckbox";
import { useTranslations } from "next-intl";
import { AnimatedSecondaryButton } from "@/components/shared/buttons/AnimatedSecondaryButton";

export default function ContactForm() {
    const t = useTranslations("contact.form");

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
            <div className="flex items-center justify-center lg:justify-end mt-20 ">

                <AnimatedSecondaryButton primary >
                    {t("send")}
                </AnimatedSecondaryButton>
            </div>
        </form>
    );
}
