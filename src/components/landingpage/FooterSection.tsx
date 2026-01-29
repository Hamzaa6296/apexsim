"use client";
import React from 'react';
import { Instagram, Twitter, Send, Mail } from 'lucide-react';

export default function Footer() {
    const footerLinks = {
        "About us": ["Terms of use", "Privacy Policy", "Cookie Policy", "Disclaimer", "Support Policy", "About Us", "Fees"],
        "Tools": ["API Doc", "Apply for listing", "Trading view"],
        "Our services": ["Buy crypto", "Trade crypto", "Futures trading"],
        "Help center": ["Support", "Contact Us"]
    };

    return (
        <footer className="bg-white/1 text-white pt-20 pb-10 px-6 overflow-hidden">
            <div className="max-w-9xl mx-auto">

                {/* 1. CTA SECTION (The Card with Grid Background) */}
                <div className="relative p-[1px] rounded-[35px] mb-20 overflow-hidden group px-20">
                    {/* 1. The Shiny Gradient Border Overlay (Top-left highlight) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/5 to-transparent mx-20 rounded-3xl opacity-100" />

                    {/* 2. Inner Content Container */}
                    <div className="relative rounded-[31px] bg-[#111111] md:py-20 py-10 px-6 text-center overflow-hidden">

                        {/* Background Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none bg-white/10"
                            
                        />

                        <div className="relative z-10">
                            <h2 className="text-xl md:text-4xl font-semibold tracking-wider mb-4 text-white">
                                Take Control of Your Crypto Security Today
                            </h2>
                            <p className="text-gray-400 max-w-lg mx-auto mb-10 text-sm md:text-base">
                                Start protecting your assets with the safest and simplest cold wallet solution — secure, private, and built for peace of mind.
                            </p>
                            <button className="bg-[#0055FF] hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(0,85,255,0.4)] transition-all hover:scale-105 active:scale-95 !cursor-pointer">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                {/* 2. MAIN FOOTER CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                    {/* Brand Info */}
                    <div className="md:col-span-4 ml-20">
                        <h3 className="text-xl font-bold mb-6 tracking-tighter">APEXSIM</h3>
                        <p className="text-gray-400 mb-8 max-w-xs">
                            Securely Protecting Your Digital Wealth, Today And Tomorrow.
                        </p>
                        <div className="flex gap-4">
                            {[Mail, Instagram, Send, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-[#1A1B1B] border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors !cursor-pointer">
                                    <Icon size={18} className="text-gray-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className='md:col-span-8 flex gap-10 absolute right-20 bottom-130'>
                        {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold mb-2 text-white">{title}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm !cursor-pointer">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    </div>
                </div>

                {/* 3. BOTTOM BAR */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 bg-black">
                    <p className="text-gray-500 text-xs tracking-widest uppercase">
                        COPYRIGHT 2025, ALL RIGHT RESERVED
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-500 hover:text-white text-xs tracking-widest uppercase !cursor-pointer">PRIVACY</a>
                        <a href="#" className="text-gray-500 hover:text-white text-xs tracking-widest uppercase !cursor-pointer">TERMS</a>
                    </div>
                </div>

                {/* 4. LARGE BACKGROUND TEXT */}
                <div className="mt-10 pointer-events-none select-none">
                    <h1 className="text-[12vw] font-bold text-white/[0.03] leading-none text-center tracking-tighter">
                        APEXSIM EXCHANGE
                    </h1>
                </div>
            </div>
        </footer>
    );
}