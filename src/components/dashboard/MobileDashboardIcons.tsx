import { BsBell } from "react-icons/bs";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import PingIndicator from "../shared/PingIndicator";
import Link from "next/link";
import { useDashboardHref } from "@/hooks/dashboard/useDashboardHref";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import FallbackImage from "../shared/FallbackImage";


export default function MobileDashboardIcons({ open, onClose }: { open: boolean, onClose: () => void }) {
    const { getHref } = useDashboardHref();

    if (!open) return null;

    return (
        <div className="shadow-md px-4 md:px-6  w-full items-center justify-between gap-4 mb-2 py-4 flex lg:hidden  border-t border-t-gray">

            <div className="flex gap-2 items-center">
                <Link href={getHref('chats')} onClick={onClose}>
                    <div className="relative bg-card-bg custom-shadow rounded-full p-3">
                        <PingIndicator />
                        <IoChatbubbleEllipsesOutline size={20} className="text-primary" />
                    </div>
                </Link>
                <Link href={getHref('notifications')} onClick={onClose}>
                    <div className="relative inline-flex bg-card-bg p-3 rounded-full custom-shadow">
                        {/* Notification Dot */}
                        <PingIndicator />
                        {/* Bell Button */}
                        <button
                            type="button"
                            aria-label="فتح الإشعارات"
                            className="text-primary inline-flex justify-center rounded-3xl text-sm hover:bg-opacity-30"
                        >
                            <BsBell className="w-5 h-5" />
                        </button>
                    </div>
                </Link>
            </div>

            <div className="flex gap-1 items-center">
                <button
                    className="flex relative w-[44px] h-[44px]  justify-center items-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30"
                    aria-label="فتح قائمة المستخدم"
                >
                    <FallbackImage
                        alt="profile"
                        src="/users/user-4.jpg"
                        width={44}
                        height={44}
                        className="w-full h-full rounded-full object-cover"
                    />
                </button>
                <p className="text-input">Bassen Ali</p>
            </div>

        </div>
    )
}