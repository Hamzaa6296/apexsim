"use client";
import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";

export default function TradeForm() {
  const [side, setSide] = useState<"buy" | "sell">("buy");

  return (
    <div className="w-full md:w-[350px] bg-[#181818] p-4 flex flex-col gap-4 h-full">
      <div className="flex gap-4 text-[12px] font-bold border-b border-white/5 pb-2">
        <span className="text-[#00B595] border-b-2 border-[#00B595] pb-2 !cursor-pointer">Spot</span>
        <span className="text-gray-500 !cursor-pointer">Futures</span>
      </div>

      <div className="flex bg-[#2b2b2b] p-1 rounded">
        <button
          onClick={() => setSide('buy')}
          className={`flex-1 py-1.5 text-xs font-bold rounded !cursor-pointer transition-all ${side === 'buy' ? 'bg-white text-black' : 'text-gray-500'}`}
        >Buy BTC</button>
        <button
          onClick={() => setSide('sell')}
          className={`flex-1 py-1.5 text-xs font-bold rounded !cursor-pointer transition-all ${side === 'sell' ? 'bg-[#404040] text-white' : 'text-gray-500'}`}
        >Sell BTC</button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center text-[11px] font-bold uppercase">
          <div className="flex gap-3">
            <span className="text-white border-b border-white !cursor-pointer">Limit</span>
            <span className="text-gray-500 !cursor-pointer">Market</span>
            <span className="text-gray-500 !cursor-pointer">Stop limit</span>
          </div>
        </div>

        <div className="flex justify-between text-[10px] text-gray-500 items-center">
          <span>Avbl <span className="text-gray-300 font-medium">9,500.0564107 USDT</span></span>
          <FaPlusCircle className="text-blue-500 !cursor-pointer" />
        </div>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500">Price</span>
          <input type="text" className="w-full bg-transparent border border-white/10 rounded p-3 text-right text-white text-sm outline-none focus:border-blue-500" defaultValue="19972.90" />
          <span className="absolute right-12 top-1/2 -translate-y-1/2 text-[11px] text-gray-500">USDT</span>
        </div>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500">Amount</span>
          <input type="text" className="w-full bg-transparent border border-white/10 rounded p-3 text-right text-white text-sm outline-none focus:border-blue-500" placeholder="BTC" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500">BTC</span>
        </div>

        {/* Percentage Slider (Diamond Match) */}
        <div className="relative h-6 flex items-center !cursor-pointer">
          <div className="absolute w-full h-[2px] bg-gray-700 rounded" />
          <div className="absolute w-0 h-[2px] bg-[#00B595] rounded" />
          <div className="absolute w-full flex justify-between">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`w-3 h-3 rotate-45 border-2 ${i === 0 ? 'bg-[#181818] border-[#00B595]' : 'bg-[#181818] border-gray-600'}`} />
            ))}
          </div>
        </div>

        <div className="relative">
          <input type="text" className="w-full bg-[#242424] border border-white/5 rounded p-3 text-sm text-white outline-none" placeholder="Total" />
        </div>

        <div className="flex items-center gap-2 py-1">
          <div className="w-3.5 h-3.5 rounded-full border border-gray-600 !cursor-pointer flex items-center justify-center" />
          <span className="text-[11px] text-gray-300">Advanced options</span>
        </div>

        <div className="flex justify-between text-[11px]">
          <span className="text-gray-500">Max Buy</span>
          <span className="text-white font-bold">0 BTC</span>
        </div>

        <button className={`w-full py-3.5 rounded font-bold text-sm shadow-lg !cursor-pointer transition-transform active:scale-95 ${side === 'buy' ? 'bg-[#0052ff] text-white' : 'bg-[#ef5350] text-white'}`}>
          {side === 'buy' ? 'Buy BTC' : 'Sell BTC'}
        </button>

        <div className="flex gap-2 pt-2">
          <button className="flex-1 py-2 bg-[#2b2b2b] rounded text-[11px] font-bold text-gray-300 hover:text-white !cursor-pointer">Deposit</button>
          <button className="flex-1 py-2 bg-[#2b2b2b] rounded text-[11px] font-bold text-gray-300 hover:text-white !cursor-pointer">Transfer</button>
        </div>
      </div>
    </div>
  );
}