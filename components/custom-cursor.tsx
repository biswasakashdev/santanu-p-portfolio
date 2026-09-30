"use client"

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        document.body.classList.add('sovereign-cursor');

        let mx = window.innerWidth / 2;
        let my = window.innerHeight / 2;
        let rx = mx;
        let ry = my;

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
            }
            const t = e.target as HTMLElement;
            setHovering(
                !!t.closest('a, button, input, textarea, [data-cursor="hover"]')
            );
        };

        window.addEventListener('mousemove', onMove);

        let raf: number;
        const loop = () => {
            rx += (mx - rx) * 0.12;
            ry += (my - ry) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
            }
            raf = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(raf);
            document.body.classList.remove('sovereign-cursor');
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="pointer-events-none fixed left-0 top-0 z-[10000] -ml-[2px] -mt-[2px] h-[4px] w-[4px] rounded-full bg-gold"
                style={{ transition: 'opacity 0.3s ease' }}
            />
            <div
                ref={ringRef}
                className={`pointer-events-none fixed left-0 top-0 z-[10000] -ml-[20px] -mt-[20px] h-[40px] w-[40px] rounded-full border border-gold transition-opacity duration-300 ${hovering ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{ transition: 'opacity 0.3s ease, transform 0.12s ease-out' }}
            />
        </>
    );
}