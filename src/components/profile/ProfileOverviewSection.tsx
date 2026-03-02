import { LuEye, LuSearch } from "react-icons/lu";
import { BiSolidCopy } from "react-icons/bi";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import { PiCaretUpDownFill } from "react-icons/pi";

export default function ProfileOverview() {
  const coins = [
    { name: "BTC", fullName: "Bitcoin", balance: "0.000000 BTC", value: "≈$0.00", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
    { name: "ETH", fullName: "Ethereum", balance: "0.000000 ETH", value: "≈$0.00", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
  ];

  return (
    <div className="min-h-screen md:py-0 py-5 bg-[#1D1D1D] text-white px-3 sm:px-4 font-manrope">
      <div className="max-w-7xl mx-auto">


        <div className="flex flex-col md:flex-row border-b pb-4 md:pb-5 border-[#181818] md:items-center justify-between gap-4 md:gap-6 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
              <img src="/images/manimage.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Peter parker</h2>
              <p className="text-gray-400 text-xs">ajames@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-6 text-xs text-gray-500">
            <div className="flex flex-col gap-1">
              <span className="text-right">UID</span>
              <div className="flex items-center gap-2 text-white font-medium">
                <span>54658774</span>
                <BiSolidCopy size={14} className="cursor-pointer hover:text-blue-500 transition-colors" />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div className="flex flex-col gap-1">
                <span>ID Verification</span>
                <span className="text-white text-right font-medium">Not verified</span>
              </div>
              <FaCaretRight className="text-white" />
            </div>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
              <span>Estimated value</span>
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

            <p className="text-gray-500 text-sm mt-1">≈$0.00</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="flex-1 bg-[#0055FF] hover:bg-blue-700 text-white px-10 py-2.5 rounded-sm transition-all">
              Deposit
            </button>
            <button className="flex-1 bg-[#1F1F26] hover:bg-[#323234] text-white px-10 py-2.5 rounded-sm transition-all">
              Withdraw
            </button>
          </div>
        </div>


        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
          <div className="flex items-center gap-4 md:gap-6">
            <h3 className="text-lg font-semibold">Market</h3>
            <label className="flex items-center gap-2 text-gray-500 text-xs cursor-pointer">
              <input type="radio" className="w-3.5 h-3.5 accent-blue-500 cursor-pointer" />
              <span className="text-sm">Hide other assets less than 1 USD</span>
            </label>
          </div>

          <div className="relative w-full md:w-72">
            <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white" size={20} />
            <input
              type="text"
              placeholder="Search for currency pairs"
              className="bg-[#18181E] rounded-sm py-3 pl-10 pr-4 text-sm w-full focus:outline-none"
            />
          </div>
        </div>


        <div className="mb-5 overflow-x-auto">
          <div className="flex min-w-max border-b border-b-gray-700">
            <button className="px-4 pb-1 border-b-4 border-b-[#00B595] whitespace-nowrap">
              Favorite
            </button>
            <button className="px-4 pb-1 whitespace-nowrap">Hot</button>
            <button className="px-4 pb-1 whitespace-nowrap">Top gainers</button>
            <button className="px-4 pb-1 whitespace-nowrap">Top losers</button>
            <button className="px-4 pb-1 whitespace-nowrap">24h Volume</button>
          </div>
        </div>


        <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-4">
          <table className="w-full min-w-225 text-left">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="py-3 font-medium">Coin</th>
                <th className="py-3 font-medium">
                  <div className="inline-flex items-center gap-1">
                    Total Balance
                    <PiCaretUpDownFill className="text-xs" />
                  </div>
                </th>
                <th className="py-3 font-medium">
                  <div className="inline-flex items-center gap-1">
                    Wallet Balance
                    <PiCaretUpDownFill className="text-xs" />
                  </div>
                </th>
                <th className="py-3 font-medium">Available</th>
                <th className="py-3 font-medium">pnL</th>
                <th className="py-3 font-medium text-right">Operations</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/3">
              {coins.map((coin, idx) => (
                <tr key={idx} className="hover:bg-white/1 transition-colors">
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
                    <button className="text-blue-500 hover:text-blue-400 font-semibold text-sm">
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
