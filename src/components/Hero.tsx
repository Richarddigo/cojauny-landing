"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
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
        id="inicio"
        className="relative overflow-hidden pt-24 text-center md:pt-32 lg:pt-40"
    >
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
                    className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-soft-glow transition hover:bg-brand-500 focus-visible:bg-brand-700"
                >
                    {copy.primaryCta}
                </Link>
                <Link
                    href="#demo"
                    className="inline-flex items-center justify-center rounded-full border border-brand-200 px-8 py-3 text-base font-semibold text-brand-600 transition hover:bg-brand-50"
                >
                    {copy.secondaryCta}
                </Link>
            </motion.div>
        </motion.div>
        <motion.div
            id="demo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto mt-16 w-full max-w-5xl rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 p-6 shadow-soft-glow"
        >
            <div className="pointer-events-none absolute inset-0 rounded-[3rem] border border-white/10" />
            <Image
                src="/images/mockup-hero.svg"
                alt={copy.imageAlt}
                width={2160}
                height={1280}
                priority
                className="h-auto w-full"
            />
        </motion.div>
    </section>
);

export default Hero;
