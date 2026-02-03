"use client";
import { useState } from 'react';
import { FaInfoCircle, FaSearch } from "react-icons/fa";
import TraderCard from './CopyTradingCards';
import { IoEyeSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

export default function CopyTradingPage() {
    const [activeTab, setActiveTab] = useState("ROI");

    return (
        <div className="min-h-screen bg-[#181818] text-white md:p-6 p-4 md:px-12 mt-5 font-manrope">
            <div className="max-w-[1400px] mx-auto">

                {/* TOP SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                    <div className="space-y-4">
                        <h1 className="md:text-3xl text-xl tracking-tight md:mb-8">Copy Trading</h1>

                        <div className="space-y-1">
                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                <span>Total Margin Balance</span>
                                <IoEyeSharp size={14} className="text-white cursor-pointer" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="md:text-3xl text-xl">0.000000 BTC</span>
                            </div>
                            <p className="text-gray-500 text-sm">≈$0.00</p>
                        </div>

                        <button className="bg-[#0055FF] px-6 py-2.5 rounded-md text-xs cursor-pointer ">
                            Copy Overview
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-60">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-50" size={14} />
                        <input
                            type="text"
                            placeholder="Search for currency pairs"
                            className="w-full bg-[#222222] py-5 pl-11 pr-4 text-xs focus:outline-none "
                        />
                    </div>
                </div>

                {/* TABS SECTION */}
                <div className="flex items-center overflow-x-auto gap-4 flex-nowrap whitespace-nowrap justify-between mb-8">
                    <div className='flex items-center'>
                        {["ROI", "PnL", "Win rate", "Number for copy traders", "Current holding position size"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-2.5 px-6 text-sm transition-all cursor-pointer relative ${activeTab === tab ? "text-white rounded-md bg-[#262628]" : "text-gray-500 hover:text-gray-300"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className="relative w-60 md:w-60">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-50" size={14} />
                            <input
                                type="text"
                                placeholder="Search for currency pairs"
                                className="w-full bg-[#222222] py-3 pl-11 pr-4 text-xs focus:outline-none "
                            />
                        </div>
                        <div className="relative w-20 md:w-20">
                            <input
                                type="text"
                                placeholder="7 days"
                                className="w-full bg-[#222222] py-3 pl-4 pr-4 text-xs focus:outline-none "
                            />
                            <FaCaretDown size={12} className='absolute top-3.5 right-3 '/>
                        </div>
                    </div>
                </div>

                {/* GRID SECTION: 3 Columns Desktop, 1 Column Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <TraderCard key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}