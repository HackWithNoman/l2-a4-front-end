"use client";

import { Calendar, LayoutDashboard, ShieldCheck, ShieldAlert, Star } from "lucide-react";

const benefits = [
  {
    badge: "For Tutors",
    title: "Profile & Availability",
    description: "Showcase your expertise, subjects, and introductory videos. Configure flexible scheduling with custom time-slot management and track all teaching appointments in one place.",
    icon: Calendar,
    visual: (
      <div className="w-full max-w-md mx-auto">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm font-semibold text-foreground">Weekly Schedule</span>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">3 slots open</span>
          </div>
          <div className="space-y-3">
            {[
              { day: "Mon", time: "4:00 PM", status: "Available" },
              { day: "Wed", time: "2:00 PM", status: "Available" },
              { day: "Fri", time: "11:00 AM", status: "Available" },
            ].map((slot) => (
              <div key={slot.day} className="flex items-center justify-between p-3.5 rounded-xl bg-muted/40 border border-border/60">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-foreground w-8">{slot.day}</span>
                  <span className="text-sm text-muted-foreground">{slot.time}</span>
                </div>
                <span className="text-xs font-medium text-emerald-600">{slot.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: "For Students",
    title: "Search & Dashboard",
    description: "Find the perfect tutor by subject, price, and rating. Book sessions instantly with real-time availability and manage your upcoming lessons and learning history in your personal dashboard.",
    icon: LayoutDashboard,
    visual: (
      <div className="w-full max-w-md mx-auto">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm font-semibold text-foreground">Learning Progress</span>
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">12 lessons</span>
          </div>
          <div className="h-28 flex items-center justify-center px-2">
            <svg className="w-full h-full" viewBox="0 0 160 60" preserveAspectRatio="none">
              <path
                d="M 0 50 Q 20 45 40 48 T 80 30 T 120 32 T 160 10"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="160" cy="10" r="4" fill="var(--primary)" />
            </svg>
          </div>
          <div className="flex justify-between mt-3 pt-3 border-t border-border/50">
            <span className="text-[11px] font-medium text-muted-foreground">Confirmed</span>
            <span className="text-[11px] font-medium text-muted-foreground">Completed</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: "Trust & Safety",
    title: "Review & Feedback",
    description: "Rate tutors after each completed session to share your experience. Genuine reviews linked to confirmed bookings ensure trustworthy feedback and help the community choose the best educators.",
    icon: ShieldCheck,
    visual: (
      <div className="w-full max-w-md mx-auto">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm font-semibold text-foreground">Session Verified</span>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">Completed</span>
          </div>
          <div className="p-4 rounded-xl bg-muted/40 border border-border/60">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-foreground">Dr. Sarah Jenkins</span>
              <span className="text-xs font-medium text-primary">Verified</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">Reviews linked to completed sessions only</p>
        </div>
      </div>
    ),
  },
  {
    badge: "Admin",
    title: "Moderation & Control",
    description: "Oversee platform safety with user moderation tools. Manage subject categories, monitor site-wide booking activity, and control user statuses with Ban/Unban capabilities.",
    icon: ShieldAlert,
    visual: (
      <div className="w-full max-w-md mx-auto">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm font-semibold text-foreground">Admin Console</span>
            <span className="text-xs font-medium text-rose-600 bg-rose-50 dark:bg-rose-950 px-3 py-1 rounded-full">Active</span>
          </div>
          <div className="space-y-2">
            {[
              { label: "User Moderation", action: "Ban User", color: "text-rose-600" },
              { label: "Category Control", action: "Manage", color: "text-emerald-600" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-3.5 rounded-xl bg-muted/40 border border-border/60">
                <span className="text-sm text-foreground font-medium">{item.label}</span>
                <span className={"text-xs font-semibold cursor-pointer " + item.color}>{item.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export const Benefits = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute -left-40 top-1/3 w-96 h-96 bg-accent/20 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Platform</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-semibold leading-tight text-foreground mt-4">
            Why Choose SkillBridge?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tailored tools for students, tutors, and admins — all in one seamless marketplace.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={benefit.title}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
              >
                <div className="flex-1 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 border border-primary/20">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{benefit.badge}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-heading font-semibold leading-tight text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-lg">
                    {benefit.description}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  {benefit.visual}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
