"use client";
import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreferenceModal({ isOpen, onClose }: Props) {
  const [secondConfirm, setSecondConfirm] = useState(true);
  const [reverseConfirm, setReverseConfirm] = useState(true);

  if (!isOpen) return null;

  const SettingRow = ({ label, value, onClick, hasChevron = true }: any) => (
    <div 
      onClick={onClick}
      className="flex items-center justify-between py-4  !cursor-pointer "
    >
      <span className="text-sm text-gray-200">{label}</span>
      <div className="flex items-center gap-2">
        {value && <span className="text-sm text-gray-500">{value}</span>}
        {hasChevron && <MdChevronRight className="text-gray-500" size={20} />}
      </div>
    </div>
  );

  const ToggleRow = ({ label, enabled, setEnabled }: any) => (
    <div className="flex items-center justify-between py-4 px-4">
      <span className="text-sm text-gray-200">{label}</span>
      <div 
        onClick={() => setEnabled(!enabled)}
        className={`w-10 h-5 rounded-full relative transition-colors !cursor-pointer ${enabled ? 'bg-[#00B595]' : 'bg-gray-700'}`}
      >
        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${enabled ? 'left-6' : 'left-1'}`} />
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end bg-black/60 backdrop-blur-sm">
      <div className="bg-[#08070E] w-full max-w-[450px] h-screen flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-white font-bold text-base">Preference</h2>
          <IoClose 
            onClick={onClose} 
            size={22} 
            className="text-gray-400 hover:text-white !cursor-pointer" 
          />
        </div>

        {/* Settings List */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <SettingRow label="BTC/USDT" value="Hedging Mode" />
          <SettingRow label="Contract Unit" value="BNB" />
          
          <ToggleRow 
            label="Second confirmation order" 
            enabled={secondConfirm} 
            setEnabled={setSecondConfirm} 
          />
          
          <ToggleRow 
            label="Reverse Position confirmation" 
            enabled={reverseConfirm} 
            setEnabled={setReverseConfirm} 
          />

          <SettingRow label="Validity period" value="Permanently" />

          {/* Additional section from image_94e107.png logic */}
          <div className="mt-6 px-4 py-2">
             <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-bold">Order Confirmation Settings</p>
             <div className="bg-[#1e2023] rounded p-3">
                <p className="text-xs text-gray-400 leading-relaxed">
                  If you enable the reminder, an order will need to be reconfirmed every time: 
                  <span className="text-white ml-1">Limit order, Market order, stop limit</span>
                </p>
             </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-4">
          <button 
            onClick={onClose}
            className="w-full py-3 bg-[#2b2f36] hover:bg-[#32363d] text-white rounded font-bold text-sm transition-all !cursor-pointer active:scale-[0.98]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}