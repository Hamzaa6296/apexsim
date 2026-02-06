"use client";
import React, { useState } from 'react';
import { FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { RiSettingsFill } from "react-icons/ri";
import SettingsModal from '../spot-trading/TradingSetting';
import { FaCalculator } from "react-icons/fa";
import TradingCalculator from './CalculatorModel';
import PreferenceModal from './PreferenceModel';
import LeverageModal from './LeverageModel'; 
import MarginModeModal from './MarginModeModel';

type OrderType = "Limit order" | "Market order" | "Stop order";

export default function TradeForm() {
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const [tab, setTab] = useState<"Open" | "Close">("Open");
    const [orderType, setOrderType] = useState<OrderType>("Limit order");
    const [isCalcOpen, setIsCalcOpen] = useState(false);


    // State for Leverage Modal
    const [isLeverageOpen, setIsLeverageOpen] = useState(false);
    const [isMarginModeOpen, setIsMarginModeOpen] = useState(false);
    // Function to handle the transition from Preference to Leverage
    const handleOpenLeverageFromPreference = () => {
        setIsSettingOpen(false);
        setIsLeverageOpen(true);
    };

    const handleLeverageConfirm = () => {
        setIsLeverageOpen(false); // Close leverage
        setIsMarginModeOpen(true); // Open margin mode modal
    };

    return (
        <div className="w-full md:w-[320px] bg-[#181818] p-4 flex flex-col gap-4 h-auto select-none font-sans text-gray-300 md:relative">

            {/* 1. Header: Margin, Leverage & Tools */}
            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-1 gap-2">
                    <div className="flex-1 flex items-center justify-between bg-[#24262b] px-3 py-1.5 rounded cursor-pointer border border-transparent hover:border-white/10">
                        <span className="text-sm font-medium">Cross</span>
                        <FaCaretDown size={12} className="text-gray-500" />
                    </div>
                    {/* Direct Leverage Trigger */}
                    <div
                        onClick={() => setIsLeverageOpen(true)}
                        className="flex-1 flex items-center justify-between bg-[#24262b] px-3 py-1.5 rounded cursor-pointer border border-transparent hover:border-white/10 transition-colors"
                    >
                        <span className="text-sm font-medium">5x</span>
                        <FaCaretDown size={12} className="text-gray-500" />
                    </div>
                </div>

                <div className="md:absolute md:right-5 md:-top-14 flex items-center gap-3 ml-1">
                    <FaCalculator
                        onClick={() => setIsCalcOpen(true)}
                        size={18}
                        className="cursor-pointer text-white hover:text-white transition-colors"
                    />
                    <RiSettingsFill
                        onClick={() => setIsSettingOpen(true)}
                        size={20}
                        className="cursor-pointer text-white hover:text-white transition-colors"
                    />
                </div>
            </div>

            {/* ... sections 2 through 11 remain identical ... */}
            {/* [Your existing tabs, inputs, and action buttons go here] */}

            {/* 2. Open/Close Tabs */}
            <div className="flex bg-[#24262b] rounded-md ">
                <button onClick={() => setTab('Open')} className={`flex-1 py-1.5 text-sm font-semibold rounded cursor-pointer transition-all active:scale-[0.98] ${tab === 'Open' ? 'bg-[#00B595] text-white' : 'text-gray-400'}`}>Open</button>
                <button onClick={() => setTab('Close')} className={`flex-1 py-1.5 text-sm font-semibold rounded cursor-pointer transition-all active:scale-[0.98] ${tab === 'Close' ? 'bg-[#00B595] text-white' : 'text-gray-400'}`}>Close</button>
            </div>

            {/* 3. Order Type Tabs */}
            <div className="flex justify-between items-center text-[12px] font-medium text-gray-500 border-b border-white/5 pb-2 overflow-x-auto no-scrollbar whitespace-nowrap gap-4">
                {(["Limit order", "Market order", "Stop order"] as OrderType[]).map((t) => (
                    <span key={t} onClick={() => setOrderType(t)} className={`cursor-pointer transition-colors pb-1 ${orderType === t ? 'text-white border-b border-[#00B595]' : 'hover:text-gray-300'}`}>{t}</span>
                ))}
            </div>

            {/* 4. Available Row */}
            <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5"><span className="text-gray-500">Avbl</span><span className="text-white">9,500.05 USDT</span></div>
                <HiOutlineSwitchHorizontal size={14} className="text-[#00B595] cursor-pointer" />
            </div>

            {/* 5. Input Fields */}
            <div className="space-y-3">
                <div className="relative">
                    <input type="text" placeholder='Price' className="w-full bg-[#1E2023] border border-white/5 rounded-md p-2.5 text-sm outline-none" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-gray-500">USDT</span>
                </div>
                <div className="relative">
                    <input type="text" placeholder='Size' className="w-full bg-[#1E2023] border border-white/5 rounded-md p-2.5 text-sm outline-none" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-gray-500">BTC</span>
                </div>
            </div>

            {/* 6. Percentage Slider */}
            <div className="relative h-6 flex items-center px-1 cursor-pointer my-1">
                <div className="absolute w-full h-[2px] bg-[#2d3036] rounded" />
                <div className="absolute w-full flex justify-between z-10">
                    {[0, 25, 50, 75, 100].map((i) => (
                        <div key={i} className={`w-[10px] h-[10px] rotate-45 rounded-sm border-2 transition-colors ${i === 0 ? 'bg-[#121212] border-[#00B595]' : 'bg-[#121212] border-[#2d3036] hover:border-gray-500'}`} />
                    ))}
                </div>
            </div>

            {/* 7. Total Field */}
            <div className="relative">
                <input placeholder='Total' className="w-full bg-[#1E2023] border border-white/5 rounded-md p-2.5 text-sm outline-none" />
            </div>

            {/* 8. Advanced & Max Info */}
            <div className="space-y-3">
                <div className="flex items-center gap-1 text-[13px] text-gray-300 cursor-pointer hover:text-white">
                    <span className="font-semibold">Advanced options</span>
                    <FaCaretDown size={12} className="text-gray-500" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-[12px] bg-[#24262b]/30 p-2 rounded">
                    <div className="flex flex-col gap-0.5"><span className="text-[#00B595] font-medium">Max Buy</span><span className="text-white font-mono">0.00 BTC</span></div>
                    <div className="flex flex-col gap-0.5 text-right"><span className="text-[#ef5350] font-medium">Max Sell</span><span className="text-white font-mono">0.00 BTC</span></div>
                </div>
            </div>

            {/* 9. Action Buttons */}
            <div className="flex gap-3">
                <button className="flex-1 py-3 bg-[#00B595] text-white rounded font-bold text-sm cursor-pointer active:scale-95 transition-all shadow-lg shadow-[#00B595]/10">Open long</button>
                <button className="flex-1 py-3 bg-[#ef5350] text-white rounded font-bold text-sm cursor-pointer active:scale-95 transition-all shadow-lg shadow-[#ef5350]/10">Open short</button>
            </div>

            {/* 10. Balance Section */}
            <div className="pt-4 border-t border-white/5 space-y-2.5">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Asset Balance</h3>
                <div className="space-y-2">
                    {[{ label: "Total Balance", value: "0.00 USDT" }, { label: "Wallet Balance", value: "0.00 USDT" }, { label: "Unrealized PnL", value: "0.00 USDT" }].map((item) => (
                        <div key={item.label} className="flex justify-between text-[12px]">
                            <span className="text-gray-500 underline decoration-gray-700 decoration-dotted underline-offset-4">{item.label}</span>
                            <span className="text-white font-medium">{item.value}</span>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 pt-2">
                    <button className="flex-1 py-2 bg-[#24262b] hover:bg-[#2d3036] rounded text-[12px] font-semibold cursor-pointer active:scale-95 transition-colors">Deposit</button>
                    <button className="flex-1 py-2 bg-[#24262b] hover:bg-[#2d3036] rounded text-[12px] font-semibold cursor-pointer active:scale-95 transition-colors">Transfer</button>
                </div>
            </div>

            {/* 11. Information Section */}
            <div className="pt-4 border-t border-white/5 space-y-2 pb-6">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Contract Info</h3>
                <div className="flex justify-between text-[12px]">
                    <span className="text-gray-500">Symbol</span><span className="text-white">BTC/USDT</span>
                </div>
                <div className="flex justify-between text-[12px]">
                    <span className="text-gray-500">Expiry</span><span className="text-white">Perpetual</span>
                </div>
            </div>

            {/* Modals */}
            <PreferenceModal
                isOpen={isSettingOpen}
                onClose={() => setIsSettingOpen(false)}
                onLeverageClick={handleOpenLeverageFromPreference}
            />

            <LeverageModal
                isOpen={isLeverageOpen}
                onClose={() => setIsLeverageOpen(false)}
                onConfirm={handleLeverageConfirm}
            />

            <TradingCalculator
                isOpen={isCalcOpen}
                onClose={() => setIsCalcOpen(false)}
            />
            <MarginModeModal
                isOpen={isMarginModeOpen}
                onClose={() => setIsMarginModeOpen(false)}
            />

        </div>
    );
}