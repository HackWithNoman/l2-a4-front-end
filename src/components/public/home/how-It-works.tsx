"use client";

import { Search, Calendar, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Discover & Book",
    description: "Search and filter tutors by subject, price, and rating. View real-time availability and secure your session with instant booking.",
    icon: Search,
    number: "01",
  },
  {
    id: 2,
    title: "Learn & Track",
    description: "Attend your session with an expert educator. Track upcoming lessons and review your learning history in your personal dashboard.",
    icon: Calendar,
    number: "02",
  },
  {
    id: 3,
    title: "Review & Improve",
    description: "Share feedback and rate your tutor after each completed session. Help the community make informed decisions.",
    icon: Star,
    number: "03",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[160px] pointer-events-none -translate-y-1/2 -z-10" />
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">How It Works</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-semibold leading-tight text-foreground mt-4">
            Three Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find the right tutor, book instantly, learn together, and share your experience — all in one seamless platform.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px bg-border/60 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center text-center p-8 lg:p-10 rounded-2xl border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center text-sm font-bold shadow-sm ring ring-primary/30">
                    <span className="text-xs font-medium">{step.number}</span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-full shadow-lg px-10" asChild>
            <Link href="/tutors">
              <span>Get Started</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
