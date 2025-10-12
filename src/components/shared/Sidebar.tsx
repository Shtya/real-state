import { useLocale } from "next-intl";
import { useState } from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";

type SidebarProps = {
    title: string;
    trigger: React.ReactNode;
    children: React.ReactNode;
};
export default function Sidebar({ title, trigger, children }: SidebarProps) {
    const [open, setOpen] = useState(false);


    return (
        <>
            {/* Trigger button */}
            <div onClick={() => setOpen(true)} className="lg:hidden">
                {trigger}
            </div>

            {/* Inline content on desktop */}
            <div className="hidden lg:block">{children}</div>

            {/* Mobile sidebar via portal */}
            {typeof window !== "undefined" &&
                createPortal(
                    <>
                        {/* Overlay */}
                        <div
                            className={`fixed inset-0 z-[998] bg-black/40 transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
                            onClick={() => setOpen(false)}
                        />

                        {/* Sidebar panel */}
                        <div
                            dir='ltr'
                            className={`filter-sidebar overflow-y-auto fixed top-0 right-0 h-full w-full max-w-[335px] bg-white shadow-lg transform transition-transform duration-300 lg:hidden z-[999] 
                                ${open ? "translate-x-0" : "translate-x-full"
                                }`}
                        >
                            <div className="flex items-center justify-between p-4 border-b">
                                <h2 className="text-lg font-semibold">{title}</h2>
                                <button onClick={() => setOpen(false)}>
                                    <HiX size={24} />
                                </button>
                            </div>
                            <div dir={document.dir} className="overflow-y-auto">{children}</div>
                        </div>
                    </>,
                    document.body
                )}
        </>
    );
}

