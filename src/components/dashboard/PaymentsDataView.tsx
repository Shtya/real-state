'use client'

import { PaymentColumns } from "@/constants/dashboard/paymentConstants";
import { usePayments } from "@/hooks/usePayments";
import { PaymentRow } from "@/types/dashboard/payment";
import DataView from "../shared/DateViewTable/DataView";


export default function PaymentsDataView() {
    const { getRows } = usePayments();

    return (
        <DataView<PaymentRow>
            columns={PaymentColumns}
            getRows={getRows}
            showActions={false}
            pageSize={10}
            searchPlaceholder="Search payments..."
        />
    );
}