import { Cormorant_Garamond, Inter } from "next/font/google";


export const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    style: ["normal", "italic"],
    display: 'swap',
    variable: "--font-display"
});

export const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
    variable: "--font-body",
});


