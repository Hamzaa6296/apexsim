"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaCaretDown, FaWallet, FaRegBell, FaSun, FaUserCircle } from "react-icons/fa";
import { useRouter, usePathname } from 'next/navigation';
import { MdLightMode } from "react-icons/md";
import { FaBell } from "react-icons/fa";



const languages = [
  { code: 'Eng', name: 'English', flag: 'https://flagcdn.com/us.svg' },
  { code: 'Ger', name: 'German', flag: 'https://flagcdn.com/de.svg' },
  { code: 'Fra', name: 'French', flag: 'https://flagcdn.com/fr.svg' },
];

const NavItem = ({ label, items, isMobile }: { label: string, items?: string[], isMobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleProps = isMobile
    ? { onClick: () => setIsOpen(!isOpen) }
    : { onMouseEnter: () => setIsOpen(true), onMouseLeave: () => setIsOpen(false) };

  return (
    <div className={isMobile ? "w-full" : "relative"} {...toggleProps}>
      <button className={`flex items-center gap-1 text-gray-400 hover:text-white transition-all py-2 !cursor-pointer w-full font-manrope ${isMobile ? "justify-between text-lg border-b border-white/5" : "text-sm"}`}>
        {label} {items && <FaCaretDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />}
      </button>
      {items && isOpen && (
        <div className={isMobile
          ? "pl-4 flex flex-col gap-2 my-2"
          : "absolute top-full left-0 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl p-2 z-50"
        }>
          {items.map((item) => (
            <Link key={item} href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors !cursor-pointer font-inter">
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  
  const langRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const isResetPage = pathname === '/reset-password';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) setIsLangOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) setIsProfileOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-[#181818]">
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isResetPage ? "bg-transparent border-transparent" : "bg-[#181818] border-b border-[#393747]"
      }`}>
        <nav className="flex items-center justify-between md:px-12 px-6 py-5 max-w-[1600px] mx-auto w-full">
          {/* Logo - Always Left */}
          <div className="md:text-2xl text-xl font-bricolage font-bold text-[#D5D5D5] tracking-wider shrink-0">APEXSIM</div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center text-md font-manrope gap-10">
            {["Buy crypto", "Withdraw", "Market"].map((link) => (
              <Link key={link} href="#" className="text-gray-400 hover:text-white transition-colors text-sm !cursor-pointer">{link}</Link>
            ))}
            <NavItem label="Trade" items={["Margin Trading", "Derivatives"]} />
            <NavItem label="More" items={["Staking", "Launchpad"]}/>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors !cursor-pointer text-sm font-manrope">Support</Link>
          </div>

          {/* Desktop Right Side (Hidden on Mobile) */}
          <div className="hidden xl:flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-2 bg-[#222222] border border-white/10 p-2.5 rounded-sm !cursor-pointer hover:bg-white/5 transition-colors group">
                  <FaWallet className="text-blue-500 group-hover:scale-110 transition-transform" size={16} />
                  <span className="text-xs text-white font-medium">$40,000</span>
                  <FaCaretDown size={12} className="text-gray-500" />
                </div>
                <div className="relative" ref={langRef}>
                  <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 bg-[#222222] border border-white/10 p-2.5 rounded-sm !cursor-pointer hover:bg-white/5">
                    <img src={selectedLang.flag} alt="" className="w-4 h-4 rounded-full object-cover" />
                    <span className="text-xs text-white">{selectedLang.code}</span>
                    <FaCaretDown size={12} className="text-gray-500" />
                  </button>
                  {isLangOpen && (
                    <div className="absolute top-full right-0 mt-2 w-36 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-1 z-[120]">
                      {languages.map((l) => (
                        <button key={l.code} onClick={() => {setSelectedLang(l); setIsLangOpen(false);}} className="w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg !cursor-pointer">
                          <img src={l.flag} className="w-4 h-3 rounded-sm object-cover" alt="" /> {l.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button className="p-2.5 bg-[#222222] border border-white/10 rounded-sm text-gray-50 hover:text-white !cursor-pointer"><MdLightMode size={16} /></button>
                <button className="relative p-2.5 bg-[#222222] border border-white/10 rounded-sm text-gray-50 hover:text-white !cursor-pointer">
                  <FaBell  size={16} /><span className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full border-2 border-[#222222]" />
                </button>
                <div className="relative" ref={profileRef}>
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 !cursor-pointer ml-1">
                    <div className="w-9 h-9 bg-cyan-400 rounded-full border-2 border-white/10" />
                    <FaCaretDown size={12} className="text-gray-50" />
                  </button>
                  {isProfileOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 z-[120]">
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg !cursor-pointer">My Profile</button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg !cursor-pointer">Settings</button>
                      <div className="h-[1px] bg-white/5 my-1" />
                      <button type="button" className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-lg !cursor-pointer">Logout</button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <button onClick={() => router.push('/login')} className="text-[#256DFD] hover:text-white font-semibold px-4 transition-colors !cursor-pointer">Login</button>
                <button onClick={() => router.push('/signup')} className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-all !cursor-pointer">Sign up</button>
              </div>
            )}
          </div>

          {/* Mobile Toggle - Only thing visible on right for mobile */}
          <button className="xl:hidden p-2 !cursor-pointer flex flex-col gap-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-gray-400 ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* MOBILE MENU - Everything inside here */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#111111] border-b border-[#393747] px-6 py-6 flex flex-col gap-4 h-[calc(100vh-70px)] overflow-y-auto z-[200]">
            
            {isLoggedIn && (
              <div className="flex flex-col gap-4 mb-4">
                {/* Profile Section in Mobile */}
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full" />
                  <div>
                    <p className="text-white font-bold">User Name</p>
                    <p className="text-gray-500 text-sm">Verified Account</p>
                  </div>
                </div>

                {/* Mobile Wallet & Theme/Notif Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-between bg-[#222222] p-3 rounded-lg border border-white/10">
                    <div className="flex items-center gap-2">
                      <FaWallet className="text-blue-500" size={14} />
                      <span className="text-white text-sm font-medium">$40,000</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-around bg-[#222222] p-3 rounded-lg border border-white/10">
                    <MdLightMode className="text-gray-50" size={16} />
                    <div className="w-[1px] h-4 bg-white/10" />
                    <FaBell className="text-gray-50" size={16} />
                  </div>
                </div>
              </div>
            )}

            {/* Standard Links */}
            <div className="flex flex-col">
              {["Deposit", "Withdraw", "Market", "Futures", "Support"].map((l) => (
                <Link key={l} href="#" className="text-gray-400 text-lg py-3 border-b border-white/5 !cursor-pointer font-manrope">{l}</Link>
              ))}
              <NavItem label="Trade" items={["Margin Trading", "Derivatives"]} isMobile />
              <NavItem label="More" items={["Staking", "Launchpad"]} isMobile />
            </div>

            {/* Mobile Auth/Footer */}
            <div className="mt-auto pt-6 flex flex-col gap-3">
              {isLoggedIn ? (
                 <button type="button" className="w-full bg-red-500/10 text-red-500 py-3 rounded-xl font-bold !cursor-pointer">Logout</button>
              ) : (
                <>
                  <button onClick={() => router.push('/login')} className="w-full text-[#256DFD] py-3 text-lg font-bold border border-[#256DFD] rounded-full !cursor-pointer">Login</button>
                  <button onClick={() => router.push('/signup')} className="w-full bg-white text-black py-3 text-lg font-bold rounded-full !cursor-pointer">Sign up</button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      <main className={isResetPage ? "" : "pt-20"}>
        {children}
      </main>
    </div>
  );
}