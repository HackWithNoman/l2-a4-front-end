"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Star, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22&gt;&lt;path d=%22M0 0h100v100H0z%22 fill=%22%23fff%22 fill-opacity=%220.02%22/%3E%3C/svg%22&quot;)" />
      {/* Warm organic background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left — Main content */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
              <BookOpen className="w-4 h-4" />
              <span>Full-Stack Learning Marketplace</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-heading font-semibold leading-[1.08] tracking-tight text-foreground">
              Connect with
              <br />
              <span className="italic text-primary">Expert Tutors</span>
              <br />
              Learn Anything.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              SkillBridge is a robust full-stack marketplace that bridges the gap between eager learners and expert educators. Whether you are looking to master a new language, dive into coding, or ace your exams, SkillBridge makes finding and booking the right tutor seamless.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:max-w-md group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition duration-300" />
                <div className="relative flex items-center bg-card rounded-full pl-5 pr-2 py-2 border shadow-sm">
                  <Search className="w-5 h-5 text-muted-foreground mr-3 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search tutors by subject, price, or rating..."
                    className="bg-transparent text-foreground placeholder:text-muted-foreground/60 outline-none text-sm w-full"
                  />
                  <Button size="sm" className="rounded-full shrink-0" asChild>
                    <Link href="/tutors">
                      <span>Explore</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/60 flex flex-wrap gap-x-12 gap-y-5">
              {[
                ["Search & Discovery", "Find tutors by subject, price, and rating"],
                ["Instant Booking", "Real-time availability & secure booking"],
                ["Personal Dashboard", "Track lessons & learning history"],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-3 max-w-[220px]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <div>
                    <span className="text-sm font-semibold text-foreground">{title}</span>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Editorial featured card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main feature card */}
              <div className="relative rounded-2xl border bg-card p-8 shadow-lg overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-emerald-600 tracking-wide">Featured Tutor</span>
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground">Dr. Sarah Jenkins</h3>
                      <p className="text-sm text-muted-foreground mt-1">Stanford Computer Science PhD</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-foreground">$45</span>
                      <span className="text-sm text-muted-foreground">/hr</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="text-sm font-medium text-muted-foreground ml-2">5.0 (142 reviews)</span>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4">
                    &ldquo;Passionate about simplifying computer science. I assist students with algorithms, data structures, and web technologies.&rdquo;
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Next.js", "Data Structures", "Calculus"].map((tag) => (
                      <span key={tag} className="inline-flex text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Available today
                    </div>
                    <Button size="sm" className="rounded-full" asChild>
                      <Link href="/tutors/tutor_1">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats cards */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  ["500+", "Expert Tutors"],
                  ["150+", "Subjects"],
                  ["4.9", "Avg. Rating"],
                ].map(([num, label]) => (
                  <div key={label} className="rounded-xl border bg-card p-4 text-center shadow-sm">
                    <div className="text-xl font-bold text-foreground">{num}</div>
                    <div className="text-[11px] text-muted-foreground mt-1 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
