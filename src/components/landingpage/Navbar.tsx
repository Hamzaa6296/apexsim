"use client";
import { useState } from 'react';
import Link from 'next/link';

const NavItem = ({ label, items, isMobile }: { label: string, items?: string[], isMobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  // For mobile, we use a click toggle; for desktop, we use hover
  const toggleProps = isMobile 
    ? { onClick: () => setIsOpen(!isOpen) }
    : { onMouseEnter: () => setIsOpen(true), onMouseLeave: () => setIsOpen(false) };

  return (
    <div className={isMobile ? "w-full" : "relative"} {...toggleProps}>
      <button className={`flex items-center gap-1 text-gray-400 hover:text-white transition-all py-2 !cursor-pointer w-full ${isMobile ? "justify-between text-lg" : ""}`}>
        {label} {items && <span className={`text-[10px] ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>}
      </button>
      
      {items && isOpen && (
        <div className={isMobile 
          ? "pl-4 flex flex-col gap-2 mb-2" 
          : "absolute top-full left-0 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-1"
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#393747] backdrop-blur-[2px] relative z-[100]">
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="md:text-2xl text-xl font-bricolage font-bold text-[#D5D5D5] tracking-wider">APEXSIM</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center font-manrope gap-9">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Deposit</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Withdraw</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Market</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Futures</Link>

          <NavItem label="Trade" items={["Margin Trading", "Derivatives"]} />
          <NavItem label="More" items={["Staking", "Launchpad"]} />
          <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Support</Link>
        </div>

        {/* Desktop Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex font-manrope items-center gap-4">
            <button className="text-[#256DFD] hover:text-white font-semibold px-4 transition-colors cursor-pointer">Login</button>
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-all cursor-pointer">Sign up</button>
          </div>

          {/* Mobile Menu Icon (Three Lines) */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 !cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full font-manrope left-0 w-full bg-[#0a0a0a] border-b border-[#393747] px-6 py-8 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link href="#" className="text-gray-400 text-lg py-2 border-b border-white/5 cursor-pointer">Deposit</Link>
          <Link href="#" className="text-gray-400 text-lg py-2 border-b border-white/5 cursor-pointer">Withdraw</Link>
          <Link href="#" className="text-gray-400 text-lg py-2 border-b border-white/5 cursor-pointer">Market</Link>
          <Link href="#" className="text-gray-400 text-lg py-2 border-b border-white/5 cursor-pointer">Futures</Link>
          
          <NavItem label="Trade" items={["Margin Trading", "Derivatives"]} isMobile={true} />
          <NavItem label="More" items={["Staking", "Launchpad"]} isMobile={true} />
          
          <Link href="#" className="text-gray-400 text-lg py-2 border-b border-white/5 cursor-pointer">Support</Link>
          
          <div className="flex flex-col gap-4 pt-4">
            <button className="w-full text-[#256DFD] py-3 text-lg font-bold border border-[#256DFD] rounded-full cursor-pointer">
              Login
            </button>
            <button className="w-full bg-white text-black py-3 text-lg font-bold rounded-full cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}