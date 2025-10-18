'use client'
import { useState } from 'react';
import TransactionsView from './TransactionsView';
import AccountsView from './AccountsView';
import TabButton from './TabButton';

type TabKey = 'accounts' | 'transactions';

export default function SavedPaymentMethods() {
    const [activeTab, setActiveTab] = useState<TabKey>('accounts');

    return (
        <div className="col-span-1 sm:col-span-12 lg:col-span-8">
            <h1 className="text-lg sm:text-xl font-semibold my-4">Saved Payment Methods</h1>

            {/* Tabs */}
            <div className="flex items-center border-b border-gray-200">
                <TabButton
                    label="Payment Accounts"
                    active={activeTab === 'accounts'}
                    onClick={() => setActiveTab('accounts')}
                />
                <TabButton
                    label="Transaction History"
                    active={activeTab === 'transactions'}
                    onClick={() => setActiveTab('transactions')}
                />
            </div>

            {/* Content */}
            <div className="mt-4">
                {activeTab === 'accounts' ? (
                    <AccountsView />
                ) : (
                    <TransactionsView />
                )}
            </div>
        </div>
    );
}
