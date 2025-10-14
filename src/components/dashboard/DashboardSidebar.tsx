'use client';

import { useRoleFromPath } from '@/hooks/dashboard/useRoleFromPath';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import { useNormalizedPath } from '@/hooks/useNormalizedPath';
import { dashboardItems, SidebarLink } from '@/constants/dashboardItems';



export default function DashboardSidebar() {
    const { normalizedPath } = useNormalizedPath();

    const role = useRoleFromPath();
    let items: SidebarLink[] = [];

    if (role) {
        items = dashboardItems[role];
    }

    return (
        <div className="sticky top-0 flex flex-col gap-4 p-4 lg:p-6 md:w-[312px]">
            {items.map(({ href, label, icon, variant }) => {
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
