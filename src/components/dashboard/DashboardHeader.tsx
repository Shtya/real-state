import { FaBars } from "react-icons/fa";
import FallbackImage from "../shared/FallbackImage";
import NotificationDropdown from "../shared/NotificationDropdown";
import Logo from "../shared/Logo";
import LocaleSwitcher from "../shared/LocaleSwitcher";


export default function DashboardHeader({ onOpenSidebar }: { onOpenSidebar: () => void }) {
    return (
        <header className="px-4 md:px-6 border-b border-b-gray bg-white">
            <div className=" ">
                <div className="py-[21px] flex justify-between items-center">
                    {/* Left: Logo + Sidebar Toggle */}
                    <div className="flex items-center gap-4">
                        {/* Logo */}
                        <Logo />
                    </div>

                    {/* Right: Notification + Profile (hidden on very small screens) */}
                    <div className="hidden lg:flex gap-3 items-center">
                        <NotificationDropdown />
                        <LocaleSwitcher />
                        <div className="flex items-center gap-2">
                            <button
                                className="relative w-[44px] h-[44px] flex justify-center items-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                            <p className="text-primary font-semibold">Bassem Ali</p>
                        </div>
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