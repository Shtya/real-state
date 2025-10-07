"use client";

import { useState, useEffect, useRef } from "react";
import { useNormalizedPath } from "@/hooks/useNormalizedPath";
import { Link } from "@/i18n/navigation";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslations } from "next-intl";


export default function Header() {
    const { normalizedPath } = useNormalizedPath();
    const t = useTranslations("Header");
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    // Close menu when clicking outside
    useOutsideClick([menuRef, toggleRef], () => setMenuOpen(false));

    // Sticky header on scroll
    useEffect(() => {
        const handleFixed = () => {
            const isXL = window.innerWidth >= 1280;
            const threshold = isXL ? 18 : 0;
            setIsSticky(window.scrollY > threshold);
        };
        handleFixed();
        window.addEventListener("scroll", handleFixed);
        window.addEventListener("resize", handleFixed);
        return () => {
            window.removeEventListener("scroll", handleFixed)
            window.removeEventListener("resize", handleFixed)
        };
    }, []);

    const navLinks = [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.about"), href: "/about" },
        { label: t("nav.realEstate"), href: "/real-estate" },
        { label: t("nav.blog"), href: "/blog" },
        { label: t("nav.contact"), href: "/contact" },
        { label: t("nav.dashboard"), href: "/dashboard" }
    ];

    return (
        <header
            id="main-header"
            ref={headerRef}
            className={`fixed xl:absolute left-0 w-full z-50 top-0 xl:top-[18px]  transition ${isSticky ? "!fixed !top-0 left-0 w-full bg-white shadow-md z-50" : ""
                }`}
        >
            <div className="w-full xl:max-w-[1208px] mx-auto flex items-center justify-between gap-4 bg-[#FAFAFA] xl:rounded-full px-3 sm:px-5 md:px-8 py-3 sm:py-3 md:py-5">
                {/* Logo */}
                <Link href="/" className="flex items-center flex-shrink-0 lg:ms-[50px]">
                    <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-primary">
                        {t("logo")}
                    </h1>
                </Link>

                {/* Desktop nav */}
                <nav className="navbar hidden lg:flex items-center gap-4 sm:gap-5 md:gap-7 text-base sm:text-lg md:text-xl text-dark font-bold">
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`nav-item hover:text-primary text-[16px] xl:text-lg ${normalizedPath === href
                                ? "text-primary border-b-[3px] border-b-primary"
                                : ""
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Language (desktop) */}
                <div className="flex items-center gap-2 ">
                    <LocaleSwitcher />

                    {/* Mobile controls */}
                    <button
                        ref={toggleRef}
                        id="menu-toggle"
                        aria-controls="mobile-menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="lg:hidden rounded-md border border-transparent"
                    >
                        {menuOpen ? (
                            <svg
                                id="menu-close-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                id="menu-open-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                ref={menuRef}
                className={`${menuOpen ? "block" : "hidden"
                    } lg:hidden bg-[#FAFAFA]  p-4 shadow-lg`}
            >
                <nav className="flex flex-col divide-y divide-gray-200">
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="mobile-navitem block py-3 px-3 text-[#212529] font-medium hover:text-primary transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    );
}
