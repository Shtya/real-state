'use client'
import SettingsCard from "@/components/dashboard/settings/SettingsCard";
import { useDashboardHref } from "@/hooks/dashboard/useDashboardHref";
import { useRoleFromPath } from "@/hooks/dashboard/useRoleFromPath";
import { AiOutlineNotification } from "react-icons/ai";
import { MdOutlinePayments, MdPerson } from "react-icons/md";


export default function Settings() {
    const { getHref } = useDashboardHref()


    return (
        <div className="space-y-20">
            <h1 className="font-bold text-2xl sm:text-3xl ">Account</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                <SettingsCard
                    title="Personal Info"
                    description="Provide personal details and how we can reach you"
                    icon={MdPerson}
                    href={getHref('account')}
                />
                <SettingsCard
                    title="Notifications"
                    description="Choose notification preferences and how you want to be contacted"
                    icon={AiOutlineNotification}
                    href={getHref('notifications')}
                />
                <SettingsCard
                    title="Payments & payouts"
                    description="Review payments, payouts, coupons, and gift cards"
                    icon={MdOutlinePayments}
                    href={getHref('payments')}
                />
            </div>
        </div>
    );
}