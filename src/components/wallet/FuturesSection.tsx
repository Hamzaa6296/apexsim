
import { LuEye, LuSearch } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { PiCaretUpDownFill } from "react-icons/pi";

const coins = [
    {
        symbol: "BTC",
        name: "Bitcoin",
        icon: "/images/bitcoin.png",
        total: "0.000000 BTC",
    },
    {
        symbol: "ETH",
        name: "Ethereum",
        icon: "/images/etherium.png",
        total: "0.000000 ETH",
    },
    {
        symbol: "AVAX",
        name: "Avalanche",
        icon: "/images/red.png",
        total: "0.000000 AVAX",
    },
    {
        symbol: "SOL",
        name: "Solana",
        icon: "/images/stype.png",
        total: "0.000000 SOL",
    },
    {
        symbol: "XRP",
        name: "Ripple",
        icon: "/images/doublev.png",
        total: "0.000000 XRP",
    },
];

export default function FuturesSection() {
    return (
        <div className="min-h-screen bg-[#1D1D1D] text-white font-manrope px-4 sm:px-6 md:px-8">

            <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 mb-10 pt-6">


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


                <div className="mt-8">
                    <div className="flex md:flex-row flex-col sm:items-center justify-between gap-4 mb-4 py-3 border-y border-white/5">
                        <div className="flex items-center justify-center gap-5">
                            <h3 className="text-lg font-semibold">My Assets</h3>
                            <label className="flex items-center gap-2 text-gray-500 text-xs cursor-pointer group">
                                <input
                                    type="radio"
                                    className="w-3.5 h-3.5 accent-blue-500 bg-transparent border-gray-600 cursor-pointer"
                                />
                                <span className="group-hover:text-gray-300 font-semibold transition-colors">
                                    Hide other assets less than 1 USD
                                </span>
                                <FaFileAlt className="text-white" />
                            </label>
                        </div>
                        <div className="relative w-full sm:w-64">
                            <LuSearch
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                                placeholder="Search for currency pairs"
                                className="
              w-full
              bg-[#222222]
              pl-9 pr-3 py-3
              rounded-sm
              text-sm
              text-gray-300
              placeholder-gray-500
              outline-none
            "
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="overflow-x-auto max-w-6xl">
                <table className="w-full min-w-225 text-sm">
                    <thead>
                        <tr className="text-gray-400 text-sm">
                            <th className="py-3 text-left font-medium">
                                Coin
                            </th>

                            <th className="py-3 text-left font-medium">
                                <div className="inline-flex items-center gap-1">
                                    <span>Total Balance</span>
                                    <PiCaretUpDownFill className="text-xs" />
                                </div>
                            </th>

                            <th className="py-3 text-left font-medium">
                                <div className="inline-flex items-center gap-1">
                                    <span>Wallet Balance</span>
                                    <PiCaretUpDownFill className="text-xs" />
                                </div>
                            </th>

                            <th className="py-3 text-left font-medium">
                                Available
                            </th>
                            <th className="py-3 text-left font-medium">
                                pnL
                            </th>

                            <th className="py-3 text-right font-medium">
                                Operations
                            </th>
                        </tr>

                    </thead>

                    <tbody>
                        {coins.map((coin, idx) => (
                            <tr
                                key={idx}
                                className="border-b border-white/5 hover:bg-white/2 transition"
                            >

                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={coin.icon}
                                            alt={coin.symbol}
                                            className="w-7 h-7"
                                        />
                                        <div>
                                            <div className="font-semibold">{coin.symbol}</div>
                                            <div className="text-gray-500 text-xs">{coin.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div>{coin.total}</div>
                                    <div className="text-gray-500 text-xs">≈$0.00</div>
                                </td>
                                <td className="py-4">0.000000</td>
                                <td className="py-4">0.000000</td>
                                <td className="py-4">0.000000</td>
                                <td className="py-4 text-right whitespace-nowrap">
                                    <button className="text-[#00B595] hover:underline mr-4">
                                        Trade
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
