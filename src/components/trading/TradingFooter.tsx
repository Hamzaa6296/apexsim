"use client";
import React, { useState } from 'react';

export default function OrderTabs() {
  const [activeTab, setActiveTab] = useState("Open orders (0)");

  return (
    <div className="border-t border-white/5 min-h-[300px] flex flex-col">
      <div className="flex gap-6 px-4 border-b border-white/5">
        {['Open orders (0)', 'Orders history', 'Trade history', 'Iceberg', 'Funds'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 text-[11px] font-bold !cursor-pointer transition-colors ${activeTab === tab ? 'text-[#00B595] border-b-2 border-[#00B595]' : 'text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex-grow flex flex-col items-center justify-center p-16 opacity-30">
        <img src="https://cdn-icons-png.flaticon.com/512/5058/5058436.png" className="w-12 h-12 invert mb-2" alt="empty" />
        <p className="text-gray-600 text-xs">No active orders found</p>
      </div>
    </div>
  );
}