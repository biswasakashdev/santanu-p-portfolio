"use client";

import { privacyTermsSections } from "@/util/privacy-terms";
import { ArrowLeft, Mail } from "lucide-react";

import Link from "next/link";

/**
  <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-1">
                  <li>
                    Respond to business inquiries and provide consultation
                    proposals.
                  </li>
                  <li>
                    Fulfill contractual client obligations and communications.
                  </li>
                  <li>
                    Improve the functionality and performance of this portfolio
                    site.
                  </li>
                </ul>


 *
 */

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white antialiased font-sans selection:bg-[#C9A84C] selection:text-[#0A0A0A]">
      {/* Top Header */}
      <header className="border-b border-[#C9A84C]/20 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#C9A84C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
            Legal & Compliance
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Title Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Legal <span className="text-[#C9A84C]">Information</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            Please review our business terms and privacy commitments regarding
            services, communications, and data protection.
          </p>
        </div>

        <article>
          {privacyTermsSections.map((sect, idx) => (
            <section key={idx} className="mb-2">
              <h2 className="text-xl font-semibold text-white mb-2">
                {sect.heading}
              </h2>
              {sect.description && (
                <div className="text-md text-zinc-400">{sect.description}</div>
              )}
              {sect.subSection && (
                <section className="ml-2">
                  <h3>{sect.subSection.heading}</h3>
                  <div className="ml-4">{sect.subSection.description}</div>
                </section>
              )}
            </section>


          ))}

          {/* Contact Footer Box */}
                 <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                   <div>
                     <h3 className="text-sm font-semibold text-white">
                       Have questions?
                     </h3>
                     <p className="text-xs text-zinc-400">
                       Get in touch directly regarding legal inquiries or policies.
                     </p>
                   </div>
                   <a
                     href="mailto:info@santanupain.com"
                     className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A84C] hover:underline"
                   >
                     <Mail className="w-4 h-4" />
                     info@santanupain.com
                   </a>
                 </div>
        </article>
        <p className="text-center text-xs text-zinc-600 mt-8">
          &copy; 2026 All Rights Reserved
        </p>
      </main>
    </div>
  );
}
