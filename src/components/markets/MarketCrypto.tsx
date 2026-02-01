"use client";
import React, { useState } from 'react';
import { Search, FileText } from 'lucide-react';
import { FaPlayCircle, FaCaretUp, FaCaretDown } from "react-icons/fa";

// --- STEP 1: THE SHARED UI COMPONENT ---
// This keeps your design EXACTLY as it was, but makes it reusable.
const MarketContent = ({ cardData, tableData }: { cardData: any[], tableData: any[] }) => {
    return (
        <>
            {/* Top Cards Grid (Always 4 cards as per your design) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {cardData.map((item, i) => (
                    <div key={i} className="bg-[#222222] rounded-xl p-5 hover:border-white/10 transition-all !cursor-pointer group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                                <img src={item.icon} alt="" className="w-8 h-8" />
                                <span className="text-sm font-bold text-gray-50">{item.pair}</span>
                            </div>
                            <span className="text-sm text-green-500">+0.46%</span>
                        </div>
                        <div className="text-2xl mb-1">{item.price}</div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold text-gray-500">{item.vol}</span>
                            <FaPlayCircle size={18} fill="currentColor" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Market Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[900px]">
                    <thead>
                        <tr className="text-gray-500 text-sm font-semibold border-b border-white/5">
                            <th className="text-left pb-4 font-medium">Trading pairs</th>
                            <th className="text-left pb-4 font-medium px-4">
                                <div className="flex items-center gap-1 !cursor-pointer">Last traded price <div className="flex flex-col"><FaCaretUp size={10} /><FaCaretDown size={10} /></div></div>
                            </th>
                            <th className="text-left pb-4 font-medium px-4">
                                <div className="flex items-center gap-1 !cursor-pointer">24H Change % <div className="flex flex-col"><FaCaretUp size={10} /><FaCaretDown size={10} /></div></div>
                            </th>
                            <th className="text-left pb-4 font-medium px-4">
                                <div className="flex items-center gap-1 !cursor-pointer">24H High <div className="flex flex-col"><FaCaretUp size={10} /><FaCaretDown size={10} /></div></div>
                            </th>
                            <th className="text-left pb-4 font-medium px-4">
                                <div className="flex items-center gap-1 !cursor-pointer">24H Low <div className="flex flex-col"><FaCaretUp size={10} /><FaCaretDown size={10} /></div></div>
                            </th>
                            <th className="text-left pb-4 font-medium px-4">
                                <div className="flex items-center gap-1 !cursor-pointer">Market Volume <div className="flex flex-col"><FaCaretUp size={10} /><FaCaretDown size={10} /></div></div>
                            </th>
                            <th className="text-left pb-4 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.02]">
                        {tableData.map((row, idx) => (
                            <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="py-5">
                                    <div className="flex items-center gap-3">
                                        <img src={row.icon} className="w-7 h-7" alt="" />
                                        <span className="font-bold text-sm tracking-tight">{row.pair}</span>
                                    </div>
                                </td>
                                <td className="py-5 px-4 font-bold text-sm">{row.price}</td>
                                <td className="py-5 px-4 font-bold text-sm text-green-500">{row.change}</td>
                                <td className="py-5 px-4 font-bold text-sm">{row.high}</td>
                                <td className="py-5 px-4 font-bold text-sm">{row.low}</td>
                                <td className="py-5 px-4 font-bold text-sm">{row.volume}</td>
                                <td className="py-5">
                                    <div className="flex items-center gap-3">
                                        <button className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors !cursor-pointer">
                                            <FileText size={16} />
                                        </button>
                                        <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all !cursor-pointer">
                                            Trade
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

// --- MAIN COMPONENT ---
export default function MarketComponent() {
    const [activeCategory, setActiveCategory] = useState("Crypto");
    const [activeTab, setActiveTab] = useState("Favorites");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ["Crypto", "Forex", "Commodities", "Stocks", "Indices"];
    const subTabs = ["Favorites", "Spot", "Futures"];

    // --- STEP 2: BACKEND-FRIENDLY DATA STRUCTURE ---
    // This allows you to define different content for every single button.
    // If data isn't found for a category, it defaults to the original Crypto data.
    const getMarketContent = (category: string, tab: string) => {
        // This is where you would normally put your different data for Forex, Stocks, etc.
        // For this example, I am keeping your exact original data.
        const originalCards = [
            { pair: "BTC / USDT", price: "$88,259.95", vol: "24h Vol $16,585,576", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
            { pair: "ETH / USDT", price: "$2,959.95", vol: "24h Vol $16,585,576", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
            { pair: "AVAX / USDT", price: "$1.36", vol: "24h Vol $16,585,576", icon: "https://cryptologos.cc/logos/avalanche-avax-logo.png" },
            { pair: "SOL / USDT", price: "$126.10", vol: "24h Vol $16,585,576", icon: "https://cryptologos.cc/logos/solana-sol-logo.png" },
        ];

        const originalTableRows = [
            { pair: "BTC/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
            { pair: "ETH/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
            { pair: "AVAX/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/avalanche-avax-logo.png" },
            { pair: "SOL/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/solana-sol-logo.png" },
            { pair: "XRP/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png" },
            { pair: "USDC/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png" },
            { pair: "ADA/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/cardano-ada-logo.png" },
            { pair: "BCH/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png" },
            { pair: "XLM/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/stellar-xlm-logo.png" },
            { pair: "LINK/USDT", price: "$89,846", change: "+4.90%", high: "$89,846", low: "$89,846", volume: "1.7 B", icon: "https://cryptologos.cc/logos/chainlink-link-logo.png" },
        ];

        return { cards: originalCards, table: originalTableRows };
    };

    const currentData = getMarketContent(activeCategory, activeTab);

    return (
        <div className="bg-[#181818] min-h-screen text-white p-4 md:p-10 font-manrope">
            <div className="max-w-[1300px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h1 className="text-3xl font-bold">Market</h1>
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-50" size={18} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for currency pairs"
                            className="bg-[#222222] w-full rounded-sm py-5 pl-12 pr-10 text-sm outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600"
                        />
                    </div>
                </div>

                {/* Level 1: Categories */}
                <div className="flex mb-10 w-fit overflow-hidden rounded-lg">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`md:px-6 px-3.5 py-5 md:text-[14px] text-xs font-semibold transition-all !cursor-pointer 
                                ${activeCategory === cat ? "bg-[#2B2B2B] text-white" : "bg-[#1E1E1E] text-gray-500 hover:text-gray-300"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Level 2: Sub Tabs */}
                <div className="flex items-center justify-between mb-6 border-b border-white/5">
                    <div className="flex gap-6">
                        {subTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 text-sm font-semibold transition-all relative !cursor-pointer ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                            >
                                {tab}
                                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-500 rounded-full" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- STEP 3: DYNAMIC CONTENT --- */}
                {/* This section will re-render with "Forex" or "Stocks" data when you update getMarketContent */}
                <MarketContent cardData={currentData.cards} tableData={currentData.table} />
            </div>
        </div>
    );
}