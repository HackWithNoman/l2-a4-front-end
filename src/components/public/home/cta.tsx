"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Search, Sparkles } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-foreground text-background px-8 py-16 sm:px-16 sm:py-20 shadow-xl">
          {/* Subtle gradient overlay instead of solid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 text-background text-sm font-medium mb-8 border border-background/20">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Start Your Learning Journey</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-heading font-semibold leading-tight">
              Ready to Master Any Subject?
            </h2>
            <p className="mt-6 text-lg text-background/70 max-w-lg mx-auto leading-relaxed">
              Join thousands of learners and educators on SkillBridge. Search and filter tutors by subject, price, and rating. Book sessions instantly and track your progress.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold" asChild>
                <Link href="/tutors">
                  <Search className="w-4 h-4" />
                  <span>Search & Discover Tutors</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-background/20 bg-background/5 text-background hover:bg-background/10 px-8 font-semibold"
                asChild
              >
                <Link href="/signUp?role=tutor">
                  <GraduationCap className="w-4 h-4" />
                  <span>Become a Verified Tutor</span>
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-background/60 font-medium">
              <span>Search by subject, price & rating</span>
              <span>Instant booking & real-time availability</span>
              <span>Personal learning dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
