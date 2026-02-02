"use client";
import React, { useState } from 'react';
import { FaPlusCircle, FaBitcoin, FaCaretDown } from "react-icons/fa";
import { RiSettingsFill } from "react-icons/ri";
import SettingsModal from './TradingSetting'

type OrderType = "Limit" | "Market" | "Stop limit";

export default function TradeForm() {
    const [isSettingOpen, setIsSettingOpen] = useState(false)
    const [side, setSide] = useState<"buy" | "sell">("buy");
    const [orderType, setOrderType] = useState<OrderType>("Limit");

    return (
        <div className="w-full md:w-[320px] bg-[#181818] p-3 flex flex-col gap-4 h-full select-none font-sans">
            {/* 1. Top Tabs (Spot/Futures) */}
            <div className="flex gap-4 text-[13px] font-semibold border-b border-white/5">
                <div className="relative pb-2 !cursor-pointer">
                    <span className="text-white">Spot</span>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00B595]" />
                </div>
                <span className="text-gray-500 hover:text-gray-300 !cursor-pointer">Futures</span>
            </div>


            <div className="absolute md:top-28 right-10 text-white">
                <RiSettingsFill onClick={() => (setIsSettingOpen(true))} size={22} className="!cursor-pointer text-gray-50 hover:text-white" />
            </div>

            {/* 2. Buy/Sell Toggle */}
            <div className="flex bg-[#1e2023] rounded-md">
                <button
                    onClick={() => setSide('buy')}
                    className={`flex-1 py-2.5 text-md  rounded !cursor-pointer transition-all ${side === 'buy' ? 'bg-white text-black' : 'text-gray-400'
                        }`}
                >Buy BTC</button>
                <button
                    onClick={() => setSide('sell')}
                    className={`flex-1 py-2.5 text-md  rounded cursor-pointer transition-all ${side === 'sell' ? 'bg-[#323539] text-white' : 'text-gray-400'
                        }`}
                >Sell BTC</button>
            </div>

            <div className="space-y-3.5">
                {/* 3. Order Type Selection (Functional) */}
                <div className="flex gap-4 text-[13px] font-semibold uppercase tracking-wider">
                    {(["Limit", "Market", "Stop limit"] as OrderType[]).map((t) => (
                        <span
                            key={t}
                            onClick={() => setOrderType(t)}
                            className={`cursor-pointer transition-colors ${orderType === t ? 'text-white ' : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* 4. Available Balance */}
                <div className="flex gap-2 text-[12px] text-gray-500 items-center">
                    <span>Avbl <span className="text-gray-300 font-medium">9,500.0564107 USDT</span></span>
                    <FaPlusCircle className="text-[#3b82f6] !cursor-pointer hover:text-blue-400" size={11} />
                </div>

                {/* 5. Dynamic Input Fields based on Order Type */}
                <div className="flex flex-col gap-3">
                    {orderType === "Limit" && (
                        <>
                            {/* Price Field */}
                            <div className="relative group">

                                <input placeholder='Price' type="text" className="w-full bg-[#181B1F] border border-white/10 rounded-md p-2.5  text-white text-sm outline-none focus:border-[#3b82f6]" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[16px] text-gray-300">USDT 19972.90</span>
                            </div>
                            {/* Amount Field */}
                            <div className="relative group">

                                <input placeholder='Amount' type="text" className="w-full bg-[#181B1F] border border-white/10 rounded-md p-2.5 text-white text-sm outline-none focus:border-[#3b82f6]" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[16px] text-gray-300">BTC</span>
                            </div>
                        </>
                    )}

                    {orderType === "Market" && (
                        <div className="relative group">
                            {/* Market Dropdown Mockup from Image */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 !cursor-pointer">
                                <FaBitcoin className="text-[#f7931a]" size={22} />
                                <span className="text-[17px] text-white">BTC</span>
                                <FaCaretDown className="text-gray-500" size={18} />
                            </div>
                            <input placeholder='Value' type="text" readOnly className="w-full bg-[#181B1F] border border-white/10 rounded-md p-2.5 text-white text-md outline-none" />
                        </div>
                    )}

                    {orderType === "Stop limit" && (
                        <div className="h-[88px] flex items-center justify-center border border-dashed border-white/10 rounded-md">
                            <span className="text-gray-600 text-[10px]">No parameters for Stop Limit</span>
                        </div>
                    )}
                </div>

                {/* 6. Percentage Slider (Pixel Perfect Diamonds) */}
                <div className="relative h-6 flex items-center mt-2 px-1 !cursor-pointer">
                    <div className="absolute w-full h-[2px] bg-[#2d3036] rounded" />
                    <div className="absolute w-full flex justify-between z-10">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`w-[15px] h-[15px] rotate-45 rounded-sm border-3 ${i === 0
                                    ? 'bg-[#141517] border-[#34C759]'
                                    : 'bg-[#141517] border-[#2d3036]'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* 7. Total Field (Dynamic placeholder) */}
                <div className="relative">
                    <input
                        type="text"
                        className="w-full bg-[#181B1F] border border-white/5 rounded-md p-2.5 text-md text-white outline-none"
                        placeholder={orderType === "Market" ? "Max buying amount" : "Total"}
                    />
                </div>

                {/* 8. Advanced Options & Max Buy */}
                <div className="flex flex-col gap-2 pt-1">
                    <div className="flex items-center gap-2 !cursor-pointer group">
                        <input type='radio' className="w-3.5 h-3.5 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-gray-400" />
                        <span className="text-[17px] text-gray-50 font-medium">{orderType === "Market" ? "Max slippage" : "Advanced options"}</span>
                    </div>
                    <div className="flex gap-2 text-[17px] mt-1">
                        <span className="text-gray-500">Max Buy</span>
                        <span className="text-white">0 BTC</span>
                    </div>
                </div>

                {/* 9. Execution Button (Gradient matched to Image) */}
                <button className={`w-full py-3 rounded-md  text-[16px] cursor-pointer transition-all active:scale-[0.98] ${side === 'buy'
                    ? 'bg-gradient-to-r from-[#0052ff] to-[#0070ff] text-white shadow-[0_4px_12px_rgba(0,82,255,0.3)]'
                    : 'bg-[#ef5350] text-white'
                    }`}>
                    {side === 'buy' ? 'Buy BTC' : 'Sell BTC'}
                </button>

                {/* 10. Secondary Actions */}
                <div className="flex gap-2.5 pt-1 ">
                    <button className="flex-1 py-2 bg-[#24262b] rounded-md text-[15px]  text-gray-300 hover:bg-[#2d3036] cursor-pointer transition-colors">Deposit</button>
                    <button className="flex-1 py-2 bg-[#24262b] rounded-md text-[15px] text-gray-300 hover:bg-[#2d3036] cursor-pointer transition-colors">Transfer</button>
                </div>

                {/* 11. Balance Footer (Only in Market View) */}
                {orderType === "Market" && (
                    <div className="pt-2 flex flex-col gap-1 border-t border-white/5 mt-2">
                        <div className="flex justify-between text-[11px]">
                            <span className="text-gray-500 border-b border-dotted border-gray-700">USDT Balance</span>
                            <span className="text-white font-medium">**** USDT</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                            <span className="text-gray-500 border-b border-dotted border-gray-700">BTC Balance</span>
                            <span className="text-white font-medium">**** BTC</span>
                        </div>
                    </div>
                )}
            </div>
            <SettingsModal
                isOpen={isSettingOpen}
                onClose={() => setIsSettingOpen(false)}
            />
        </div>
    );
}