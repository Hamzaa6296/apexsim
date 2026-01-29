import Navbar from "@/components/landingpage/Navbar";
import Hero from "@/components/landingpage/HeroSection";
import Features from "@/components/landingpage/Features";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Note: Background grid and V-lines are handled by globals.css 
          on the body tag, so we don't need PerspectiveLines component here. 
      */}
      
      {/* 1. Top Glow (Matches the 'Confidence' theme) */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px]  blur-[140px] rounded-full pointer-events-none" />
      
      <Navbar />
      <Hero />
      <Features />
      
      {/* You can add more sections here easily, and the background will grow automatically */}
      {/* <Features /> */}
      {/* <Footer /> */}
    </div>
  );
}