"use client";
import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";


export default function OrderTabs() {
  const [activeTab, setActiveTab] = useState("Open orders (0)");

  const tabs = ['Open orders (0)', 'Orders history', 'Trade history', 'Iceberg', 'Funds'];
  const columns = ['Date', 'Pair', 'Type', 'Side', 'Price', 'Amount', 'Filled', 'Total', 'Trigger condition'];

  return (
    <div className="bg-[#181818] border-t border-white/5 min-h-[400px] flex flex-col font-sans w-full">

      {/* Tab Navigation & Right-aligned Action */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-6 min-w-max">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-[14px] font-medium transition-all relative !cursor-pointer whitespace-nowrap ${
                activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#00B595]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="flex-grow overflow-x-auto">
        <div className="min-w-[1000px]  w-full">
          
          {/* Table Headers */}
          <div className="grid grid-cols-10 px-4 cursor-pointer py-2 items-center">
            {columns.map((col) => (
              <div key={col} className="text-gray-500 text-[15px] font-semibold flex items-center py-3 font-semibold ">
                {col}
                {col === 'Type' && (
                  <FaCaretDown size={12} className='pl-1.5' />
                )}
              </div>
            ))}
            
            {/* Cancel all Button - Positioned at the end of the grid row */}
            <div className="flex md:ml-1">
              <button className="bg-[#2B2E33] hover:bg-[#363A40] text-white text-[12px] px-8 py-1.5 rounded-[3px]  transition-colors !cursor-pointer whitespace-nowrap border border-white/5">
                Cancel all
              </button>
            </div>
          </div>

          {/* Empty State Content */}
          <div className="flex flex-col items-center justify-center ">
            <div className="relative w-25 h-25 flex items-center justify-center">
                <img
                  src="/images/paper.png"
                  className="w-full h-full"
                  alt="No data"
                />              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}