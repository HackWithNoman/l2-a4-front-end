import { Hero } from "@/components/public/home/hero";
import { Categories } from "@/components/public/home/categories";
import { HowItWorks } from "@/components/public/home/how-it-works";
import { FeaturedTutors } from "@/components/public/home/featured-tutors";
import { Benefits } from "@/components/public/home/benefits";
import { Testimonials } from "@/components/public/home/testimonials";
import { CallToAction } from "@/components/public/home/cta";
import { authService } from "@/services/auth.service";

export default async function Home() {
  console.log(await authService.getMe());

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner Section */}
      <Hero />

      {/* Main Study Pillars Categories Section */}
      <Categories />

      {/* Interactive Tabs How It Works Section */}
      <HowItWorks />

      {/* Verified Educator Featured Profiles */}
      <FeaturedTutors />

      {/* Unique Technology Platform Benefits */}
      <Benefits />

      {/* Student/Tutor Success Testimonials Section */}
      <Testimonials />

      {/* Final Action Call to Action Banner */}
      <CallToAction />
    </div>
  );
}
