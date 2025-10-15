'use client';

import { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import Sidebar from '@/components/shared/Sidebar';
import { useTranslations } from 'next-intl';
import Logo from '../shared/Logo';

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='bg-lighter flex h-screen'>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} title={<Logo small />}>
                <DashboardSidebar />
            </Sidebar>
            <div className="flex-1">
                <DashboardHeader onOpenSidebar={() => setSidebarOpen(true)} />
                <main className="flex-1 p-2">{children}</main>
            </div>
        </div>
    );
}
