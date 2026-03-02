

import { LuEye } from "react-icons/lu";

export default function BotSection() {
  return (
    <div className="min-h-screen bg-[#1D1D1D] text-white p-4 font-manrope">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="mb-7">
          <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold mb-1">
            <span>Valuation</span>
            <LuEye className="cursor-pointer text-white transition-colors" size={14} />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">0.000000 BTC</h1>
          <p className="text-gray-500 font-semibold text-sm mt-1">≈$0.00</p>
        </div>

        
        <div className="flex gap-4 mb-8">
          <button className="bg-[#262628] text-white px-4 py-1.5 rounded text-sm font-medium cursor-pointer">
            Spot Grid
          </button>
          <button className="text-gray-500 hover:text-gray-300 px-4 py-1.5 text-sm font-medium cursor-pointer transition-colors">
            Futures Grid
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 border-b border-white/5 pb-4">
          <div>
            <p className="text-gray-500 text-sm font-semibold mb-2">Wallet Balance</p>
            <h2 className="text-2xl md:text-3xl font-semibold">0.000000 BTC</h2>
            <p className="text-gray-500 font-semibold text-sm mt-1">≈$0.00</p>
          </div>
          <div className="md:text-center">
            <p className="text-gray-500 text-sm font-semibold mb-2">Total Profit</p>
            <h2 className="text-2xl md:text-3xl font-bold">0.000000 BTC</h2>
            <p className="text-gray-500 font-semibold text-sm mt-1">≈$0.00</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-200">
            <thead>
              <tr className="text-gray-500 text-sm font-semibold">
                <th className="pb-4 ">Strategy</th>
                <th className="pb-4 ">Strategy ID</th>
                <th className="pb-4 ">Initial Investment</th>
                <th className="pb-4 ">Current Balance</th>
                <th className="pb-4">Total Profit</th>
                <th className="pb-4 ">Operation</th>
              </tr>
            </thead>
          </table>
          <div className="flex gap-6 mb-6  pb-2">
          <button className="bg-[#262628] text-white px-3 py-2 rounded text-xs font-bold cursor-pointer">
            Running
          </button>
          <button className="text-gray-500 hover:text-gray-300 text-xs font-bold cursor-pointer transition-colors">
            Assets
          </button>
        </div>
          
          
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-22 h-22 flex items-center justify-center mb-4">
               <img src="/images/search.png" alt="" />
            </div>
            <p className="text-gray-500 font-semibold text-sm">No data</p>
          </div>
        </div>

      </div>
    </div>
  );
}