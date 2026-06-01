"use client";

import Link from "next/link";
import { Star, ShieldCheck, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const expertTutors = [
  {
    id: "tutor_1",
    name: "Dr. Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=250",
    role: "Stanford Computer Science PhD",
    rating: "5.0",
    reviewsCount: 142,
    rate: 45,
    bio: "Passionate about simplifying computer science. I assist students with algorithms, data structures, and web technologies.",
    subjects: ["Next.js", "Data Structures", "Calculus BC"],
    isOnline: true,
    experience: "12 years experience",
  },
  {
    id: "tutor_2",
    name: "Prof. Elena Rostova",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=250",
    role: "Linguistics & ESL Specialist",
    rating: "4.9",
    reviewsCount: 96,
    rate: 35,
    bio: "I teach bilingual conversation patterns, advanced vocabulary, accent alignment, and help prepare for IELTS and TOEFL exams.",
    subjects: ["ESL", "IELTS Academic", "Conversational Russian"],
    isOnline: false,
    experience: "8 years experience",
  },
  {
    id: "tutor_3",
    name: "Marcus Vance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250",
    role: "Senior Full-Stack Engineer",
    rating: "4.9",
    reviewsCount: 118,
    rate: 40,
    bio: "Learn core development in real-world environments. I cover API design, React architectures, and database optimization.",
    subjects: ["React.js", "PostgreSQL", "System Design"],
    isOnline: true,
    experience: "10 years experience",
  },
  {
    id: "tutor_4",
    name: "Dr. Kenji Tanaka",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=250",
    role: "Physics Researcher & Educator",
    rating: "5.0",
    reviewsCount: 84,
    rate: 50,
    bio: "Breaking down complex quantum mechanics and physics into actionable insights for exams, olympiads, and college entrance.",
    subjects: ["AP Physics", "Quantum Mechanics", "Linear Algebra"],
    isOnline: true,
    experience: "15 years experience",
  },
];

export const FeaturedTutors = () => {
  return (
    <section className="py-28 relative overflow-hidden border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Educators</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-semibold leading-tight text-foreground mt-4">
              Meet Our Featured Experts
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Select from top-tier educators with verified academic profiles and real-world industry experience.
            </p>
          </div>
          <Button variant="outline" className="rounded-full shrink-0" asChild>
            <Link href="/tutors">
              <span>View All Educators</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-primary/20 flex flex-col"
            >
              {/* Online indicator */}
              {tutor.isOnline && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-medium text-emerald-600">Online</span>
                </div>
              )}

              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 border-2 border-background shadow-sm shrink-0">
                  <AvatarImage src={tutor.image} alt={tutor.name} className="object-cover" />
                  <AvatarFallback>{tutor.name.split(" ").slice(-1)[0][0]}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-foreground truncate group-hover:text-primary transition-colors">{tutor.name}</h3>
                  <p className="text-xs text-muted-foreground truncate">{tutor.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
                    <span className="text-xs font-semibold text-foreground">{tutor.rating}</span>
                    <span className="text-[10px] text-muted-foreground">({tutor.reviewsCount})</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                &ldquo;{tutor.bio}&rdquo;
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {tutor.subjects.map((sub) => (
                  <Badge key={sub} variant="outline" className="text-[10px] font-normal bg-muted/40 px-2 py-0.5">
                    {sub}
                  </Badge>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-foreground">${tutor.rate}</span>
                  <span className="text-xs text-muted-foreground">/hr</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{tutor.experience}</p>
                </div>
                <Button size="sm" className="rounded-full" asChild>
                  <Link href={"/tutors?id=" + tutor.id}>Book</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
