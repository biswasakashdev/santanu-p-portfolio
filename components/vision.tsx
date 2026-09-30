import React from 'react';
import { Reveal } from './reveal';
import { GoldDivider } from './gold-driver';
import Image from 'next/image';

const pillars = [
    {
        numeral: '01',
        title: 'Conviction',
        body: 'The market rewards those who can hold a position the world doubts — and hold it long enough to be proven right.',
    },
    {
        numeral: '02',
        title: 'Stewardship',
        body: 'Wealth is borrowed. The mandate is to return it greater than it was received, to institutions and generations not yet born.',
    },
    {
        numeral: '03',
        title: 'Legacy',
        body: 'A name is the only asset that compounds after the work is done. Every decision is weighed against its century.',
    },
];

export default function Vision() {
    return (
        <section id="vision" className="relative bg-coal py-32 md:py-48">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
                <div className="grid items-center gap-16 md:grid-cols-12 md:gap-24">
                    <div className="md:col-span-5">
                        <div className="relative h-[420px] w-full overflow-hidden md:h-[560px]">
                            <Image
                                src="/vision_image.png"
                                width={800}
                                height={800}
                                alt="The vision"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-transparent" />
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <Reveal>
                            <p className="mb-6 font-body text-[10px] uppercase tracking-[0.5em] text-gold md:text-[11px]">
                                The Doctrine
                            </p>
                            <h2
                                className="font-display font-light leading-[1.05] text-white"
                                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                            >
                                The century is the
                                <br />
                                only horizon
                                <br />
                                worth <span className="italic text-gold">building toward.</span>
                            </h2>
                        </Reveal>

                        <div className="mt-16 space-y-12">
                            {pillars.map((p, i) => (
                                <Reveal key={p.numeral} delay={i * 0.1}>
                                    <div className="flex gap-8">
                                        <span className="font-display text-2xl font-light text-gold/60">
                                            {p.numeral}
                                        </span>
                                        <div>
                                            <h3 className="mb-3 font-display text-2xl font-light text-white">
                                                {p.title}
                                            </h3>
                                            <p className="max-w-md font-body text-base leading-[1.8] text-bone">
                                                {p.body}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <GoldDivider className="mt-16" />
                    </div>
                </div>
            </div>
        </section>
    );
}