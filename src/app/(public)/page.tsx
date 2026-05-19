import Categories from "@/components/public/home/categories";
import CTA from "@/components/public/home/cta";
import Hero from "@/components/public/home/hero";
import HowItWorks from "@/components/public/home/how-It-works";
import Stats from "@/components/public/home/stats";
import Team from "@/components/public/home/team";
import Testimonials from "@/components/public/home/testimonials";

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
    </div>
  );
}
