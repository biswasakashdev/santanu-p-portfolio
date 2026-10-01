"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cormorant } from "@/ui/fonts/fonts";

const manifesto =
  "Capital is patient. Vision is rare. I build for the century, not the quarter.";

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setText(manifesto.slice(0, i));
      if (i >= manifesto.length) clearInterval(id);
    }, 34);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-obsidian"
    >
      <div className="absolute inset-0">
        <div className="absolute md:right-4 right-0 top-0 h-full w-full md:w-[60%]">
          <Image
            width={1200}
            height={1200}
            loading="eager"
            src="/profile.png"
            alt="Santanu Pain"
            className="h-full w-full object-cover object-[75%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-12 md:mt-0 mt-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-6 font-body text-[10px] uppercase tracking-[0.5em] text-bone md:text-[11px]"
          >
            Chairman · Sterling Sovereign Group
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`${cormorant.className} font-light leading-[0.85] text-gold`}
            style={{
              fontSize: "clamp(3.5rem, 12vw, 11rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Santanu
            <br />
            <span className="italic">Pain</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-8 h-px w-24 origin-left bg-gold/60"
          />

          <p
            className={`mt-8 min-h-[3.5rem] max-w-xl  text-white/90 text-xs md:text-2xl italic font-display`}
            style={{ letterSpacing: "0.01em" }}
          >
            {text}
            <span
              className="ml-0.5 inline-block w-[2px] animate-pulse bg-gold align-middle"
              style={{ height: "0.9em" }}
            />
          </p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="group mt-12 inline-flex items-center gap-4 border border-gold px-10 py-4 font-body text-[10px] uppercase tracking-[0.4em] text-gold transition-colors duration-500 hover:bg-gold hover:text-obsidian md:text-[11px]"
          >
            Request a Meeting
          </motion.a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="font-body text-[9px] uppercase tracking-[0.4em] text-bone/50">
          Descend
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gold/40"
        />
      </div>
    </section>
  );
}
