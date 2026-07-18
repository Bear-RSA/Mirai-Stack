"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Layers, Calendar, Activity } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { categoryLabels } from "@/data/projects";

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.15 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <main className="min-h-screen bg-brand-dark text-white">
            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                {/* Project accent glow */}
                <div
                    className={`absolute top-0 right-0 w-[700px] h-[500px] rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 opacity-20 pointer-events-none ${project.color}`}
                />
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-navy/10 blur-[120px] rounded-full pointer-events-none" />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto relative z-10"
                >
                    {/* Navigation */}
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-brand-cyan transition-colors mb-16 group"
                        >
                            <ArrowLeft
                                size={16}
                                className="group-hover:-translate-x-1 transition-transform"
                            />
                            Back to Projects
                        </Link>
                    </motion.div>

                    {/* Badges */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-3 mb-8"
                    >
                        <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-brand-surface border border-brand-border text-neutral-300 rounded-full">
                            {categoryLabels[project.category]}
                        </span>
                        <span className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium bg-brand-surface border border-brand-border text-neutral-400 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                            {project.status}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
                    >
                        {project.name}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-neutral-500 text-lg md:text-xl font-medium mb-10"
                    >
                        {project.type}
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full h-px bg-brand-border mb-10"
                    />

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-3xl"
                    >
                        {project.description}
                    </motion.p>
                </motion.div>
            </section>

            {/* Details Section */}
            <section className="px-6 pb-20">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {/* Tech Stack */}
                        <div className="md:col-span-2 p-8 rounded-2xl bg-brand-surface border border-brand-border">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-lg bg-brand-surface-2 border border-brand-border flex items-center justify-center">
                                    <Layers size={18} className="text-brand-cyan" />
                                </div>
                                <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                                    Technology Stack
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-5 py-2.5 text-sm font-medium bg-brand-surface-2 border border-brand-border text-neutral-300 rounded-xl hover:border-brand-blue/40 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="flex flex-col gap-6">
                            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-lg bg-brand-surface-2 border border-brand-border flex items-center justify-center">
                                        <Calendar size={18} className="text-brand-cyan" />
                                    </div>
                                    <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                                        Year
                                    </h2>
                                </div>
                                <p className="text-2xl font-bold font-mono text-white">
                                    {project.year}
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-lg bg-brand-surface-2 border border-brand-border flex items-center justify-center">
                                        <Activity size={18} className="text-brand-cyan" />
                                    </div>
                                    <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                                        Status
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                                    <p className="text-lg font-semibold text-white">
                                        {project.status}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 pb-32">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative p-12 md:p-16 rounded-3xl bg-brand-surface border border-brand-border overflow-hidden text-center"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                Interested in a similar project?
                            </h2>
                            <p className="text-neutral-400 text-lg mb-10 max-w-lg mx-auto">
                                Let&apos;s discuss how we can engineer a solution tailored to your vision.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/#contact"
                                    className="px-8 py-4 bg-brand-cyan text-brand-dark font-semibold rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-brand-cyan/20"
                                >
                                    Start a Conversation
                                    <ArrowUpRight size={18} />
                                </Link>
                                <Link
                                    href="/projects"
                                    className="px-8 py-4 bg-transparent border border-neutral-600 text-white hover:border-brand-cyan hover:text-brand-cyan font-medium rounded-full transition-all duration-300"
                                >
                                    View All Projects
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
