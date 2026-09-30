import React from 'react';
import { GoldDivider } from './gold-driver';

export default function Footer() {
    return (
        <footer className="relative bg-obsidian pt-32 pb-12">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
                <div className="text-center">
                    <p className="mb-8 font-body text-[10px] uppercase tracking-[0.5em] text-bone/50">
                        The Close of the Archive
                    </p>
                    <h2
                        className="font-display font-light italic text-gold"
                        style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.01em' }}
                    >
                        Santanu Pain
                    </h2>
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
                        <a
                            href="#"
                            className="font-body text-[10px] uppercase tracking-[0.3em] text-bone/40 transition-colors duration-300 hover:text-gold"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="font-body text-[10px] uppercase tracking-[0.3em] text-bone/40 transition-colors duration-300 hover:text-gold"
                        >
                            Terms
                        </a>
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