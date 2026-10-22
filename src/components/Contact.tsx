"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, MapPin, ArrowRight } from "lucide-react";

import { EASE_OUT } from "@/lib/motion";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

type ApiResponse =
    | { success: true; message?: string }
    | { success: false; error?: string };

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // Prevent “late response overwrites UI” (race condition protection)
    const requestIdRef = useRef(0);

    const safeReadJson = async (res: Response): Promise<ApiResponse | null> => {
        try {
            const text = await res.text();
            if (!text) return null;
            return JSON.parse(text) as ApiResponse;
        } catch {
            return null;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        const currentRequestId = ++requestIdRef.current;

        setIsSubmitting(true);
        setStatus("idle");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            subject: String(formData.get("company") ?? "").trim(),
            message: String(formData.get("project") ?? "").trim(),
            companyWebsite: String(formData.get("companyWebsite") ?? "").trim(),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await safeReadJson(res);

            // If another submit started after this one, ignore this response
            if (currentRequestId !== requestIdRef.current) return;

            // ✅ 429: explicit friendly rate-limit message
            if (res.status === 429) {
                setStatus("error");
                setErrorMessage(
                    (data && data.success === false ? data.error : null) ||
                    "Too many requests right now. Please wait a minute and try again."
                );
                return;
            }

            // ✅ Success: HTTP ok AND data.success === true
            if (res.ok && data?.success === true) {
                setStatus("success");
                form.reset();
                return;
            }

            // ✅ Safety: If server returned ok but response body isn't JSON, don't show a false failure
            // (Prevents “Something went wrong” when Network says 200)
            if (res.ok && !data) {
                setStatus("success");
                form.reset();
                return;
            }

            // ❌ Error: prefer server message, else fallback
            const message =
                (data && data.success === false ? data.error : null) ||
                (!res.ok
                    ? `Request failed (${res.status}). Please try again in a moment.`
                    : "Something went wrong. Please try again in a moment.");

            setStatus("error");
            setErrorMessage(message);
        } catch {
            // If another submit started after this one, ignore this error
            if (currentRequestId !== requestIdRef.current) return;

            setStatus("error");
            setErrorMessage("Something went wrong. Please try again in a moment.");
        } finally {
            if (currentRequestId === requestIdRef.current) {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section
            id="contact"
            className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-dark border-t border-brand-border text-white relative"
        >
            <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left: Contact Info */}
                    <Reveal className="lg:w-5/12 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-brand-cyan text-sm font-semibold tracking-wide uppercase mb-8 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                                Available for New Projects
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 sm:mb-8">
                                Let's build <br />
                                <span className="text-neutral-500">the future.</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-neutral-400 max-w-md mb-8 sm:mb-12 leading-relaxed">
                                Whether you need a highly scalable SaaS platform, complex automation,
                                or a dedicated engineering partner, our team is ready to deliver.
                            </p>
                        </div>

                        <div className="flex flex-col gap-10">
                            {/* Contact Methods */}
                            <div className="flex flex-col gap-6">
                                <a
                                    href="mailto:info@miraistack.co.za"
                                    className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-brand-surface border border-transparent hover:border-brand-border transition-colors w-full"
                                >
                                    <div className="w-14 h-14 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-neutral-400 group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:border-brand-cyan transition-colors">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-500 font-medium mb-1 uppercase tracking-wider">
                                            Email Us
                                        </p>
                                        <p className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors">
                                            info@miraistack.co.za
                                        </p>
                                    </div>
                                </a>

                                <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-brand-surface border border-transparent hover:border-brand-border transition-colors w-full">
                                    <div className="w-14 h-14 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-neutral-400 group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:border-brand-cyan transition-colors">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-500 font-medium mb-1 uppercase tracking-wider">
                                            Location
                                        </p>
                                        <p className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors">
                                            Durban, South Africa
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pl-4 pt-4 border-t border-brand-border w-fit">
                                <a
                                    href="https://github.com/miraistack"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 text-neutral-400 hover:text-white hover:bg-brand-surface border border-transparent hover:border-brand-border rounded-xl transition-colors"
                                >
                                    <Github size={22} />
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right: Form */}
                    <Reveal delay={0.1} className="lg:w-7/12 perspective-[1000px]">
                        <TiltCard
                            tiltIntensity={5}
                            className="p-[1px] rounded-[2.5rem] bg-gradient-to-br from-brand-border/80 via-transparent to-brand-border/30 h-full overflow-hidden shadow-2xl shadow-black/80"
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="relative flex flex-col gap-5 sm:gap-6 bg-brand-surface/95 backdrop-blur-3xl p-6 sm:p-10 md:p-14 rounded-[1.5rem] sm:rounded-[2.5rem] h-full overflow-hidden"
                            >
                                <input
                                    type="text"
                                    name="companyWebsite"
                                    className="hidden"
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                {/* Soft glow behind form */}
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                                <h3 className="text-3xl font-bold tracking-tight text-white mb-2 relative z-10">
                                    Send an Inquiry
                                </h3>
                                <p className="text-neutral-400 mb-8 max-w-sm relative z-10">
                                    We usually respond within 24 hours. Let us know how we can help your business.
                                </p>

                                <div className="flex flex-col md:flex-row gap-6 mb-2 relative z-10">
                                    <div className="flex flex-col gap-2 w-full">
                                        <label
                                            htmlFor="name"
                                            className="text-xs font-semibold text-neutral-500 uppercase tracking-wider pl-1"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Bear McCoy"
                                            className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-5 py-4 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-[border-color,box-shadow] duration-150"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <label
                                            htmlFor="company"
                                            className="text-xs font-semibold text-neutral-500 uppercase tracking-wider pl-1"
                                        >
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            placeholder="Acme Corp"
                                            className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-5 py-4 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-[border-color,box-shadow] duration-150"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 mb-2 relative z-10">
                                    <label
                                        htmlFor="email"
                                        className="text-xs font-semibold text-neutral-500 uppercase tracking-wider pl-1"
                                    >
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="bear@company.com"
                                        className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-5 py-4 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-[border-color,box-shadow] duration-150"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 relative z-10 mb-4">
                                    <label
                                        htmlFor="project"
                                        className="text-xs font-semibold text-neutral-500 uppercase tracking-wider pl-1"
                                    >
                                        Project Details
                                    </label>
                                    <textarea
                                        id="project"
                                        name="project"
                                        rows={4}
                                        required
                                        minLength={10}
                                        placeholder="Tell us about your objectives, timeline, or technology stack..."
                                        className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-5 py-4 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-[border-color,box-shadow] duration-150 resize-none custom-scrollbar"
                                    />
                                </div>

                                <AnimatePresence initial={false}>
                                    {status !== "idle" && (
                                        <motion.div
                                            key={status}
                                            role="status"
                                            initial={{ opacity: 0, transform: "translateY(8px)" }}
                                            animate={{ opacity: 1, transform: "translateY(0px)" }}
                                            exit={{ opacity: 0, transform: "translateY(8px)", transition: { duration: 0.15, ease: EASE_OUT } }}
                                            transition={{ duration: 0.2, ease: EASE_OUT }}
                                            className={`p-4 rounded-xl border relative z-10 ${
                                                status === "success"
                                                    ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                                                    : "bg-red-400/10 border-red-400/20 text-red-400"
                                            }`}
                                        >
                                            <p className="text-sm font-medium leading-relaxed">
                                                {status === "success"
                                                    ? "✓ Message sent. We’ll get back to you shortly."
                                                    : errorMessage}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group mt-auto w-full flex items-center justify-center gap-3 bg-white text-brand-dark hover:bg-brand-cyan font-bold text-lg rounded-xl py-5 active:scale-[0.98] transition-[background-color,box-shadow,transform,opacity] duration-150 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(68,207,213,0.3)] disabled:opacity-70 relative z-10"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Request"}
                                    {!isSubmitting && (
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    )}
                                </button>
                            </form>
                        </TiltCard>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}