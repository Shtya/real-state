import BasedOnLocationSection from "@/components/main/home/BasedOnLocationSection";
import HeroSection from "@/components/main/home/HeroSection";
import PropertyCategorySection from "@/components/main/home/PropertyCategorySection";
import RecentPropertiesSection from "@/components/main/home/RecentPropertiesSection";

export default async function Home() {

  return (
    <div>
      <HeroSection />
      <RecentPropertiesSection />
      <PropertyCategorySection />
      <BasedOnLocationSection />
    </div>
  );
}
