import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { JourneySection } from "@/components/home/JourneySection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CustomerExperience } from "@/components/home/CustomerExperience";
import { MembershipCardShowcase } from "@/components/home/MembershipCardShowcase";
import { CommunicationSection } from "@/components/home/CommunicationSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Metrics } from "@/components/home/Metrics";
import { Pricing } from "@/components/home/Pricing";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeatureShowcase />
      <JourneySection />
      <IndustriesSection />
      <CustomerExperience />
      <MembershipCardShowcase />
      <CommunicationSection />
      <Testimonials />
      <Metrics />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
