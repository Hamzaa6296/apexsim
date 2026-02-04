import { FaInfoCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const NotificationItem = ({ title, description, time, type }: { 
  title: string; 
  description: string; 
  time: string; 
  type: 'alert' | 'security' 
}) => (
  <div className={`flex items-start justify-between p-4 border border-white/5 rounded-md cursor-pointer group`}>
    <div className="flex items-center justify-center gap-4">
      <div className='mt-1 flex-shrink-0 md:w-10 md:h-10 w-6 h-6 rounded-full md:p-2 p-1 bg-[#28282F] flex items-center justify-center'>
        {type == 'alert' ? <img src="/images/alert.png" alt="" /> :  <img src="/images/download.png" alt="" /> }
      </div>
      <div>
        <h4 className="text-white md:text-sm text-xs font-semibold leading-tight ">{title}</h4>
        <p className="text-[#BDBDC7] md:text-xs text-[10px] mt-1 leading-relaxed max-w-[280px] md:max-w-md">
          {description}
        </p>
      </div>
    </div>
    <span className="text-[#BDBDC7] md:text-xs text-[10px] font-medium whitespace-nowrap ml-4">{time}</span>
  </div>
);

export default function NotificationsPage() {
  const todayNotifications = [
    {
      title: "Ethereum Network Congestion",
      description: "Transaction fees are currently higher than usual due to network congestion.",
      time: "1h ago",
      type: "alert" as const
    },
    {
      title: "Security update available",
      description: "A new version with enhanced security features is ready to be installed",
      time: "1h ago",
      type: "security" as const
    }
  ];

  const yesterdayNotifications = [
    { title: "Ethereum Network Congestion", description: "Transaction fees are currently higher than usual...", time: "1h ago", type: "alert" as const },
    { title: "Security update available", description: "A new version with enhanced security features...", time: "1h ago", type: "security" as const },
    { title: "Ethereum Network Congestion", description: "Transaction fees are currently higher than usual...", time: "1h ago", type: "alert" as const },
    { title: "Security update available", description: "A new version with enhanced security features...", time: "1h ago", type: "security" as const },
  ];

  return (
    <div className="min-h-screen bg-[#181818] text-white p-4 md:p-12 font-manrope">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="md:text-2xl text-xl font-semibold md:mb-10 mb-5 tracking-wide">Notifications</h1>

        {/* Outer Container matching the image's dark card look */}
        <div className="bg-[#1D1D1D] border border-white/5 rounded-lg p-4 md:p-8 space-y-10">
          
          {/* TODAY SECTION */}
          <section>
            <h2 className="text-gray-50 text-md font-semibold mb-4">Today</h2>
            <div className="grid grid-cols-1  gap-4">
              {todayNotifications.map((n, i) => (
                <NotificationItem key={i} {...n} />
              ))}
            </div>
          </section>

          {/* YESTERDAY SECTION */}
          <section>
            <h2 className="text-gray-50 text-md font-semibold mb-4">Yesterday</h2>
            <div className="grid grid-cols-1 gap-4">
              {yesterdayNotifications.map((n, i) => (
                <NotificationItem key={i} {...n} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}