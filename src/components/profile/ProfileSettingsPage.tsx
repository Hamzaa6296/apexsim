"use client";
import React from 'react';
import { LuEye, LuSearch, LuCopy } from "react-icons/lu";
interface PreferenceRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value?: string;
  actionText: string;
}

const PreferenceRow = ({ icon, title, description, value, actionText }: PreferenceRowProps) => (
  <div className="flex items-start justify-between py-8 border-b border-white/5 last:border-0">
    <div className="flex gap-4">
      <div className="text-gray-400 text-2xl mt-1">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-white text-[15px]">{title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed max-w-[400px]">
          {description}
        </p>
        {value && <span className="text-white text-sm mt-1 font-medium">{value}</span>}
      </div>
    </div>
    <button className="bg-[#262628] hover:bg-[#323234] text-white text-[11px] font-semibold px-4 py-1 rounded transition-all cursor-pointer">
      {actionText}
    </button>
  </div>
);

export default function ProfileSettings() {
  return (
    <div className="min-h-screen bg-[#1D1D1D] text-white p-4 md:p-10 font-manrope">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Profile Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Profile</h2>
          <div className="bg-[#1c1c1e]/40 rounded-xl px-6">
            <PreferenceRow 
              icon={<LuSearch />}
              title="Nickname"
              description="Set a customized nickname"
              value="User_wy6eef"
              actionText="Edit"
            />
            
            <PreferenceRow 
              icon={<LuSearch />}
              title="Avatar"
              description="Select an avatar to personalize your account"
              actionText="Edit"
            />
          </div>
        </section>

        {/* Preference Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Preference</h2>
          <div className="bg-[#1c1c1e]/40 rounded-xl px-6">
            <PreferenceRow 
              icon={<LuSearch />}
              title="Order confirmation"
              description="If you enable the reminder, an order will need to be reconfirmed every time"
              value="Limit order, Market order, stop limit"
              actionText="Manage"
            />
          </div>
        </section>

      </div>
    </div>
  );
}