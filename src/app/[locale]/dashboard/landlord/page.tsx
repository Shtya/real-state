import DashboardGreeting from "@/components/dashboard/DashboardGreeting";
import { getTranslations } from "next-intl/server";


export default async function landlordPage() {
    const t = await getTranslations('dashboard');
    return (
        <div>
            <DashboardGreeting text={t('greeting', { name: 'Bassem' })} />
        </div>
    );
}