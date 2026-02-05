"use client";
import React from 'react';
import { BsGoogle, BsFillPhoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLock, MdDesktopMac, MdDelete } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { PiDesktopTowerFill } from "react-icons/pi";

interface SecurityRowProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  actionText: string;
  info?: string;
}

const SecurityRow = ({
  icon,
  title,
  subtitle,
  actionText,
  info
}: SecurityRowProps) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 sm:py-6 border-b border-white/5 last:border-0">
    
    <div className="flex items-start gap-4">
      <div className="text-gray-400 text-xl mt-1 sm:mt-0">
        {icon}
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 sm:w-[830px]">
          <h4 className="font-semibold text-[15px] text-white">
            {title}
          </h4>

          {info && (
            <span className="text-gray-50 text-sm font-medium break-all sm:break-normal">
              {info}
            </span>
          )}
        </div>

        <p className="text-gray-500 text-xs mt-1 leading-relaxed max-w-full sm:max-w-[750px]">
          {subtitle}
        </p>
      </div>
    </div>

    <button
      className="self-start sm:self-center py-2 px-4 rounded text-sm font-semibold transition-all cursor-pointer min-w-[90px] bg-[#222222] text-white"
    >
      {actionText}
    </button>
  </div>
);

export default function SecuritySettings() {
  return (
    <div className="min-h-screen  text-white font-manrope px-3 sm:px-4">
      <div className="max-w-5xl md:py-0 py-5 mx-auto space-y-10 sm:space-y-12">

        {/* Authentication Method */}
        <section className="border-b-4 border-b-[#181818] pb-2">
          <h3 className="text-gray-50 text-lg font-medium mb-2">
            Authentication method
          </h3>

          <div>
            <SecurityRow
              icon={<BsGoogle />}
              title="Google Authenticator"
              subtitle="API Secure verification when withdrawing, retrieving passwords, modifying security settings and managing API"
              actionText="Bind"
            />

            <SecurityRow
              icon={<BsFillPhoneFill />}
              title="Phone number"
              info="+14235468364"
              subtitle="Receive verification SMS that is used to withdraw, change the password or security settings"
              actionText="Bind"
            />

            <SecurityRow
              icon={<IoMdMail />}
              title="Email address"
              info="ajames@gmail.com"
              subtitle="Used when logging in, withdrawing and modifying security settings"
              actionText="Change"
            />
          </div>
        </section>

        {/* Advanced Security */}
        <section className="border-b-4 border-b-[#181818] pb-2">
          <h3 className="text-gray-50 text-lg font-medium mb-2">
            Advanced Security
          </h3>

          <div className="bg-[#1c1c1e]/30 rounded-lg">
            <SecurityRow
              icon={<MdLock />}
              title="Password"
              subtitle="Used to manage your account login password"
              actionText="Change"
            />

            <SecurityRow
              icon={<FaWallet />}
              title="Address management"
              subtitle="After setting as a trust address, withdrawals will be exempt from security verification"
              actionText="Manage"
            />
          </div>
        </section>

        {/* Account Management */}
        <section>
          <h3 className="text-gray-50 text-lg font-medium mb-2">
            Account Management
          </h3>

          <div className="bg-[#1c1c1e]/30 rounded-lg">
            <SecurityRow
              icon={<PiDesktopTowerFill />}
              title="My device"
              subtitle="For managing logged-in devices and viewing device history"
              actionText="Manage"
            />

            <SecurityRow
              icon={<MdDesktopMac />}
              title="Account activity"
              subtitle="Last login IP address: 102.88.106.227"
              actionText="Manage"
            />

            <SecurityRow
              icon={<MdDelete />}
              title="Delete account"
              subtitle="After deleting your account, you will never be able to re-register this account and its sub-account email, mobile phone number, and identity information."
              actionText="Delete"
            />
          </div>
        </section>

      </div>
    </div>
  );
}
