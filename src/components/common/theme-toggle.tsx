"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CloudMoon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const framer_theme = {
    initial: { y: 30 },
    animate: { y: 0 },
    exit: { y: -30 },
    transition: { duration: 0.3 },
};

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const isDark: boolean = theme === "dark";
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <Button
            variant={"ghost"}
            className="overflow-hidden custom-btn"
            onClick={toggleTheme}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    {...framer_theme}
                    className="flex"
                    key={isDark.toString()}
                >
                    {isDark ? (
                        <CloudMoon className="text-[1.2rem]" />
                    ) : (
                        <Sun className="text-[1.2rem]" />
                    )}
                </motion.span>
            </AnimatePresence>
        </Button>
    );
};
