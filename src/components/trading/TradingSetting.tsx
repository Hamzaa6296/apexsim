"use client";
import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  // Functional States for selections
  const [selectedLayout, setSelectedLayout] = useState<'standard' | 'pro'>('standard');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [palette, setPalette] = useState<'fresh' | 'classic'>('fresh');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Background Blur Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container: Attached to right, Full Height, Responsive Width */}
      <div className="relative w-full sm:w-[400px] md:w-[420px] bg-[#0C0A13] h-full border-l border-white/10 shadow-2xl text-white flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <h2 className="text-[16px] font-bold">Settings</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-md transition-colors !cursor-pointer"
          >
            <IoClose size={22} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 space-y-8 overflow-y-auto no-scrollbar">
          
          {/* Section: Layout Selection */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[13px] font-semibold text-gray-300">Layout</span>
              <span className="text-[11px] text-gray-500">Left View Panel</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Option 1 */}
              <div 
                onClick={() => setSelectedLayout('standard')}
                className="!cursor-pointer group flex flex-col items-center"
              >
                <div className={`w-full aspect-[16/9] bg-[#141517] border-2 rounded-lg p-2 flex flex-col gap-1 transition-all ${
                  selectedLayout === 'standard' ? 'border-[#00B595] shadow-[0_0_10px_rgba(0,181,149,0.2)]' : 'border-transparent group-hover:border-white/10'
                }`}>
                  <div className="flex gap-1 h-2/3">
                    <div className={`w-1/3 rounded-sm ${selectedLayout === 'standard' ? 'bg-[#00B595]/40' : 'bg-gray-700'}`} />
                    <div className={`w-2/3 rounded-sm ${selectedLayout === 'standard' ? 'bg-[#00B595]/20' : 'bg-gray-800'}`} />
                  </div>
                  <div className={`h-1/3 rounded-sm ${selectedLayout === 'standard' ? 'bg-[#00B595]/10' : 'bg-gray-800'}`} />
                </div>
                <p className={`text-[11px] mt-2 font-medium ${selectedLayout === 'standard' ? 'text-[#00B595]' : 'text-gray-500'}`}>Standard</p>
              </div>

              {/* Option 2 */}
              <div 
                onClick={() => setSelectedLayout('pro')}
                className="!cursor-pointer group flex flex-col items-center"
              >
                <div className={`w-full aspect-[16/9] bg-[#141517] border-2 rounded-lg p-2 flex gap-1 transition-all ${
                  selectedLayout === 'pro' ? 'border-[#00B595] shadow-[0_0_10px_rgba(0,181,149,0.2)]' : 'border-transparent group-hover:border-white/10'
                }`}>
                   <div className={`w-1/4 rounded-sm ${selectedLayout === 'pro' ? 'bg-[#00B595]/40' : 'bg-gray-700'}`} />
                   <div className={`w-1/2 rounded-sm ${selectedLayout === 'pro' ? 'bg-[#00B595]/20' : 'bg-gray-800'}`} />
                   <div className={`w-1/4 rounded-sm ${selectedLayout === 'pro' ? 'bg-[#00B595]/40' : 'bg-gray-700'}`} />
                </div>
                <p className={`text-[11px] mt-2 font-medium ${selectedLayout === 'pro' ? 'text-[#00B595]' : 'text-gray-500'}`}>Advanced</p>
              </div>
            </div>
          </section>

          {/* Section: Theme/Display (Functional Selectors) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-[11px] text-gray-500">Theme</p>
              <div 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center gap-2 bg-[#141517] p-2.5 rounded-lg border border-white/5 !cursor-pointer hover:bg-[#1c1e22] transition-colors"
              >
                <div className={`w-3.5 h-3.5 rounded-full border-2 ${theme === 'dark' ? 'bg-[#00B595] border-[#00B595]' : 'bg-transparent border-gray-600'}`} />
                <span className={`text-[12px] ${theme === 'dark' ? 'text-white' : 'text-gray-400'}`}>Dark</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] text-gray-500">Color Palette</p>
              <div 
                onClick={() => setPalette(palette === 'fresh' ? 'classic' : 'fresh')}
                className="flex items-center gap-2 bg-[#141517] p-2.5 rounded-lg border border-white/5 !cursor-pointer hover:bg-[#1c1e22] transition-colors"
              >
                <div className={`w-3.5 h-3.5 rounded-full border-2 ${palette === 'fresh' ? 'bg-[#00B595] border-[#00B595]' : 'bg-transparent border-gray-600'}`} />
                <span className={`text-[12px] ${palette === 'fresh' ? 'text-white' : 'text-gray-400'}`}>Fresh</span>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-white/5 w-full" />

          {/* Section: Order Confirmation */}
          <section className="space-y-4">
            <h3 className="text-[13px] font-semibold text-gray-300">Order confirmation</h3>
            <div className="bg-[#141517] rounded-xl p-4 space-y-5 border border-white/5">
              <div className="flex justify-between items-center group">
                <span className="text-[12px] text-gray-400 group-hover:text-gray-200 transition-colors">Limit Order</span>
                <Switch defaultChecked />
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-[12px] text-gray-400 group-hover:text-gray-200 transition-colors">Stop Limit Order</span>
                <Switch />
              </div>
            </div>
          </section>

          {/* Section: Notifications */}
          <section className="pb-10">
             <div className="flex justify-between items-center">
                <h3 className="text-[13px] font-semibold text-gray-300">Trade Notifications</h3>
                <Switch defaultChecked />
             </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

function Switch({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [enabled, setEnabled] = useState(defaultChecked);
  return (
    <div 
      onClick={() => setEnabled(!enabled)}
      className={`w-9 h-5 rounded-full transition-all duration-200 relative !cursor-pointer ${
        enabled ? 'bg-[#00B595]' : 'bg-[#2d3036]'
      }`}
    >
      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform shadow-md ${
        enabled ? 'translate-x-4.5' : 'translate-x-0.5'
      }`} />
    </div>
  );
}