
const BotTradingCard = () => {
  return (
    <div className="bg-[#181818] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all font-manrope">
      
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-lg  tracking-tight">BTCUSDT</h3>
        <button className="bg-[#0055FF] text-white px-8 py-2.5 rounded-md text-sm cursor-pointer hover:opacity-90 transition-opacity shadow-lg shadow-blue-900/20">
          Copy
        </button>
      </div>

      
      <div className="space-y-1 mb-4">
        <p className="text-[12px] text-gray-500 font-bold underline decoration-gray-700 underline-offset-4 ">
          30 Days PNL (USD)
        </p>
        <p className="text-[#34C759] md:text-3xl text-xl tracking-tight">
          +$226,468.43
        </p>
      </div>

      
      <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-5">
        <div>
          <p className="text-[12px] text-gray-500 underline decoration-gray-700 underline-offset-4 uppercase mb-1">
            ROI
          </p>
          <p className="text-white text-[15px] ">56.6%</p>
        </div>
        <div>
          <p className="text-[12px] text-gray-500   whitespace-nowrap">
            Runtime
          </p>
          <p className="text-white text-[15px] ">2d 5h 34m</p>
        </div>
        <div className="text-right">
          <p className="text-[12px] text-gray-500 whitespace-nowrap">
            7D MDD
          </p>
          <p className="text-white text-[15px] ">1.87%</p>
        </div>
      </div>
    </div>
  );
};

export default BotTradingCard;