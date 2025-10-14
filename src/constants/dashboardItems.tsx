import { LuLayoutDashboard } from 'react-icons/lu';
import { FaFileContract, FaRedo, FaUserCog, FaMoneyCheckAlt, FaHeadset, FaHome } from 'react-icons/fa';
import { MdOutlineBarChart } from 'react-icons/md';
import { Role } from '@/types/global';
import { ReactNode } from 'react';


export type SidebarLink = {
    href: string;
    label: string;
    icon: ReactNode;
    variant?: 'white-border';
};

const tenantLinks: SidebarLink[] = [
    { href: '/dashboard/tenant', label: 'Dashboard', icon: <LuLayoutDashboard /> },
    { href: '/dashboard/tenant/contracts', label: 'Contracts', icon: <FaFileContract /> },
    { href: '/dashboard/tenant/renewals', label: 'Renew Requests', icon: <FaRedo /> },
    { href: '/dashboard/tenant/settings', label: 'Account Setting', icon: <FaUserCog /> },
    { href: '/dashboard/tenant/payments', label: 'Payment History', icon: <FaMoneyCheckAlt /> },
    {
        href: '/dashboard/tenant/support',
        label: 'Customer Support',
        icon: <FaHeadset />,
        variant: 'white-border',
    },
];


const landlordLinks: SidebarLink[] = [
    { href: '/dashboard/landlord', label: 'Dashboard', icon: <LuLayoutDashboard /> },
    { href: '/dashboard/landlord/contracts', label: 'Rentals & Contracts', icon: <FaFileContract /> },
    { href: '/dashboard/landlord/properties', label: 'Properties', icon: <FaHome /> },
    { href: '/dashboard/landlord/renewals', label: 'Renew Requests', icon: <FaRedo /> },
    { href: '/dashboard/landlord/settings', label: 'Account Setting', icon: <FaUserCog /> },
    { href: '/dashboard/landlord/revenue', label: 'Revenue Summary', icon: <MdOutlineBarChart /> },
    {
        href: '/dashboard/landlord/support',
        label: 'Customer Support',
        icon: <FaHeadset />,
        variant: 'white-border',
    },
];


export const dashboardItems: Record<Role, SidebarLink[]> = {
    tenant: tenantLinks,
    landlord: landlordLinks,
    admin: [],
};