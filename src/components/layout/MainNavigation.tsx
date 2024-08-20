import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

export const MainNavigation = () => {
    return (
        <>
            <div className="relative flex items-center max-w-[1200px] mx-auto py-4">
                <nav className="h-full w-full isolate rounded-xl bg-white/90 shadow-lg ring-1 ring-black/5 flex items-center justify-between p-4">
                    <Link href="/">
                        <h2 className="text-xl font-medium uppercase tracking-widest">
                            AI FlashCard
                        </h2>
                    </Link>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <ul className="flex items-center gap-4">
                            <li>
                                <Link href={"/sign-in"}>
                                    <Button variant="link">Sign In</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/sign-up"}>
                                    <Button variant="default">Sign up</Button>
                                </Link>
                            </li>
                        </ul>
                    </SignedOut>
                </nav>
            </div>
        </>
    );
};
