
import { Open_Sans, Tajawal } from "next/font/google";
import "../../styles/globals.css";
import Providers from "../ServerProviders";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";


const plexMomo = Tajawal({
  variable: "--font-app",
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600', '700'], // adjust as needed
  display: 'swap',
});


export async function generateMetadata() {
  const t = await getTranslations("root");

  return {
    title: {
      default: t("siteName"),          // 👈 localized default
      template: `${t("siteName")} | %s`, // 👈 localized template
    },
    description: t("description"),
  };
}


export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <html lang={locale} className={`${plexMomo.variable} ${openSans.variable}`} dir={locale == 'en' ? 'ltr' : 'rtl'}>

        <body className={`${plexMomo.variable}`}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </>
  );
}
