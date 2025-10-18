import RentalIncomeCard from "./RentalIncomeCard";

export default function TransactionsView() {
    return (
        <>
            <h2 className="text-lg font-medium my-4">Recent Transactions</h2>
            <div className="mt-5 space-y-4">
                <RentalIncomeCard />
                <RentalIncomeCard />
            </div>
        </>
    );
}
