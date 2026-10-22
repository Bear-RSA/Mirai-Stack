"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { EASE_OUT, reveal, staggerContainer } from "@/lib/motion";

// First-visit entrance: the one place the delight budget is spent, so it runs
// a touch longer than the scroll reveals.
const containerVariants = staggerContainer(0.08, 0.1);
const itemVariants: Variants = {
    ...reveal,
    visible: { ...reveal.visible, transition: { duration: 0.6, ease: EASE_OUT } },
};

export default function Hero() {

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden bg-grid text-white">
            <div className="absolute inset-0 bg-brand-dark/80 pointer-events-none" />
            <div className="absolute top-0 -translate-y-12 shrink-0 bg-gradient-to-tr from-transparent via-brand-navy/20 to-brand-cyan/10 blur-[100px] w-full h-[600px] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-8 sm:mt-12"
            >
                <motion.div variants={itemVariants}>
                    <p className="text-xs sm:text-sm font-medium text-neutral-400 mb-6 sm:mb-10">
                        Software Engineering & Systems Architecture Studio
                    </p>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-balance mb-6 sm:mb-8 leading-[1.1]"
                >
                    Building the <span className="text-gradient">Future</span>, <br className="hidden md:block" />
                    One Stack at a Time.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
                >
                    Mirai Stack designs and engineers scalable SaaS platforms, intelligent automation systems, and digital infrastructure for modern organizations.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-2 sm:px-0"
                >
                    <Link
                        href="/#projects"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-blue text-white font-medium rounded-full hover:scale-[1.03] active:scale-[0.98] transition-[transform,box-shadow] duration-150 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(33,138,205,0.4)] hover:shadow-[0_0_30px_rgba(33,138,205,0.6)] text-sm sm:text-base"
                    >
                        View Our Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/#contact"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-neutral-600 text-white hover:border-brand-cyan hover:text-brand-cyan font-medium rounded-full hover:scale-[1.03] active:scale-[0.98] transition-[transform,color,border-color] duration-150 flex items-center justify-center bg-brand-surface/30 backdrop-blur-sm text-sm sm:text-base"
                    >
                        Start a Project
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
