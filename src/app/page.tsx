import AboutSection from "@/components/homeSection/AboutSection";
import Banner from "@/components/homeSection/Banner";
import BlogSect from "@/components/homeSection/BlogSect";
import FeedbackSect from "@/components/homeSection/FeedbackSect";
import OfferSection from "@/components/homeSection/OfferSection";
import ShopSection from "@/components/homeSection/ShopSection";

export default function Home() {
  return (
    <div>

      <Banner />
      <ShopSection />
      <AboutSection/>
      <OfferSection />
      <FeedbackSect />
      <BlogSect />
      
    </div>
  );
}
