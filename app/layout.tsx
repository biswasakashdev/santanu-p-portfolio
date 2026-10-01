import { cormorant, inter } from "@/ui/fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Santanu Paine",
  description: "Capital is patient. Vision is rare. I build for the century, not the quarter.",
  keywords: [
    "Santanu Paine",
    "Sovereign Capital Management Group",
    "Investment Banking",
    "Global Finance",
    "Leadership",
    "Chairman",
    "Wealth Management",
    "Private Equity",
    "Strategic Advisory",
    "Venture Capital",
    "Mergers and Acquisitions",
    "Financial Markets",
    "Portfolio Management",
    "Executive Leadership",
    "Investment Philosophy",
    "Entrepreneurship",
    "Business Strategy",
    "Financial Innovation",
    "International Business",
    "Corporate Governance",
    "Economic Growth",
    "Sovereign Wealth",
    "Asset Management",
    "Capital Markets",
    "Global Strategy",
    "Investment Management",
    "Risk Management",
    "Financial Planning",
    "Wealth Preservation",
    "Estate Planning",
    "Tax Strategy",
    "Retirement Planning",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "border-border", "outline-ring/50", cormorant.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        {children}</body>
    </html>
  );
}
