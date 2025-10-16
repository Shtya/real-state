
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
        key: "property",
        label: "Property Address",
        cell(value) {
            return value.address;
        },
    },
    {
        key: "property",
        label: "Property Type",
        cell(value) {
            return value.type;
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
