'use client'
import ActionPopup from "@/components/shared/ActionPopup";
import DataView from "@/components/shared/DateViewTable/DataView";
import { MenuActionItem } from "@/components/shared/DateViewTable/MenuActionList";
import { TenantContractColumns } from "@/constants/dashboard/tenant/tenantContracts";
import { useTenantContracts } from "@/hooks/dashboard/tenant/useTenantContracts";
import { TenantContractRow } from "@/types/dashboard/tenant";
import { FaFileExcel, FaRegNewspaper } from "react-icons/fa";
import { RiIndeterminateCircleLine } from "react-icons/ri";
import { TbContract } from "react-icons/tb";

export default function TenantContractDataView() {
    const { getRows } = useTenantContracts();

    return (
        <DataView<TenantContractRow>
            columns={TenantContractColumns}
            getRows={getRows}
            showActions={true}
            actionsMenuItems={(row: TenantContractRow): MenuActionItem[] => [
                {
                    label: "Renew Contract",
                    Icon: TbContract,
                    Child: RenewContract
                },
                {
                    label: "Terminate Contract",
                    Icon: RiIndeterminateCircleLine,
                    Child: TerminateContractPopup
                },
            ]}
            pageSize={10}
            searchPlaceholder="Search contracts..."
        />
    );
}


function RenewContract({ onClose }: { onClose: () => void }) {
    return (
        <ActionPopup
            title="Renew Contract"
            subtitle="You Sure that You Want to Renew The Contract "
            MainIcon={FaRegNewspaper}
            cancelText="Cancel"
            actionText="Renew"
            onCancel={onClose}
            onAction={() => {
                // handle termination logic here
                onClose();
            }}
        />
    );
}

function TerminateContractPopup({ onClose }: { onClose: () => void }) {
    return (
        <ActionPopup
            title="Terminate"
            subtitle="You sure that you want to terminate the contract"
            MainIcon={FaFileExcel}
            mainIconColor="#FD5257"
            note="Note: When you terminate the contract, you will not restore your money"
            cancelText="Cancel"
            actionText="Terminate"
            onCancel={onClose}
            onAction={() => {
                // handle termination logic here
                onClose();
            }}
        />
    );
}

