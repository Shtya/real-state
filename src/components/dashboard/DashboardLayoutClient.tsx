'use client';

import { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import Sidebar from '@/components/shared/Sidebar';

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <DashboardHeader onOpenSidebar={() => setSidebarOpen(true)} />
            <div className="flex">
                <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} title="Dashboard">
                    <DashboardSidebar />
                </Sidebar>
                <main className="flex-1 p-4 lg:py-6">{children}</main>
            </div>
        </div>
    );
}
