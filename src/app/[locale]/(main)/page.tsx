import BasedOnLocationSection from "@/components/main/home/BasedOnLocationSection";
import ContactUsSection from "@/components/main/home/ContactUsSection";
import Features from "@/components/main/home/Features";
import HeroSection from "@/components/main/home/HeroSection";
import PaymentsRow from "@/components/main/home/PaymentsRow";
import PropertyCategorySection from "@/components/main/home/PropertyCategorySection";
import RecentPropertiesSection from "@/components/main/home/RecentPropertiesSection";

export default async function Home() {

  return (
    <div>
      <HeroSection />
      <RecentPropertiesSection />
      <PropertyCategorySection />
      <BasedOnLocationSection />
      <PaymentsRow />
      <Features />
      <ContactUsSection />
    </div>
  );
}
