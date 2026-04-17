import Categories from "@/components/home/categories";
import CTA from "@/components/home/cta";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-It-works";
import Stats from "@/components/home/stats";
import Team from "@/components/home/team";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Team />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}
