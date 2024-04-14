"use client";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Nav() {
  const { user, isLoaded } = useUser();
  return (
    <header className="flex justify-center bg-slate-400">
      <nav className="flex gap-6 p-4">
        <Link href="/">Home</Link>
        {!user ? (
          <>
            <Link href="/sign-in">
              <li>Login</li>
            </Link>
            <Link href="/sign-up">
              <li>Sign Up</li>
            </Link>
          </>
        ) : (
          <>
            <Link href="/profile">
              <li>Profile</li>
            </Link>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </>
        )}
        {/* {isLoaded && user && (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <UserButton afterSignOutUrl="/" />
          </>
        )} */}
      </nav>
    </header>
  );
}
