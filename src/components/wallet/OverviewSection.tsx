"use client";

import React from "react";
import { LuEye } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";

export default function Overview() {
  const assets = [
    { name: "Spot Account", image: "/images/iconone.png", quantity: "0.000000 BTC", value: "≈$0.00" },
    { name: "Futures Account", image: "/images/icontwo.png", quantity: "0.000000 BTC", value: "≈$0.00" },
    { name: "Bot Account", image: "/images/iconthree.png", quantity: "0.000000 BTC", value: "≈$0.00" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#1D1D1D] text-white font-manrope">

      {/* LEFT SECTION */}
      <div className="flex-1 px-4 sm:px-6 md:px-8 md:border-r-4 md:border-[#181818] max-w-full md:max-w-4xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 mb-10 pt-6">

          {/* Valuation */}
          <div>
            <div className="flex items-center font-semibold gap-2 text-gray-500 text-sm mb-1">
              <span>Valuation</span>
              <LuEye className="cursor-pointer text-white transition-colors" size={14} />
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                0.000000 BTC
              </h1>
              <span className="text-gray-400 p-1 bg-[#252525] rounded-sm cursor-pointer hover:text-white transition-colors">
                <FaCaretDown size={12} />
              </span>
            </div>

            <p className="text-gray-500 font-semibold text-sm mt-1">≈$0.00</p>
          </div>

          {/* P&L */}
          <div className="sm:text-right">
            <div className="flex items-center sm:justify-end gap-2 mb-1">
              <span className="text-gray-400 font-semibold text-xs border-b border-gray-600 border-dotted cursor-pointer hover:text-blue-500 transition-colors">
                Profit and Loss
              </span>

              <div className="bg-[#262628] px-2 py-0.5 rounded flex items-center gap-1 text-[11px] text-gray-300 cursor-pointer hover:bg-[#323234] transition-colors">
                Today <FaCaretDown size={10} />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold">$0.00</h2>
            <p className="text-gray-500 text-xs font-semibold">0.00%</p>
          </div>
        </div>

        {/* Assets */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 py-3 border-y border-white/5">
            <h3 className="text-lg font-semibold">My Assets</h3>

            <label className="flex items-center gap-2 text-gray-500 text-xs cursor-pointer group">
              <input
                type="radio"
                className="w-3.5 h-3.5 accent-blue-500 bg-transparent border-gray-600 cursor-pointer"
              />
              <span className="group-hover:text-gray-300 font-semibold transition-colors">
                Hide other assets less than 1 USD
              </span>
            </label>
          </div>

          {/* Table wrapper for mobile scroll */}
          <div className="overflow-x-auto">
            <table className="min-w-[500px] w-full text-left">
              <thead>
                <tr className="text-gray-500 text-sm">
                  <th className="pb-4 font-semibold">Symbol</th>
                  <th className="pb-4 font-semibold text-center">Ratio</th>
                  <th className="pb-4 font-semibold text-right">Quantity</th>
                </tr>
              </thead>

              <tbody>
                {assets.map((asset, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 flex items-center gap-3">
                      <img src={asset.image} className="w-6 h-6" />
                      <span className="font-semibold text-sm sm:text-[15px]">
                        {asset.name}
                      </span>
                    </td>

                    <td className="py-3 text-center text-gray-50">----</td>

                    <td className="py-3 text-right">
                      <div className="font-semibold text-sm sm:text-[15px]">
                        {asset.quantity}
                      </div>
                      <div className="text-gray-500 text-xs sm:text-sm">
                        {asset.value}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-[350px] px-4 sm:px-6 py-8 border-t lg:border-t-0 border-white/5">
        <h3 className="text-lg md:text-xl font-semibold mb-6">
          Recent Deposits and Trades
        </h3>

        <div className="flex flex-col items-center justify-center text-center">
          <img src="/images/search.png" alt="" className="w-16 h-16 sm:w-20 sm:h-20" />
          <p className="text-gray-500 text-sm sm:text-lg font-semibold mt-4">
            No recent deposits or trades
          </p>
        </div>
      </div>
    </div>
  );
}
