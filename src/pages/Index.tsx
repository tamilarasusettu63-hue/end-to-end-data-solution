import HeroSection from "@/components/HeroSection";
import PipelineSection from "@/components/PipelineSection";
import MetricsSection from "@/components/MetricsSection";
import ApiDemoSection from "@/components/ApiDemoSection";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PipelineSection />
      <MetricsSection />
      <ApiDemoSection />
      <TechStackSection />
      <Footer />
    </main>
  );
};

export default Index;
