export default function AppBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a] overflow-hidden pointer-events-none">
      {/* The Grid Boxes */}
      <div className="absolute inset-0 bg-big-boxes opacity-60" />

      {/* The Shiny Streaks (Positioned to match the screenshot) */}
      <div className="absolute inset-0 flex justify-around px-10">
        {[10, 25, 45, 60, 85].map((pos) => (
          <div 
            key={pos} 
            className="light-streak" 
            style={{ left: `${pos}%` }} 
          />
        ))}
      </div>

      {/* Center Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full" />
    </div>
  );
}