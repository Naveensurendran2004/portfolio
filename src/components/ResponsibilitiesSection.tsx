import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const responsibilities = [
  {
    title: "UI Functional Testing (Playwright/WebDriverIO/Robot Framework)",
    items: [
      "Built modular framework with page objects, utils, and spec layers enabling code reusability - reduced test creation time by 40% and maintenance effort by 50%",
      "Implemented dynamic element handling with multiple locator strategies and retry mechanisms - decreased flaky tests from 30% to under 5%",
      "Designed cross-browser execution with browser-agnostic selectors - achieved 90% code reuse and saved 15+ hours per sprint"
    ]
  },
  {
    title: "API Testing (REST Assured/Postman)",
    items: [
      "Created parameterized test suites with dynamic environment switching through utils classes - eliminated 20+ hours monthly in configuration changes and reduced deployment failures by 80%",
      "Built response validation framework comparing API responses against database states with custom assertions - identified data issues 3 days earlier preventing 12+ critical production bugs",
      "Implemented API contract testing with schema validation in CI/CD pipelines - reduced integration defects by 70% and cut debugging time from 8 hours to 30 minutes"
    ]
  },
  {
    title: "Mobile Testing (Appium)",
    items: [
      "Developed cross-platform framework with device-specific page objects and utils for capabilities management - achieved 85% code reuse reducing development time from 6 weeks to 2 weeks",
      "Built gesture automation with dynamic coordinate calculation based on screen dimensions - eliminated 100+ manual test cases saving 40 hours per release",
      "Created hybrid app testing with seamless native-webview context switching - reduced execution time by 35% and caught 25+ webview-specific defects"
    ]
  },
  {
    title: "Performance Testing (Artillery)",
    items: [
      "Built realistic user journey scenarios analyzing production logs with weighted test patterns - prevented potential 4-hour outage and identified bottlenecks 2 weeks before release",
      "Implemented real-time monitoring integration with automated threshold alerts - reduced issue identification time from 6 hours to 10 minutes and improved response time by 60%",
      "Created data-driven tests with CSV files for unique user sessions - achieved 99.5% simulation accuracy and reduced server costs by 30%"
    ]
  },
  {
    title: "Accessibility Testing",
    items: [
      "Integrated axe-core scanning with custom reporting for WCAG violations - detected 150+ issues early reducing remediation cost by 10x",
      "Built keyboard navigation framework validating tab order and focus management - eliminated 80 hours of manual testing per quarter",
      "Implemented color contrast validation across multiple viewports - reduced testing time from 5 days to 2 hours"
    ]
  },
  {
    title: "CI/CD & Project Management (Jenkins/GitHub Actions/Jira/Agile)",
    items: [
      "Created intelligent pipelines running relevant tests based on code changes - decreased runtime from 90 minutes to 35 minutes enabling 8+ deployments daily",
      "Built automated defect workflow generating Jira tickets with screenshots and failure details - saved 15 hours per week and improved bug fix turnaround by 45%",
      "Implemented test results dashboard with coverage metrics per user story - improved sprint planning accuracy by 35% and reduced production defects by 55%"
    ]
  }
];

const ResponsibilitiesSection = () => {
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
        <div className="absolute top-32 left-[12%] w-52 h-52 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-float-slow"></div>
        <div className="absolute bottom-48 right-[18%] w-44 h-44 rotate-45 bg-white/5 backdrop-blur-sm border border-white/10 animate-float-fast"></div>
        <div className="absolute top-[55%] left-[22%] w-32 h-32 bg-white/5 backdrop-blur-sm border border-white/10 animate-float-medium"></div>
      </div>
      
      {/* Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[18%] right-[12%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
        <div className="absolute bottom-[28%] left-[16%] w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_25px_#10B981] animate-pulse-glow-delayed"></div>
        <div className="absolute top-[65%] right-[28%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow"></div>
        <div className="absolute bottom-[45%] left-[32%] w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_20px_#10B981] animate-pulse-glow-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Roles & Responsibilities</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Detailed contributions and achievements across different testing domains
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {responsibilities.map((section, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/5 border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-[#06B6D4]">{section.title}</h3>
                <div className="grid gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-1 group-hover:text-[#06B6D4] transition-colors" />
                      <p className="text-base leading-relaxed text-slate-200">{item}</p>
                    </div>
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

export default ResponsibilitiesSection;
