'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function Header() {
    const session = useSession();

    return <header>
        <div>
            {session.data ? (
                <Button
                    onClick={() => signOut()}
                >Sing Out</Button>
            ) : (
                <Button
                    onClick={() => signIn('google')}
                >Sing In</Button>
            )}

            {session.data?.user?.name}
            <ModeToggle />
        </div>
    </header>
}