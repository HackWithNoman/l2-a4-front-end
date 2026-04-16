import Categories from "@/components/categories";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-It-works";
import Stats from "@/components/stats";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";

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
