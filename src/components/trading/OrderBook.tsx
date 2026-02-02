"use client";
import React from 'react';
import { Maximize2 } from 'lucide-react';
import { FaCaretDown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const SELL_DATA = [19967.98, 19967.69, 19967.66, 19967.61, 19967.60, 19967.59, 19967.58, 19967.57, 19967.56, 19967.43, 19967.42, 19967.36, 19967.11, 19967.10];
const BUY_DATA = [19966.99, 19966.98, 19966.56, 19966.52, 19966.52, 19966.52, 19966.52, 19966.52, 19966.52, 19966.52];

export default function OrderBook() {
  return (
    <div className="w-full md:w-[320px] flex flex-col bg-[#181818] border-x border-white/5 h-full">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
        <div className="flex gap-4 text-[12px] font-bold">
          <span className="text-white border-b-2 border-[#00B595] pb-2 !cursor-pointer">Liquidity</span>
          <span className="text-gray-500 pb-2 hover:text-gray-300 !cursor-pointer">Recent trades</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
             <Maximize2 size={14} className="!cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <button className="text-[#00B595] !cursor-pointer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z" /></svg>
          </button>
          <button className="text-gray-600 !cursor-pointer hover:text-gray-400">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 4h16v7H4V4zm0 9h16v7H4v-7z" /></svg>
          </button>
          <button className="text-gray-600 !cursor-pointer hover:text-gray-400">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 4h16v7H4V4zm0 9h16v7H4v-7z" fillOpacity="0.5" /></svg>
          </button>
        </div>
        <div className='flex items-center gap-1'>
          <div className="bg-[#2b2b2b] px-2 py-0.5 rounded flex items-center gap-2 !cursor-pointer">
            <span className="text-[11px] text-gray-300">0.01</span>
            <FaCaretDown size={10} className="text-gray-500" />
          </div>
          <BsThreeDotsVertical className="text-gray-500 !cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-3 text-[10px] text-gray-500 px-3 py-1 font-medium">
        <span>Price(USDT)</span>
        <span className="text-right">Amount(BTC)</span>
        <span className="text-right">Total</span>
      </div>

      <div className="flex-grow overflow-hidden flex flex-col">
        {/* Sell Orders */}
        <div className="flex flex-col-reverse">
          {SELL_DATA.map((p, i) => (
            <div key={i} className="relative grid grid-cols-3 text-[11px] leading-5 px-3 hover:bg-white/5 !cursor-pointer group">
              <div className="absolute right-0 top-0 h-full bg-red-500/10" style={{ width: `${10 + (i * 5)}%` }} />
              <span className="text-[#ef5350] font-medium z-10">{p.toFixed(2)}</span>
              <span className="text-right text-gray-300 z-10">0.10016</span>
              <span className="text-right text-gray-400 z-10">1,999.99</span>
            </div>
          ))}
        </div>

        {/* Current Price spread bar */}
        <div className="my-1 px-3 py-1.5 border-y border-white/5 flex items-center gap-2">
          <span className="text-lg font-bold text-[#ef5350]">19965.74</span>
          <span className="text-[11px] text-gray-500">$19965.74</span>
        </div>

        {/* Buy Orders */}
        <div className="flex flex-col">
          {BUY_DATA.map((p, i) => (
            <div key={i} className="relative grid grid-cols-3 text-[11px] leading-5 px-3 hover:bg-white/5 !cursor-pointer">
              <div className="absolute right-0 top-0 h-full bg-green-500/10" style={{ width: `${60 - (i * 8)}%` }} />
              <span className="text-[#00B595] font-medium z-10">{p.toFixed(2)}</span>
              <span className="text-right text-gray-300 z-10">0.52856</span>
              <span className="text-right text-gray-400 z-10">10,553.74</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}