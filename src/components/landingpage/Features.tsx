"use client";
import React from 'react';

interface FeatureCardProps {
    title: string;
    imageSrc: string;
}

const FeatureCard = ({ title, imageSrc }: FeatureCardProps) => (
    <div className="flex flex-col items-center justify-center py-10 px-6 border-r border-b border-white/5 hover:bg-white/[0.01] transition-colors text-center group">
        {/* Container with Gradient Border Effect */}
        <div className="relative p-[1px] rounded-xl mb-6 group">
            {/* The Gradient Border Overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-100" />
            
            {/* Inner Content */}
            <div className="relative w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                    src={imageSrc}
                    alt={title}
                    /* Reduced image size slightly with p-3 */
                    className="w-full h-full object-contain p-3 opacity-70 group-hover:opacity-100 transition-opacity"
                />
            </div>
        </div>
        
        <p className="text-gray-400 group-hover:text-white transition-colors text-xs md:text-sm font-medium tracking-wide">
            {title}
        </p>
    </div>
);

export default function Features() {
    const features = [
        { title: "Maximum Security", imageSrc: "/images/one.png" },
        { title: "Instant Access", imageSrc: "/images/two.png" },
        { title: "Trade with confidence", imageSrc: "/images/three.png" },
        { title: "User-friendly", imageSrc: "/images/four.png" },
        { title: "Easy Control", imageSrc: "/images/five.png" },
        { title: "Support all digital assets.", imageSrc: "/images/six.png" },
        { title: "Simple setup", imageSrc: "/images/seven.png" },
        { title: "Future-ready security", imageSrc: "/images/eight.png" },
    ];

    return (
        /* Added mt-20 to separate from Hero and ensured single bg color */
        <section className="text-white py-14 px-6 bg-[#0D0D0D]/25 mt-11 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-300 md:text-[15px] text-xs mb-4 bg-[#2A2B2B] inline-block px-4 py-1 rounded-full border border-[#4D4D4D] backdrop-blur-md">
                        Key Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold mt-6 mb-4">Why Choose APEXSIM</h2>
                    <p className="text-[#7F8186] max-w-lg mx-auto text-base md:text-lg">
                        Keep your digital assets offline, safe, and always under your control.
                    </p>
                </div>

                <div className='flex items-center justify-center'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full border-l border-t border-white/5 overflow-hidden ">
                        
                        {/* First 4 items */}
                        {features.slice(0, 4).map((f, i) => (
                            <FeatureCard key={i} title={f.title} imageSrc={f.imageSrc} />
                        ))}

                        {/* CENTER SPECIAL CARD */}
                        <div className="bg-gradient-to-b from-[#0084FF] to-[#0044FF] flex flex-col items-center justify-center py-10 px-6 text-center relative overflow-hidden group border-r border-b border-white/5">
                            <h3 className="text-white text-lg font-medium mb-8 relative z-10">And of course more...</h3>
                            <button className="bg-white text-[#0055FF] px-10 py-3.5 rounded-full font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all !cursor-pointer relative z-10">
                                Start trading
                            </button>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Remaining 4 items */}
                        {features.slice(4).map((f, i) => (
                            <FeatureCard key={i + 5} title={f.title} imageSrc={f.imageSrc} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}