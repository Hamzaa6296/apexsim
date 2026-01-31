"use client";
import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaWallet, FaRegBell, FaSun, FaCreditCard } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const coins = [
    { id: 'btc', name: 'BTC', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
    { id: 'sol', name: 'SOL', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { id: 'eth', name: 'ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { id: 'usdt', name: 'USDT', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png' },
];

export default function DepositPage() {
    const [depositType, setDepositType] = useState<'crypto' | 'fiat'>('crypto');
    const [fiatAmount, setFiatAmount] = useState('0');

    return (
        <div className="max-w-full mx-auto px-4 md:px-30 md:py-10 py-5 font-manrope min-h-screen text-white">

            {/* Header Section */}
            <div className="flex items-center md:px-0 px-4 justify-between md:mb-10 mb-4">
                <h1 className="md:text-4xl text-xl font-semibold font-manrope tracking-tight">Deposit</h1>

                <div className="flex items-center gap-3">

                    <FaQuestionCircle className="text-gray-50 md:w-full md:h-full h-5 w-5 hover:text-white !cursor-pointer" size={30} />
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 mb-16 items-stretch">

                {/* LEFT: Illustration Section */}
                <div className="bg-[#202020] rounded-3xl flex items-center justify-center p-12 border border-white/5 min-h-[450px]">
                    <img
                        src="/images/deposit.png"
                        alt="Deposit Illustration"
                        className="w-full max-w-[340px] object-contain drop-shadow-2xl"
                    />
                </div>

                {/* RIGHT: Deposit Form Section */}
                <div className="bg-[#1B1B1B] font-manrope rounded-3xl md:p-8 p-6 border border-white/5 flex flex-col">

                    {/* Separate Selection Buttons */}
                    <div className="grid grid-cols-2 gap-4 md:mb-10 mb-5">
                        <button
                            onClick={() => setDepositType('crypto')}
                            className={`py-4.5 rounded-lg  md:text-md text-sm font-semibold border transition-all !cursor-pointer ${depositType === 'crypto' ? 'bg-[#252525] text-white border-white/10' : 'bg-[#1a1a1a] text-gray-500 border-white/5 hover:text-gray-300'}`}
                        >
                            Crypto deposit
                        </button>
                        <button
                            onClick={() => setDepositType('fiat')}
                            className={`py-4.5 rounded-lg  md:text-md text-sm font-semibold border  transition-all !cursor-pointer ${depositType === 'fiat' ? 'bg-[#252525] text-white border-white/10' : 'bg-[#1a1a1a] text-gray-500 border-white/5 hover:text-gray-300'}`}
                        >
                            Fiat deposit
                        </button>
                    </div>

                    {depositType === 'crypto' ? (
                        /* CRYPTO VIEW */
                        <div className="space-y-0">
                            <div className="relative pb-6 pl-8 border-l border-dashed border-white/10">
                                <span className="absolute md:-left-[16px] -left-[10px] top-0 md:w-8 md:h-8 h-6 w-6 rounded-full bg-[#252525] border border-white/10 flex items-center justify-center md:text-[15px] text-[12px] text-white font-bold">1</span>
                                <p className="md:text-[18px] text-[15px] font-semibold text-white mb-5">Choose coin to deposit</p>
                                <button className="w-full bg-[#252525] border border-white/5 rounded-lg px-5 py-3.5 flex items-center justify-between text-gray-500 text-md font-semibold !cursor-pointer hover:border-white/20 mb-5">
                                    Please select coin
                                    <FaCaretDown size={25} />
                                </button>
                                <div className="flex flex-wrap gap-2.5">
                                    {coins.map((coin) => (
                                        <button key={coin.id} className="flex items-center gap-2.5 px-3 py-2 bg-[#252525] border border-white/5 rounded-lg hover:border-blue-500/50 transition-all !cursor-pointer">
                                            <img src={coin.icon} className="w-5 h-5" alt="" />
                                            <span className="text-[13px] font-bold text-white/90">{coin.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="relative pb-6 pl-8 border-l border-dashed border-white/10">
                                <span className="absolute md:-left-[16px] -left-[10px] top-0 md:w-8 md:h-8 h-6 w-6 rounded-full bg-[#252525] border border-white/10 flex items-center justify-center md:text-[15px] text-[12px] text-white font-bold">2</span>
                                <p className="md:text-[18px] text-[15px] font-semibold text-white mb-5">Choose chain</p>
                                <button className="w-full bg-[#252525] border border-white/5 rounded-lg px-5 py-3.5 flex items-center justify-between text-gray-500 text-md font-semibold !cursor-pointer hover:border-white/20">
                                    Please select coin
                                    <FaCaretDown size={25} />
                                </button>
                            </div>

                            <div className="relative pl-8">
                                <span className="absolute md:-left-[16px] -left-[10px] top-0 md:w-8 md:h-8 h-6 w-6 rounded-full bg-[#252525] border border-white/10 flex items-center justify-center md:text-[15px] text-[12px] text-white font-bold">3</span>
                                <p className="md:text-[18px] text-[15px] font-semibold text-white">Confirm deposit details</p>
                            </div>
                        </div>
                    ) : (
                        /* FIAT VIEW */
                        <div className="flex flex-col h-full">
                            <div className=" flex-1">
                                <div>

                                    <div className="bg-[#252525] mb-3 font-manrope border border-white/5 rounded-lg p-4">
                                        <h1 className='text-gray-500 pb-1'>Amount</h1>
                                        <input
                                            type="text"
                                            value={fiatAmount}
                                            onChange={(e) => setFiatAmount(e.target.value)}
                                            className="bg-transparent text-xl font-bold w-full outline-none text-white"
                                        />

                                    </div>
                                </div>

                                <div className="flex flex-wrap mb-5 gap-2">
                                    {['$100', '$200', '$500', '$1,000', '$5,000'].map((amt) => (
                                        <button
                                            key={amt}
                                            onClick={() => setFiatAmount(amt.replace('$', '').replace(',', ''))}
                                            className="px-4 py-2 bg-[#252525] border border-white/5 rounded-md text-md font-semibold text-white hover:border-white/20 !cursor-pointer transition-all"
                                        >
                                            {amt}
                                        </button>
                                    ))}
                                </div>

                                <div>
                                    <label className="text-lg text-white font-semibold mb-3 block">Payment method</label>
                                    <button className="w-full bg-[#252525] border border-white/5 rounded-lg px-5 py-4 flex items-center justify-between text-gray-400 text-md !cursor-pointer hover:border-white/20">
                                        <div className="flex text-gray-500 font-semibold items-center gap-3">
                                            <FaCreditCard size={18} className='text-white' />
                                            <span>Select payment method</span>
                                        </div>
                                        <FaCaretDown size={25} />
                                    </button>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-blue-400 transition-all !cursor-pointer mt-8">
                                Proceed
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* TABLE SECTION */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-white mb-8">Recent Deposit</h2>
                <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[1000px]">
                        <thead>
                            <tr className="border-b border-white/5">
                                {["Coin", "Chain type", "QTY", "Address", "TXID", "Status", "Date & time", "Action"].map((header) => (
                                    <th key={header} className="pb-6 text-[15px] font-semibold text-gray-500 text-left px-4">
                                        <div className="flex items-center gap-2 group !cursor-pointer">
                                            {header}
                                            {header !== "Coin" && header !== "Action" && (
                                                <div className="flex flex-col gap-0.5 opacity-40 group-hover:opacity-100 transition-opacity">
                                                    <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-gray-400"></div>
                                                    <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-gray-400"></div>
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}