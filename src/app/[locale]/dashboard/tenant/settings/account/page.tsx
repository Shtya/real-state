import DashboardCard from "@/components/dashboard/DashboardCard";
import EditableField from "@/components/dashboard/EditableField";
import BreadcrumbsHeader from "@/components/shared/BreadcrumbsHeader";


export default function AccountPage() {
    return (
        <div>
            <BreadcrumbsHeader
                title="Personal info"
                breadcrumbs={[
                    { label: "Account Settings", href: `/dashboard/tenant/settings` },
                    { label: "Personal info" },
                ]}
            />


            <DashboardCard>
                <EditableField label="Full Name" value="Peter Griffin" />
                <EditableField label="Email address" placeholder="h***o@designdrops.op" />
                <EditableField
                    label="Phone Number"
                    placeholder="Add a number so confirmed guests and Airbnb can get in touch. You can add other numbers and choose how they’re used."
                />
                <EditableField label="National ID" />
                <EditableField label="Address" />
            </DashboardCard>




        </div>
    );
}