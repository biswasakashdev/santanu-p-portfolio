"use client";

import React, { useState } from "react";
import { ShieldCheck, FileText, ArrowLeft, Mail } from "lucide-react";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  return (
    <div className="min-h-screen bg-[#111111] text-white antialiased font-sans selection:bg-[#C9A84C] selection:text-[#0A0A0A]">
      {/* Top Header */}
      <header className="border-b border-[#C9A84C]/20 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#C9A84C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
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

          {/* Simple Tab Switcher */}
          <div className="inline-flex p-1 mt-8 bg-[#0A0A0A] rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "privacy"
                  ? "bg-[#C9A84C] text-[#0A0A0A] font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "terms"
                  ? "bg-[#C9A84C] text-[#0A0A0A] font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              Terms of Service
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-[#0A0A0A] border border-zinc-800/80 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="text-xs text-[#C9A84C] font-mono uppercase tracking-wider mb-6">
            Effective Date: October 2026
          </div>

          {activeTab === "privacy" ? (
            /* ================= PRIVACY POLICY ================= */
            <article className="space-y-8 text-zinc-300 text-sm leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  1. Overview
                </h2>
                <p>
                  We value your privacy. This policy explains what personal
                  information we collect, how it is used, and how it is
                  protected when you visit this website or contact us regarding
                  business engagements.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  2. Information We Collect
                </h2>
                <p className="mb-2">
                  We only collect information that you voluntarily provide to
                  us, including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-1">
                  <li>
                    Your name, email address, and phone number when submitting
                    inquiries.
                  </li>
                  <li>
                    Project and business details provided during consultation
                    requests.
                  </li>
                  <li>
                    Standard, anonymized website analytics (e.g., page views,
                    browser type).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  3. How Your Information Is Used
                </h2>
                <p className="mb-2">Your information is used strictly to:</p>
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
                <p className="mt-2 text-zinc-400">
                  <strong className="text-white">Note:</strong> We never sell,
                  rent, or trade your personal data to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  4. Data Security
                </h2>
                <p>
                  We apply industry-standard security practices to protect your
                  communications and data. However, no internet transmission is
                  100% secure, and we advise caution with highly confidential
                  materials sent via open web forms.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  5. Your Rights
                </h2>
                <p>
                  You may request access to, correction of, or deletion of any
                  contact information we have on record by emailing us directly
                  at any time.
                </p>
              </section>
            </article>
          ) : (
            /* ================= TERMS OF SERVICE ================= */
            <article className="space-y-8 text-zinc-300 text-sm leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing this website, you agree to comply with these
                  Terms of Service. If you do not agree with any part of these
                  terms, please discontinue using the site.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  2. Intellectual Property
                </h2>
                <p>
                  All case studies, branding, imagery, designs, and content
                  featured on this site are the intellectual property of this
                  business and its clients. Unauthorized reproduction or
                  commercial distribution without written consent is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  3. Business Inquiries & Proposals
                </h2>
                <p>
                  Information provided on this site does not constitute a
                  formal, binding contract. Official commercial engagements
                  require an executed service agreement or statement of work
                  (SOW) signed by both parties.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  4. Limitation of Liability
                </h2>
                <p>
                  This site and its content are provided on an &ldquo;as
                  is&rdquo; basis. In no event will we be liable for any
                  indirect, incidental, or consequential damages resulting from
                  the use or inability to use this website.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-2">
                  5. Modifications
                </h2>
                <p>
                  We reserve the right to revise or update these terms at our
                  discretion. Any revisions will be reflected immediately on
                  this page.
                </p>
              </section>
            </article>
          )}

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
              href="mailto:contact@business.com"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A84C] hover:underline"
            >
              <Mail className="w-4 h-4" />
              contact@business.com
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <p className="text-center text-xs text-zinc-600 mt-8">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </main>
    </div>
  );
}
