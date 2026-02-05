"use client";
import React from 'react';
import { LuEye, LuSearch, LuCopy } from "react-icons/lu";
import { FaAddressCard } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillProfile } from "react-icons/ai";

interface PreferenceRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value?: string;
  actionText: string;
}

const PreferenceRow = ({ icon, title, description, value, actionText }: PreferenceRowProps) => (
  <div className="flex items-start justify-between md:py-3 py-5 border-b border-white/5">
    <div className="flex items-center gap-4">
      <div className="text-gray-400 text-2xl mt-1">
        {icon}
      </div>
      <div className="flex flex-col">
        <h4 className="font-semibold text-white text-[15px]">{title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
          {description}
        </p>
        {value && <span className="text-white text-sm mt-1 font-medium">{value}</span>}
      </div>
    </div>
    <div>
      <button className="bg-[#222222] text-white text-[12px] px-5 font-semibold py-1 rounded transition-all cursor-pointer">
        {actionText}
      </button>
    </div>
  </div>
);

export default function ProfileSettings() {
  return (
    <div className=" text-white py-5 md:py-0 font-manrope">
      <div className="max-w-6xl mx-auto">

        {/* Profile Section */}
        <section>
          <h2 className="text-2xl font-semibold px-4">Profile</h2>
          <div className=" px-6">
            <PreferenceRow
              icon={<FaAddressCard />}
              title="Nickname"
              description="Set a customized nickname"
              value="User_wy6eef"
              actionText="Edit"
            />

            <PreferenceRow
              icon={<IoPersonSharp />}
              title="Avatar"
              description="Select an avatar to personalize your account"
              actionText="Edit"
            />
          </div>
        </section>

        {/* Preference Section */}
        <section>
          <h2 className="text-2xl font-semibold px-4">Preference</h2>
          <div className="px-6">
            <PreferenceRow
              icon={<AiFillProfile />}
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