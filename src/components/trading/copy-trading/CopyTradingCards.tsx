import { FaUsers } from "react-icons/fa";

const TraderCard = () => {
    return (
        <div className="bg-[#181818] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all font-manrope">
            
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                        <img src="/images/manimage.png" alt="avatar" />
                    </div>
                    <div>
                        <p className="text-white text-md truncate ">nosleeping@outlook.com</p>
                        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                            <FaUsers size={12} />
                            <span>8/500</span>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="space-y-1 mb-4">
                <p className="text-[12px] underline text-gray-500 font-bold">30 Days PNL (USD)</p>
                <p className="text-[#34C759] text-2xl">+$226,468.43</p>
                <p className="text-[14px] text-gray-400">30 Days ROI <span className="text-[#34C759]">+226.8%</span></p>
            </div>

            
            <div className="grid grid-cols-3 gap-4 mb-6 border-t border-white/5 pt-4">
                <div>
                    <p className="text-[12px] underline text-gray-500 font-bold uppercase">AUM</p>
                    <p className="text-white text-sm">740,567.24</p>
                </div>
                <div>
                    <p className="text-[12px]  text-gray-500 font-bold">30 Days MDD</p>
                    <p className="text-white text-sm">36.98%</p>
                </div>
                <div>
                    <p className="text-[12px]  text-gray-500 font-bold ">Sharp Ratio</p>
                    <p className="text-white text-sm">1.87</p>
                </div>
                
            </div>

            
            <div className="flex gap-2">
                <button className="flex-1 bg-[#262628] text-gray-300 py-2.5 rounded-sm text-sm  cursor-pointer">
                    Mock
                </button>
                <button className="flex-1 bg-[#0055FF] text-white py-2.5 rounded-sm text-sm cursor-pointer">
                    Copy
                </button>
            </div>
        </div>
    );
};

export default TraderCard;