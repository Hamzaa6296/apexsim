"use client";
import React, { useState } from 'react';
// import { TradingChart } from './TradingChart'; // Path to your chart file

export default function TradingPage() {
  // Backend-friendly state: Changing these updates the whole UI
  const [symbol, setSymbol] = useState("BTC/USDT");
  const [side, setSide] = useState<"buy" | "sell">("buy");

  // Mock data matching your "image_169e58.png"
  const chartData = [
    { x: new Date(1707000000000), y: [88200, 89000, 88100, 88800] },
    { x: new Date(1707100000000), y: [88800, 89500, 88500, 89200] },
    // Backend would fill this array...
  ];

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-gray-300 font-manrope p-2 md:p-4">
      {/* Header Info Bar */}
      <div className="flex flex-wrap items-center gap-6 mb-4 bg-[#181818] p-4 rounded-lg border border-white/5">
        <div className="flex items-center gap-2">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-white">{symbol}</h1>
        </div>
        <div>
          <p className="text-xs text-gray-500">Price</p>
          <p className="text-red-500 font-bold">$88,200.84</p>
        </div>
        <div className="hidden md:block">
          <p className="text-xs text-gray-500">24h Change</p>
          <p className="text-green-500">+4.90%</p>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-4 h-full">
        
        {/* Left Section: Chart (8 cols on large screens) */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <div className="bg-[#181818] rounded-xl overflow-hidden border border-white/5 h-[500px]">
             {/* <TradingChart data={chartData} /> */}
          </div>
          
          {/* Bottom Tabs (Orders/History) */}
          <div className="bg-[#181818] rounded-xl p-4 border border-white/5 flex-grow min-h-[200px]">
             <h3 className="text-sm font-bold border-b border-white/5 pb-2 mb-4">Open Orders (0)</h3>
             <div className="flex flex-col items-center justify-center h-32 opacity-20">
                <p>No active orders</p>
             </div>
          </div>
        </div>

        {/* Right Section: OrderBook & Trade Form (4 cols) */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          
          {/* Trade Form */}
          <div className="bg-[#181818] rounded-xl p-5 border border-white/5">
            <div className="flex gap-2 mb-6 bg-[#121212] p-1 rounded-lg">
              <button 
                onClick={() => setSide('buy')}
                className={`flex-1 py-2 rounded-md font-bold transition-all !cursor-pointer ${side === 'buy' ? 'bg-green-600 text-white' : 'text-gray-500'}`}
              >Buy</button>
              <button 
                onClick={() => setSide('sell')}
                className={`flex-1 py-2 rounded-md font-bold transition-all !cursor-pointer ${side === 'sell' ? 'bg-red-600 text-white' : 'text-gray-500'}`}
              >Sell</button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Price (USDT)</label>
                <input type="text" className="w-full bg-[#121212] border border-white/5 rounded p-3 text-white outline-none focus:border-blue-500" placeholder="88200.90" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Amount (BTC)</label>
                <input type="text" className="w-full bg-[#121212] border border-white/5 rounded p-3 text-white outline-none focus:border-blue-500" placeholder="0.00" />
              </div>
              <button className={`w-full py-4 rounded-xl font-bold shadow-lg transition-transform hover:scale-[1.02] !cursor-pointer ${side === 'buy' ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-red-600 text-white shadow-red-500/20'}`}>
                {side === 'buy' ? 'Buy BTC' : 'Sell BTC'}
              </button>
            </div>
          </div>

          {/* Order Book (Liquidity) */}
          <div className="bg-[#181818] rounded-xl p-4 border border-white/5 h-[400px] flex flex-col">
            <h3 className="text-sm font-bold mb-4">Order Book</h3>
            <div className="grid grid-cols-3 text-[10px] text-gray-500 mb-2">
              <span>Price(USDT)</span>
              <span className="text-right">Amount(BTC)</span>
              <span className="text-right">Total</span>
            </div>
            {/* Red Asks */}
            <div className="flex-1 space-y-1 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="grid grid-cols-3 text-xs text-red-500">
                  <span>8820{i}.50</span>
                  <span className="text-right text-gray-400">0.452</span>
                  <span className="text-right text-gray-400">39k</span>
                </div>
              ))}
              <div className="py-2 text-center font-bold text-white text-lg">88,200.84</div>
              {/* Green Bids */}
              {[...Array(5)].map((_, i) => (
                <div key={i} className="grid grid-cols-3 text-xs text-green-500">
                  <span>8819{i}.50</span>
                  <span className="text-right text-gray-400">1.205</span>
                  <span className="text-right text-gray-400">106k</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}