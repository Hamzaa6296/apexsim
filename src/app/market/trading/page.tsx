import React from 'react';
import OrderBook from '@/components/trading/OrderBook';
import TradeForm from '@/components/trading/TradeForm';
import OrderTabs from '@/components/trading/TradingFooter';
import TradingChart from '@/components/trading/TradingChart';


export default function TradingPage() {
  return (
    <div className="bg-[#181818] h-full text-gray-300  font-manrope">
      {/* 1. TOP TICKER BAR */}
      <div className="flex items-center gap-6 px-4 py-4 border-b border-white/5 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-fit">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" className="w-8 h-8" alt="btc" />
          <div className='flex flex-col'>
            <span className="text-white text-md tracking-tight font-bold">BTC/USDT</span>
            <span className="text-[12px] text-gray-500">Bitcoin</span>
          </div>
        </div>
        <div className="flex gap-6 font-semibold text-[11px]">
          <div>
            <p className="text-[#ef5350] text-lg font-bold">88,200.84</p>
            <p className="text-gray-500 text-[12px]">$88,200.84</p>
          </div>
          <div>
            <p className="text-gray-500 text-[12px]">24h Change</p>
            <p className="text-white text-sm">88,200.84</p>
          </div>
          <div className="">
            <p className="text-gray-500 text-[12px]">24h High</p>
            <p className="text-white text-sm font-medium">89,120.00</p>
          </div>
          <div className="">
            <p className="text-gray-500 text-[12px]">24h Low</p>
            <p className="text-white text-sm font-medium">87,400.00</p>
          </div>
          <div className="">
            <p className="text-gray-500 text-[12px]">24h vol(BTC)</p>
            <p className="text-white text-sm font-medium">100.78K</p>
          </div>
          <div className="">
            <p className="text-gray-500 text-[12px]">24h vol(USDT)</p>
            <p className="text-white text-sm font-medium">100B</p>
          </div>
        </div>
        
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="flex flex-col md:flex-row h-full gap-[1px] bg-white/5">
        
        {/* Left Section: Chart */}
        <div className="flex-grow flex flex-col min-w-0 bg-[#181818]">
          <div className="flex items-center gap-4 px-4 py-3 border-b border-white/5 text-[12px] font-semibold">
            <span className="text-[#00B595] border-b-2 border-[#00B595] pb-1 !cursor-pointer">Chart</span>
            <span className="text-gray-500 hover:text-white !cursor-pointer">Info</span>
          </div>
          <div className="h-[550px]">
            <TradingChart />
          </div>
        </div>

        {/* Middle Section: Order Book Component */}
        <OrderBook />

        {/* Right Section: Trade Form Component */}
        <TradeForm />
      </div>

      {/* 3. Footer Section: Order Tabs Component */}
      <OrderTabs />
    </div>
  );
}