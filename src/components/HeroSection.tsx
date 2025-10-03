import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#475569] animate-gradient-shift"></div>
      
      {/* Grid Pattern Overlay with Cyan Accent */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Geometric Shapes with Glassmorphism */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle */}
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-float-slow"></div>
        
        {/* Medium Square */}
        <div className="absolute top-40 right-[15%] w-48 h-48 rotate-45 bg-white/5 backdrop-blur-sm border border-white/10 animate-float-medium"></div>
        
        {/* Small Circle */}
        <div className="absolute bottom-32 left-[20%] w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-float-fast"></div>
        
        {/* Triangle-like shape */}
        <div className="absolute bottom-20 right-[25%] w-40 h-40 rotate-12 bg-white/5 backdrop-blur-sm border border-white/10 animate-float-slow"></div>
      </div>
      
      {/* Glowing Emerald Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
        <div className="absolute top-[30%] right-[12%] w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_25px_#10B981] animate-pulse-glow-delayed"></div>
        <div className="absolute bottom-[25%] left-[15%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
        <div className="absolute bottom-[40%] right-[20%] w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_25px_#10B981] animate-pulse-glow-delayed"></div>
        <div className="absolute top-[50%] left-[30%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
        <div className="absolute top-[70%] right-[35%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow-delayed"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <Badge variant="secondary" className="mb-2 px-4 py-2 text-sm font-medium backdrop-blur-sm bg-white/10 border-white/20">
              QA Automation Engineer
            </Badge>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
              Hi, I'm Naveen
            </h2>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Quality Driven
            <br />
            <span className="bg-gradient-to-r from-[#06B6D4] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              Testing Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            1 year of professional experience in testing web, mobile, and API applications. 
            Specializing in UI automation, mobile testing, and performance validation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg bg-[#10B981] hover:bg-[#059669] text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all">
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg backdrop-blur-sm bg-white/5 border-white/20 text-white hover:bg-white/10"
              onClick={() => window.open("https://www.linkedin.com/in/naveen-surendran-529a28252", "_blank")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;