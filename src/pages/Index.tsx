import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import FeaturedCarts from "@/components/home/FeaturedCarts";
import PopularEvents from "@/components/home/PopularEvents";
import HowItWorks from "@/components/home/HowItWorks";
import SpecialDeals from "@/components/home/SpecialDeals";
// import Br from "@/components/home/Process";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
// import InstagramFeed from "@/components/home/InstagramFeed";
import Newsletter from "@/components/home/Newsletter";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <main>
    <HeroSection />
    <StatsBar />
    <FeaturedCarts />
    <PopularEvents />
    <HowItWorks />
    <Process/>

    <SpecialDeals/>
    <Testimonials />
    {/* <InstagramFeed /> */}
    <Newsletter />
    <CTASection />
  </main>
);

export default Index;
