"use client"

import React, { useEffect, useState } from 'react';

const links = [
    { label: 'Story', href: '#story' },
    { label: 'Vision', href: '#vision' },
    { label: 'Impact', href: '#impact' },
    { label: 'Access', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-700 ${scrolled
                ? 'border-b border-gold/30 bg-obsidian/95 backdrop-blur-sm'
                : 'border-b border-transparent bg-transparent'
                }`}
        >
            <nav className="mx-auto flex h-[44px] max-w-[1600px] items-center justify-between px-6 md:px-12">
                <a
                    href="#top"
                    className="font-display text-lg tracking-[0.25em] text-gold"
                >
                    S♦P
                </a>
                <div className="hidden items-center gap-10 md:flex">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="group relative font-body text-[10px] uppercase tracking-[0.4em] text-white/70 transition-colors duration-300 hover:text-white"
                        >
                            <span className="absolute -top-3 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            {l.label}
                        </a>
                    ))}
                </div>
                <a
                    href="#contact"
                    className="font-body text-[10px] uppercase tracking-[0.4em] text-gold md:hidden"
                >
                    Access
                </a>
            </nav>
        </header>
    );
}