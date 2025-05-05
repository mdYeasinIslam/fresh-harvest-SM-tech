import AboutSection from "@/components/homeSection/AboutSection";
import Banner from "@/components/homeSection/Banner";
import ShopSection from "@/components/homeSection/ShopSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <ShopSection />
      <AboutSection/>
      <ShopSection />
    </div>
  );
}
