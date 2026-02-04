"use client";
import React from 'react';
import { 
  LuShieldCheck, 
  LuSmartphone, 
  LuMail, 
  LuKeyRound, 
  LuWallet, 
  LuMonitorSmartphone, 
  LuHistory, 
  LuUserX 
} from "react-icons/lu";

interface SecurityRowProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  actionText: string;
  info?: string;
  isDelete?: boolean;
}

const SecurityRow = ({ icon, title, subtitle, actionText, info, isDelete }: SecurityRowProps) => (
  <div className="flex items-center justify-between py-6 border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors px-2">
    <div className="flex items-center gap-4">
      <div className="text-gray-400 text-xl">
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-3">
          <h4 className="font-semibold text-[15px] text-white">{title}</h4>
          {info && <span className="text-gray-500 text-sm font-medium">{info}</span>}
        </div>
        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed max-w-[500px]">
          {subtitle}
        </p>
      </div>
    </div>
    <button 
      className={`px-6 py-1.5 rounded text-sm font-semibold transition-all cursor-pointer min-w-[80px]
        ${isDelete 
          ? 'bg-transparent text-gray-400 hover:text-red-500' 
          : 'bg-[#262628] text-white hover:bg-[#323234]'
        }`}
    >
      {actionText}
    </button>
  </div>
);

export default function SecuritySettings() {
  return (
    <div className="min-h-screen bg-[#1D1D1D] text-white p-4 md:p-8 font-manrope">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Authentication Method */}
        <section>
          <h3 className="text-gray-400 text-sm font-medium mb-4">Authentication method</h3>
          <div className="bg-[#1c1c1e]/30 rounded-lg px-4">
            <SecurityRow 
              icon={<LuShieldCheck />}
              title="Google Authenticator"
              subtitle="API Secure verification when withdrawing, retrieving passwords, modifying security settings and managing API"
              actionText="Bind"
            />
            <SecurityRow 
              icon={<LuSmartphone />}
              title="Phone number"
              info="+14235468364"
              subtitle="Receive verification SMS that is used to withdraw, change the password or security settings"
              actionText="Bind"
            />
            <SecurityRow 
              icon={<LuMail />}
              title="Email address"
              info="ajames@gmail.com"
              subtitle="Used when logging in, withdrawing and modifying security settings"
              actionText="Change"
            />
          </div>
        </section>

        {/* Advanced Security */}
        <section>
          <h3 className="text-gray-400 text-sm font-medium mb-4">Advanced Security</h3>
          <div className="bg-[#1c1c1e]/30 rounded-lg px-4">
            <SecurityRow 
              icon={<LuKeyRound />}
              title="Password"
              subtitle="Used to manage your account login password"
              actionText="Change"
            />
            <SecurityRow 
              icon={<LuWallet />}
              title="Address management"
              subtitle="After setting as a trust address, withdrawals will be exempt from security verification"
              actionText="Manage"
            />
          </div>
        </section>

        {/* Account Management */}
        <section>
          <h3 className="text-gray-400 text-sm font-medium mb-4">Account Management</h3>
          <div className="bg-[#1c1c1e]/30 rounded-lg px-4">
            <SecurityRow 
              icon={<LuMonitorSmartphone />}
              title="My device"
              subtitle="For managing logged-in devices and viewing device history"
              actionText="Manage"
            />
            <SecurityRow 
              icon={<LuHistory />}
              title="Account activity"
              info="Last login IP address: 102.88.106.227"
              subtitle="View your account's login history"
              actionText="Manage"
            />
            <SecurityRow 
              icon={<LuUserX />}
              title="Delete account"
              subtitle="After deleting your account, you will never be able to re-register this account and its sub-account email, mobile phone number, and identity information."
              actionText="Delete"
              isDelete
            />
          </div>
        </section>

      </div>
    </div>
  );
}