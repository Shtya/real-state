"use client";

import { ProgressProvider } from "@bprogress/next/app";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ProgressProvider
            height="2px"
            color="#0070f3"
            options={{ showSpinner: false }}
            shallowRouting
        >
            {children}
        </ProgressProvider>
    );
}
