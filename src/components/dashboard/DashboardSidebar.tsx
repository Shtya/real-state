'use client';

import { usePathname } from 'next/navigation';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaFileContract, FaRedo, FaUserCog, FaMoneyCheckAlt, FaHeadset } from 'react-icons/fa';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import { useNormalizedPath } from '@/hooks/useNormalizedPath';

const links = [
    { href: '/dashboard', label: 'Dashboard', icon: <LuLayoutDashboard /> },
    { href: '/dashboard/contracts', label: 'Contracts', icon: <FaFileContract /> },
    { href: '/dashboard/renewals', label: 'Renew Requests', icon: <FaRedo /> },
    { href: '/dashboard/settings', label: 'Account Setting', icon: <FaUserCog /> },
    { href: '/dashboard/payments', label: 'Payment History', icon: <FaMoneyCheckAlt /> },
    {
        href: '/dashboard/support',
        label: 'Customer Support',
        icon: <FaHeadset />,
        variant: 'white-border',
    },
];


export default function DashboardSidebar() {
    const { normalizedPath } = useNormalizedPath();

    return (
        <div className="flex flex-col gap-4 p-4 lg:p-6 md:w-[312px]">
            {links.map(({ href, label, icon, variant }) => {
                const isActive = normalizedPath === href;

                const baseClass = 'flex gap-2 items-center justify-start w-full px-4 py-2 rounded';
                const activeClass = 'bg-secondary text-white hover:bg-secondary-hover';
                const inactiveClass =
                    variant === 'white-border'
                        ? 'bg-white border border-dark text-dark hover:bg-gray-50'
                        : 'bg-lighter text-dark hover:bg-light';

                return (
                    <PrimaryButton
                        key={href}
                        href={href}
                        className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
                    >
                        {icon} {label}
                    </PrimaryButton>
                );
            })}

        </div>
    );
}
