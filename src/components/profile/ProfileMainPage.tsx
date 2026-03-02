"use client";
import { useState } from "react";
import ProfileOverview from "./ProfileOverviewSection";
import SecuritySettings from "./SecuritySection";
import ProfileSettings from "./ProfileSettingsPage";

export default function ProfileMainPage() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [selectedActivity, setSelectedActivity] = useState(false);

    const tabs = ["Overview", "Security", "Settings"];


    return (
        <div className="min-h-screen bg-[#181818] text-white md:py-8 py-4 font-manrope">
            <div className="max-w-350 mx-auto px-4 md:px-0">

                
                <div className="flex md:flex-row flex-col items-start md:items-center mb-8 justify-between gap-6">
                    <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
                </div>

                
                <div className="flex bg-[#1D1D1D] py-6 md:py-12 flex-col md:flex-row">

                    
                    <aside className="w-full md:w-100 space-y-1 border-r border-[#181818] shrink-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setSelectedActivity(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-lg transition-all cursor-pointer relative group ${activeTab === tab
                                        ? "text-white font-semibold bg-white/5"
                                        : "text-gray-500 hover:text-gray-300 hover:bg-white/2"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-white" />
                                )}
                                {tab}
                            </button>
                        ))}
                    </aside>

                    
                    <main className="flex-1">
                        {activeTab === "Overview" && <ProfileOverview />}
                        {activeTab === "Security" && <SecuritySettings />}
                        {activeTab === "Settings" && <ProfileSettings />}
                        
                    </main>
                </div>
            </div>
        </div>
    );
}
