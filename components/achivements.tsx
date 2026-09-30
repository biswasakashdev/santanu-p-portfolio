import React from 'react';
import { GoldDivider } from './gold-driver';
import * as motion from "motion/react-client"


const milestones = [
    {
        figure: '$48B+',
        label: 'Assets Stewarded',
        body: 'Across sovereign and private mandates, compounded over two decades of unbroken conviction.',
    },
    {
        figure: '27 yrs',
        label: 'Of Consequence',
        body: 'Compounding patience into consequence — uninterrupted through every cycle the market has offered.',
    },
    {
        figure: '14',
        label: 'Nations Reshaped',
        body: 'Sovereign infrastructure and capital deployed across continents, building what outlasts regimes.',
    },
    {
        figure: '3,000+',
        label: 'Leaders Mentored',
        body: 'A generation of operators now carrying the standard across five continents and counting.',
    },
    {
        figure: '1',
        label: 'Standard',
        body: 'Unwavering. The only number that has never moved.',
    },
];

export default function Achievements() {
    return (
        <section id="impact" className="relative bg-obsidian py-32 md:py-48">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
                <div className="mb-24 text-center">
                    <p className="mb-6 font-body text-[10px] uppercase tracking-[0.5em] text-gold md:text-[11px]">
                        The Ledger of Impact
                    </p>
                    <h2
                        className="font-display font-light text-white"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                    >
                        Monumental <span className="italic text-gold">proof.</span>
                    </h2>
                </div>

                <div className="space-y-0">
                    {milestones.map((m, i) => (
                        <div key={m.label}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="grid items-center gap-6 py-12 md:grid-cols-12 md:gap-12"
                            >
                                <div className="md:col-span-5">
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.4, delay: 0.2 }}
                                        className="font-display font-light leading-none text-gold"
                                        style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
                                    >
                                        {m.figure}
                                    </motion.h3>
                                </div>
                                <div className="md:col-span-7">
                                    <p className="mb-3 font-body text-[10px] uppercase tracking-[0.4em] text-bone md:text-[11px]">
                                        {m.label}
                                    </p>
                                    <p className="max-w-lg font-body text-lg leading-[1.7] text-white/70">
                                        {m.body}
                                    </p>
                                </div>
                            </motion.div>

                            {i < milestones.length - 1 && <GoldDivider className="opacity-40" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}