"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const Background = () => {
    const { theme } = useTheme();
    return (
        <div
            className={cn(
                theme === "light"
                    ? "absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"
                    : "grid-background"
            )}
        ></div>
    );
};
