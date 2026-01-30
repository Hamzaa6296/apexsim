"use client";
import React from 'react';
import Image from 'next/image';


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
                <div className="relative p-[1px] rounded-[35px] mb-15 overflow-hidden group ">
                    {/* 1. The Shiny Gradient Border Overlay (Top-left highlight) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/5 to-transparent mx-30 rounded-[30px] opacity-100" />

                    {/* 2. Inner Content Container */}
                    <div className="relative rounded-[31px] bg-[#111111] md:py-20 py-10 px-6 mx-30 text-center overflow-hidden">

                        {/* Background Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none bg-white/10"

                        />

                        <div className="relative z-10">
                            <h2 className="text-xl md:text-4xl font-semibold tracking-wider mb-4 text-white">
                                Take Control of Your Crypto Security Today
                            </h2>
                            <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm md:text-lg">
                                Start protecting your assets with the safest and simplest cold wallet solution — secure, private, and built for peace of mind.
                            </p>
                            <button className="bg-[#0055FF] hover:bg-blue-600 text-white px-12 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,85,255,0.4)] transition-all hover:scale-105 active:scale-95 !cursor-pointer">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                {/* 2. MAIN FOOTER CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-50">

                    {/* Brand Info */}
                    <div className="md:col-span-4 ml-20">
                        <h3 className="text-2xl font-bold mb-3 tracking-wide">APEXSIM</h3>
                        <p className="text-gray-400 mb-3 leading-6 max-w-xs">
                            Securely Protecting Your Digital Wealth, Today And Tomorrow.
                        </p>
                        <div className="flex gap-2">
                            {[
                                { src: "/images/gmail.png", alt: "Mail" },
                                { src: "/images/insta.png", alt: "Instagram" },
                                { src: "/images/telegram.png", alt: "Telegram" },
                                { src: "/images/twitter.png", alt: "Twitter" }
                            ].map((img, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-[#353B40]  flex items-center justify-center hover:bg-white/10 transition-colors !cursor-pointer group"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-5 h-5 object-contain  group-hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className='md:col-span-8 flex gap-10 md:absolute md:right-25 md:bottom-77'>
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="font-semibold mb-2 text-xl text-white">{title}</h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-gray-500 hover:text-white transition-colors text-md !cursor-pointer">
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
                    <h1 className="text-[8vw] font-bold text-white/[0.03] leading-none text-center tracking-tighter">
                        APEXSIM EXCHANGE
                    </h1>
                </div>
            </div>
        </footer>
    );
}