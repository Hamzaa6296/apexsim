"use client";
import React from 'react';

interface MarketCardProps {
    symbol: string;
    price: string;
    change: string;
    imageUrl: string;
}

const MarketCard = ({ symbol, price, change, imageUrl }: MarketCardProps) => (
    <div className="bg-[#545454]/20 backdrop-blur-sm border border-white/5 px-6 py-12 rounded-[24px] hover:border-white/20 cursor-pointer overflow-hidden relative flex flex-col items-start z-10 transition-all">
        <div className="w-13 h-13 rounded-full mb-4 flex items-center justify-center overflow-hidden">
            <img
                src={imageUrl}
                alt={symbol}
                className="w-full h-full object-cover"
            />
        </div>

        <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-1 text-white">{symbol}</h3>
            <p className="text-lg mb-1 text-white/70">${price}</p>
            <p className={`font-medium text-lg ${change.startsWith('+') ? "text-green-500" : "text-red-500"}`}>
                {change}
            </p>
        </div>

        <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/5 blur-2xl rounded-full" />
    </div>
);

const ALL_CARDS = [
    { symbol: "BTCUSDT", price: "89,946.05", change: "+5.78%", imageUrl: "/images/bitcoin.png" },
    { symbol: "ETHUSDT", price: "3,100.19", change: "-2.84%", imageUrl: "/images/etherium.png" },
    { symbol: "AVAXUSDT", price: "1.05", change: "+1.01%", imageUrl: "/images/red.png" },
    { symbol: "DOGEUSDT", price: "0.005", change: "-0.01%", imageUrl: "/images/doge.png" },
    { symbol: "SOLDUSDT", price: "100.03", change: "+1.01%", imageUrl: "/images/stype.png" },
    { symbol: "ARBUSDT", price: "2.90", change: "-2.84%", imageUrl: "/images/atype.png" },
    { symbol: "SHIBUSDT", price: "1.05", change: "+1.01%", imageUrl: "/images/dog.png" },
    { symbol: "LINKUSDT", price: "0.005", change: "-0.01%", imageUrl: "/images/doge.png" },
];

export default function Hero() {
    return (
        <main className="max-w-full  mx-auto md:pt-20 pt-5  relative z-10 flex flex-col items-center">
            {/* Header Content */}
            <div className="text-center font-manrope mb-20">
                <p className="text-gray-300 md:text-[15px] text-xs mb-4 bg-[#2A2B2B] inline-block px-4 py-1 rounded-full border border-[#4D4D4D] backdrop-blur-md">
                    A modern digital fortress protecting crypto assets
                </p>
                <h1 className="text-4xl md:text-6xl  tracking-tight md:mb-6 mb-3 text-white leading-tight">
                    Trade Your Crypto with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A0C0FF] to-[#1460F8]">
                        Confidence
                    </span>
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto px-5 md:px-0 text-lg mb-10">
                    Keep your digital assets offline, safe, and always under your control—secure storage with the freedom to invest anytime.
                </p>
                <button className="bg-[#0055FF] hover:bg-blue-500 text-white px-10 py-3 rounded-full font-semibold text-md shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all !cursor-pointer active:scale-95">
                    Start trading
                </button>
            </div>

            {/* FULL WIDTH WRAPPER */}
            <div className="relative w-full flex justify-center items-start">
                {/* BACKGROUND DIV: Starts earlier on mobile to catch all rows */}
                <div className="absolute md:top-[18%] top-[-20px] left-0 w-full md:h-[90%] h-[calc(100%+40px)] bg-black/40 border-t border-white/5 md:rounded-t-[40px] pointer-events-none z-0" />

                <div className="max-w-7xl font-inter w-full flex flex-col gap-4 relative z-10 px-4 md:px-8">

                    {/* MOBILE VIEW: Single grid for all 8 cards */}
                    <div className="grid grid-cols-2 gap-4 lg:hidden">
                        {ALL_CARDS.map((card, i) => (
                            <MarketCard key={i} {...card} />
                        ))}
                    </div>

                    {/* DESKTOP VIEW: Split grid (5 top, 3 bottom) */}
                    <div className="hidden lg:flex flex-col gap-4">
                        <div className="grid lg:grid-cols-5 gap-4">
                            {ALL_CARDS.slice(0, 5).map((card, i) => (
                                <MarketCard key={i} {...card} />
                            ))}
                        </div>
                        <div className="grid lg:grid-cols-3 gap-4 lg:max-w-[60%] mx-auto w-full">
                            {ALL_CARDS.slice(5).map((card, i) => (
                                <MarketCard key={i} {...card} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}