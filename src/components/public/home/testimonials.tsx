"use client";

import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const platformTestimonials = [
  {
    name: "Aria Sterling",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    role: "Calculus & Computer Science Learner",
    quote: "SkillBridge made acing my Calculus exams seamless. I found Dr. Sarah Jenkins using the search filters, picked an availability slot, and booked instantly. The completed-only review system is so authentic!",
    rating: 5,
  },
  {
    name: "Daniel Cole",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    role: "Full-Stack Development Expert Tutor",
    quote: "Tutoring on SkillBridge has been a game-changer. The profile management tools let me showcase my expertise and subjects. I stay organized with the session tracker showing all my upcoming teaching appointments.",
    rating: 5,
  },
  {
    name: "Isabella Martinez",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    role: "Conversational Spanish & ESL Learner",
    quote: "I passed my ESL exams on my first try thanks to customized sessions with Prof. Elena Rostova. The search tool let me filter tutors by hourly rate and rating instantly. I love my personal learning dashboard.",
    rating: 5,
  },
  {
    name: "Devon Reynolds",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    role: "Advanced Mathematics Expert Tutor",
    quote: "The profile management panel is exceptionally designed. My session tracker keeps me perfectly organized and has completely optimized my appointment schedules.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-28 relative overflow-hidden border-y border-border/60">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-semibold leading-tight text-foreground mt-4">
            Success Stories from Our Community
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our community of learners and educators who use SkillBridge to achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {platformTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border bg-card p-8 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-muted/15 pointer-events-none" />

              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-base text-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-background shadow-sm shrink-0">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
