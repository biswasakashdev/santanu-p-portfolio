import { Reveal } from "./reveal";

const outlets = [
    'FORBES',
    'BLOOMBERG',
    'THE ECONOMIST',
    'FINANCIAL TIMES',
    'WALL STREET JOURNAL',
];

export default function MediaStrip() {
    return (
        <section className="border-y border-gold/15 bg-coal py-20">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
                <Reveal>
                    <p className="mb-12 text-center font-body text-[10px] uppercase tracking-[0.5em] text-bone/60 md:text-[11px]">
                        As Featured In
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
                        {outlets.map((o) => (
                            <span
                                key={o}
                                className="font-display text-xl font-light tracking-[0.15em] text-bone/50 transition-colors duration-500 hover:text-gold md:text-2xl"
                            >
                                {o}
                            </span>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}