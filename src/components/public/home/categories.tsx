"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Development & Coding",
    description: "Master software engineering, algorithms, and web development with industry experts.",
    tags: ["React 19", "Next.js 16", "Python AI"],
    color: "bg-primary",
    link: "/tutors?category=development",
  },
  {
    title: "Languages",
    description: "Build fluency in English, Spanish, Mandarin, and more with native-speaking educators.",
    tags: ["ESL", "IELTS", "Conversational"],
    color: "bg-accent",
    link: "/tutors?category=languages",
  },
  {
    title: "Mathematics",
    description: "From algebra to calculus — work through problems with expert mathematicians.",
    tags: ["Calculus", "Statistics", "Linear Algebra"],
    color: "bg-primary",
    link: "/tutors?category=math",
  },
  {
    title: "Test Prep",
    description: "Ace the SAT, IELTS, TOEFL, and GRE with structured strategies from top scorers.",
    tags: ["SAT", "IELTS", "GRE"],
    color: "bg-accent",
    link: "/tutors?category=prep",
  },
  {
    title: "Science & Engineering",
    description: "Explore physics, chemistry, and biology with PhD researchers and expert educators.",
    tags: ["Organic Chem", "AP Physics", "Cell Biology"],
    color: "bg-primary",
    link: "/tutors?category=science",
  },
];

export const Categories = () => {
  return (
    <section className="py-28 relative overflow-hidden border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Subjects</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-semibold leading-tight text-foreground mt-4">
            Find Your Perfect Subject
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse expert tutors by subject — from coding and languages to math, science, and exam preparation.
          </p>
        </div>

        <div className="space-y-5">
          {categories.map((cat, idx) => (
            <Link
              key={cat.title}
              href={cat.link}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-8 p-6 sm:p-8 rounded-2xl border bg-card hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity ${cat.color}`} />

              <div className="flex-1 pl-3 sm:pl-4">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {"0" + (idx + 1)}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="inline-flex text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-primary font-semibold text-sm pl-3 sm:pl-0">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
