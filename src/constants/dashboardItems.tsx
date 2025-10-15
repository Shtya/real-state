import { LuLayoutDashboard } from 'react-icons/lu';
import { FaHeadset } from 'react-icons/fa';
import { MdOutlineFactCheck, MdOutlinePayments } from 'react-icons/md';
import { Role } from '@/types/global';
import { ComponentType, SVGProps } from 'react';
import { TbContract } from 'react-icons/tb';
import { PiBuildingApartment } from 'react-icons/pi';
import { IoAnalytics, IoSettingsOutline } from 'react-icons/io5';


export type SidebarLink = {
    href: string;
    key: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const tenantLinks: SidebarLink[] = [
    { href: '/dashboard/tenant', key: 'dashboard', Icon: LuLayoutDashboard },
    { href: '/dashboard/tenant/contracts', key: 'contracts', Icon: TbContract },
    { href: '/dashboard/tenant/renewals', key: 'renewRequests', Icon: MdOutlineFactCheck },
    { href: '/dashboard/tenant/payments', key: 'paymentHistory', Icon: MdOutlinePayments },
];


const landlordLinks: SidebarLink[] = [
    { href: '/dashboard/landlord', key: 'dashboard', Icon: LuLayoutDashboard },
    { href: '/dashboard/landlord/contracts', key: 'rentalsContracts', Icon: TbContract },
    { href: '/dashboard/landlord/properties', key: 'properties', Icon: PiBuildingApartment },
    { href: '/dashboard/landlord/renewals', key: 'renewRequests', Icon: MdOutlineFactCheck },
    { href: '/dashboard/landlord/revenue', key: 'revenueSummary', Icon: IoAnalytics },
];


export const dashboardItems: Record<Role, SidebarLink[]> = {
    tenant: tenantLinks,
    landlord: landlordLinks,
    admin: [],
};