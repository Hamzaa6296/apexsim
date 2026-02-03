"use client";
import { useState } from 'react';
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { LuRepeat } from "react-icons/lu"; // For the grid icon
import BotTradingCard from './BotTradingCards';

export default function BotTradingPage() {
    return (
        <div className="min-h-screen bg-[#181818] text-white p-4 md:p-12 font-manrope">
            <div className="max-w-[1400px] mx-auto">

                {/* TOP HEADER SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-5">
                    <div className="space-y-4">
                        <h1 className="md:text-3xl text-xl font-semibold text-white tracking-tight">Bot Trading</h1>

                    </div>

                    <div className="relative w-full md:w-60">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-50" size={14} />
                        <input
                            type="text"
                            placeholder="Search for currency pairs"
                            className="w-full bg-[#222222] py-5 pl-11 pr-4 text-xs focus:outline-none "
                        />
                    </div>
                </div>

                {/* BOT TYPE SELECTOR SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {/* Spot Grid Card */}
                    <div className="bg-[#181818] border border-white/5 p-6 rounded-lg cursor-pointer ">
                        <img src='/images/rightnleft.png' className="text-[#0055FF] w-12 h-12 mb-3" />
                        <h3 className="font-bold text-lg mb-1">Spot Grid</h3>
                        <p className="text-gray-500 text-xs">Buy low and sell high, 24/7 availability</p>
                    </div>

                    {/* Futures Grid Card */}
                    <div className="bg-[#181818] border border-white/5 p-6 rounded-lg cursor-pointer ">
                        <img src='/images/rightnleft.png' className="text-[#0055FF] w-12 h-12  mb-3" />
                        <h3 className="font-bold text-lg mb-1">Futures Grid</h3>
                        <p className="text-gray-500 text-xs">Automate longs and short</p>
                    </div>
                </div>

                {/* MARKETPLACE SECTION HEADER */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                    <h2 className="text-white md:text-2xl text-xl font-semibold">Bot Marketplace</h2>
                </div>

                {/* GRID SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <BotTradingCard key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}