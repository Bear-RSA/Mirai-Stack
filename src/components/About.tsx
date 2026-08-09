"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-dark text-white selection:bg-brand-cyan selection:text-brand-dark relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full h-full bg-grid opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-brand-cyan/10 to-transparent blur-3xl pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
                <h2 className="text-sm font-semibold tracking-widest uppercase mb-10 text-brand-blue">
                    Company Overview
                </h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 sm:mb-12 text-balance"
                >
                    Mirai Stack is a software engineering studio focused on building scalable digital platforms across social technology, education systems, and <span className="text-brand-cyan">automation ecosystems.</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-xl md:text-3xl text-neutral-400 max-w-4xl leading-relaxed mx-auto"
                >
                    Our mission is to design and engineer digital systems that enable organizations to innovate faster, automate operations, and scale globally.
                </motion.p>
            </div>
        </section>
    );
}
