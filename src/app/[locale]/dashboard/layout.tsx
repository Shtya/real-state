'use client'

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Sidebar from "@/components/shared/Sidebar";
import { useState } from "react";


export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div >
            <DashboardHeader onOpenSidebar={() => setSidebarOpen(true)} />
            <div className="">
                {/* Sidebar */}
                <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} title="Dashboard">
                    <DashboardSidebar />
                </Sidebar>
                <div></div>
            </div>
        </div>
    );
}
