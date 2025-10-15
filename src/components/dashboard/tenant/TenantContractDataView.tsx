'use client'
import DataView from "@/components/shared/DateViewTable/DataView";
import { TenantContractColumns } from "@/constants/dashboard/tenant/tenantContracts";
import { useTenantContracts } from "@/hooks/dashboard/tenant/useTenantContracts";
import { TenantContractRow } from "@/types/dashboard/tenant";
import { CiEdit } from "react-icons/ci";

export default function TenantContractDataView() {
    const { getRows } = useTenantContracts();

    return (
        <DataView<TenantContractRow>
            columns={TenantContractColumns}
            getRows={getRows}
            showActions={false}
            pageSize={10}
            actionButton={{
                show: true,
                label: "Add Reservation",
                href: "/",
                MobileIcon: CiEdit
            }}
            searchPlaceholder="Search contracts..."
        />
    );
}
