import SavedPaymentMethods from "@/components/dashboard/payments/SavedPaymentMethods";
import SettingsCard from "@/components/dashboard/settings/SettingsCard";
import BreadcrumbsHeader from "@/components/shared/BreadcrumbsHeader";
import { MdOutlinePayment } from "react-icons/md";
import { RiFundsBoxLine } from "react-icons/ri";


export default function PaymentsPage() {
    return (
        <div>
            <BreadcrumbsHeader
                title="Payments & Payouts"
                breadcrumbs={[
                    { label: "Account Settings", href: `/dashboard/tenant/settings` },
                    { label: "Payments & Payouts" },
                ]}
            />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">

                <div className="col-span-1 sm:col-span-6">

                    <SettingsCard
                        title="Total Earnings"
                        description="$430.00"
                        icon={RiFundsBoxLine}

                    />
                </div>
                <div className="col-span-1 sm:col-span-6">
                    <SettingsCard
                        title="Pending Payments"
                        description="$100.00"
                        icon={MdOutlinePayment}
                    />
                </div>

                <SavedPaymentMethods />
            </div>
        </div>
    );
}