"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/use-is-mounted";

export const Background = () => {
    const { theme } = useTheme();
    const isMounted = useIsMounted();

    if (!isMounted) {
        return null;
    }

    return (
        <div
            className={cn(
                theme === "light"
                    ? "absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_2px,transparent_1.5px)] [background-size:30px_30px]"
                    : "grid-background"
            )}
        ></div>
    );
};
