import HeroSection from "@/components/main/home/HeroSection";
import PropertyCategorySection from "@/components/main/home/PropertyCategorySection";
import RecentProperties from "@/components/main/home/RecentProperties";

export default async function Home() {

  return (
    <div>
      <HeroSection />
      <RecentProperties />
      <PropertyCategorySection />
    </div>
  );
}
