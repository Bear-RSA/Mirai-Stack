"use client";

import { motion } from "framer-motion";
import { CloudCog, Workflow, Globe } from "lucide-react";

import TiltCard from "./TiltCard";

const services = [
    {
        title: "SaaS Product Development",
        description: "End-to-end SaaS architecture from concept to deployment. We design, build, and scale cloud-native platforms engineered to grow with your business.",
        icon: CloudCog,
    },
    {
        title: "Intelligent Automation Systems",
        description: "Workflow automation, intelligent integrations, and AI-driven systems that streamline operations, reduce manual work, and unlock new levels of efficiency.",
        icon: Workflow,
    },
    {
        title: "Website Design & Engineering",
        description: "Engineered for clarity, speed, and visibility — transforming your digital presence into a structured, high-performance asset.",
        icon: Globe,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 px-6 bg-brand-dark border-t border-brand-border text-white relative perspective-[1000px]">
            <div className="absolute right-0 top-1/2 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">What We Do</h2>
                    <p className="text-neutral-400 text-xl font-medium">
                        Engineering scalable digital systems designed for modern organizations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{ perspective: 1000 }}
                            className="flex flex-col h-full"
                        >
                            <TiltCard
                                className="group p-10 h-full w-full flex flex-col rounded-[2rem] bg-brand-surface border border-brand-border hover:border-brand-blue/50 shadow-xl shadow-black/40 hover:shadow-brand-blue/20 cursor-default relative overflow-hidden transition-colors"
                            >
                                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-brand-cyan/20 transition-colors duration-700 -translate-y-1/2 translate-x-1/2" />
                                <div className="w-16 h-16 rounded-2xl bg-brand-surface-2 border border-brand-border flex items-center justify-center text-brand-cyan mb-8 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(33,138,205,0.4)] relative z-10">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 relative z-10">{service.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-[17px] relative z-10 font-medium">
                                    {service.description}
                                </p>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
