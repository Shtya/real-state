'use client';

import { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import Sidebar from '@/components/shared/Sidebar';
import Logo from '../shared/Logo';

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='relative bg-dashboard-bg  h-full min-h-screen'>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} title={<Logo small />} className='lg:w-[140px] absolute top-0 left-0 bottom-0'>
                <DashboardSidebar />
            </Sidebar>
            <div className="flex-1 lg:ml-[140px]">
                <DashboardHeader onOpenSidebar={() => setSidebarOpen(true)} />
                <main className="flex-1 p-2">{children}</main>
            </div>
        </div>
    );
}
