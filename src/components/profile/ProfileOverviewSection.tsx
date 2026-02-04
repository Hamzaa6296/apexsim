"use client";
import React from 'react';
import { LuEye, LuSearch, LuCopy } from "react-icons/lu";

export default function ProfileOverview() {
  const coins = [
    { name: "BTC", fullName: "Bitcoin", balance: "0.000000 BTC", value: "≈$0.00", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
    { name: "ETH", fullName: "Ethereum", balance: "0.000000 ETH", value: "≈$0.00", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
  ];

  return (
    <div className="min-h-screen bg-[#1D1D1D] text-white px-4 md:px-4 font-manrope">
      <div className="max-w-7xl mx-auto">
        
        {/* User Profile Header */}
        <div className="flex flex-col md:flex-row border-b border-b-3 pb-5 border-[#181818] md:items-center justify-between gap-6 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
              <img src="/images/manimage.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-md font-semibold">Peter parker</h2>
              <p className="text-gray-400 text-xs">ajames@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-xs text-gray-500">
            <div className="flex flex-col gap-1">
              <span>UID</span>
              <div className="flex items-center gap-2 text-white font-medium">
                <span>54658774</span>
                <LuCopy className="cursor-pointer hover:text-blue-500 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span>ID Verification</span>
              <span className="text-gray-300 font-medium">Not verified</span>
            </div>
          </div>
        </div>

        {/* Estimated Value & Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
              <span>Estimated value</span>
              <LuEye className="cursor-pointer hover:text-white transition-colors" size={14} />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">0.000000 BTC</h1>
              <span className="text-gray-600 text-lg cursor-pointer hover:text-white">▼</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">≈$0.00</p>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white px-10 py-2.5 rounded-lg font-semibold cursor-pointer transition-all">
              Deposit
            </button>
            <button className="flex-1 md:flex-none bg-[#262628] hover:bg-[#323234] text-white px-10 py-2.5 rounded-lg font-semibold cursor-pointer transition-all">
              Withdraw
            </button>
          </div>
        </div>

        {/* Market Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-6">
            <h3 className="text-lg font-semibold">Market</h3>
            <label className="flex items-center gap-2 text-gray-500 text-xs cursor-pointer group">
              <input type="radio" className="w-3.5 h-3.5 accent-blue-500 cursor-pointer" />
              <span className="group-hover:text-gray-300 transition-colors">Hide other assets less than 1 USD</span>
            </label>
          </div>
          
          <div className="relative w-full md:w-72">
            <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Search for currency pairs" 
              className="w-full bg-[#222224] border border-white/5 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>

        {/* Assets Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead>
              <tr className="text-gray-500 text-xs border-b border-white/5">
                <th className="pb-4 font-normal">Coin</th>
                <th className="pb-4 font-normal">Total Balance</th>
                <th className="pb-4 font-normal">Wallet Balance ↕</th>
                <th className="pb-4 font-normal">Available</th>
                <th className="pb-4 font-normal">PnL</th>
                <th className="pb-4 font-normal text-right">Operation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {coins.map((coin, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.01] transition-colors">
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <img src={coin.icon} alt={coin.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <div className="font-semibold text-sm">{coin.name}</div>
                        <div className="text-gray-500 text-xs">{coin.fullName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-5">
                    <div className="font-semibold text-sm">{coin.balance}</div>
                    <div className="text-gray-500 text-xs">{coin.value}</div>
                  </td>
                  <td className="py-5 text-sm text-gray-300">0.000000</td>
                  <td className="py-5 text-sm text-gray-300">0.000000</td>
                  <td className="py-5 text-sm text-gray-300">0.000000</td>
                  <td className="py-5 text-right">
                    <button className="text-blue-500 hover:text-blue-400 font-semibold text-sm cursor-pointer transition-colors">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}