import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] animate-gradient-shift"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-[10%] w-56 h-56 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-float-medium"></div>
        <div className="absolute bottom-32 left-[15%] w-40 h-40 rotate-45 bg-white/5 backdrop-blur-sm border border-white/10 animate-float-slow"></div>
      </div>
      
      {/* Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
        <div className="absolute bottom-[30%] right-[15%] w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_25px_#10B981] animate-pulse-glow-delayed"></div>
        <div className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Professional Experience</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Delivering quality software through automation and continuous improvement
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/5 border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6 text-slate-200">
                  I am a QA Automation Engineer with 1 year of professional experience in testing web, mobile, and API applications. 
                  I specialize in UI automation, mobile testing, API testing, and performance testing, ensuring software quality across diverse platforms.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-slate-200">
                  During my career, I have gained hands-on experience in <strong className="text-[#10B981]">Playwright</strong>, <strong className="text-[#10B981]">Robot Framework</strong>, 
                  and <strong className="text-[#10B981]">WebdriverIO</strong> for UI automation while contributing to projects at <strong className="text-[#10B981]">STL</strong> and <strong className="text-[#10B981]">SAP</strong>. 
                  I also worked on mobile app testing with <strong className="text-[#10B981]">Appium</strong>, API validation using <strong className="text-[#10B981]">REST Assured</strong> and <strong className="text-[#10B981]">Postman</strong>, 
                  and performance testing with <strong className="text-[#10B981]">Artillery</strong>.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-slate-200">
                  Additionally, I have conducted accessibility testing to ensure inclusive and compliant user experiences. 
                  I am skilled in CI/CD integration with <strong className="text-[#10B981]">Jenkins</strong> and <strong className="text-[#10B981]">GitHub Actions</strong>, 
                  and I have actively worked in Agile teams using <strong className="text-[#10B981]">Jira</strong> for project tracking and collaboration.
                </p>
                
                <p className="text-lg leading-relaxed text-[#10B981] font-medium">
                  My focus is on delivering scalable, high-quality software through automation and continuous improvement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;