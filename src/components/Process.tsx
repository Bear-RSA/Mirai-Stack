"use client";

import TiltCard from "./TiltCard";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const steps = [
    {
        number: "01",
        title: "Discovery",
        subtitle: "Define the Problem",
        description: "We analyze business objectives, user needs, and product goals to clearly define the problem and establish the strategic direction for the platform.",
    },
    {
        number: "02",
        title: "Architecture",
        subtitle: "Design the System",
        description: "We design scalable system architecture, infrastructure, and data models that ensure the platform performs reliably as it grows.",
    },
    {
        number: "03",
        title: "Design",
        subtitle: "Shape the Experience",
        description: "We create modern, intuitive user interfaces focused on clarity, usability, and seamless interaction across devices.",
    },
    {
        number: "04",
        title: "Development",
        subtitle: "Engineer the Platform",
        description: "We build high-performance applications using modern frameworks, clean code practices, and scalable engineering principles.",
    },
    {
        number: "05",
        title: "Deployment",
        subtitle: "Launch with Reliability",
        description: "We deploy production-ready systems using secure cloud infrastructure, automated pipelines, and robust monitoring.",
    },
    {
        number: "06",
        title: "Scale",
        subtitle: "Grow and Optimize",
        description: "We continuously improve performance, expand platform capabilities, and support long-term product evolution as usage grows.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-dark border-t border-brand-border text-white relative perspective-[1000px]">
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-12 sm:mb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">Our process turns ideas into reliable, scalable digital platforms.</h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
                        A refined engineering process designed for speed, scale, and reliability.
                    </p>
                </Reveal>

                <RevealGroup stagger={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 perspective-[1000px]">
                    {steps.map((step) => (
                        <RevealItem
                            key={step.number}
                            style={{ perspective: 1000 }}
                            className="flex flex-col h-full"
                        >
                            <TiltCard
                                className="group relative p-7 sm:p-10 h-full w-full rounded-[1.5rem] sm:rounded-[2rem] bg-brand-surface border border-brand-border hover:border-brand-cyan/40 shadow-xl shadow-black/40 overflow-hidden transition-colors"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-brand-cyan/10 transition-colors duration-500 translate-x-8 -translate-y-8" />

                                <span className="absolute top-8 right-8 text-brand-surface-2 font-mono text-5xl font-bold opacity-50 group-hover:text-brand-border transition-colors duration-500 pointer-events-none z-0">
                                    {step.number}
                                </span>

                                <div className="relative z-10 pt-2 h-full flex flex-col">
                                    <h3 className="text-2xl font-bold mb-2 tracking-tight text-white group-hover:text-brand-cyan transition-colors">{step.title}</h3>
                                    <p className="text-brand-cyan font-semibold text-sm mb-4 uppercase tracking-wider">{step.subtitle}</p>
                                    <p className="text-neutral-400 leading-relaxed text-base font-normal">
                                        {step.description}
                                    </p>
                                </div>
                            </TiltCard>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
