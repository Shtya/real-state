import { LuLayoutDashboard } from 'react-icons/lu';
import { FaFileContract, FaRedo, FaUserCog, FaMoneyCheckAlt, FaHeadset, FaHome } from 'react-icons/fa';
import { MdOutlineBarChart, MdOutlineFactCheck, MdOutlinePayments } from 'react-icons/md';
import { Role } from '@/types/global';
import { ReactNode } from 'react';
import { TbContract } from 'react-icons/tb';
import { PiBuildingApartment } from 'react-icons/pi';
import { IoAnalytics, IoSettingsOutline } from 'react-icons/io5';


export type SidebarLink = {
    href: string;
    key: string;
    icon: ReactNode;
    variant?: 'white-border';
};

const tenantLinks: SidebarLink[] = [
    { href: '/dashboard/tenant', key: 'dashboard', icon: <LuLayoutDashboard /> },
    { href: '/dashboard/tenant/contracts', key: 'contracts', icon: <TbContract /> },
    { href: '/dashboard/tenant/renewals', key: 'renewRequests', icon: <MdOutlineFactCheck /> },
    { href: '/dashboard/tenant/settings', key: 'accountSetting', icon: <IoSettingsOutline /> },
    { href: '/dashboard/tenant/payments', key: 'paymentHistory', icon: <MdOutlinePayments /> },
    {
        href: '/dashboard/tenant/support',
        key: 'customerSupport',
        icon: <FaHeadset />,
        variant: 'white-border',
    },
];


const landlordLinks: SidebarLink[] = [
    { href: '/dashboard/landlord', key: 'dashboard', icon: <LuLayoutDashboard /> },
    { href: '/dashboard/landlord/contracts', key: 'rentalsContracts', icon: <TbContract /> },
    { href: '/dashboard/landlord/properties', key: 'properties', icon: <PiBuildingApartment /> },
    { href: '/dashboard/landlord/renewals', key: 'renewRequests', icon: <MdOutlineFactCheck /> },
    { href: '/dashboard/landlord/settings', key: 'accountSetting', icon: <IoSettingsOutline /> },
    { href: '/dashboard/landlord/revenue', key: 'revenueSummary', icon: <IoAnalytics /> },
    {
        href: '/dashboard/landlord/support',
        key: 'customerSupport',
        icon: <FaHeadset />,
        variant: 'white-border',
    },
];


export const dashboardItems: Record<Role, SidebarLink[]> = {
    tenant: tenantLinks,
    landlord: landlordLinks,
    admin: [],
};