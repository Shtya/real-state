import { FaBars } from "react-icons/fa";
import NotificationDropdown from "../shared/NotificationDropdown";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Link from "next/link";
import PingIndicator from "../shared/PingIndicator";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { GrLanguage } from "react-icons/gr";
import { useTranslations } from "next-intl";


export default function DashboardHeader({ onOpenSidebar }: { onOpenSidebar: () => void }) {
    const t = useTranslations('dashboard.header')

    return (
        <header className="px-4 md:px-6 bg-lighter">
            <div className=" ">
                <div className="py-[21px] flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-dark">
                            {t('greeting', { name: 'Bassem' })}

                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-dark font-medium">

                            {t('description')}
                            {/* Mock description untill now */}
                        </p>
                    </div>

                    {/* Right: Notification + Profile (hidden on very small screens) */}
                    <div className="hidden lg:flex gap-3 items-center">
                        <LocaleSwitcher Trigger={LocaleTrigger} />

                        <Link href='chats'>
                            <div className="relative bg-white custom-shadow rounded-full p-3">
                                <PingIndicator />
                                <IoChatbubbleEllipsesOutline size={20} className="text-primary" />
                            </div>
                        </Link>
                        <NotificationDropdown />

                    </div>

                    <button
                        onClick={onOpenSidebar}
                        className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary/30"
                        aria-label="فتح القائمة الجانبية"
                    >
                        <FaBars className="text-xl text-primary" />
                    </button>
                </div>
            </div>
        </header>
    );
}


function LocaleTrigger({
    onClick,
    disabled,
}: {
    onClick: () => void;
    disabled: boolean;
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="relative bg-white custom-shadow rounded-full p-3 transition hover:scale-105 disabled:opacity-50"
            aria-label="Toggle locale"
        >
            <GrLanguage size={20} className="text-primary" />
        </button>
    );
}
