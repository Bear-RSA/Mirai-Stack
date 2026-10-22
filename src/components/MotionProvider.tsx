"use client";

import { MotionConfig } from "framer-motion";

// reducedMotion="user": when the OS asks for reduced motion, Motion drops
// transform/layout animations but keeps opacity and colour — gentler, not zero.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
