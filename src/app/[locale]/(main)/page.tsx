import HeroSection from "@/components/main/home/HeroSection";

export default async function Home() {

  return (
    <div>
      <HeroSection />
      <div className="h-[500px] rounded-[83px] mt-10" style={{
        background: 'linear-gradient(180deg, #C0B283 0%, #F1E3D3 100%)',
      }}>

      </div>
    </div>
  );
}
