"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { reveal, revealTransition, staggerContainer, viewportOnce } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

// Standalone scroll reveal.
export default function Reveal({ delay = 0, ...props }: RevealProps) {
    return (
        <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ ...revealTransition, delay }}
            {...props}
        />
    );
}

type RevealGroupProps = HTMLMotionProps<"div"> & { stagger?: number; delay?: number };

// Reveals its RevealItem children with a stagger once the group scrolls into view.
export function RevealGroup({ stagger = 0.08, delay = 0, ...props }: RevealGroupProps) {
    return (
        <motion.div
            variants={staggerContainer(stagger, delay)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            {...props}
        />
    );
}

// Inherits hidden/visible from the nearest RevealGroup.
export function RevealItem(props: HTMLMotionProps<"div">) {
    return <motion.div variants={reveal} transition={revealTransition} {...props} />;
}
