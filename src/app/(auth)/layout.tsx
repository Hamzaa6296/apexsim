"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Globe } from 'lucide-react';

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
      <button className={`flex items-center gap-1 text-gray-400 hover:text-white transition-all py-2 !cursor-pointer w-full ${isMobile ? "justify-between text-lg" : ""}`}>
        {label} {items && <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />}
      </button>
      {items && isOpen && (
        <div className={isMobile 
          ? "pl-4 flex flex-col gap-2 mb-2" 
          : "absolute top-full left-0 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl p-2 z-50"
        }>
          {items.map((item) => (
            <Link key={item} href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors !cursor-pointer">
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
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const langRef = useRef<HTMLDivElement>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <header className="fixed top-0 left-0 w-full border-b border-[#393747] backdrop-blur-md z-[100] bg-black/50">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          <div className="md:text-2xl text-xl font-bold text-[#D5D5D5] tracking-wider">APEXSIM</div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors !cursor-pointer text-sm">Deposit</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors !cursor-pointer text-sm">Withdraw</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors !cursor-pointer text-sm">Market</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors !cursor-pointer text-sm">Futures</Link>
            <NavItem label="Trade" items={["Margin Trading", "Derivatives"]} />
            <NavItem label="More" items={["Staking", "Launchpad"]} />
            <Link href="#" className="text-gray-400 hover:text-white transition-colors !cursor-pointer text-sm">Support</Link>
          </div>

          <div className="flex items-center gap-4">
            {/* FUNCTIONAL LANGUAGE SELECTOR */}
            <div className="relative hidden md:block" ref={langRef}>
              <div 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-[#1A1B1B] border border-white/10 px-3 py-1.5 rounded-lg !cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="w-5 h-3.5 overflow-hidden rounded-sm">
                  <img src={selectedLang.flag} alt={selectedLang.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-white font-medium">{selectedLang.code}</span>
                <ChevronDown size={12} className={`text-gray-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </div>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-36 bg-[#111111] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[110] p-1">
                   {/* Shiny Top-Left Highlight */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                   {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setSelectedLang(lang); setIsLangOpen(false); }}
                      className="relative w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors !cursor-pointer"
                    >
                      <img src={lang.flag} className="w-4 h-3 rounded-sm object-cover" alt="" />
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-[#256DFD] hover:text-white px-4 transition-colors !cursor-pointer font-medium text-sm">Login</button>
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-all !cursor-pointer text-sm">Sign up</button>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden flex flex-col gap-1.5 p-2 !cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#393747] px-6 py-8 flex flex-col gap-4 h-screen overflow-y-auto">
            <Link href="#" className="text-gray-400 text-lg py-2 border-b border-white/5 !cursor-pointer">Deposit</Link>
            <Link href="#" className="text-gray-400 text-lg py-2 border-b border-white/5 !cursor-pointer">Withdraw</Link>
            <NavItem label="Trade" items={["Margin Trading", "Derivatives"]} isMobile={true} />
            <div className="flex flex-col gap-4 pt-4">
              <button className="w-full text-[#256DFD] py-3 text-lg font-bold border border-[#256DFD] rounded-full !cursor-pointer">Login</button>
              <button className="w-full bg-white text-black py-3 text-lg font-bold rounded-full !cursor-pointer">Sign up</button>
            </div>
          </div>
        )}
      </header>
      <main className="relative pt-20">{children}</main>
    </div>
  );
}