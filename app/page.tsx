import FAQsTwo from "@/components/faqs-2";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-1";
import StatsSection from "@/components/stats-3";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div>
     <HeroSection/>
     <Features/>
     <IntegrationsSection/>
     <StatsSection/>
     <FAQsTwo/>
     <FooterSection/>
    </div>
  );
}
