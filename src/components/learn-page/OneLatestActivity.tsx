interface ActivityDetailProps {
  onBack: () => void;
}

export default function ActivityDetail({ onBack }: ActivityDetailProps) {
  return (
    <div className="flex-1 animate-in fade-in duration-500 md:pr-8 pr-4">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1 text-[15px] mb-4">
        <span className="text-gray-500 !cursor-pointer hover:text-white" onClick={onBack}>Learn</span>
        <span className="text-gray-500"> {">"} </span>
        <span className="text-gray-500 !cursor-pointer hover:text-white" onClick={onBack}>Latest activities</span>
        <span className="text-gray-500"> {">"} </span>
        <span className="text-white font-medium">Current page</span>
      </nav>

      {/* Hero Title & Date */}
      <div className="space-y-4 mb-4">
        <h1 className="text-3xl font-semibold text-white tracking-tight">
          Top-up with $100 and get $30 in BTC
        </h1>
        <span className="inline-block bg-[#222222] text-gray-400 text-sm px-3 py-1 rounded">
          Jan 23
        </span>
      </div>

      {/* Hero Image Container */}
      <div className="w-full bg-[#232323] rounded-lg border border-white/5 flex items-center justify-center p-12 mb-6">
        <img 
          src="/images/learnsection.png" 
          alt="BTC Reward" 
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* Content Body */}
      <div className=" text-gray-50 text-lg leading-relaxed max-w-3xl">
        <p className="md:mb-8 mb-4">NL new users who top up €100 and trade enjoy a $30 BTC reward — first come, first serve!</p>
        <p>There's never been an easier way to instantly earn BTC rewards — top up on Bybit EU now!</p>
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Terms and Conditions</h3>
          <ul className="space-y-3 list-none">
            <li>- This event is open only to new users from the Netherlands on Bybit EU.</li>
            <li>- Users must register for the event using the Register Now button to be eligible for rewards.</li>
            <li>- Rewards are limited and will be distributed on a first-come, first-served basis.</li>
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <button className="mt-10 bg-[#0055FF] text-white px-20 py-3 rounded-sm  text-sm !cursor-pointer  shadow-lg shadow-blue-500/20">
        Register
      </button>
    </div>
  );
}