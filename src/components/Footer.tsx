import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#334155] animate-gradient-shift"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[15%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
        <div className="absolute bottom-[40%] right-[20%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Collaborate?</h3>
          <p className="text-lg mb-6 text-slate-300">
            Let's build quality software together through comprehensive testing and automation
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="backdrop-blur-sm bg-[#10B981]/20 border-[#10B981]/30 text-slate-200">Quality Assurance</Badge>
            <Badge variant="secondary" className="backdrop-blur-sm bg-[#10B981]/20 border-[#10B981]/30 text-slate-200">Test Automation</Badge>
            <Badge variant="secondary" className="backdrop-blur-sm bg-[#10B981]/20 border-[#10B981]/30 text-slate-200">Continuous Integration</Badge>
            <Badge variant="secondary" className="backdrop-blur-sm bg-[#10B981]/20 border-[#10B981]/30 text-slate-200">Agile Testing</Badge>
          </div>
          <p className="text-sm text-slate-400">
            © 2024 QA Portfolio. Committed to delivering exceptional software quality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;