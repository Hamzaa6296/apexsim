"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaCaretDown, FaWallet, FaBell } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import NavItem from './NavDropDownItems';

const languages = [
    { code: 'Eng', name: 'English', flag: 'https://flagcdn.com/us.svg' },
    { code: 'Ger', name: 'German', flag: 'https://flagcdn.com/de.svg' },
    { code: 'Fra', name: 'French', flag: 'https://flagcdn.com/fr.svg' },
];

// Example profile image URL

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[0]);

    const profileRef = useRef<HTMLDivElement>(null);
    const langRef = useRef<HTMLDivElement>(null);

    // Handle outside clicks for Profile and Language dropdowns
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) setIsProfileOpen(false);
            if (langRef.current && !langRef.current.contains(e.target as Node)) setIsLangOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // Lock background scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-[100] bg-[#181818] border-b border-white/5">
            <nav className="flex items-center justify-between md:px-12 px-6 md:py-5 py-4 max-w-[1600px] mx-auto w-full">

                {/* Left: Logo & Main Nav */}
                <div className="flex items-center gap-10">
                    <Link href="#" className="md:text-2xl text-xl font-bold text-[#D5D5D5] tracking-wider shrink-0 font-bricolage">
                        APEXSIM
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 ml-40">
                        {[{ label: "Buy crypto", href: "#" }, { label: "Withdraw", href: "#" }, { label: "Market", href: "/dashboard/market" }]
                            .map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium font-manrope"
                                >
                                    {item.label}
                                </Link>
                        ))}

                        {/* NavItems */}
                        <NavItem label="Trade" type="trade" />
                        <NavItem label="More" type="more" />

                        <Link
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors text-sm font-medium font-manrope"
                        >
                            Support
                        </Link>
                    </div>
                </div>

                {/* Right Side: Wallet, Lang, Theme, Notif, Profile */}
                <div className="flex items-center gap-3">

                    {/* Wallet */}
                    <Link href='/dashboard/wallet'>
                        <div className="hidden sm:flex items-center gap-2 bg-[#222222] border border-white/10 p-2.5 rounded-sm !cursor-pointer hover:bg-white/5 transition-colors group">
                            <FaWallet className="text-blue-500 group-hover:scale-110 transition-transform" size={14} />
                            <span className="text-xs text-white font-medium">$40,000</span>
                            <FaCaretDown size={12} className="text-gray-500" />
                        </div>
                    </Link>

                    {/* Desktop Controls Group */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Language Selector */}
                        <div className="relative" ref={langRef}>
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 bg-[#222222] border border-white/10 p-2.5 rounded-sm !cursor-pointer hover:bg-white/5 transition-all"
                            >
                                <img src={selectedLang.flag} alt="" className="w-4 h-3 object-cover rounded-[1px]" />
                                <span className="text-[11px] text-white font-medium">{selectedLang.code}</span>
                                <FaCaretDown size={10} className="text-gray-500" />
                            </button>
                            {isLangOpen && (
                                <div className="absolute top-[120%] right-0 w-32 bg-[#141414] border border-white/10 rounded-xl shadow-2xl p-1 z-[200]">
                                    {languages.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => { setSelectedLang(l); setIsLangOpen(false); }}
                                            className="w-full flex items-center gap-3 px-3 py-2 text-[12px] text-gray-400 hover:text-white hover:bg-white/5 rounded-lg !cursor-pointer transition-colors"
                                        >
                                            <img src={l.flag} className="w-4 h-3 object-cover rounded-[1px]" alt="" /> {l.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Theme Toggle */}
                        <button className="p-2.5 bg-[#222222] border border-white/10 rounded-sm text-gray-50 hover:text-white !cursor-pointer transition-colors">
                            <MdLightMode size={16} />
                        </button>

                        {/* Notifications */}
                        <Link href='/dashboard/notifications'>
                            <button className="relative p-2.5 bg-[#222222] border border-white/10 rounded-sm text-gray-50 hover:text-white !cursor-pointer transition-colors">
                                <FaBell size={16} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full border-2 border-[#222222]" />
                            </button>
                        </Link>
                    </div>

                    {/* Profile Dropdown */}
                    <Link href='/dashboard/profile'>
                        <div className="relative" ref={profileRef}>
                            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 !cursor-pointer ml-1">
                                {/* Profile Image instead of cyan circle */}
                                <img 
                                    src= '/images/manimage.png' 
                                    alt="Profile" 
                                    className="w-9 h-9 rounded-full border-2 border-white/10 object-cover" 
                                />
                                <FaCaretDown size={12} className={`text-gray-50 transition-transform hidden sm:block `} />
                            </button>
                        </div>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 !cursor-pointer flex flex-col gap-1.5 ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <div className={`w-6 h-0.5 bg-gray-400 ${isMenuOpen ? "opacity-0" : ""}`} />
                        <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#111111] px-6 py-8 flex flex-col h-[calc(100vh-70px)] overflow-y-auto z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 mb-6">
                        <img src='/images/manimage.png' alt="Profile" className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" />
                        <div>
                            <p className="text-white font-bold text-lg">User Account</p>
                            <p className="text-blue-400 text-xs font-medium">Verified Simulation</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="flex items-center justify-center gap-3 bg-[#222222] p-4 rounded-xl border border-white/10">
                            <FaWallet className="text-blue-500" size={16} />
                            <span className="text-white font-bold">$40,000</span>
                        </div>
                        <div className="flex items-center justify-around bg-[#222222] p-4 rounded-xl border border-white/10">
                            <MdLightMode className="text-gray-400" size={20} />
                            <div className="w-[1px] h-5 bg-white/10" />
                            <Link href='/dashboard/notifications'>
                                <FaBell className="text-gray-400" size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <p className="text-[11px] text-gray-500 uppercase font-bold tracking-widest mb-2 px-2">Navigation</p>
                        {["Buy crypto", "Withdraw", "Market", "Support"].map((l) => (
                            <Link key={l} href="#" className="text-gray-300 text-lg py-4 px-2 border-b border-white/5 hover:text-white !cursor-pointer transition-colors font-manrope">
                                {l}
                            </Link>
                        ))}
                        <div className="py-2">
                            <NavItem label="Trade" type="trade" isMobile />
                            <NavItem label="More" type="more" isMobile />
                        </div>
                    </div>

                    <div className="mt-auto pb-10">
                        <button className="w-full bg-red-500/10 text-red-500 py-4 rounded-2xl font-bold !cursor-pointer hover:bg-red-500/20 transition-all border border-red-500/20">
                            Log Out
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
