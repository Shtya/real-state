'use client';

import { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import Sidebar from '@/components/shared/Sidebar';
import { useTranslations } from 'next-intl';

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const t = useTranslations('dashboard.sidebar');

    return (
        <div className='bg-lighter flex h-screen'>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} title={t('dashboard')}>
                <DashboardSidebar />
            </Sidebar>
            <div className="flex-1">
                <DashboardHeader onOpenSidebar={() => setSidebarOpen(true)} />
                <main className="flex-1 p-2">{children}</main>
            </div>
        </div>
    );
}
