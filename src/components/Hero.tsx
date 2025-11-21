"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { LandingCopy } from '@/locales/copy';

const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

interface HeroProps {
    copy: LandingCopy['hero'];
}

const Hero = ({ copy }: HeroProps) => (
    <section
        id="home"
        className="relative overflow-hidden scroll-mt-[84px] bg-white pb-12 text-center md:pb-16 lg:pb-20 lg:scroll-mt-[100px]"
    >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50" aria-hidden />
        <div className="absolute inset-x-0 top-0 -z-10 flex justify-center opacity-70" aria-hidden>
            <div className="h-60 w-60 rounded-full bg-brand-200/40 blur-3xl" />
        </div>
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            className="mx-auto max-w-4xl px-6"
        >
            <motion.span
                variants={heroVariants}
                className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700"
            >
                {copy.eyebrow}
            </motion.span>
            <motion.h1
                variants={heroVariants}
                className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
                {copy.title}
            </motion.h1>
            <motion.p
                variants={heroVariants}
                className="mx-auto mt-6 max-w-xl text-lg text-slate-600"
            >
                {copy.subtitle}
            </motion.p>
            <motion.div
                variants={heroVariants}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
                <Link
                    href="#beta"
                    prefetch={false}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-10 py-3.5 text-base font-semibold text-white shadow-2xl shadow-slate-900/30 transition-all duration-200 hover:shadow-3xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                >
                    {copy.primaryCta}
                </Link>
                <Link
                    href="#demo"
                    prefetch={false}
                    className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 px-10 py-3.5 text-base font-semibold text-slate-900 transition-all duration-200 hover:bg-white hover:border-slate-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                >
                    {copy.secondaryCta}
                </Link>
            </motion.div>
        </motion.div>
    </section>
);

export default Hero;
