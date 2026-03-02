"use client";
import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { FaPlayCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const PairIcon = ({ icons }: { icons: string[] }) => {
    if (icons.length === 1) return <img src={icons[0]} className="w-7 h-7 rounded-full object-cover" alt="" />;

    return (
        <div className="relative flex items-center w-10 h-7">

            <img
                src={icons[0]}
                className="w-7 h-7 rounded-full border-2 border-[#181818] z-0 object-cover"
                alt="base"
            />

            <img
                src={icons[1]}
                className="w-7 h-7 rounded-full border-2 border-[#181818] -ml-3 z-10 object-cover"
                alt="quote"
            />
        </div>
    );
};

const MarketContent = ({ cardData, tableData }: { cardData: any[], tableData: any[] }) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {cardData.map((item, i) => (
                    <div key={i} className="bg-[#222222] rounded-xl p-5 cursor-pointer group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                                <PairIcon icons={item.icons} />
                                <span className="text-sm font-bold text-gray-50 ml-1">{item.pair}</span>
                            </div>
                            <span className="text-sm text-green-500">{item.change || "+0.46%"}</span>
                        </div>
                        <div className="text-2xl mb-1">{item.price}</div>
                        <div className="flex justify-between items-center text-gray-500 ">
                            <span className="text-sm font-semibold">{item.vol}</span>
                            <FaPlayCircle size={18} fill="currentColor" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-225">
                    <thead>
                        <tr className="text-gray-500 text-sm font-semibold border-b border-white/5">
                            <th className="text-left pb-4 font-medium">Trading pairs</th>
                            <th className="text-left pb-4 font-medium px-4">Last traded price</th>
                            <th className="text-left pb-4 font-medium px-4">24H Change %</th>
                            <th className="text-left pb-4 font-medium px-4">24H High</th>
                            <th className="text-left pb-4 font-medium px-4">24H Low</th>
                            <th className="text-left pb-4 font-medium px-4">Market Volume</th>
                            <th className="text-left pb-4 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.02]">
                        {tableData.map((row, idx) => (
                            <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="py-5">
                                    <div className="flex items-center gap-3">
                                        <PairIcon icons={row.icons} />
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
                                        <button className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer">
                                            <FileText size={16} />
                                        </button>
                                        <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all cursor-pointer">
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

export default function MarketComponent() {
    const [activeCategory, setActiveCategory] = useState("Crypto");
    const [activeTab, setActiveTab] = useState("Favorites");

    const categories = ["Crypto", "Forex", "Commodities", "Stocks", "Indices"];
    const subTabs = ["Favorites", "Spot", "Futures"];

    const getMarketContent = (category: string) => {
        if (category === "Forex") {
            return {
                cards: [
                    { pair: "EUR/USD", price: "1.0854", vol: "24h Vol $95B", icons: ["https://flagcdn.com/w80/eu.png", "https://flagcdn.com/w80/us.png"], change: "+0.12%" },
                    { pair: "GBP/USD", price: "1.2632", vol: "24h Vol $64B", icons: ["https://flagcdn.com/w80/gb.png", "https://flagcdn.com/w80/us.png"], change: "-0.05%" },
                    { pair: "USD/JPY", price: "150.12", vol: "24h Vol $82B", icons: ["https://flagcdn.com/w80/us.png", "https://flagcdn.com/w80/jp.png"], change: "+0.45%" },
                    { pair: "AUD/USD", price: "0.6542", vol: "24h Vol $31B", icons: ["https://flagcdn.com/w80/au.png", "https://flagcdn.com/w80/us.png"], change: "+0.18%" },
                ],
                table: [
                    { pair: "EUR/USD", price: "1.0854", change: "+0.12%", high: "1.0890", low: "1.0820", volume: "95 B", icons: ["https://flagcdn.com/w80/eu.png", "https://flagcdn.com/w80/us.png"] },
                    { pair: "GBP/USD", price: "1.2632", change: "-0.05%", high: "1.2680", low: "1.2610", volume: "64 B", icons: ["https://flagcdn.com/w80/gb.png", "https://flagcdn.com/w80/us.png"] },
                    { pair: "USD/JPY", price: "150.12", change: "+0.45%", high: "150.50", low: "149.80", volume: "82 B", icons: ["https://flagcdn.com/w80/us.png", "https://flagcdn.com/w80/jp.png"] },
                    { pair: "EUR/GBP", price: "0.8590", change: "+0.08%", high: "0.8610", low: "0.8570", volume: "42 B", icons: ["https://flagcdn.com/w80/eu.png", "https://flagcdn.com/w80/gb.png"] },
                ]
            };
        }


        return {
            cards: [
                { pair: "BTC / USDT", price: "$88,259.95", vol: "24h Vol $16,585,576", icons: ["/images/bitcoin.png"] },
                { pair: "ETH / USDT", price: "$2,959.95", vol: "24h Vol $12,585,576", icons: ["/images/etherium.png"] },
                { pair: "AVAX / USDT", price: "$36.36", vol: "24h Vol $2,585,576", icons: ["/images/red.png"] },
                { pair: "SOL / USDT", price: "$126.10", vol: "24h Vol $5,585,576", icons: ["/images/dog.png"] },
            ],
            table: [
                { pair: "BTC/USDT", price: "$89,846", change: "+4.90%", high: "$91,000", low: "$88,000", volume: "1.7 B", icons: ["/images/bitcoin.png"] },
                { pair: "ETH/USDT", price: "$2,959", change: "+2.10%", high: "$3,050", low: "$2,850", volume: "800 M", icons: ["/images/etherium.png"] },
                { pair: "XRP/USDT", price: "$0.54", change: "+1.20%", high: "$0.56", low: "$0.52", volume: "400 M", icons: ["/images/red.png"] },
            ]
        };
    };

    const currentData = getMarketContent(activeCategory);

    return (
        <div className="bg-[#181818] min-h-screen text-white p-4 md:p-10 font-manrope">
            <div className="max-w-[1300px] mx-auto">
                <div className='flex items-center justify-between'>
                    <h1 className="text-3xl font-bold mb-6">Market</h1>

                    
                    
                </div>


                <div className="flex mb-10 w-fit overflow-hidden rounded-lg">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`md:px-6 px-3.5 py-5 md:text-[14px] text-[12px] font-semibold transition-all cursor-pointer 
                                ${activeCategory === cat ? "bg-[#2B2B2B] text-white" : "bg-[#1E1E1E] text-gray-500 hover:text-gray-300"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <div className="flex items-center gap-6 mb-6 border-b border-white/5">
                    {subTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-sm font-semibold transition-all relative cursor-pointer ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            {tab}
                            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-500 rounded-full" />}
                        </button>
                    ))}
                </div>

                <MarketContent cardData={currentData.cards} tableData={currentData.table} />
            </div>
        </div>
    );
}