"use client";
import React, { useState } from 'react';
import { FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { RiSettingsFill } from "react-icons/ri";
import SettingsModal from '../spot-trading/TradingSetting';
import { FaCalculator } from "react-icons/fa";
import TradingCalculator from './CalculatorModel';
import PreferenceModal from './PreferenceModel';

type OrderType = "Limit order" | "Market order" | "Stop order";

export default function TradeForm() {
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const [tab, setTab] = useState<"Open" | "Close">("Open");
    const [orderType, setOrderType] = useState<OrderType>("Limit order");
    const [isCalcOpen, setIsCalcOpen] = useState(false);

    return (
        <div className="w-full md:w-[320px] bg-[#181818] p-4 flex flex-col gap-4 h-auto select-none font-sans text-gray-300">

            {/* 1. Margin Type & Leverage Dropdowns */}
            <div className="flex gap-2">
                <div className="flex-1 flex items-center justify-between bg-[#24262b] px-3 py-1.5 rounded cursor-pointer border border-transparent hover:border-white/10">
                    <span className="text-sm">Cross</span>
                    <FaCaretDown size={12} className="text-gray-500" />
                </div>
                <div className="flex-1 flex items-center justify-between bg-[#24262b] px-3 py-1.5 rounded cursor-pointer border border-transparent hover:border-white/10">
                    <span className="text-sm">5x</span>
                    <FaCaretDown size={12} className="text-gray-500" />
                </div>
            </div>
            <div onClick={() => setIsCalcOpen(true)} className="absolute md:top-27 right-15 text-white">
                <FaCalculator size={20} className="cursor-pointer text-white" />
            </div>
            <div className="absolute md:top-27 right-5 text-white">
                <RiSettingsFill onClick={() => setIsSettingOpen(true)} size={22} className="cursor-pointer text-white" />
            </div>

            {/* 2. Open/Close Tabs */}
            <div className="flex bg-[#24262b] rounded-md ">
                <button
                    onClick={() => setTab('Open')}
                    className={`flex-1 py-1.5 text-sm font-semibold rounded cursor-pointer transition-all ${tab === 'Open' ? 'bg-[#00B595] text-white' : 'text-gray-400'
                        }`}
                >Open</button>
                <button
                    onClick={() => setTab('Close')}
                    className={`flex-1 py-1.5 text-sm font-semibold rounded cursor-pointer transition-all ${tab === 'Close' ? 'bg-[#323539] text-white' : 'text-gray-400'
                        }`}
                >Close</button>
            </div>

            {/* 3. Order Type Tabs */}
            <div className="flex justify-between text-[12px] font-medium text-gray-500 border-b border-white/5 pb-2">
                {(["Limit order", "Market order", "Stop order"] as OrderType[]).map((t) => (
                    <span
                        key={t}
                        onClick={() => setOrderType(t)}
                        className={`cursor-pointer transition-colors ${orderType === t ? 'text-white' : 'hover:text-gray-300'}`}
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* 4. Available Row */}
            <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                    <span className="text-gray-500">Avbl</span>
                    <span className="text-white">9,500.0564107 USDT</span>
                    <HiOutlineSwitchHorizontal size={14} className="text-[#00B595] cursor-pointer" />
                </div>

            </div>

            {/* 5. Input Fields */}
            <div className="space-y-3">
                <div className="relative">
                    <input placeholder='Price' className="w-full bg-[#1E2023] border border-transparent rounded-md p-2.5 text-sm outline-none focus:border-white/10" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-gray-500">USDT</span>
                </div>
                <div className="relative">
                    <input placeholder='Size' className="w-full bg-[#1E2023] border border-transparent rounded-md p-2.5 text-sm outline-none focus:border-white/10" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-gray-500">BTC</span>
                </div>
            </div>

            {/* 6. Percentage Slider */}
            <div className="relative h-6 flex items-center px-1 cursor-pointer">
                <div className="absolute w-full h-[2px] bg-[#2d3036] rounded" />
                <div className="absolute w-full flex justify-between z-10">
                    {[0, 25, 50, 75, 100].map((i) => (
                        <div key={i} className={`w-[12px] h-[12px] rotate-45 rounded-sm border-2 ${i === 0 ? 'bg-[#121212] border-[#00B595]' : 'bg-[#121212] border-[#2d3036]'}`} />
                    ))}
                </div>
            </div>

            {/* 7. Total Field */}
            <div className="relative">
                <input placeholder='Total' className="w-full bg-[#1E2023] border border-transparent rounded-md p-2.5 text-sm outline-none" />
            </div>

            {/* 8. Advanced & Max Info */}
            <div className="space-y-2">
                <div className="flex items-center gap-1 text-[13px] text-gray-300 cursor-pointer">
                    <span className="font-semibold">Advanced options</span>
                    <FaCaretDown size={12} className="text-gray-500" />
                </div>
                <div className="flex justify-between text-[13px]">
                    <div className="flex gap-1.5"><span className="text-[#00B595] font-medium">Max Buy</span> <span className="text-white">0 BTC</span></div>
                    <div className="flex gap-1.5"><span className="text-[#ef5350] font-medium">Max Sell</span> <span className="text-white">0 BTC</span></div>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-gray-400 cursor-pointer">
                    <div className="w-3.5 h-3.5 rounded-full border border-gray-600" />
                    <span>TP/SL</span>
                </div>
            </div>

            {/* 9. Action Buttons */}
            <div className="flex gap-3">
                <button className="flex-1 py-2.5 bg-[#00B595] text-white rounded font-bold text-sm cursor-pointer active:scale-95 transition-all">Open long</button>
                <button className="flex-1 py-2.5 bg-[#ef5350] text-white rounded font-bold text-sm cursor-pointer active:scale-95 transition-all">Open short</button>
            </div>

            <div className="flex justify-between  text-[12px] text-white font-medium">
                <div className="flex gap-1"><span className="text-gray-500">Cost</span> 0 USDT</div>
                <div className="flex gap-1"><span className="text-gray-500">Cost</span> 0 USDT</div>
            </div>
            <div className="flex justify-between mb-10 text-[12px] text-white font-medium">
                <div className="flex gap-1"><span className="text-gray-500">Liq Price</span> 0 USDT</div>
                <div className="flex gap-1"><span className="text-gray-500">Liq Price</span> 0 USDT</div>
            </div>

            {/* 10. Balance Section */}
            <div className="pt-4 mt-2 border-t border-white/5 space-y-2">
                <h3 className="text-sm font-bold text-white">Balance USDT</h3>
                <div className="flex justify-between text-[12px] text-gray-400">
                    <span className="underline decoration-dotted">Total Balance</span>
                    <span className="text-white">0.00 USDT</span>
                </div>
                <div className="flex justify-between text-[12px] text-gray-400">
                    <span className="underline decoration-dotted">Wallet Balance</span>
                    <span className="text-white">0.00 USDT</span>
                </div>
                <div className="flex justify-between text-[12px] text-gray-400">
                    <span className="underline decoration-dotted">PnL</span>
                    <span className="text-white">0.00 USDT</span>
                </div>
                <div className="flex gap-2 pt-1">
                    <button className="flex-1 py-1.5 bg-[#24262b] rounded text-[13px] font-medium cursor-pointer">Deposit</button>
                    <button className="flex-1 py-1.5 bg-[#24262b] rounded text-[13px] font-medium cursor-pointer">Transfer</button>
                </div>
            </div>

            {/* 11. Information Section */}
            <div className="pt-4 space-y-2">
                <h3 className="text-sm font-bold text-white">Information</h3>
                <div className="flex justify-between text-[12px]">
                    <span className="text-gray-500">Symbol</span>
                    <span className="text-white">BTC/USDT</span>
                </div>
                <div className="flex justify-between text-[12px]">
                    <span className="text-gray-500">Expiry date</span>
                    <span className="text-white">Perpetual</span>
                </div>
                <div className="flex justify-between text-[12px]">
                    <span className="text-gray-500">Tick root</span>
                    <span className="text-white">BTCUSDT Index</span>
                </div>
            </div>

            <PreferenceModal isOpen={isSettingOpen} onClose={() => setIsSettingOpen(false)} />
            <TradingCalculator
                isOpen={isCalcOpen}
                onClose={() => setIsCalcOpen(false)}
            />
        </div>
    );
}