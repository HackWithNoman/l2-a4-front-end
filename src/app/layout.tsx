import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: "Skillbridge | Connect with Expert Tutors, Learn Anything",
  description: "SkillBridge is a robust full-stack marketplace that bridges the gap between eager learners and expert educators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
