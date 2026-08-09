"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-dark text-white selection:bg-brand-cyan selection:text-brand-dark overflow-hidden relative border-t border-brand-border">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-t-full pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-6 sm:mb-8 text-balance"
                >
                    Have an idea <br /> worth building?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1 }}
                    className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 sm:mb-14 px-2 sm:px-0"
                >
                    Let’s design and engineer the platform that brings it to life.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 py-4 sm:py-6 bg-brand-cyan text-brand-dark hover:bg-white hover:text-black font-bold text-base sm:text-lg rounded-full hover:scale-105 transition-all group shadow-[0_0_30px_rgba(68,207,213,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
                    >
                        Start a Project
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
