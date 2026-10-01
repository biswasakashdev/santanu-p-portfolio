import { GoldDivider } from './gold-driver';
import { Reveal } from './reveal';

const quotes = [
    {
        text: 'Santanu does not follow markets. He precedes them.',
        author: 'Chairman',
        org: 'The Sovereign Capital Management Group',
    },
    {
        text: 'The rarest mind in modern capital — and the most patient.',
        author: 'Chairman',
        org: 'The Sovereign Capital Management Group',
    },
    {
        text: 'He builds what outlasts the century. The rest is noise.',
        author: 'Chairman',
        org: 'The Sovereign Capital Management Group',
    },
];

export default function Testimonials() {
    return (
        <section className="relative bg-obsidian py-32 md:py-48">
            <div className="mx-auto max-w-[1400px] px-6 md:px-12">
                <div className="mb-20 text-center">
                    <p className="mb-6 font-body text-[10px] uppercase tracking-[0.5em] text-gold md:text-[11px]">
                        The Witness
                    </p>
                    <h2
                        className="font-display font-light text-white"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                    >
                        Spoken by <span className="italic text-gold">peers.</span>
                    </h2>
                </div>

                <div className="grid gap-16 md:grid-cols-3 md:gap-12">
                    {quotes.map((q, i) => (
                        <Reveal key={i} delay={i * 0.15}>
                            <div className="flex h-full flex-col">
                                <span className="mb-6 font-display text-6xl font-light leading-none text-gold/40">
                                    &ldquo;
                                </span>
                                <p className="mb-8 flex-1 font-display text-2xl font-light italic leading-[1.4] text-white md:text-3xl">
                                    {q.text}
                                </p>
                                <div>
                                    <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold">
                                        {q.author}
                                    </p>
                                    <p className="mt-1 font-body text-[11px] uppercase tracking-[0.3em] text-bone/60">
                                        {q.org}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <GoldDivider className="mt-24" />
            </div>
        </section>
    );
}