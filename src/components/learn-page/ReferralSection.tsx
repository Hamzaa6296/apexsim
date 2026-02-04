"use client";
import React from 'react';
import { LuCopy } from "react-icons/lu";

const InviteCard = ({ title, desc, img }: { title: string; desc: string; img: string }) => (
  <div className="bg-[#202020] rounded-xl p-6 md:p-8 flex flex-col items-center text-center border border-white/5 hover:border-white/10 transition-all w-full">
    {/* Optimized Image Container: Responsive size using aspect ratio */}
    <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6 flex items-center justify-center">
      <img src={img} alt={title} className="w-full h-full object-contain" />
    </div>
    
    <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-3">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[240px]">{desc}</p>
  </div>
);

export default function InviteFriends() {
  const inviteSteps = [
    {
      title: "Share Your Code and Link",
      desc: "You can invite your friends to use all Bybit products with just one referral code.",
      img: "/images/speaker.png"
    },
    {
      title: "Share Your Code and Link",
      desc: "You can invite your friends to use all Bybit products with just one referral code.",
      img: "/images/person.png"
    },
    {
      title: "Share Your Code and Link",
      desc: "You can invite your friends to use all Bybit products with just one referral code.",
      img: "/images/money.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#181818] text-white p-4 md:p-12 font-manrope">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section: Responsive Text size */}
        <div className="mb-8 md:mb-10">
          <h1 className="text-xl md:text-3xl font-bold leading-snug md:leading-tight">
            Invite Friends to Earn Over <br className="hidden md:block" />
            115 USDC and 15% Commission
          </h1>
        </div>

        {/* Referral Code Box: Full width on mobile, max-width on desktop */}
        <div className="bg-[#202020] border border-white/5 rounded-xl p-4 mb-10 md:mb-12 w-full md:max-w-md flex items-center justify-between group !cursor-pointer">
          <span className="text-gray-400 text-xs md:text-sm">My referral code</span>
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-white font-mono font-bold tracking-wider text-sm md:text-base">5Y5LJKJ</span>
            <LuCopy className="text-blue-500 group-hover:scale-110 transition-transform" size={18} />
          </div>
        </div>

        {/* How to Invite Section */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-8">How to invite</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {inviteSteps.map((step, idx) => (
              <InviteCard key={idx} {...step} />
            ))}
          </div>
        </div>

        {/* Summary Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Total Commission */}
          <div className="bg-[#181818] rounded-xl p-6 md:p-8 border border-white/5">
            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-4">Total commission</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-white">0</span>
              <span className="text-gray-500 text-sm md:font-medium">USDT</span>
            </div>
          </div>

          {/* Withdrawable Balance */}
          <div className="bg-[#181818] rounded-xl p-6 md:p-8 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-6">
            <div>
              <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-4">Withdrawable Balance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold text-white">0</span>
                <span className="text-gray-500 text-sm md:font-medium">USDT</span>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-3 rounded-md font-bold text-sm transition-all !cursor-pointer shadow-lg shadow-blue-500/10">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}