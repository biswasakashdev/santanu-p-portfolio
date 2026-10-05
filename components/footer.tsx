import React from "react";
import { GoldDivider } from "./gold-driver";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-obsidian pt-32 pb-12">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="text-center">
          <p className="mb-8 font-body text-[10px] uppercase tracking-[0.5em] text-bone/50">
            The Close of the Archive
          </p>
          <Image
            src="/signature.png"
            alt="signature"
            width={400}
            height={200}
            className="mx-auto w-32 h-16 md:w-fit md:h-48"
          />
          <p className="mt-6 font-body text-[11px] uppercase tracking-[0.4em] text-bone/60">
            Architect of markets · Steward of legacy
          </p>
        </div>

        <GoldDivider className="my-16 opacity-30" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-bone/40">
            © {new Date().getFullYear()} Sterling Sovereign Group
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy-terms"
              className="font-body text-[10px] uppercase tracking-[0.3em] text-bone/40 transition-colors duration-300 hover:text-gold"
            >
              Privacy & Terms
            </Link>
            <a
              href="#contact"
              className="font-body text-[10px] uppercase tracking-[0.3em] text-bone/40 transition-colors duration-300 hover:text-gold"
            >
              Access
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
