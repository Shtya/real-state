import Link from "next/link";
import Logo from "../Logo";
import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <footer className="relative ">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[url('/footer.jpg')] bg-cover bg-[center_30%]  z-[1] filter grayscale brightness-50 contrast-100 opacity-60"></div>
            {/* <div className="absolute inset-0 bg-[rgba(138,138,138,0.21)] z-[2]"></div> */}

            <div className="container relative z-[3] py-18 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-start mx-2">
                    {/* Logo + Description */}
                    <div className="space-y-3 flex flex-col items-center sm:items-start">
                        <div className="sm:ms-4">
                            <Logo />
                        </div>
                        <p className="text-sm sm:text-base text-dark max-w-[370px] leading-relaxed ">
                            لوريم إيبسوم هو ببساطة نص شكلي (أي غير واضح) يُستخدم في صناعة
                            الطباعة والتنضيد. ظل لوريم إيبسوم النص الشكلي القياسي لهذه الصناعة
                            منذ القرن السادس عشر، عندما قام طابع مجهول بنسخ نسخة من الطباعة
                            وخلطها لإنشاء كتاب نماذج طباعة.
                        </p>
                        <SocialIcons />
                    </div>

                    {/* About Us */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="mb-6 text-secondary font-bold text-xl sm:text-2xl">
                            معلومات عنا
                        </h2>
                        <ul className="flex flex-col gap-4 ">
                            <li><Link href="/#home" className="text-base text-dark">القائمة</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">السمات</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">المدونات</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">المساعدة والدعم</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="mb-6 text-secondary font-bold text-xl sm:text-2xl">
                            الشركة
                        </h2>
                        <ul className="flex flex-col gap-4 ">
                            <li><Link href="/#home" className="text-base text-dark">كيف نعمل</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">شروط الخدمة</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">التسعير</Link></li>
                            <li><Link href="/#home" className="text-base text-dark">التعليمات</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center sm:items-start gap-4 text-sm sm:text-base my-auto ">
                        <p className="text-base md:text-lg">
                            أكشيا ناجار 1st Block 1st Cross، رامورثي ناجار، بنغالور 560016
                        </p>

                        {/* Phone clickable */}
                        <a
                            href="tel:+972029182132"
                            className="text-base md:text-lg font-light hover:underline"
                        >
                            +97 202-918-2132
                        </a>

                        {/* Email clickable */}
                        <a
                            href="mailto:realState@gmail.com"
                            className="hover:underline"
                        >
                            realState@gmail.com
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
