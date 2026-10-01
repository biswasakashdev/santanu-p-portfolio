"use client";

import { useActionState, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './reveal';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)



    const [state, formAction, loading] = useActionState<ContactForm, FormData>(async (prevState: ContactForm, formData: FormData) => {

        console.log(formData.get("name"), Array.from(formData.values()))
        const res = await fetch('/api/proposals.php', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                organisation: formData.get('organization'),
                email: formData.get('email'),
                purpose: formData.get('purpose'),
            })
        })

        const data = await res.json()

        if (!res.ok) {
            console.log(data)
            return {
                name: formData.get('name') as string,
                organization: formData.get('organization') as string,
                email: formData.get('email') as string,
                purpose: formData.get('purpose') as string,
            }
        }

        setSubmitted(true)

        return {} as ContactForm
    }, {
        name: '',
        organization: '',
        email: '',
        purpose: '',
    })


    const fieldClass =
        'w-full border-0 border-b border-gold/25 bg-transparent py-4 font-body text-lg text-white placeholder:text-bone/30 focus:border-gold focus:outline-none transition-colors duration-300';

    return (
        <section id="contact" className="relative bg-coal py-32 md:py-48">
            <div className="mx-auto max-w-[1000px] px-6 md:px-12">
                <Reveal>
                    <div className="mb-16 text-center">
                        <p className="mb-6 font-body text-[10px] uppercase tracking-[0.5em] text-gold md:text-[11px]">
                            The Access Protocol
                        </p>
                        <h2
                            className="font-display font-light text-white"
                            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
                        >
                            Apply for <span className="italic text-gold">time.</span>
                        </h2>
                        <p className="mx-auto mt-8 max-w-md font-body text-base leading-[1.8] text-bone">
                            Access is not granted — it is considered. Every request is read
                            personally. Be specific about the century you intend to build.
                        </p>
                    </div>
                </Reveal>

                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.form
                            key="form"
                            action={formAction}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-12"
                        >
                            <div className="grid gap-12 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block font-body text-[10px] uppercase tracking-[0.4em] text-bone/60">
                                        Full Name
                                    </label>
                                    <input
                                        name='name'
                                        required
                                        defaultValue={state.name}
                                        placeholder="Your name"
                                        className={fieldClass}
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block font-body text-[10px] uppercase tracking-[0.4em] text-bone/60">
                                        Organization
                                    </label>
                                    <input
                                        name='organization'
                                        defaultValue={state.organization}
                                        placeholder="Your institution"
                                        className={fieldClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block font-body text-[10px] uppercase tracking-[0.4em] text-bone/60">
                                    Email
                                </label>
                                <input
                                    name='email'
                                    required
                                    type="email"
                                    defaultValue={state.email}
                                    placeholder="name@organization.com"
                                    className={fieldClass}
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-body text-[10px] uppercase tracking-[0.4em] text-bone/60">
                                    Purpose of Meeting
                                </label>
                                <textarea
                                    name='purpose'
                                    required
                                    defaultValue={state.purpose}
                                    placeholder="State the matter and the horizon."
                                    rows={4}
                                    className={`${fieldClass} resize-none`}
                                />
                            </div>

                            <div className="flex justify-center pt-8">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group inline-flex w-full items-center justify-center gap-4 border-2 border-gold px-12 py-5 font-body text-[10px] uppercase tracking-[0.4em] text-gold transition-colors duration-500 hover:bg-gold hover:text-obsidian disabled:opacity-50 md:w-auto md:text-[11px]"
                                >
                                    {loading ? 'Considering…' : 'Submit Request'}
                                </button>
                            </div>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="done"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="py-16 text-center"
                        >
                            <span className="mb-8 inline-block font-display text-6xl font-light text-gold">
                                ✦
                            </span>
                            <h3
                                className="font-display font-light italic text-white"
                                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                            >
                                Your request has been received.
                            </h3>
                            <p className="mx-auto mt-8 max-w-md font-body text-base leading-[1.8] text-bone">
                                It has entered the protocol. You will hear back only if the
                                matter warrants the century. Thank you for your patience.
                            </p>
                            <p className="mt-12 font-body text-[10px] uppercase tracking-[0.4em] text-gold/60">
                                — S. Pain
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}


export interface ContactForm {
    name?: string,
    organization?: string,
    email?: string,
    purpose?: string
}