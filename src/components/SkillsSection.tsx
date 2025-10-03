import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "UI Automation",
    tools: ["Playwright", "WebdriverIO"]
  },
  {
    category: "API Testing",
    tools: ["REST Assured", "Postman", "API Validation", "JSON/XML"]
  },
  {
    category: "Performance Testing",
    tools: ["Artillery", "Load Testing", "Scalability Analysis", "Monitoring"]
  },
  {
    category: "Accessibility Testing",
    tools: ["Screen Readers", "Keyboard Navigation", "Color Contrast"]
  },
  {
    category: "CI/CD & Tools",
    tools: ["Jenkins", "GitHub Actions", "Jira", "Agile Methodologies"]
  },
  {
    category: "Mobile Testing", 
    tools: ["Appium"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#334155] animate-gradient-shift"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[8%] w-48 h-48 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-float-fast"></div>
        <div className="absolute bottom-40 right-[12%] w-36 h-36 rotate-45 bg-white/5 backdrop-blur-sm border border-white/10 animate-float-medium"></div>
        <div className="absolute top-[50%] right-[20%] w-28 h-28 bg-white/5 backdrop-blur-sm border border-white/10 animate-float-slow"></div>
      </div>
      
      {/* Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[25%] right-[18%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
        <div className="absolute bottom-[35%] left-[20%] w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_25px_#10B981] animate-pulse-glow-delayed"></div>
        <div className="absolute top-[70%] left-[30%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] right-[35%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Technical Expertise</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive testing capabilities across multiple platforms and technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#06B6D4]">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="text-sm backdrop-blur-sm bg-[#10B981]/20 border-[#10B981]/30 text-slate-200 hover:bg-[#10B981]/30">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;