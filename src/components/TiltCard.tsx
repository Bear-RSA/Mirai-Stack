"use client";

import React, { MouseEvent, useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    tiltIntensity?: number;
}

// Mouse-tracking tilt is decorative, so it only runs for a fine pointer that
// can hover (touch fires mousemove on tap) and never under reduced motion.
function useCanTilt() {
    const reduce = useReducedMotion();
    const [finePointer, setFinePointer] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        const update = () => setFinePointer(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    return finePointer && !reduce;
}

// Tight follow: the card should track the cursor, not wobble after it.
const tiltSpring = { stiffness: 300, damping: 30, mass: 0.5 };

export default function TiltCard({ children, className = "", onClick, tiltIntensity = 10 }: TiltCardProps) {
    const canTilt = useCanTilt();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, tiltSpring);
    const mouseYSpring = useSpring(y, tiltSpring);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltIntensity}deg`, `-${tiltIntensity}deg`]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltIntensity}deg`, `${tiltIntensity}deg`]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!canTilt) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={className}
        >
            <div
                style={{ transform: "translateZ(30px)", width: "100%", height: "100%" }}
                className="flex flex-col flex-1"
            >
                {children}
            </div>
        </motion.div>
    );
}
