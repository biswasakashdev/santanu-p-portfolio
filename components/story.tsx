import React from 'react';
import { Reveal } from './reveal';
import { GoldDivider } from './gold-driver';
import Image from 'next/image';


export default function Story() {
    return (
        <section id="story" className="relative bg-obsidian py-32 md:py-48">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
                <div className="grid gap-16 md:grid-cols-2 md:gap-24">
                    <div className="md:sticky md:top-32 md:self-start">
                        <p className="mb-6 font-body text-[10px] uppercase tracking-[0.5em] text-gold md:text-[11px]">
                            I — The Origin
                        </p>
                        <h2
                            className="font-display font-light leading-[0.95] text-white"
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                        >
                            A life
                            <br />
                            <span className="italic text-gold">compounded</span>
                            <br />
                            by conviction.
                        </h2>
                        <div className="mt-10 h-80 w-full overflow-hidden">
                            <Image
                                width={800}
                                height={600}
                                src="/story_image.png"
                                alt="The origin"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-16">
                        <Reveal>
                            <p className="font-body text-lg leading-[1.8] text-white/75">
                                Born in Lisbon and raised between three continents, Alexander
                                Sterling learned early that capital is not merely money — it is
                                patience given form. The son of a maritime architect and a
                                classical pianist, he was taught to measure the world in
                                decades, not quarters.
                            </p>
                        </Reveal>

                        <GoldDivider className="py-2" />

                        <Reveal delay={0.1}>
                            <p className="mb-4 font-body text-[10px] uppercase tracking-[0.5em] text-gold md:text-[11px]">
                                II — The Ascent
                            </p>
                            <p className="font-body text-lg leading-[1.8] text-white/75">
                                At thirty-one, he founded Sterling Sovereign Group with a single
                                conviction: that the most valuable asset in any market is the
                                one no one else yet sees. Within a decade, the firm had stewarded
                                mandates across four continents — quietly, decisively, and
                                without spectacle.
                            </p>
                        </Reveal>

                        <GoldDivider className="py-2" />

                        <Reveal delay={0.1}>
                            <p className="mb-4 font-body text-[10px] uppercase tracking-[0.5em] text-gold md:text-[11px]">
                                III — The Stewardship
                            </p>
                            <p className="font-body text-lg leading-[1.8] text-white/75">
                                Today the mandate spans fourteen nations — sovereign
                                infrastructure, generational capital, and the mentorship of three
                                thousand leaders who now carry the standard forward. Sterling
                                builds nothing for the moment. Every venture is an answer to a
                                question the century has not yet finished asking.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );

}
