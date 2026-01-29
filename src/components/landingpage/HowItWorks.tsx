"use client";
import React from 'react';

interface StepCardProps {
    number: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

const StepCard = ({ number, title, description, imageSrc, imageAlt }: StepCardProps) => (
    <div className="relative bg-gradient-to-br from-[#FFFFFF]/9 to-[#000000]/5 border border-white/5 rounded-2xl px-8 py-8 h-[380px] overflow-hidden group">
        {/* Step Number Circle */}
        <div className={`w-12 h-12 ${number === "1" ? "left-5 top-28" : number === "2" ? "left-2 top-28" : "left-5 top-28"} rounded-full bg-black border border-white/10 absolute  z-100 text-center justify-center flex items-center`}>
            <span className="text-gray-400 text-sm font-bold">{number}</span>
        </div>

        {/* Text Content */}
        <div className="relative z-20">
            <h3 className="text-2xl mb-3">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-full">
                {description}
            </p>
        </div>

        {/* UI Preview Image - Absolute Positioning */}
        <div className={`absolute  ${number === "1" ? "-bottom-23 right-0 w-[90%] h-[90%]" : number === "2" ? "-bottom-25 right-0 w-[100%] h-full" : "-bottom-33 right-2  w-[100%] h-full"}`}>
            <img
                src={imageSrc}
                alt={imageAlt}
                className=""
            />
        </div>
    </div>
);

export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Create account",
            description: "Easily signup and secure your profile in no time",
            imageSrc: "/images/worksone.png", // Replace with your Login UI image
            imageAlt: "Account Creation UI"
        },
        {
            number: "2",
            title: "Fund account",
            description: "Deposit to your account",
            imageSrc: "/images/workstwo.png", // Replace with your Deposit UI image
            imageAlt: "Funding UI"
        },
        {
            number: "3",
            title: "Start Trading",
            description: "Buy, sell, convert any crypto of your choice",
            imageSrc: "/images/worksthree.png", // Replace with your Trading UI image
            imageAlt: "Trading UI"
        }
    ];

    return (
        /* Dark Radial Gradient Background */
        <section className="relative text-white py-24 px-4 bg-gradient-to-br from-gray-300/10 to-[#000000]/90  overflow-hidden">
            {/* The Background Glow Effect */}


            <div className="max-w-full mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-7">
                    <span className="text-gray-300 md:text-[15px] text-xs bg-[#2A2B2B] inline-block px-4 py-1 rounded-full border border-[#4D4D4D] backdrop-blur-md">
                        How To Get Started
                    </span>
                    <h2 className="text-4xl md:text-4xl font-semibold tracking-wide mt-3 mb-4">
                        Explore The Real Beauty of Trading
                    </h2>
                    <p className="text-[#7F8186] max-w-sm mx-auto text-xl">
                        A simple, safe and fast platform to explore the fun in trading
                    </p>
                </div>

                {/* Cards Grid */}
                <div className='flex items-center justify-center'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl">
                        {steps.map((step, index) => (
                            <StepCard
                                key={index}
                                number={step.number}
                                title={step.title}
                                description={step.description}
                                imageSrc={step.imageSrc}
                                imageAlt={step.imageAlt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}