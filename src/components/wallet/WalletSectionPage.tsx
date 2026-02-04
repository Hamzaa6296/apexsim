"use client";
import { useState } from "react";
import Overview from "./OverviewSection";
import SpotAccountSection from "./SpotAccountSection";
import FuturesSection from "./FuturesSection";
import BotSection from "./BotSections";

export default function WalletSectionPage() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [selectedActivity, setSelectedActivity] = useState(false);

    const tabs = ["Overview", "Spot Account", "Futures", "Bot"];

    const handleOpenDetail = () => {
        setSelectedActivity(true);
    };

    const handleBackToList = () => {
        setSelectedActivity(false);
    };

    return (
        <div className="min-h-screen bg-[#181818] text-white md:py-8 py-4 font-manrope">
            <div className="max-w-[1400px] mx-auto px-4 md:px-0">

                {/* ================= HEADER ================= */}
                <div className="flex md:flex-row flex-col items-start md:items-center mb-8 justify-between gap-6">
                    <h1 className="text-3xl font-bold tracking-tight">Assets</h1>

                    {/* ACTION BUTTONS (FIXED FOR MOBILE) */}
                    <div className="md:w-[600px] w-full md:flex md:flex-row gap-4">

                        {/* Mobile layout: 2 buttons per row */}
                        <div className="grid grid-cols-2 gap-3 w-full md:flex  md:gap-3">

                            {/* Primary actions */}
                            <button className="w-full rounded-sm bg-[#0055FF] px-3 py-2 text-sm">
                                Deposit
                            </button>
                            <button className="w-full rounded-sm bg-[#1D1D1D] px-3 py-2 text-sm">
                                Transfer
                            </button>
                            <button className="w-full rounded-sm bg-[#1D1D1D] px-3 py-2 text-sm">
                                Withdraw
                            </button>
                            {/* Secondary actions */}
                            <button className="w-full rounded-sm bg-[#1D1D1D] px-3 py-2 text-sm">
                                Trade History
                            </button>
                            <button className="w-full rounded-sm bg-[#1D1D1D] px-3 py-2 text-sm">
                                Trade Record
                            </button>
                        </div>

                    </div>

                </div>

                {/* ================= MAIN CONTENT ================= */}
                <div className="flex bg-[#1D1D1D] py-6 md:py-12 flex-col md:flex-row">

                    {/* SIDEBAR */}
                    <aside className="w-full md:w-100 space-y-1 border-r border-r-4 border-[#181818] shrink-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setSelectedActivity(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-lg transition-all cursor-pointer relative group ${activeTab === tab
                                        ? "text-white font-semibold bg-white/5"
                                        : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-10 bg-white" />
                                )}
                                {tab}
                            </button>
                        ))}
                    </aside>

                    {/* DYNAMIC CONTENT */}
                    <main className="flex-1">
                        {activeTab === "Overview" && <Overview />}
                        {activeTab === "Spot Account" && <SpotAccountSection />}
                        {activeTab === "Futures" && <FuturesSection />}
                        {activeTab === "Bot" && <BotSection />}

                    </main>
                </div>
            </div>
        </div>
    );
}
