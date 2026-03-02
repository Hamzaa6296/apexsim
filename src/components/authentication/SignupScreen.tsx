"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { EyeOff, Eye } from 'lucide-react';
import { IoLogoApple } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { useRouter } from 'next/navigation';

export default function SignupView() {
    const [showPassword, setShowPassword] = useState(false);
    const [countryCode, setCountryCode] = useState('+1');
    const router = useRouter()

    return (
        <section className="md:min-h-screen bg-[#181818] px-4 md:px-8 py-6 md:py-12 flex items-center justify-center font-inter">
            <div className="max-w-325 font-manrope w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">


                <div className="bg-[#1f1f1f] rounded-2xl px-4 md:px-10 pt-10 pb-12 flex flex-col justify-start">
                    <h2 className="text-3xl md:text-3xl font-semibold text-white mb-8 mt-2 font-bricolage">Create an Account</h2>


                    <form className="space-y-4">
                        <div className="space-y-3">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-[#252525] border border-transparent rounded-full px-2 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all font-inter"
                            />


                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-[#252525] border border-transparent rounded-full px-2 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all font-inter"
                            />


                            <div className="relative">
                                <select className="w-full bg-[#252525] border border-transparent rounded-full px-2 py-4 text-gray-600  appearance-none focus:outline-none focus:border-white/20 transition-all font-inter cursor-pointer">
                                    <option value="" defaultValue={""}>Country of Residence</option>
                                    <option value="us">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="ca">Canada</option>
                                </select>
                                <FaCaretDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>


                            <div className="flex gap-2">
                                <div className="w-25 bg-[#252525] rounded-full px-4 py-4 flex items-center justify-between border border-transparent hover:border-white/10 group relative">
                                    <input
                                        type="text"
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        placeholder='+33'
                                        className="bg-transparent text-white placeholder:text-gray-600 text-md w-full outline-none cursor-pointer"
                                    />
                                    <FaCaretDown size={14} className="text-gray-500 group-hover:text-white transition-colors pointer-events-none" />
                                </div>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="flex-1 bg-[#252525] border border-transparent rounded-full px-2 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all font-inter"
                                />
                            </div>


                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full bg-[#252525] border border-transparent rounded-full px-2 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all font-inter"
                                />
                                <div
                                    className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <Eye className="text-white w-5 h-5 hover:text-gray-400 transition-colors" />
                                    ) : (
                                        <EyeOff className="text-white w-5 h-5 hover:text-gray-400 transition-colors" />
                                    )}
                                </div>
                            </div>
                        </div>

                        <Link href='/login'>
                            <button className="w-full bg-[#0055FF] text-white py-4 rounded-full font-semibold text-md shadow-[0_8px_30px_rgb(0,85,255,0.3)] cursor-pointer">
                                Sign up
                            </button>
                        </Link>

                        <div className="pt-3">
                            <div className="flex items-center justify-center mb-4 gap-4">
                                <div className="flex-1 h-px bg-white/10" />
                                <span className="text-md text-gray-500 tracking-wide font-manrope whitespace-nowrap ">Or sign up with</span>
                                <div className="flex-1 h-px bg-white/10" />
                            </div>

                            <div className="flex justify-center gap-4">
                                <button type="button" className="w-14 h-14 rounded-full bg-[#1E1E1E] border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                                    <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" className="w-6 h-6" />
                                </button>
                                <button type="button" className="w-14 h-14 rounded-full bg-[#1E1E1E] border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                                    <IoLogoApple className="text-white w-7 h-7" />
                                </button>
                                <button type="button" className="w-14 h-14 rounded-full bg-[#1E1E1E] border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                                    <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" alt="Facebook" className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <p className="text-center text-gray-500 text-md pt-4 font-inter">
                            Already have an account? <button type='button' onClick={() => router.push('/login')} className="text-white font-semibold hover:underline">Login</button>
                        </p>
                    </form>
                </div>


                <div className="hidden lg:flex border border-gray-300/10 rounded-2xl flex-col items-center justify-center relative overflow-hidden">

                    <div className="absolute z-30 top-30 text-center ">
                        <h2 className="text-[40px] font-bold text-white  font-manrope">Enjoy up to $100 <span className='text-[#508BFF]'> USDT</span></h2>
                        <p className="text-gray-400 max-w-lg py-5 mx-auto text-lg leading-relaxed font-inter">
                            Get up to $5,030 by signing up, depositing, and trading!
                        </p>
                    </div>


                    <div className="relative top-20 z-10 w-full max-w-137.5 h-125  flex items-center justify-center">

                        <img
                            src="/images/signuppic.png"
                            alt="Branding Illustration"
                            className="w-full h-full object-contain "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}