
import { PropertyCell } from "@/components/shared/properties/PropertyCell";
import { PaymentRow } from "@/types/dashboard/payment";
import { TableColumnType } from "@/types/table";
import { format } from "date-fns";

export const PaymentColumns: TableColumnType<PaymentRow>[] = [
    {
        key: "id",
        label: "Transaction ID",
    },
    {
        key: "property",
        label: "Property",
        cell(value) {
            return <PropertyCell {...value} />;
        },
    },
    {
        key: "address",
        label: "Property Address",
        cell(value) {
            return value;
        },
    },
    {
        key: "type",
        label: "Property Type",
        cell(value) {
            return value;
        },
    },
    {
        key: "price",
        label: "Price",
        cell(value) {
            return `${value.toLocaleString()} $`;
        },
    },
    {
        key: "date",
        label: "Date",
        cell(value) {
            return format(new Date(value), "dd MMM yyyy");
        },
    },
];
