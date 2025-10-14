import DashboardGreeting from "@/components/dashboard/DashboardGreeting";
import { getTranslations } from "next-intl/server";


export default async function TenantPage() {
    const t = await getTranslations('dashboard');
    return (
        <div>
            <DashboardGreeting text={t('greeting', { name: 'Bassem' })} />
        </div>
    );
}