import type { Transition, Variants } from "framer-motion";

// Mirrors --ease-out / --ease-in-out in globals.css. Keep them in sync.
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

// Scroll / mount reveal for marketing sections. Full transform string so the
// animation runs off the main thread (x/y shorthands do not).
export const revealTransition: Transition = { duration: 0.5, ease: EASE_OUT };

export const reveal: Variants = {
    hidden: { opacity: 0, transform: "translateY(24px)" },
    visible: { opacity: 1, transform: "translateY(0px)" },
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
});

export const viewportOnce = { once: true, margin: "-80px" } as const;
