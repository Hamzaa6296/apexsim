"use client";
import React from 'react';
import { EyeOff } from 'lucide-react';

export default function LoginView() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] pt-28 pb-10 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT: LOGIN FORM */}
        <div className="bg-[#111111] rounded-[32px] p-8 md:p-12 border border-white/5 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Welcome to ApexSim</h2>
          
          <div className="flex gap-6 border-b border-white/10 mb-8">
            <button className="pb-3 text-white border-b-2 border-white font-medium text-sm md:text-base !cursor-pointer">
              Email address
            </button>
            <button className="pb-3 text-gray-500 font-medium text-sm md:text-base !cursor-pointer">
              Phone number
            </button>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#1A1B1B] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="relative space-y-2">
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-[#1A1B1B] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 !cursor-pointer" />
            </div>

            <button type="button" className="text-sm text-gray-300 hover:text-white transition-colors !cursor-pointer">
              Forgot password?
            </button>

            <button className="w-full bg-[#0055FF] text-white py-4 rounded-full font-bold shadow-[0_4px_20px_rgba(0,85,255,0.3)] hover:bg-blue-600 transition-all active:scale-[0.98] !cursor-pointer">
              Login
            </button>

            <div className="relative flex items-center justify-center py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
              <span className="relative px-4 bg-[#111111] text-gray-500 text-sm">Or login with</span>
            </div>

            <div className="flex justify-center gap-4">
              {['google', 'apple', 'facebook'].map((provider) => (
                <button key={provider} className="w-14 h-14 rounded-full bg-[#1A1B1B] border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors !cursor-pointer">
                  <img src={`/images/${provider}-icon.png`} alt={provider} className="w-6 h-6 grayscale opacity-80" />
                </button>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              Don't have an account? <span className="text-white font-medium !cursor-pointer">Sign up</span>
            </p>
          </form>
        </div>

        {/* RIGHT: THE BLUE CARD (Hidden on mobile) */}
        <div className="hidden lg:flex relative bg-[#2563EB] rounded-[32px] p-12 overflow-hidden flex-col items-center text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The New Era of crypto</h2>
            <p className="text-blue-100 max-w-sm mx-auto text-lg mb-12">
              Keep your digital assets offline, safe, and always under your control—secure storage with the freedom to invest anytime.
            </p>
          </div>

          {/* Floating Asset UI Simulation */}
          <div className="relative w-full h-full bg-[#0F172A] rounded-3xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl overflow-hidden translate-y-10">
            <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Bitcoin', price: '$67,528.87', change: '+1.17%', color: 'bg-orange-500' },
                  { name: 'Solana', price: '$126.745', change: '-0.65%', color: 'bg-purple-500' },
                  { name: 'Dash', price: '$40', change: '+1.17%', color: 'bg-blue-500' },
                  { name: 'XRP', price: '$1.91295', change: '+1.88%', color: 'bg-black' }
                ].map((token, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-full p-2 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${token.color}`} />
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-white">{token.name}</p>
                      <p className="text-[8px] text-gray-400">{token.price} <span className="text-green-400">{token.change}</span></p>
                    </div>
                  </div>
                ))}
            </div>
            {/* Repeat for visual density */}
            <div className="grid grid-cols-2 gap-4 opacity-50 blur-[1px]">
                {/* ... more tokens ... */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}