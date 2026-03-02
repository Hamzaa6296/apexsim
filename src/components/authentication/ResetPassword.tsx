"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCaretDown } from "react-icons/fa";

export default function ResetPasswordView() {
  const [step, setStep] = useState<'request' | 'otp'>('request');
  const [resetMethod, setResetMethod] = useState<'email' | 'phone'>('email');
  const [countryCode, setCountryCode] = useState('+33');
  const router = useRouter();
 
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextElementSibling && element.value !== "") {
      (element.nextElementSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
   
    if (e.key === "Backspace" && !otp[index] && (e.currentTarget.previousElementSibling)) {
      (e.currentTarget.previousElementSibling as HTMLInputElement).focus();
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0e0e0e] px-4 flex items-center justify-center font-inter overflow-hidden">

      
      <div
        className="absolute inset-0 pointer-events-none vshape-lines"
      />

      
      <div className="relative z-10 bg-[#1E1E1E] w-full max-w-125 rounded-2xl px-8 md:px-8 py-8 shadow-2xl">

        
        {step === 'request' && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-2xl font-semibold text-white mb-8 font-bricolage">Reset Password</h2>

            <div className="flex gap-6 mb-8 relative">
              <button
                type="button"
                onClick={() => setResetMethod('email')}
                className={`pb-2 text-md font-medium transition-all cursor-pointer relative z-10 ${resetMethod === 'email' ? 'text-white' : 'text-gray-500'}`}
              >
                Email Address
                {resetMethod === 'email' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />}
              </button>
              <button
                type="button"
                onClick={() => setResetMethod('phone')}
                className={`pb-2 text-md font-medium transition-all cursor-pointer relative z-10 ${resetMethod === 'phone' ? 'text-white' : 'text-gray-500'}`}
              >
                Phone Number
                {resetMethod === 'phone' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />}
              </button>
              <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
            </div>

            <form onSubmit={handleProceed} className="space-y-8">
              {resetMethod === 'email' ? (
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-[#252525] border border-transparent rounded-full px-3 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all font-inter"
                />
              ) : (
                <div className="flex gap-2">
                  <div className="w-27.5 bg-[#252525] rounded-full px-3 py-2 flex items-center justify-between border border-transparent hover:border-white/10 group relative cursor-pointer">
                    <input
                      type="text"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-transparent text-white text-sm w-full outline-none cursor-pointer"
                    />
                    <FaCaretDown size={20} className="text-gray-500 group-hover:text-white transition-colors pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="flex-1 bg-[#252525] border border-transparent rounded-full px-3 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all font-inter"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#0055FF] text-white py-3 rounded-full font-semibold text-md shadow-[0_8px_30px_rgb(0,85,255,0.3)] hover:bg-[#004ce6] transition-all cursor-pointer"
              >
                Proceed
              </button>
            </form>
          </div>
        )}

        
        {step === 'otp' && (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-semibold text-white mb-8 font-bricolage">OTP Verification</h2>

            <div className="flex justify-between gap-2 mb-8">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={data}
                  onChange={e => handleOtpChange(e.target, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  onFocus={e => e.target.select()}
                  className="w-full h-14 bg-[#252525] border border-transparent rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-[#FFFFFF]/20 focus:bg-[#1E1E1E] transition-all"
                />
              ))}
            </div>

            <div className="text-center text-lg mb-8">
              <p className="text-[#8B8B8C] font-inter">
                Didn't receive code?{' '}
                <button type="button" className="text-white font-semibold hover:underline cursor-pointer">
                  Resend
                </button>
              </p>
            </div>

            <button
            onClick={() => router.push('/login')}
              type="button"
              className="w-full bg-[#0055FF] text-white py-3 rounded-full font-semibold text-md shadow-[0_8px_30px_rgb(0,85,255,0.3)] hover:bg-[#004ce6] transition-all cursor-pointer"
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </section>
  );
}