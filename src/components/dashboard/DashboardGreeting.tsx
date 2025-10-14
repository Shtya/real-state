'use client';

import { useTranslations } from "next-intl";

type DashboardGreetingProps = {
    text: string;
};

export default function DashboardGreeting({ text }: DashboardGreetingProps) {
    const t = useTranslations('root')
    return (
        <div className="flex items-center gap-2">
            <div className="flex-center w-[80px] h-[80px] bg-secondary text-lighter italic text-sm rounded-full">
                {t('logo')}
            </div>
            <p className="text-[30px]">{text}</p>
        </div>
    );
}
